import {readFile, open} from 'fs/promises';
import {analyzerPaths, snippetPaths} from 'custConstants';
import writeToFile from 'utils/write.js';
import checkFilePathExist from 'utils/fileExists.js';
import copyTemplate from 'utils/copyFileContent.js';
import {getNumbers, getSpacing, getFileContent} from 'helper/analyzerFunctions.js';

/**
@author      : Riya
@date        : 2023-03-10
@description : THis function sets the file content for particular file according to the spacing and serial number
and file files, href, console count percentage etc.
*/

const replaceFileData = (fileData, finalModifiedData, value) => {
  const {fileName} = value;
  return fileData
    .replace(/{{LISTDATA}}/g, `${getFileContent(finalModifiedData, fileName)}`)
    .replace(/{{NUMBERS}}/g, `${getNumbers(finalModifiedData, fileName)}`)
    .replace(/{{SPACES}}/g, `${getSpacing(finalModifiedData, fileName)}`)
    .replace(/{{HEADING}}/g, `<a href="../../index.html">All files</a> / <a href="index.html">${fileName}</a>`)
    .replace(/{{PERCENTAGE}}/g, `${(value.issueList[0].issueCount / 10) * 100}`)
    .replace(/{{CONSOLECOUNT}}/g, `${value.issueList[0].issueCount}`)
    .replace(/{{FILEPATH_HEADING}}/g, `${value.filePath}`);
};

/**
 * @description This function sets the file content for a particular file according to the spacing and serial number
 * and file files, href, console count percentage, etc.
 * @param {*} value Object containing file name, file path, and issue list.
 * @param {*} finalModifiedData Final modified data to be used to replace placeholders in the file content.
 * @returns Promise that resolves when the file content has been replaced.
 */

const replaceFileContents = async (value, finalModifiedData) => {
  let fileHandle;
  try {
    fileHandle = await open(`${analyzerPaths.REPORTS}/${value.fileName}/index.html`, 'w');
    if (checkFilePathExist(`${analyzerPaths.REPORTS}/${value.fileName}/index.html`)) {
      copyTemplate(`${snippetPaths.FILE_CONTENT}`, `${analyzerPaths.REPORTS}/${value.fileName}/index.html`);
      const fileData = await readFile(`${analyzerPaths.REPORTS}/${value.fileName}/index.html`, 'utf8');
      if (fileData) {
        const {fileName} = value;
        const replaceData = replaceFileData(fileData, finalModifiedData, value);
        await writeToFile(`${analyzerPaths.REPORTS}/${fileName}/index.html`, replaceData);
      } else {
        throw new Error(`Getting error in reading file ${value.fileName}`);
      }
    }
  } catch (err) {
    process.stdout.write(err.message);
    throw err;
  } finally {
    await fileHandle.close();
  }
};

export default replaceFileContents;
