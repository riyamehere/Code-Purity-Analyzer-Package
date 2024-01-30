import {getLineNumbers} from 'helper/analyzerFunctions';

/**
@author      : Abhishek
@date        : 2023-05-17
@description : This function sets the data object for Empty function count and line numbers
@params      : fileContent and file object inside for each.
@return      : returns an object containing file data having Empty Function issue.
*/

const main = (issueFileGenericeObj, issueItem) => {
  const {fileContent} = issueFileGenericeObj;
  const regex = /(?:\(\w+\)\s*=>\s*\(\s*\)|\)\s*{\s*\}|=>\s*{\s*\})/g;
  if (regex.test(fileContent)) {
    const issueFoundObj = {};
    const issueArray = fileContent.toString().match(regex);
    const dummyArray = [];
    /**
    @author      : Abhishek Hirwani
    @date        : 2023-05-18
    @description : In this function we are getting the line number of any from the filecontent
    */
    issueArray.forEach((element) => {
      dummyArray.push(getLineNumbers(element, fileContent.toString())[0]);
    });
    issueFoundObj.type = issueItem.issueName;
    issueFoundObj.issueType = issueItem.issueType;
    issueFoundObj.issuePriority = issueItem.issuePriority;
    issueFoundObj.issueCount = fileContent.toString().match(regex).length;
    issueFoundObj.issueLineNumber = [...new Set(dummyArray.flat())];
    return issueFoundObj;
  }
  return null;
};

export default {
  main,
};
