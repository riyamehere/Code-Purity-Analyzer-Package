import createAnalyzerFolder from 'helper/analyzer/generateFiles.js';
import generatedCodeReports from 'lib/reports/code/code.report';
import generatedPackageReports from 'lib/reports/package/package.report.js';
import {existsSync, rmdirSync, open} from 'fs';
import {analyzerPaths, snippetPaths} from 'custConstants';
import {getNPMPackageReportKey, checkGitHubKeyVal, getRootFolderPath} from 'helper/package/packageJson.helper.js';
import copyPackageSnippetContent from 'helper/analyzer/copyPackageSnippet.js';
import chalk from 'chalk';
import createDirectory from 'utils/makeDirectory';
import copyTemplate from 'utils/copyFileContent.js';

/**
@author      : Riya
@date        : 2023-02-24
@description : In this file, analyzer folder is created along with index.html and required css and js files. In index.html
a reports folder will be created from createConsoleREports.js
*/
const createAnalyzer = async (fileExtensionList, packageJSONContent) => {
  try {
    /* Check if the analyzer is already there, if not then create one */
    if (!existsSync(analyzerPaths.MAIN_DIR)) {
      createAnalyzerFolder();
    } else {
      /* Else remove the previous analyzer folder and create a new one along with updated reports */
      rmdirSync(analyzerPaths.MAIN_DIR, {recursive: true});
      createAnalyzerFolder();
    }
    const rootFolderPath = getRootFolderPath(packageJSONContent);
    /* Generate the Code Reports */
    generatedCodeReports(fileExtensionList, rootFolderPath);
    if (checkGitHubKeyVal(packageJSONContent)) {
      copyPackageSnippetContent();
      /* Generate the Package Reports */
      generatedPackageReports(packageJSONContent);
    } else {
      /* Generated the result folder when key is not present in the config */
      createDirectory(analyzerPaths.RESULT);
      /* Creating the json and datanotfound html file when key is not present in the config */
      if (existsSync(analyzerPaths.RESULT)) {
        open(analyzerPaths.DATA_NOT_FOUND, 'w', (err) => {
          if (err) {
            throw err;
          }
        });
        /* copy the file content from dataNotFound.txt template to newly created result folder */
        copyTemplate(snippetPaths.DATA_NOT_FOUND, analyzerPaths.DATA_NOT_FOUND);
      }
      process.stdout.write(chalk.red(getNPMPackageReportKey()));
    }
  } catch (err) {
    process.stdout.write(err.message);
  }
};

export default createAnalyzer;
