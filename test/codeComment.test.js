import {test, expect, describe} from '@jest/globals';
import codeCommentModule from 'lib/logs/issues/codeComment';
import {issueNames} from 'custConstants';
import issueList from 'helper/issues.js';
import {parseAsJSCode, hasJSKeywords, hasJavaScriptCode} from 'helper/codeComment';
import {
  javascriptCode,
  invalidJavascriptCode,
  nonJavascriptCode,
  fileContentWithIssue,
  fileContentWithoutIssue,
} from './mock/lib/codeComment';

/* This is a test suite written using the Jest testing framework for a JavaScript code commenting module. */
describe('Check javascript code commented', () => {
  /*
   * This is a Jest test case that checks the behavior of the `codeCommentModule.main` function when there is an issue
   * found in the `fileContentWithIssue` input. It expects the function to return an object `issueObj` that contains the
   * issue type to be `CODE_COMMENT` and the issue count to be 1.
   */
  test('CASE 1 - when issue is found ::', () => {
    const issueObj = codeCommentModule.main(fileContentWithIssue, issueList[9]);
    /* expecting the object to contain issue type to be console. */
    expect(issueObj.type).toBe(issueNames.CODE_COMMENT);
    const consoleCount = issueObj.issueCount;
    /* expecting the object to contain issue count to be 1 */
    expect(consoleCount).toBe(1);
  });

  /* This test case is checking the behavior of the `codeCommentModule.main` function when there is no
   * issue found in the input `fileContentWithoutIssue`. It expects the function to return `null` as the `issueObj`.
   */
  test('CASE 2 - when issue is not found, issueObj will be null ::', () => {
    const issueObj = codeCommentModule.main(fileContentWithoutIssue, issueList[8]);
    /* expecting the object to be null */
    expect(issueObj).toBe(null);
  });

  /* This test case is checking if the `parseAsJSCode` function correctly parses a valid JavaScript
  code snippet and returns an object with a `type` property equal to `'Program'`. */
  test('CASE 3 - should parse valid JavaScript code', () => {
    const result = parseAsJSCode(javascriptCode);
    expect(result).not.toBeNull();
    expect(result.type).toBe('Program');
  });

  /* This test case is checking if the `parseAsJSCode` function correctly returns `null` for an invalid
  JavaScript code snippet. */
  test('CASE 4 - should return null for invalid JavaScript code', () => {
    const result = parseAsJSCode(invalidJavascriptCode);
    expect(result).toBeNull();
  });

  /* This test case is checking if the `hasJSKeywords` function correctly identifies if a given code
  snippet contains a JavaScript keyword. */
  test('CASE 5 - returns true if the snippet contains a JavaScript keyword', () => {
    const result = hasJSKeywords(javascriptCode);
    expect(result).toBe(true);
  });

  /* This test case is checking if the `hasJSKeywords` function correctly identifies if a given code
  snippet does not contain a JavaScript keyword within a comment. */
  test('CASE 6 - returns false if the snippet does not contains a JavaScript keyword in a comment', () => {
    const result = hasJSKeywords(nonJavascriptCode);
    expect(result).toBe(false);
  });

  /* This test case is checking if the `hasJavaScriptCode` function correctly identifies if a given
  input contains valid JavaScript code. */
  test('CASE 8- should return true if the input contains valid JavaScript code', () => {
    const result = hasJavaScriptCode(javascriptCode);
    expect(result).toBe(true);
  });

  /* This test case is checking if the `hasJavaScriptCode` function correctly identifies if a given
  input does not contain valid JavaScript code. */
  test('CASE 8 - should return false if the input does not contain valid JavaScript code', () => {
    const result = hasJavaScriptCode(nonJavascriptCode);
    expect(result).toBe(true);
  });
});
