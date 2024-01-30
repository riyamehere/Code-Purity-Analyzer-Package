import {jest, test, expect, describe, afterEach} from '@jest/globals';
import {mockFinalScanData} from './mock/scanResult.mock';
import {fileContentCodeIndex} from './mock/snippets/finalModifiedData';

/* Importing the function readFile from fs  */
jest.unstable_mockModule('fs', () => ({
  existsSync: jest.fn(),
  mkdirSync: jest.fn(),
  readdirSync: jest.fn(),
  lstatSync: jest.fn(),
  readFileSync: jest.fn(),
  copyFileSync: jest.fn(),
}));

jest.unstable_mockModule('helper/analyzerFunctions', () => ({
  getFinalData: jest.fn(),
  getFileContent: jest.fn(),
  getNumbers: jest.fn(),
  getSpacing: jest.fn(),
  getTableString: jest.fn(),
  getLineNumbers: jest.fn(),
  insertDataInWindow: jest.fn(),
  checkGitIgnoreFile: jest.fn(),
}));

jest.unstable_mockModule('helper/setFileContent.js', () => ({
  default: jest.fn(),
}));

jest.unstable_mockModule('fs/promises', () => ({
  readFile: jest.fn(),
  open: jest.fn(),
}));

jest.unstable_mockModule('node:fs/promises', () => ({
  writeFile: jest.fn(),
}));

const {existsSync, mkdirSync} = await import('fs');
const {readFile, open} = await import('fs/promises');
const {writeFile} = await import('node:fs/promises');

const {getFinalData} = await import('helper/analyzerFunctions');
const setFileContents = (await import('helper/setFileContent.js')).default;
const generatedCodeReports = (await import('lib/reports/code/code.report')).default;

describe('Code Report Js FIle', () => {
  afterEach(() => {
    jest.clearAllMocks();
    jest.resetAllMocks();
  });

  test('Should a call generatedCodeReports method with a correct arguments', async () => {
    existsSync.mockImplementation()
      .mockReturnValueOnce(false)
      .mockReturnValueOnce(true)
      .mockReturnValueOnce(true)
      .mockReturnValueOnce(true);
    mkdirSync.mockImplementation();
    readFile.mockImplementation().mockReturnValue(fileContentCodeIndex);
    writeFile.mockImplementation();
    setFileContents.mockImplementation();
    getFinalData.mockImplementation().mockReturnValue(mockFinalScanData);
    generatedCodeReports(['.js'], 'src');
    expect(mkdirSync).toHaveBeenCalledTimes(1);
    expect(await readFile).toHaveBeenCalledTimes(1);
    expect(await writeFile).toHaveBeenCalledTimes(1);
  });

  test('Should a call generatedCodeReports method without list of extension', async () => {
    generatedCodeReports([], 'src');
    expect(mkdirSync).not.toHaveBeenCalledTimes(1);
  });

  test('Should a call generatedCodeReports method with throw error', async () => {
    const mockDirThrowError = new Error('creating error while mkdir');
    const spyOnWrite = jest.spyOn(process.stdout, 'write');
    existsSync.mockImplementation()
      .mockReturnValueOnce(false);
    mkdirSync.mockImplementation(() => { throw mockDirThrowError; });
    generatedCodeReports(['.js'], 'src');
    expect(spyOnWrite).toHaveBeenCalledTimes(2);
  });

  test('Should a call generatedCodeReports method without a main dir folder exists', async () => {
    existsSync.mockImplementation()
      .mockReturnValueOnce(false)
      .mockReturnValueOnce(false);
    mkdirSync.mockImplementation();
    readFile.mockImplementation().mockReturnValue(fileContentCodeIndex);
    writeFile.mockImplementation();
    setFileContents.mockImplementation();
    getFinalData.mockImplementation().mockReturnValue(mockFinalScanData);
    const spyOnExit = jest.spyOn(process, 'exit').mockReturnValue(0);
    generatedCodeReports(['.js'], 'src');
    expect(mkdirSync).toHaveBeenCalledTimes(1);
    expect(spyOnExit).toHaveBeenCalledTimes(1);
  });

  test('Should a call generatedCodeReports method without a main dir folder exists', async () => {
    existsSync.mockImplementation()
      .mockReturnValueOnce(false)
      .mockReturnValueOnce(true)
      .mockReturnValueOnce(false);
    mkdirSync.mockImplementation();
    readFile.mockImplementation().mockReturnValue(fileContentCodeIndex);
    writeFile.mockImplementation();
    setFileContents.mockImplementation();
    getFinalData.mockImplementation().mockReturnValue(mockFinalScanData);
    const spyOnExit = jest.spyOn(process, 'exit').mockReturnValue(0);
    generatedCodeReports(['.js'], 'src');
    expect(mkdirSync).toHaveBeenCalledTimes(1);
    expect(spyOnExit).toHaveBeenCalledTimes(1);
  });

  test('Should a call generatedCodeReports method with a correct arguments and report folder file path exists', async () => {
    existsSync.mockImplementation()
      .mockReturnValueOnce(false)
      .mockReturnValueOnce(true)
      .mockReturnValueOnce(true)
      .mockReturnValueOnce(true)
      .mockReturnValueOnce(true);

    mkdirSync.mockImplementation();
    readFile.mockImplementation().mockReturnValue(fileContentCodeIndex);
    writeFile.mockImplementation();
    setFileContents.mockImplementation();
    getFinalData.mockImplementation().mockReturnValue(mockFinalScanData);
    generatedCodeReports(['.js'], 'src');
    expect(mkdirSync).toHaveBeenCalledTimes(1);
    expect(await readFile).toHaveBeenCalledTimes(1);
    expect(await writeFile).toHaveBeenCalledTimes(1);
  });

  test('Should a call generatedCodeReports method with a correct arguments and report folder file path exists', async () => {
    existsSync.mockImplementation()
      .mockReturnValueOnce(false)
      .mockReturnValueOnce(true)
      .mockReturnValueOnce(true)
      .mockReturnValueOnce(true)
      .mockReturnValueOnce(true);

    mkdirSync.mockImplementation();
    readFile.mockImplementation().mockReturnValue(fileContentCodeIndex);
    writeFile.mockImplementation();
    setFileContents.mockImplementation();
    getFinalData.mockImplementation().mockReturnValue([]);
    generatedCodeReports(['.js'], 'src');
    expect(mkdirSync).toHaveBeenCalledTimes(1);
    expect(open).not.toHaveBeenCalled();
  });
});
