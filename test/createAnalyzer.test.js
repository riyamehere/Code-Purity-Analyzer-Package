import {test, describe, expect, jest, afterEach, beforeEach} from '@jest/globals';
import {packageJSONContent, packageJSONContentWithoutGitHub} from './mock/packageContent.js';

const extensionList = ['.ts'];

/* Created a mock of existsSync and rmdirSync function with the help of jest function
this function are presented in the createAnalyzer file */
jest.unstable_mockModule('fs', () => ({
  existsSync: jest.fn(),
  rmdirSync: jest.fn(),
  copyFileSync: jest.fn(),
  mkdirSync: jest.fn(),
  open: jest.fn(),
}));

/* Importing the function writeFile from node:fs/promises */
jest.unstable_mockModule('node:fs/promises', () => ({
  readFile: jest.fn(),
}));

/* Importing the function writeFile from node:fs/promises */
const {readFile} = await import('node:fs/promises');

/* Created a mock of generatedCodeReports file function */
jest.unstable_mockModule('lib/reports/code/code.report.js', () => ({
  default: jest.fn(),
  __esModule: true,
}));

/* Created a mock of generatedPackageReports file function */
jest.unstable_mockModule('lib/reports/package/package.report.js', () => ({
  default: jest.fn(),
  __esModule: true,
}));

/* Created a mock of createAnalyzer function */
const createAnalyzer = (await import('lib/analyzer/createAnalyzer.js')).default;
/* Created a mock of generatedCodeReports function */
const generatedCodeReports = (await import('lib/reports/code/code.report.js')).default;
/* Importing the function existsSync, rmdirSync from fs */
const {existsSync, mkdirSync, rmdirSync, copyFileSync, open} = await import('fs');

/* In Describe written the test cases for the createAnalyzer file and the work of this file is to create a analyzer folder
and also its creates the report for the project code and package reports along with index.html and required css and js files */
describe('CheckCreateAnalyzer File', () => {
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
  @date        : 2023-05-11
  @description : Calling the createAnalyzer method wiht the correct arguments
  */
  test('CASE 1 : Should a call createAnalyzer method with correct arguments', async () => {
    /* expecting analyzer file is already there */
    existsSync.mockImplementation((folderPath) => folderPath).mockReturnValue(false);
    mkdirSync.mockImplementation();
    /* calling generatedCodeReports mockImplementation */
    generatedCodeReports.mockImplementation();
    copyFileSync.mockImplementation();
    /* calling createAnalyzer function with mock params */
    await createAnalyzer(extensionList, packageJSONContent);
    expect(mkdirSync).toBeCalledTimes(1);
  });
  /**
  @author      : Abhishek Hirwani
  @date        : 2023-05-11
  @description : Calling the createAnalyzer method and check directory is created or not
  */

  test('CASE 2 : Should a call createAnalyzer method and check directory is created or not', async () => {
    /* expecting analyzer file is already there */
    existsSync.mockImplementation((folderPath) => folderPath).mockReturnValue(true);
    /* calling generatedCodeReports mockImplementation */
    generatedCodeReports.mockImplementation();
    /* calling createAnalyzer function with mock params */
    await createAnalyzer(extensionList, packageJSONContent);
    expect(rmdirSync).toBeCalledTimes(1);
    expect(existsSync).toBeCalled();
  });
  /**
  @author      : Abhishek Hirwani
  @date        : 2023-05-11
  @description : Calling the open method with correct arguments
  */
  test('CASE 3 : Should a call open method with correct arguments', async () => {
    /* expecting analyzer file is already there */
    existsSync.mockImplementation().mockReturnValue(true);
    /* calling generatedCodeReports mockImplementation */
    generatedCodeReports.mockImplementation();
    /* calling createAnalyzer function with mock params */
    await createAnalyzer(extensionList, packageJSONContentWithoutGitHub);
    expect(open).toBeCalledTimes(1);
    expect(copyFileSync).toHaveBeenCalledTimes(17);
  });

  /**
  @author      : Abhishek Hirwani
  @date        : 2023-05-11
  @description : Calling the open method with the wrong arguments and checking the throwing error
  */
  test('CASE 4 : Should a call open method with the wrong arguments and checking the throwing error', async () => {
    const spyOnWrite = jest.spyOn(process.stdout, 'write');
    /* calling open mockImplementation with throwing error */
    open.mockImplementation(() => {
      throw new Error('ok');
    });
    /* calling createAnalyzer function with mock params */
    existsSync.mockImplementation().mockReturnValue(true);
    try {
      await createAnalyzer(extensionList, packageJSONContentWithoutGitHub);
    } catch (error) {
      expect(spyOnWrite).toHaveBeenCalledTimes(2);
    }
  });
  /**
  @author      : Abhishek Hirwani
  @date        : 2023-05-11
  @description : Calling the open method with the wrong arguments
  */

  test('CASE 4 : Should a call open method with the wrong arguments', async () => {
    existsSync.mockImplementation().mockReturnValue(false);
    /* calling generatedCodeReports mockImplementation */
    generatedCodeReports.mockImplementation();
    /* calling open mockImplementation */
    open.mockImplementation((path, options, callback) => callback(new Error('ok'), 'data'));
    /* calling existsSync function with mock params */
    existsSync.mockImplementation().mockReturnValue(true);
    await createAnalyzer(extensionList, packageJSONContentWithoutGitHub);
  });
  /**
  @author      : Abhishek Hirwani
  @date        : 2023-05-11
  @description : Calling the createAnalyzer method and checking the result folder is created
  */

  test('CASE 5 : Should a call createAnalyzer method and checking the result folder is created', async () => {
    /* expecting result folder is already there */
    existsSync.mockImplementation().mockReturnValue(false);
    /* calling generatedCodeReports mockImplementation */
    generatedCodeReports.mockImplementation();
    open.mockImplementation((path, options, callback) => callback(null, 'data'));
    /* calling createAnalyzer function with mock params */
    existsSync.mockImplementation().mockReturnValue(true);
    await createAnalyzer(extensionList, packageJSONContentWithoutGitHub);
  });
  /**
  @author      : Abhishek Hirwani
  @date        : 2023-05-11
  @description : Calling the createAnalyzer method and checking the result folder is not created
  */
  test('CASE 6 : Should a call createAnalyzer method and checking the result folder is not created', async () => {
    /* expecting result folder is already there */
    existsSync.mockImplementation().mockReturnValue(false);
    /* calling generatedCodeReports mockImplementation */
    generatedCodeReports.mockImplementation();
    open.mockImplementation((path, options, callback) => callback(null, 'data'));
    /* calling existsSync function with mock params */
    existsSync.mockImplementation().mockReturnValue(false);
    await createAnalyzer(extensionList, packageJSONContentWithoutGitHub);
  });
});
