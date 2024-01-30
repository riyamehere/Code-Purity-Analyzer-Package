import getLineNumberMaxLengthAttribute from 'utils/helperMinMaxLine.js';

/**
@author      : Riya
@date        : 2023-03-21
@description : This function sets the data object for any count and line numbers
@params      : fileContent and file object inside for each.
@return      : returns an object containing file data having any.
*/
const main = (issueFileGenericeObj, issueItem) => {
  const {fileContent} = issueFileGenericeObj;
  const regex = /:any|:\sany|<any|<\sany/gm;
  if (regex.test(fileContent)) {
    const issueFoundObj = {};
    /**
    @author      : Abhishek Hirwani
    @date        : 2023-04-05
    @description : Getting the any word which matching from the filecontent
    */

    const getAny = fileContent.toString().match(regex);
    const dummyArray = [];
    /**
    @author      : Abhishek Hirwani
    @date        : 2023-04-05
    @description : In this function we are getting the line number of any from the filecontent
    */
    getAny.forEach((element) => {
      dummyArray.push(getLineNumberMaxLengthAttribute(element, fileContent));
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
