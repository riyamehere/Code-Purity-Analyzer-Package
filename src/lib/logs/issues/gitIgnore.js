import {checkGitIgnoreFile} from 'helper/analyzerFunctions';
import {issueNames} from 'custConstants';

/**
@author      : Riya
@date        : 2023-04-07
@description : This function checks if gitignore file is present and checks if env is present in .gitignore file and
creates a object with the required data
@return      : Returns a object with the required data of .gitignore file
*/
const getGitIgnoreFileObject = () => {
  const gitignoreObj = checkGitIgnoreFile();
  if (Object.keys(gitignoreObj).length !== 0) {
    const issueFoundObj = {};
    issueFoundObj.type = issueNames.GITIGNORE_ISSUE;
    issueFoundObj.issueCount = 1;
    issueFoundObj.issueLineNumber = [gitignoreObj.fileLines];
    gitignoreObj.issueList.push(issueFoundObj);
    return gitignoreObj;
  }
  return null;
};

export default getGitIgnoreFileObject;
