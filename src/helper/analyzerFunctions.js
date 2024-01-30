import {readdirSync, lstatSync, readFileSync} from 'fs';
import {join, extname, basename} from 'path';
import issueList from 'helper/issues.js';
import {issueNames, analyzerPaths} from 'custConstants';
import checkFilePathExist from 'utils/fileExists';
import getGitIgnoreFileObject from 'lib/logs/issues/gitIgnore.js';
import findItemWithFilename from './findData';

/* Using recursion, we find every file with the desired extension, even if its deeply nested in subfolders. */
const getFilesInDirectory = (dir, ext) => {
  let files = [];
  try {
    const isFileExists = checkFilePathExist(dir);
    if (isFileExists) {
      readdirSync(dir).forEach((file) => {
        const filePath = join(dir, file);
        const stat = lstatSync(filePath);

        /* If we hit a directory, apply our function to that dir. If we hit a file, add it to the array of files. */
        if (stat.isDirectory()) {
          const nestedFiles = getFilesInDirectory(filePath, ext);
          files = files.concat(nestedFiles);
        } else if (ext.includes(extname(file))) {
          files.push(filePath);
        }
      });
    } else {
      /**
      @TODO : @Piyush has to work here throw proper exception
      */
    }
  } catch (err) {
    process.stdout.write(err.message);
  }
  return files;
};
/* If you want to find the line number for a specific match you need to know it index */
const lineNumberByIndex = (index, string) => {
  let line = 0;
  let match;
  const re = /(^)[\S\s]/gm;
  // eslint-disable-next-line no-cond-assign
  while ((match = re.exec(string))) {
    if (match.index > index) break;
    line += 1;
  }
  return line;
};

/* if you want an array of matches (how many times a keyword is present in file contents */
/**
  @TODO : Solve this eslint issue.
  */
// eslint-disable-next-line consistent-return
const getLineNumbers = (keyword, contentsInFile) => {
  if (keyword !== '') {
    const a = [];
    let index = -1;
    // eslint-disable-next-line no-cond-assign
    while ((index = contentsInFile.indexOf(keyword, index + 1)) !== -1) {
      a.push(lineNumberByIndex(index, contentsInFile));
    }
    return a;
  }
};
/**
@author      : Abhishek Hirwani
@date        : 2023-03-22
@description : checking object is null or not and pushing the object in the reportlist array
@params      : @issueDataObj object containing issue data
@params      : @reportedFileList final list of the issue data
@return      : Return Output
*/
const ObjectNullCheck = (issueDataObj) => {
  if (issueDataObj && issueDataObj.issueList && issueDataObj.issueList.length > 0) {
    return issueDataObj;
  }
  return null;
};

/**
@author      : Riya
@date        : 2023-03-22
@description : Add Description Here
@params      : Input Params
@return      : Return Output
*/

/* This function check if .env is added in the .gitignore file */
const checkGitIgnoreFile = () => {
  const fileObj = {};
  /* get the .gitignore file */
  const file = analyzerPaths.GITIGNORE_PATH;
  const fileContent = readFileSync(file).toString();
  const regex = /.env/g;
  /* find .env in .gitignore file contents */
  if (!regex.test(fileContent)) {
    fileObj.fileName = file;
    fileObj.filePath = file;
    fileObj.fileContent = fileContent.toString().concat(analyzerPaths.GITIGNORE_MESSAGE);
    fileObj.fileLines = fileContent.toString().split('\n').length;
    fileObj.issueList = [];
  }
  return fileObj;
};

const getGenericIssueFileValues = (fileContent, file) => {
  const fileObj = {};
  fileObj.fileName = basename(file);
  fileObj.filePath = file;
  fileObj.fileContent = fileContent.toString();
  fileObj.fileLines = fileContent.toString().split('\n').length;
  fileObj.issueList = [];
  return fileObj;
};

const getIssueObjects = (issueFileGenericeObj, issueFound) => {
  if (issueFileGenericeObj && issueFound) {
    issueFileGenericeObj.issueList.push(issueFound);
    return issueFileGenericeObj;
  }
  return null;
};

const addDefaultIssueCheckList = () => {
  const defaultIssueList = [];
  /* calling the checkGitIgnoreFile() here, which will return an empty object if .env is present in gitignore,
  else it will return an object of gitignore file */
  const gitignoreObj = getGitIgnoreFileObject();
  if (gitignoreObj) {
    defaultIssueList.push(gitignoreObj);
  }
  return defaultIssueList;
};

/* search which files have console statements by matching the regex */
const searchFilesInDirectory = async (dir, ext) => {
  /* array of object containing file information like fileName, fileContent and it's modified data */
  const finalData = [];
  /* Get all files in specified dir */
  const files = getFilesInDirectory(dir, ext);
  for (let j = 0; j < files.length; j += 1) {
    const file = files[j];
    /* Read specific file content */
    const fileContent = readFileSync(file);
    /* Get Generic Object is on file level not on issue level */
    let issueFileGenericeObj = getGenericIssueFileValues(fileContent, file);
    for (let i = 0; i < issueList.length; i += 1) {
      /* We are doing dynamic import and take all function values from issue files function */
      const issueImportFilesModule = await issueList[i].issueNameFn();
      const foundIssue = await issueImportFilesModule.default.main(issueFileGenericeObj, issueList[i]);
      if (foundIssue) {
        issueFileGenericeObj = getIssueObjects(issueFileGenericeObj, foundIssue);
      }
    }
    const isIssueObjNotNull = ObjectNullCheck(issueFileGenericeObj);
    if (isIssueObjNotNull) {
      finalData.push(isIssueObjNotNull);
    }
  }
  return [...finalData, ...addDefaultIssueCheckList()];
};

