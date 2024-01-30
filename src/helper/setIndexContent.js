import {readFile} from 'fs/promises';
import {analyzerPaths} from 'custConstants';
import writeToFile from 'utils/write.js';
import {getTableString, insertDataInWindow} from 'helper/analyzerFunctions';

/**
@author      : Riya
@date        : 2023-03-10
@description : This function sets the index.html files content, replaces the TABLE data with the file sqequence in which issues are found.
*/
const replaceIndexContents = async (finalModifiedData) => {
  try {
    /* Code index file content */
    const readFileContentCodeIndex = await readFile(analyzerPaths.CODE_INDEX, 'utf8');
    if (readFileContentCodeIndex) {
      /* Replacing the content in code_index.html file as window.singleIssueData where finalModifiedData is set */
      const result = readFileContentCodeIndex
        .replace(/{{table}}/g, getTableString(finalModifiedData))
        .replace(/{{data}}/g, insertDataInWindow(finalModifiedData));

      await writeToFile(analyzerPaths.CODE_INDEX, result);
    }
    /* issues file content */
    const readFileContentIssuesFile = await readFile(analyzerPaths.ISSUES, 'utf8');
    if (readFileContentIssuesFile) {
      const result = readFileContentIssuesFile.replace(/{{window_add_script}}/g, insertDataInWindow(finalModifiedData));
      await writeToFile(analyzerPaths.ISSUES, result);
    }
  } catch (err) {
    process.stdout.write(err.message);
    throw err;
  }
};

export default replaceIndexContents;
