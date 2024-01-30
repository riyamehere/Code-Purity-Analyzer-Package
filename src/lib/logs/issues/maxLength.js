import {issueNames} from 'custConstants';

/**
@author      : Riya
@date        : 2023-04-06
@description : This function sets the data object for file having max length > than issueNames.MAX_LENGTH_COUNT
@params      : fileContent and file object inside for each.
@return      : returns an object containing file data having max length > than issueNames.MAX_LENGTH_COUNT
*/
const main = (issueFileGenericeObj, issueItem) => {
  const {fileContent} = issueFileGenericeObj;
  const fileLines = fileContent.toString().split('\n').length;
  if (fileLines > issueNames.MAX_LENGTH_COUNT) {
    const issueFoundObj = {};
    issueFoundObj.type = issueItem.issueName;
    issueFoundObj.issueType = issueItem.issueType;
    issueFoundObj.issuePriority = issueItem.issuePriority;
    issueFoundObj.issueCount = 1;
    issueFoundObj.issueLineNumber = [issueNames.MAX_LENGTH_COUNT + 1];
    return issueFoundObj;
  }
  return null;
};

export default {
  main,
};
