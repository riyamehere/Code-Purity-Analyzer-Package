import {test, expect, jest, describe} from '@jest/globals';
import {snippetPaths, analyzerPaths} from 'custConstants';

const updatedSnippetPath = () => {
  snippetPaths.PACKAGE_INDEX = 'test/mock/snippets/index.txt';
  snippetPaths.DEPENDENCY_REPORTS = 'test/mock/snippets/index.txt';
};

const updatedAnalyzerPath = () => {
  analyzerPaths.PACKAGE_INDEX = 'test/mock/analyzer/index.html';
  analyzerPaths.DEPENDENCY_REPORTS = 'test/mock/analyzer/index.html';
};

jest.unstable_mockModule('fs', () => ({
  copyFileSync: jest.fn(),
}));

const {copyFileSync} = await import('fs');

const copySnippetContent = (await import('helper/analyzer/copyPackageSnippet')).default;

describe('Copy Package Snippet File', () => {
  test('Should copyTemplate function a call ', async () => {
    copyFileSync.mockImplementation();
    /* Update Snippet Path */
    updatedSnippetPath();
    /* Update Analyzer Path */
    updatedAnalyzerPath();
    copySnippetContent();
    expect(copyFileSync).toHaveBeenCalled();
    expect(copyFileSync).toHaveBeenCalledTimes(2);
  });
});
