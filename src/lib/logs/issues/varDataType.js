import getLineNumberMaxLengthAttribute from 'utils/helperMinMaxLine.js';

/**
@author      : Ajinkya Deshmukh
@date        : 2023-05-05
@description : This function sets the data object for var count and line numbers
@params      : fileContent and file object inside for each.
@return      : returns an object containing file data having var.
*/
const main = (issueFileGenericeObj, issueItem) => {
  const {fileContent} = issueFileGenericeObj;
  const regex = /var\s*<|var\s+(\w+)(\s*,\s*(\w+))?(?:\s*=\s*([^;]+))?\s*/gm;
  if (regex.test(fileContent)) {
    const issueFoundObj = {};
    /**
    @author      : Ajinkya Deshmukh
    @date        : 2023-05-05
    @description : Getting the variable defined with var keyword
    */

    const matchVarDataTypeList = fileContent.toString().match(regex);
    const dummyArray = [];
    /**
    @author      : Ajinkya Deshmukh
    @date        : 2023-05-05
    @description : In this function we are getting the line number of var
    */
    matchVarDataTypeList.forEach((element) => {
      dummyArray.push(getLineNumberMaxLengthAttribute(element, fileContent.toString()));
    });
    issueFoundObj.type = issueItem.issueName;
    issueFoundObj.issueType = issueItem.issueType;
    issueFoundObj.issuePriority = issueItem.issuePriority;
    const lineNumberList = [...new Set(dummyArray.flat())];
    issueFoundObj.issueLineNumber = lineNumberList;
    issueFoundObj.issueCount = lineNumberList.length;
    return issueFoundObj;
  }
  return null;
};

export default {
  main,
};
