import {getLineNumbers} from 'helper/analyzerFunctions';

/**
@author      : Riya
@date        : 2023-03-21
@description : This function sets the data object for eslint-disable count files and line numbers
@params      : fileContent and file object inside for each.
@return      : returns an object containing file data having eslint property disabled etc.
*/
const main = (issueFileGenericeObj, issueItem) => {
  const {fileContent} = issueFileGenericeObj;
  const regex = /\beslint-disable\b/;
  const filterStr = /eslint-disable/g;
  if (regex.test(fileContent)) {
    const issueFoundObj = {};
    issueFoundObj.type = issueItem.issueName;
    issueFoundObj.issueType = issueItem.issueType;
    issueFoundObj.issuePriority = issueItem.issuePriority;
    issueFoundObj.issueCount = fileContent.toString().match(filterStr).length;
    issueFoundObj.issueLineNumber = getLineNumbers('eslint-disable', fileContent.toString());
    return issueFoundObj;
  }
  return null;
};

export default {
  main,
};
