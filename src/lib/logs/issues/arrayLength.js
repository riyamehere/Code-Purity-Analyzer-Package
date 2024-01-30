import {getLineNumbers} from 'helper/analyzerFunctions';

/**
@author      : Sagar Ninave
@date        : 2023-05-02
@description : This function check the array's valid conditions.
@params      : fileContent and file object inside for each.
@return      : returns an object containing file data having commented code.
*/
const main = (issueFileGenericeObj, issueItem) => {
  const {fileContent} = issueFileGenericeObj;

  const regex = /\.length\s*(<|<=)*\s*0/;
  const filterStr = /\.length\s*(<|<=)*\s*0/gm;

  if (regex.test(fileContent)) {
    const issueFoundObj = {};
    const dummyArray = [];

    const getCommentedCode = fileContent.toString().match(filterStr);

    getCommentedCode.forEach((element) => {
      dummyArray.push(getLineNumbers(element, fileContent.toString())[0]);
    });

    const issueLineNumbers = [...new Set(dummyArray.flat())];

    issueFoundObj.type = issueItem.issueName;
    issueFoundObj.issueType = issueItem.issueType;
    issueFoundObj.issuePriority = issueItem.issuePriority;
    issueFoundObj.issueCount = issueLineNumbers.length;
    issueFoundObj.issueLineNumber = issueLineNumbers;
    return issueFoundObj;
  }
  return null;
};

export default {
  main,
};
