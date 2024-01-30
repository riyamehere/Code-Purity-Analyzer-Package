import getLineNumberMaxLengthAttribute from 'utils/helperMinMaxLine.js';

/**
@author      : Riya
@date        : 2023-03-21
@description : This function sets the data object for console count and line numbers
@params      : fileContent and file object inside for each.
@return      : returns an object containing file data having console.log/console.error etc.
*/
const main = (issueFileGenericeObj, issueItem) => {
  const {fileContent: fileContentInput} = issueFileGenericeObj;
  const regex = /\bconsole.\b/;
  if (regex.test(fileContentInput)) {
    const issueFoundObj = {};
    const lineNumberArray = [];
    const issueArray = fileContentInput.toString().match(regex);
    issueFoundObj.type = issueItem.issueName;
    issueFoundObj.issueType = issueItem.issueType;
    issueFoundObj.issuePriority = issueItem.issuePriority;
    /* iterate over the issue array and call the get line number function */
    issueArray.forEach((element) => {
      lineNumberArray.push(getLineNumberMaxLengthAttribute(element, fileContentInput));
    });
    const lineNumberList = [...new Set(lineNumberArray.flat())];
    issueFoundObj.issueLineNumber = lineNumberList;
    issueFoundObj.issueCount = lineNumberList.length;
    return issueFoundObj;
  }
  return null;
};

export default {
  main,
};
