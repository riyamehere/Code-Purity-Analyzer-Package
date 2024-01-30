import {getLineNumbers} from 'helper/analyzerFunctions';
import keysList from 'helper/cloudKeys/keys';

/**
@author      : Riya
@date        : 2023-04-28
@description : This function iterates over the keysList array and returns an object containing the details of files
which contain the key used in the code
@params      : issueFileGenericObj, issueItem
@return      : Returns issueList object
*/

const main = (issueFileGenericObj, issueItem) => {
  const {fileContent} = issueFileGenericObj;

  const issueFoundObj = {};
  const dummyArray = [];

  keysList.forEach((key) => {
    const regex = new RegExp(`${key.keyName}`, 'g');
    const getKeys = fileContent.toString().match(regex);
    if (getKeys && getKeys.length > 0) {
      getKeys.forEach((element) => {
        dummyArray.push(getLineNumbers(element, fileContent.toString()));
      });
    }
  });
  issueFoundObj.type = issueItem.issueName;
  issueFoundObj.issueType = issueItem.issueType;
  issueFoundObj.issuePriority = issueItem.issuePriority;
  issueFoundObj.issueCount = dummyArray.length;
  /* removes redundant values from the dummyArray */
  issueFoundObj.issueLineNumber = [...new Set(dummyArray.flat())];
  if (dummyArray.length > 0) return issueFoundObj;
  return null;
};

export default {
  main,
};
