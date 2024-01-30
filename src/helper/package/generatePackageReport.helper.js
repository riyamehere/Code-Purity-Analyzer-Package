import {readFile} from 'fs';
import {analyzerPaths} from 'custConstants';
import writeToFile from 'utils/write.js';

/**
@author      : Riya
@date        : 2023-03-10
@description : This function sets the index.html files content, replaces the TABLE data with the file sqequence in which issues are found.
*/

/**
 * This function generates a package report by setting the index.html file's content,
 * replacing the TABLE data with the file sequence in which issues are found.
 * @async
 * @function generatePackageReport
 * @param {string} packageReportListData - The data to replace the TABLE data with in the index.html file.
 * @returns {Promise<string>} A Promise that resolves with a success message when the write operation is complete.
 * @throws {Error} If there was an error in reading or writing the index.html file.
 */
const generatePackageReport = (packageReportListData) => new Promise((resolve, reject) => {
  readFile(analyzerPaths.PACKAGE_INDEX, 'utf8', async (err, fileData) => {
    if (err) {
      process.stdout.write(err.message);
      reject(err);
    }
    if (fileData) {
      try {
        const result = fileData.replace(/{{dependency_reports}}/g, packageReportListData);
        await writeToFile(analyzerPaths.PACKAGE_INDEX, result);
        resolve(`Successfully written  to file ${analyzerPaths.PACKAGE_INDEX}`);
      } catch (error) {
        reject(new Error(`Error in writing to file ${analyzerPaths.PACKAGE_INDEX}`));
      }
    } else {
      reject(new Error(`Error in writing to file ${analyzerPaths.PACKAGE_INDEX}`));
    }
  });
});

export default generatePackageReport;
