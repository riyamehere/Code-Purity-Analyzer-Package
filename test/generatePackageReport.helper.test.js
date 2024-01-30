import {describe, expect, test, jest, afterEach, beforeEach} from '@jest/globals';

/* Importing the function readFile from fs  */
jest.unstable_mockModule('fs', () => ({
  readFile: jest.fn(),
}));

/* Importing the function writeFile from node:fs/promises  */
jest.unstable_mockModule('node:fs/promises', () => ({
  writeFile: jest.fn(),
}));

/* Importing the function readFile from fs  */
const {readFile} = await import('fs');
/* Importing the function writeFile from node:fs/promises  */
const {writeFile} = await import('node:fs/promises');

/* Created a mock for the packageReportListData parameter */
const packageReportListData = 'mock_package_report_data';

/* Created a mock of generatePackageReport function */
const generatePackageReport = (await import('helper/package/generatePackageReport.helper.js')).default;

/* In Describe written the test cases for the Generate package report file in this file we can replace the package report data */
describe('Generate package report file related replace package report', () => {
  /* reseting the jest mocks and modules whenever needed after completing the test */
  afterEach(() => {
    jest.resetModules();
    jest.resetAllMocks();
  });

  /* reseting the jest mocks and modules whenever needed before completing the test */
  beforeEach(() => {
    jest.resetModules();
    jest.resetAllMocks();
  });

  /**
@author      : Abhishek Hirwani
@date        : 2023-04-21
@description : Checking generatePackageReport method is calling working properly with correct arguments
*/
  test('CASE 1 : Should call generatePackageReport method correctly', async () => {
    /* Calling mocked readFile function */
    readFile.mockImplementation((path, options, callback) => {
      callback(null, 'data {{dependency_reports}} test data');
    });
    /* Calling the mocked writefile function */
    writeFile.mockImplementation();
    /* Calling generatePackageReport function with mock params */
    await generatePackageReport(packageReportListData);
    /* expecting writeFile working properly while calling a function */
    expect(writeFile).toHaveBeenCalledTimes(1);
  });

  /**
@author      : Abhishek Hirwani
@date        : 2023-04-21
@description : Checking generatePackageReport function throwing any error while it calling
*/
  test('CASE 2 : Should throw error if readFile function is called', async () => {
    /* Calling mocked readFile function */
    readFile.mockImplementation((path, options, callback) => {
      callback(new Error('error'), null);
    });
    try {
      /* Calling generatePackageReport function with mock params */
      await generatePackageReport(packageReportListData);
    } catch (error) {
      /* expecting error calling the readFile function */
      expect(error).toEqual(new Error('error'));
    }
  });

  /**
@author      : Abhishek Hirwani
@date        : 2023-04-21
@description : Checking generatePackageReport function throwing any error while writeFile function is calling
*/
  test('CASE 3 : Should throw error if writeFile function called', async () => {
    /* Calling mocked readFile function */
    readFile.mockImplementation((path, options, callback) => {
      callback(null, 'data {{dependency_reports}} test data');
    });
    try {
      /* Calling the mocked writefile function and checking its any throwing */
      writeFile.mockImplementation(() => {
        throw new Error('Error in writing to file analyzer/package_index.html');
      });
      /* calling generatePackageReport function with mock params */
      await generatePackageReport(packageReportListData);
    } catch (error) {
      /* expecting any error calling the writeFile function */
      expect(error).toEqual(new Error('Error in writing to file analyzer/package_index.html'));
    }
  });
});
