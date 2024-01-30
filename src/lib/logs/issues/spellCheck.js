import {spellCheckFile} from 'cspell-lib';
import getCurrentWorkingDirectory from 'utils/currentWorkingDirectory';

/**
@author      : Riya
@date        : 2023-05-17
@description : The function checks for spelling mistakes in the file using the cspell library and returns an object of spelling issue type, issueCount etc
@params      : issueFileGenericeObj, issueItem
@return      : Return an object containing the spelling issues
*/
const main = async (issueFileGenericeObj, issueItem) => {
  const {fileContent, filePath} = issueFileGenericeObj;
  let newFileContent = fileContent;

  /* get the current working directory in the project */
  const currentWorkingDir = getCurrentWorkingDirectory(filePath);
  /* Perform the spell check on the given file path and by passing revelant options to the function */
  const spellingMistakes = await spellCheckFile(currentWorkingDir, {numSuggestions: 0, noConfigSearch: true}, {});
  /* setting the misspelledWords array */
  const misspelledWords = spellingMistakes.issues.map((mistake) => mistake.text);
  const issueFoundObj = {};
  if (misspelledWords && misspelledWords.length > 0) {
    misspelledWords.forEach((element) => {
      /* For underlining the misspelled words we modify the file content and replace it with the <u> </u> underline html tag */
      newFileContent = newFileContent.replace(new RegExp(`\\b${element}\\b`, 'g'), `<u>${element}</u>`);
    });
  }
  issueFoundObj.type = issueItem.issueName;
  issueFoundObj.issueType = issueItem.issueType;
  issueFoundObj.issuePriority = issueItem.issuePriority;
  issueFoundObj.issueCount = misspelledWords.length;
  /* keeping the issueLineNumber as empty because we are not highlighting the line number rather we want to underline the word */
  issueFoundObj.issueLineNumber = [];
  /* setting the updated file content in the issueFoundObj */
  issueFoundObj.updatedFileContent = newFileContent;
  if (misspelledWords.length > 0) return issueFoundObj;
  return null;
};

export default {
  main,
};
