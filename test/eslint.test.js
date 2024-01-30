import {test, expect, describe} from '@jest/globals';
import eslintModule from 'lib/logs/issues/eslintDisable';
import {issueNames} from 'custConstants';
import issueList from 'helper/issues.js';
import fileContentWithIssue from './mock/snippets/fileWithIssue.js';
import fileContentWithoutIssue from './mock/snippets/fileWithoutIssue.js';

describe('Any File', () => {
  test('CASE 1 - when issue is found ::', () => {
    const issueObj = eslintModule.main(fileContentWithIssue, issueList[1]);
    /* expecting the object to contain issue type to be eslint-disable */
    expect(issueObj.type).toBe(issueNames.ESLINT_ISSUE);
    const eslintCount = issueObj.issueCount;
    /* expecting the object to contain issue count to be 1. */
    expect(eslintCount).toBe(1);
  });
  test('CASE 2 - when issue is not found, issueObj will be null ::', () => {
    const issueObj = eslintModule.main(fileContentWithoutIssue);
    /* expecting the object to be null */
    expect(issueObj).toBe(null);
  });
});
