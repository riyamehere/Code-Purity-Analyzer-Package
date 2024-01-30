import {test, expect, describe} from '@jest/globals';
import maxLenModule from 'lib/logs/issues/maxLength.js';
import {issueNames} from 'custConstants';
import issueList from 'helper/issues.js';
import fileContentWithIssue from './mock/snippets/fileWithIssue.js';
import fileContentWithoutIssue from './mock/snippets/fileWithoutIssue.js';

describe('Max Length File', () => {
  test('CASE 1 - when issue is found ::', () => {
    issueNames.MAX_LENGTH_COUNT = 15;
    const issueObj = maxLenModule.main(fileContentWithIssue, issueList[5]);
    /* expecting the object to contain max lines to be greater than the issueNames.MAX_LENGTH_COUNT */
    expect(issueObj.type).toBe(issueNames.MAX_LENGTH_ISSUE);
    /* expecting the object to contain issue count to be 1  */
    const maxLengthCount = issueObj.issueCount;
    expect(maxLengthCount).toBe(1);
  });
  test('CASE 2 - when issue is not found, issueObj will be null ::', () => {
    const issueObj = maxLenModule.main(fileContentWithoutIssue);
    /* expecting the object to be null in this case  */
    expect(issueObj).toBe(null);
  });
});
