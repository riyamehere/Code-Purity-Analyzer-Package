/* checks for the hardCodedString, hardcodedNextLine, comment and returns value accordingly */
const checkUnwantedLines = (a, b, c) => {
  if (!b && (a || c)) {
    return true;
  }
  return false;
};

/* filtering out the commented lines here to match the regex */
const checkCommentedLines = (string, line) => {
  if (string) {
    const splitLines = string.split('\n');
    /* filtering out the commented lines here to match the regex */
    const commentReg = /(\/\*([\s\S]*?)\*\/)|(\/\/(.*)$)/g;
    /* filtering out the hardcoded lines which are inside > < tags here to match the regex */
    const hardCodedInsideArrow = />(.*?)</g;
    /* filtering out the hardcode lines which are on the next line of the starting html tag here to match the regex */
    const nextLineRegex = /^\s*<\w+[^>]*>\s*$/g;
    const splitLinesData = splitLines[line - 1];

    const hardCodedString = !hardCodedInsideArrow.test(splitLinesData);
    const hardcodedNextLine = nextLineRegex.test(splitLinesData);
    const comment = commentReg.test(splitLinesData);

    return checkUnwantedLines(hardCodedString, hardcodedNextLine, comment);
  }
  return false;
};

/* finds the line number for a specific match you need to know it index */
const getLineNumberByIndex = (index, string) => {
  let line = 0;
  let match;
  const re = /(^)[\S\s]/gm;
  while ((match = re.exec(string))) {
    if (match.index > index) break;
    line += 1;
  }
  return checkCommentedLines(string, line) ? null : line;
};

/* an array of matches (how many times a keyword is present in file contents is returned */
const getLineNumberHardCodedString = (keyword, contentsInFile) => {
  if (keyword !== '') {
    const a = [];
    let index = -1;
    while ((index = contentsInFile.indexOf(keyword, index + 1)) !== -1) {
      const lineNumberMatch = getLineNumberByIndex(index, contentsInFile);
      if (lineNumberMatch) {
        a.push(lineNumberMatch);
      }
    }
    return a;
  }
  return null;
};

/**
@author      : Riya
@date        : 2023-04-06
@description : This function sets the data object for hard coded string count and line numbers
@params      : fileContent and file object inside for each.
@return      : returns an object containing data of the file containing hardcoded.
*/
const main = (issueFileGenericeObj, issueItem) => {
  const {fileContent: fileContentInput} = issueFileGenericeObj;
  const regex = /\b(?<=>)([\w\s]+)(?=<\/)\b/;
  const filterStr = /(?<=>)([\w\s]+)(?=<\/)/g;
  /* filtering out the file content to exclude the commented statements */
  const fileContent = fileContentInput
    .toString()
    .replace(/(\/\*([\s\S]*?)\*\/)|(\/\/(.*)$)/gm, '')
    .trim();

  if (regex.test(fileContent)) {
    const issueFoundObj = {};
    const lineNumberArray = [];
    issueFoundObj.type = issueItem.issueName;
    issueFoundObj.issueType = issueItem.issueType;
    issueFoundObj.issuePriority = issueItem.issuePriority;
    const issueArray = fileContent.toString().match(filterStr);
    /* to clear out the blank spaces or next lines */
    const newArray = issueArray.filter((number) => number.trim());
    issueFoundObj.issueCount = newArray.length;
    /* iterate over the issue array and call the get line number function */
    if (newArray && newArray.length > 0) {
      newArray.forEach((element) => {
        lineNumberArray.push(getLineNumberHardCodedString(element, fileContentInput.toString()));
      });
      issueFoundObj.issueLineNumber = lineNumberArray.flat();
    }
    return issueFoundObj;
  }
  return null;
};

export default {
  main,
};
