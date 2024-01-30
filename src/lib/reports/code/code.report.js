import {getFinalData} from 'helper/analyzerFunctions';
import createDirectory from 'utils/makeDirectory.js';
import {analyzerPaths} from 'custConstants';
import setFileContents from 'helper/setFileContent.js';
import checkFilePathExist from 'utils/fileExists.js';
import replaceIndexContents from 'helper/setIndexContent.js';
import chalk from 'chalk';

/**
@author      : Riya
@date        : 2023-02-24
@description : In this file, reports folder is created with separate folders of filtered out file and their respective html files.
where the file contents are displayed with the highlighted line number on which issue is there.
*/

/* creates a reports folder with a subfolder of component names containing console statement */
const generateReports = (finalModifiedData) => {
  if (finalModifiedData && finalModifiedData.length > 0) {
    finalModifiedData.forEach((value) => {
      createDirectory(`${analyzerPaths.REPORTS}/${value.fileName}`);
      setFileContents(value, finalModifiedData);
    });
  }
};
/**
@author      : Abhishek
@date        : 2023-05-17
@description : set root directory path which we get from package.json in directory variable, replace index file contents
 and creates the reports folder
@params      : listExtension, rootFolderPath
*/
const generateReportStatus = async (listExtension, rootFolderPath) => {
  /* taken from const file */
  const directory = rootFolderPath;
  const finalModifiedData = await getFinalData(directory, listExtension);
  replaceIndexContents(finalModifiedData);
  generateReports(finalModifiedData);
  if (checkFilePathExist(analyzerPaths.REPORTS)) {
    process.stdout.write(chalk.green('Reports created succesfully!\n\n\n'));
  }
};
/**
@author      : Abhishek
@date        : 2023-05-17
@description : Checks if analyzer folder and index.html exists then calls generateReportStatus else throws an error message
@params      : listExtension, rootFolderPath
*/
const createFileReports = (listExtension, rootFolderPath) => {
  if (checkFilePathExist(analyzerPaths.MAIN_DIR)) {
    if (checkFilePathExist(analyzerPaths.INDEX)) {
      generateReportStatus(listExtension, rootFolderPath);
    } else {
      process.stdout.write(chalk.red('index.html does not exists!\n'));
      process.exit(1);
    }
  } else {
    process.stdout.write(chalk.red('Analyzer folder does not exists!\n\n'));
    process.exit(1);
  }
};

/* check if the analyzer exists, then replace the index.html table with the latest data of component names in that table */
const generatedCodeReports = (listExtension, rootFolderPath) => {
  try {
    if (listExtension && listExtension.length > 0) {
      createDirectory(analyzerPaths.REPORTS);
      createFileReports(listExtension, rootFolderPath);
    }
  } catch (err) {
    process.stdout.write(err.message);
  }
};

export default generatedCodeReports;
