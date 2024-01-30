import {test, expect, jest, describe} from '@jest/globals';
import {snippetPaths, analyzerPaths} from 'custConstants';

const updateSnippetPath = () => {
  snippetPaths.INDEX = 'test/mock/snippets/index.txt';
  snippetPaths.ISSUES = 'test/mock/snippets/index.txt';
  snippetPaths.CODE_INDEX = 'test/mock/snippets/index.txt';
  snippetPaths.SINGLEISSUES = 'test/mock/snippets/index.txt';
  snippetPaths.CSS = 'test/mock/snippets/index.txt';
  snippetPaths.PRETTIFY_CSS = 'test/mock/snippets/index.txt';
  snippetPaths.PRETTIFY_JS = 'test/mock/snippets/index.txt';
  snippetPaths.PACKAGE_INDEX = 'test/mock/snippets/index.txt';
  snippetPaths.DEPENDENCY_REPORTS = 'test/mock/snippets/index.txt';
  snippetPaths.DOWNLOAD = 'test/mock/snippets/index.txt';
  snippetPaths.JS_PDF = 'test/mock/snippets/index.txt';
  snippetPaths.HTML2CANVAS_PDF = 'test/mock/snippets/index.txt';
  snippetPaths.AUTOTABLE = 'test/mock/snippets/index.txt';
};

const updateAnalyzerPath = () => {
  analyzerPaths.INDEX = 'test/mock/analyzer/index.html';
  analyzerPaths.ISSUES = 'test/mock/analyzer/index.html';
  analyzerPaths.CODE_INDEX = 'test/mock/analyzer/index.html';
  analyzerPaths.SINGLEISSUES = 'test/mock/analyzer/index.html';
  analyzerPaths.CSS = 'test/mock/analyzer/index.html';
  analyzerPaths.PRETTIFY_CSS = 'test/mock/analyzer/index.html';
  analyzerPaths.PRETTIFY_JS = 'test/mock/analyzer/index.html';
  analyzerPaths.PACKAGE_INDEX = 'test/mock/analyzer/index.html';
  analyzerPaths.DEPENDENCY_REPORTS = 'test/mock/analyzer/index.html';
  snippetPaths.DOWNLOAD = 'test/mock/analyzer/index.html';
  snippetPaths.JS_PDF = 'test/mock/analyzer/index.html';
  snippetPaths.HTML2CANVAS_PDF = 'test/mock/analyzer/index.html';
  snippetPaths.AUTOTABLE = 'test/mock/analyzer/index.html';
};

jest.unstable_mockModule('fs', () => ({
  copyFileSync: jest.fn(),
}));

const {copyFileSync} = await import('fs');

const copySnippetContent = (await import('helper/analyzer/copySnippet')).default;

describe('Copy Snippet File', () => {
  test('Should copyTemplate function a call ', async () => {
    copyFileSync.mockImplementation();
    /* Update Snippet Path */
    updateSnippetPath();
    /* Update Analyzer Path */
    updateAnalyzerPath();
    copySnippetContent();
    expect(copyFileSync).toHaveBeenCalled();
    expect(copyFileSync).toHaveBeenCalledTimes(16);
  });
});