/* check for duplicate files and set the filename in data accordingly for unique name */
const setNewValues = (newValues, data) => {
  for (let i = 0; i < data.length; i += 1) {
    data[i].fileName = newValues[i];
  }
  return data;
};

const getFinalData = async (dir, ext) => {
  const data = await searchFilesInDirectory(dir, ext);

  const permittedValues = [];
  for (let i = 0; i < data.length; i += 1) {
    permittedValues[i] = data[i].fileName;
  }
  const hash = new Map();

  /* Iterate over the array */
  for (let i = 0; i < permittedValues.length; i += 1) {
    /* For the first occurrence, */
    /* update the frequency count */
    if (!hash.has(permittedValues[i])) hash.set(permittedValues[i], 1);
    /* Otherwise */ else {
      const count = hash.get(permittedValues[i]);
      hash.set(permittedValues[i], hash.get(permittedValues[i]) + 1);
      /* Append frequency count */
      /* to end of the string */
      permittedValues[i] += count.toString();
    }
  }
  const newValues = permittedValues;
  const newData = setNewValues(newValues, data);

  return newData;
};

/* create a string for table structure with the data of components having console */
const getTableString = (finalModifiedData) => {
  let tableString = '';
  if (finalModifiedData && finalModifiedData.length > 0) {
    finalModifiedData.forEach((value) => {
      tableString =
        `${tableString}` +
        `
        <tbody>
        <tr>
        <td class="issue-table-td" ><a href="./issues.html?component=${value.fileName}">${value.fileName}</a></td>
        <td class="issue-table-td" >${value.issueList.length}</td>
        </tr>
        </tbody>
        `;
    });
  }
  return tableString;
};

/* inserts data into window object  */
const insertDataInWindow = (finalModifiedData) => {
  const filterDataWithoutFileContent = finalModifiedData.map((item) => ({...item, ...{fileContent: ''}}));
  return `<script type="text/javascript"> 
       window.singleIssueData = ${JSON.stringify(filterDataWithoutFileContent || '')};
  </script>`;
};

/* function to print the numbers dynamically according to number of lines in a file */
const getNumbers = (finalModifiedData, fileName) => {
  let lineNumbers = '';
  const result = findItemWithFilename(finalModifiedData, fileName);
  const linesCount = result.fileLines;
  for (let i = 1; i <= linesCount; i += 1) {
    lineNumbers =
      `${lineNumbers}` +
      `
<a name='L${i}' id='id${i}'></a><a href='#L${i}'>${i}</a>`;
  }

  return lineNumbers;
};

/* function to print the spaces dynamically according to number of lines in a file */
const getSpacing = (finalModifiedData, fileName) => {
  let lineNumbers = '';
  const result = findItemWithFilename(finalModifiedData, fileName);
  const issueLineNumber = result.issueList.reduce((acc, cur) => {
    acc = [...acc, ...cur.issueLineNumber];
    return acc;
  }, []);
  const linesCount = result.fileLines;
  const maxLine = issueNames.MAX_LENGTH_COUNT;
  for (let i = 1; i <= linesCount; i += 1) {
    lineNumbers =
      `${lineNumbers}` +
      `
<span class="cline-any cline-neutral ${issueLineNumber.includes(i) || i > maxLine ? 'bg-console' : ''}">&nbsp;</span>`;
  }

  return lineNumbers;
};

/* function to print the file contents */
const getFileContent = (finalModifiedData, fileName) => {
  const result = findItemWithFilename(finalModifiedData, fileName);
  let fileContentResult = '';
  /* check if the issue list contains issue type named 'Spelling Mistake' */
  const foundSpellCheckIssueObj = result.issueList.find((issue) => issue.type === issueNames.SPELLING_ISSUE);
  /* if foundSpellCheckIssueObj i.e if 'Spelling Mistake' issue is not there, then returning the normal file contents */
  if (!foundSpellCheckIssueObj) {
    fileContentResult = result.fileContent.replace(/</g, '&lt').replace(/>/g, '&gt');
  } else {
    /* else returning the updatedFileContent in the issueList of  the foundSpellCheckIssueObj */
    fileContentResult = foundSpellCheckIssueObj.updatedFileContent
      .replace(/</g, '&lt')
      .replace(/>/g, '&gt')
      .replace(/&ltu&gt/g, '<u>')
      .replace(/&lt\/u&gt/g, '</u>');
  }
  return fileContentResult;
};

export {
  getNumbers,
  getFileContent,
  getFinalData,
  getSpacing,
  getTableString,
  getLineNumbers,
  insertDataInWindow,
  checkGitIgnoreFile,
};
