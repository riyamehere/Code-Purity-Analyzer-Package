import {getLineNumbers} from 'helper/analyzerFunctions';
import {hasJavaScriptCode} from 'helper/codeComment';
/**
  @author      : Sagar Ninave
  @date        : 2023-04-28
  @description : This function sets the data object for commentd code count and line numbers
  @params      : fileContent and file object inside for each.
  @return      : returns an object containing file data having commented code.
  */
const main = (issueFileGenericeObj, issueItem) => {
  const {fileContent} = issueFileGenericeObj;

  const regex = /\/\*[\s\S]*?\*\/|([^\\:]|^)\/\/.*$/;
  const filterStr = /\/\*[\s\S]*?\*\/|([^\\:]|^)\/\/.*$/gm;
  const replaceRegex = /(\*\/)|(\*)|(\/\*)|(\/\/)|(\*\/)|(\/\*)/gm;

  if (regex.test(fileContent)) {
    const issueFoundObj = {};
    const dummyArray = [];

    const matchCommentCodeParmsList = fileContent.toString().match(filterStr);

    matchCommentCodeParmsList.forEach((element) => {
      const elementTemp = element.replace(replaceRegex, '').trim('');
      const hasJS = hasJavaScriptCode(elementTemp);
      if (hasJS) {
        dummyArray.push(getLineNumbers(element, fileContent.toString())[0]);
      }
    });

    const issueLineNumbers = [...new Set(dummyArray.flat())];

    if (dummyArray.length) {
      issueFoundObj.type = issueItem.issueName;
      issueFoundObj.issueType = issueItem.issueType;
      issueFoundObj.issuePriority = issueItem.issuePriority;
      issueFoundObj.issueCount = issueLineNumbers.length;
      issueFoundObj.issueLineNumber = issueLineNumbers;
      return issueFoundObj;
    }
  }
  return null;
};

export default {
  main,
};
