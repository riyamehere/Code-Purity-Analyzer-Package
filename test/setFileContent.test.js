import {describe, expect, test, jest, afterEach, beforeEach} from '@jest/globals';
import {finalDummyData, fileData} from './mock/snippets/setFileContentData';

/* Importing the function writeFile, existsSync and copyFileSync from fs  */
jest.unstable_mockModule('fs', () => ({
  existsSync: jest.fn(),
  copyFileSync: jest.fn(),
  lstatSync: jest.fn(),
  readFileSync: jest.fn(),
  readdirSync: jest.fn(),
}));

/* Importing the function readFile, open from fs/promises  */
jest.unstable_mockModule('fs/promises', () => ({
  readFile: jest.fn(),
  open: jest.fn(),
}));

/* Importing the function writeFile from node:fs/promises  */
jest.unstable_mockModule('node:fs/promises', () => ({
  writeFile: jest.fn(),
}));

/* Importing the function existsSync and copyFileSync from fs  */
const {existsSync, copyFileSync} = await import('fs');

/* Importing the function readFile, open from fs/promises  */
const {readFile, open} = await import('fs/promises');

/* Importing the function writeFile from node:fs/promises  */
const {writeFile} = await import('node:fs/promises');

/* Importing the replaceFileContents() function */
const replaceFileContents = (await import('helper/setFileContent.js')).default;

/* In Describe written the test cases for the setFileContent file in this file we set the file content for particular file */
describe('Test cases for set file content', () => {
  /* reset the jest mocks and modules whenever needed after completing the test */
  afterEach(() => {
    jest.resetModules();
    jest.resetAllMocks();
  });

  //   /* reset the jest mocks and modules whenever needed before completing the test */
  beforeEach(() => {
    jest.resetModules();
    jest.resetAllMocks();
  });

  /**
  @author      : Riya
  @date        : 2023-04-24
  @description : CASE 1 - All correct parameters are passed to the replaceFileContents() function and expecting the respective outcome value
  */
  test('CASE 1 : Should call replaceFileContents() method correctly', async () => {
    /* mocking the close method in mock return value of open method's fs module mock  */
    open.mockImplementation().mockReturnValue({close: jest.fn()});
    /* case 1 : where exists sync mock value is kept as true to go inside the if condition */
    existsSync.mockImplementation().mockReturnValue(true);
    /* mock implementation of copyfilesync(), writeFile() respectively */
    copyFileSync.mockImplementation();
    writeFile.mockImplementation();
    /* mock implementation of of readFile() with a mock return value */
    readFile.mockReturnValue(fileData);
    /* calling our main function i.e replaceFileContents() here with the required parameters */
    await replaceFileContents(finalDummyData[0], finalDummyData);
    /* expecting all these consecutive functions to have been called */
    expect(open).toHaveBeenCalledTimes(1);
    expect(copyFileSync).toHaveBeenCalledTimes(1);
    expect(readFile).toHaveBeenCalledTimes(1);
  });

  /**
  @author      : Riya
  @date        : 2023-04-24
  @description : CASE 2 : Else part of readFile, case when error in readfile
  */
  test('CASE 2 : Else part of readFile, case when error in readfile', async () => {
    /* mock implementation of all the required functions */
    open.mockImplementation().mockReturnValue({close: jest.fn()});
    existsSync.mockImplementation().mockReturnValue(true);
    copyFileSync.mockImplementation();
    writeFile.mockImplementation();
    /* returning null as mock return value as a case when no data is readFile */
    readFile.mockReturnValue(null);
    try {
      /* calling our main function i.e replaceFileContents() here with the required parameters */
      await replaceFileContents(finalDummyData[0], finalDummyData);
    } catch (error) {
      /* expecting the catch block to be executed with the following error */
      expect(error).toEqual(new Error('Getting error in reading file esLintIssueFile.ts'));
    }
  });

  /**
  @author      : Riya
  @date        : 2023-04-24
  @description : CASE 3 - Case where the exist sync function returns false and if condition fails.
  */

  test('CASE 3 : Outside If condition', async () => {
    /* mock implementation of all the required functions */
    open.mockImplementation().mockReturnValue({close: jest.fn()});
    /* exist sync function returns mock value as false to break the if condition */
    existsSync.mockImplementation().mockReturnValue(false);
    copyFileSync.mockImplementation();
    writeFile.mockImplementation();
    /* returning null as mock return value as a case when no data is readFile */
    readFile.mockReturnValue(null);
    /* calling our main function i.e replaceFileContents() here with the required parameters */
    await replaceFileContents(finalDummyData[0], finalDummyData);
    /* expect all the consecutive functions to not have been called after that */
    expect(copyFileSync).not.toBeCalled();
    expect(readFile).not.toBeCalled();
  });
});
