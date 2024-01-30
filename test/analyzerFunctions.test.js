import { test, expect, jest, describe, beforeEach, afterEach } from '@jest/globals';
import { analyzerPaths } from 'custConstants';

jest.unstable_mockModule('fs', () => ({
  readFileSync: jest.fn(),
  existsSync: jest.fn(),
  lstatSync: jest.fn(),
  readdirSync: jest.fn(),
}));
const { readdirSync, readFileSync, existsSync, lstatSync } = await import('fs');
const { getFileContent, getSpacing, getFinalData, getNumbers, getTableString, checkGitIgnoreFile } = await import('helper/analyzerFunctions');

class Stats {
  isDirectory() {}
}

describe('analyzerFunctions', () => {
  afterEach(() => {
    jest.resetModules();
    jest.resetAllMocks();
  });
  beforeEach(() => {
    jest.resetModules();
    jest.resetAllMocks();
  });

  /* getFileContent */
  test('should call getFileContent with correct arguments', () => {
    const fileName = 'dummyHtml.tsx';
    const finalModifiedData =
      [{
        fileName: 'dummyHtml.tsx',
        filePath: 'test/mock/analyzerFnMock/dummyHtml.tsx',
        fileContent: '<div>Hello World</div>',
        fileLines: 4,
        issueList: [{ type: 'EsLint', issueCount: 1, issueLineNumber: [1] }],
      }];
    const expectedString = '&ltdiv&gtHello World&lt/div&gt';
    analyzerPaths.GITIGNORE_PATH = 'test/mock/snippets/gitIgnoreWithEnv/.gitignore';
    const result = getFileContent(finalModifiedData, fileName);
    expect(result).toEqual(expectedString);
  });

  /* getTableString */
  test('should call getTableString with correct arguments', () => {
    const finalModifiedData =
      [{
        fileName: 'esLintIssueFile.ts',
        filePath: 'test/mock/analyzerFnMock/esLintIssueFile.ts',
        fileContent: '// eslint-disable\nfunction add(a, b) {\n    return a + b\n}',
        fileLines: 4,
        issueList: [{ type: 'EsLint', issueCount: 1, issueLineNumber: [1] }],
      }];
    analyzerPaths.GITIGNORE_PATH = 'test/mock/snippets/gitIgnoreWithEnv/.gitignore';
    const result = getTableString(finalModifiedData);
    const tableString = '';
    const value = {
      fileName: 'esLintIssueFile.ts',
      issueList: [{ type: 'EsLint', issueCount: 1, issueLineNumber: [1] }],
    };
    const expectedString =
      `${tableString}` +
      `
        <tbody>
        <tr>
        <td class="issue-table-td" ><a href="./issues.html?component=${value.fileName}">${value.fileName}</a></td>
        <td class="issue-table-td" >${value.issueList.length}</td>
        </tr>
        </tbody>
        `;

    expect(result).toBe(expectedString);
  });

  /* getSpacing */
  test('should call getSpacing with correct arguments', () => {
    const fileName = 'esLintIssueFile.ts';
    const finalModifiedData =
      [{
        fileName: 'esLintIssueFile.ts',
        filePath: 'test/mock/analyzerFnMock/esLintIssueFile.ts',
        fileContent: '// eslint-disable\nfunction add(a, b) {\n    return a + b\n}',
        fileLines: 4,
        issueList: [{ type: 'EsLint', issueCount: 1, issueLineNumber: [1] }],
      }];
    // const lineNumbers = 4;
    analyzerPaths.GITIGNORE_PATH = 'test/mock/snippets/gitIgnoreWithEnv/.gitignore';
    const result = getSpacing(finalModifiedData, fileName);
    const expectedString = '<span class="cline-any cline-neutral bg-console">&nbsp;</span>\n' +
      '<span class="cline-any cline-neutral ">&nbsp;</span>\n' +
      '<span class="cline-any cline-neutral ">&nbsp;</span>\n' +
      '<span class="cline-any cline-neutral ">&nbsp;</span>';

    expect(result).toMatch(expectedString);
  });

  /* getNumbers */
  test('should call getNumbers with correct arguments', () => {
    const fileName = 'esLintIssueFile.ts';
    const finalModifiedData = [{
      fileName: 'esLintIssueFile.ts',
      filePath: 'test/mock/analyzerFnMock/esLintIssueFile.ts',
      fileContent: '// eslint-disable\nfunction add(a, b) {\n    return a + b\n}',
      fileLines: 4,
      issueList: [{ type: 'EsLint', issueCount: 1, issueLineNumber: [1] }],
    }];
    analyzerPaths.GITIGNORE_PATH = 'test/mock/snippets/gitIgnoreWithEnv/.gitignore';
    const result = getNumbers(finalModifiedData, fileName);
    const expectedString = '<a name=\'L1\' id=\'id1\'></a><a href=\'#L1\'>1</a>\n' +
      '<a name=\'L2\' id=\'id2\'></a><a href=\'#L2\'>2</a>\n' +
      '<a name=\'L3\' id=\'id3\'></a><a href=\'#L3\'>3</a>\n' +
      '<a name=\'L4\' id=\'id4\'></a><a href=\'#L4\'>4</a>';

    expect(result).toMatch(expectedString);
  });

  /* getFinalData */
  test('Should check finalData method a call with correct argumensts and return proper data', async () => {
    const dir = 'test/mock/analyzerFnMock';
    const ext = ['.ts'];

    const expectedResult =
      [{
        fileName: 'esLintIssueFile.ts',
        filePath: 'test/mock/analyzerFnMock/esLintIssueFile.ts',
        fileContent: '// eslint-disable\nfunction add(a, b) {\n    return a + b\n} \n .env',
        fileLines: 5,
        issueList: [{type: 'EsLint', issueType: 'Code Smell', issuePriority: 'Medium',issueCount: 1, issueLineNumber: [1]}],
      }];

    const mockFileContent = '// eslint-disable\nfunction add(a, b) {\n    return a + b\n} \n .env';
    analyzerPaths.GITIGNORE_PATH = 'test/mock/snippets/gitIgnoreWithEnv/.gitignore';
    analyzerPaths.CONFIG = 'test/mock/package/package_without_config_file.json';

    existsSync.mockImplementationOnce().mockReturnValue(true);
    readdirSync.mockImplementationOnce().mockReturnValue(['esLintIssueFile.ts']);
    readFileSync.mockImplementationOnce().mockReturnValue(mockFileContent);
    lstatSync.mockImplementationOnce().mockReturnValue(new Stats());

    const result = await getFinalData(dir, ext);
    expect(result.length).toEqual(1);
    expect(result).toEqual(expectedResult);
  });

  /* getFinalData - checking null condition for ObjectNullCheck */
  test('Should check null condition for ObjectNullCheck', async () => {
    const dir = 'test/mock/analyzerFnMock/nullMockFile';
    const ext = ['.ts'];

    const expectedResult = [];

    const mockFileContent = 'function add(a, b) {\n    return a + b\n}\n.env';
    analyzerPaths.GITIGNORE_PATH = 'test/mock/snippets/gitIgnoreWithEnv/.gitignore';
    analyzerPaths.CONFIG = 'test/mock/package/package_without_config_file.json';

    existsSync.mockImplementationOnce().mockReturnValue(true);
    readdirSync.mockImplementationOnce().mockReturnValue(['withoutIssueFile.ts']);
    readFileSync.mockImplementationOnce().mockReturnValue(mockFileContent);
    lstatSync.mockImplementationOnce().mockReturnValue(new Stats());

    const result = await getFinalData(dir, ext);
    expect(result.length).toEqual(0);
    expect(result).toEqual(expectedResult);
  });

  /* checkGitIgnoreFile */
  test('should check checkGitIgnoreFile without env file', () => {
    const fileObj = {
      fileContent: 'node_modules/\n' +
      'dist/\n' +
      'coverage\n' +
      'PLEASE ADD ".env" FILE IN THE GITIGNORE FILE',
      fileLines: 4,
      fileName: 'test/mock/snippets/gitIgnoreWithoutEnv/.gitignore',
      filePath: 'test/mock/snippets/gitIgnoreWithoutEnv/.gitignore',
      issueList: [],
    };
    const mockFileContent = 'node_modules/\n' +
    'dist/\n' +
    'coverage\n';
    analyzerPaths.GITIGNORE_PATH = 'test/mock/snippets/gitIgnoreWithoutEnv/.gitignore';
    analyzerPaths.CONFIG = 'test/mock/package/package_without_config_file.json';
    readFileSync.mockImplementation().mockReturnValue(mockFileContent);
    const result = checkGitIgnoreFile();
    expect(result).toEqual(fileObj);
  });

  /* getFilesInDirectory method should return error */
  test('Should check getFilesInDirectory method to return error', async () => {
    analyzerPaths.GITIGNORE_PATH = 'test/mock/snippets/gitIgnoreWithEnv/.gitignore';
    const dir = 'test/mock/analyzerFnMock';
    const ext = ['.ts'];
    const spy = jest.spyOn(process.stdout, 'write');
    try {
      analyzerPaths.CONFIG = 'test/mock/package/package_without_config_file.json';
      existsSync.mockImplementation().mockReturnValue(true);
      readFileSync.mockImplementation().mockReturnValue('');
      readdirSync.mockImplementation(() => { throw new Error('ok'); });
      await getFinalData(dir, ext);
    } catch (error) {
      expect(error).toEqual(new Error('ok'));
      expect(spy).toHaveBeenCalledTimes(1);
    }
  });
});
