import getLineNumberMaxLengthAttribute from 'utils/helperMinMaxLine.js';
/**
  @author      : Abhishek
  @date        : 2023-05-11
  @description : This function sets the data object if min length attribute is not present in input tag.
  @params      : fileContent and file object inside for each.
  @return      : returns an object containing data of the file with issue.
  */
const main = (issueFileGenericeObj, issueItem) => {
  const {fileContent: fileContentInput} = issueFileGenericeObj;
  const filterStr = /<input\b(?=[^>]*\btype=['"]password['"])[^>]*>/g;
  /* filtering out the file content to exclude the commented statements */
  const fileContent = fileContentInput.replace(/(\/\*([\s\S]*?)\*\/)|(\/\/(.*)$)/gm, '').trim();

  if (filterStr.test(fileContent)) {
    const issueFoundObj = {};
    const lineNumberArray = [];
    const issueArray = fileContent.toString().match(filterStr);
    /* filtering only those elements from array list which does not contain the maxlength attribute in input tag */
    const minLengthIssueArray = issueArray.filter((i) => !i.includes('minlength='));
    if (minLengthIssueArray && minLengthIssueArray.length > 0) {
      issueFoundObj.type = issueItem.issueName;
      issueFoundObj.issueType = issueItem.issueType;
      issueFoundObj.issuePriority = issueItem.issuePriority;
      issueFoundObj.issueCount = minLengthIssueArray.length;
      /* iterate over the issue array and call the get line number function */
      minLengthIssueArray.forEach((element) => {
        lineNumberArray.push(getLineNumberMaxLengthAttribute(element, fileContentInput));
      });
      issueFoundObj.issueLineNumber = [...new Set(lineNumberArray.flat())];
      return issueFoundObj;
    }
  }
  return null;
};

export default {
  main,
};
