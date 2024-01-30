import {test, expect, describe} from '@jest/globals';
import consoleModule from 'lib/logs/issues/console';
import {issueNames} from 'custConstants';
import issueList from 'helper/issues.js';
import fileContentWithIssue from './mock/snippets/fileWithIssue.js';
import fileContentWithoutIssue from './mock/snippets/fileWithoutIssue.js';

describe('Console File', () => {
  test('CASE 1 - when issue is found ::', () => {
    const issueObj = consoleModule.main(fileContentWithIssue, issueList[0]);
    /* expecting the object to contain issue type to be console. */
    expect(issueObj.type).toBe(issueNames.CONSOLE_ISSUE);
    /* expecting the object to contain issue count to be 1  */
    expect(issueObj.issueCount).toBe(1);
    expect(issueObj.issueLineNumber[0]).toBe(15);
  });
  test('CASE 2 - when issue is not found, issueObj will be null ::', () => {
    const issueObj = consoleModule.main(fileContentWithoutIssue);
    /* expecting the object to be null */
    expect(issueObj).toBe(null);
  });
});
