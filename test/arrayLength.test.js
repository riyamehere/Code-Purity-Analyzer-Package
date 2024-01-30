import {test, expect, describe} from '@jest/globals';
import arrayLengthModule from 'lib/logs/issues/arrayLength';
import {issueNames} from 'custConstants';
import issueList from 'helper/issues.js';
import {fileContentWithIssue, fileContentWithoutIssue} from './mock/lib/arrayLength';

describe('Array Length File', () => {
  test('CASE 1 - when issue is found ::', () => {
    const issueObj = arrayLengthModule.main(fileContentWithIssue, issueList[7]);
    /* expecting the object to contain issue type to be console. */
    expect(issueObj.type).toBe(issueNames.ARRAY_LENGTH);
    const consoleCount = issueObj.issueCount;
    /* expecting the object to contain issue count to be 1 */
    expect(consoleCount).toBe(8);
  });
  test('CASE 2 - when issue is not found, issueObj will be null ::', () => {
    const issueObj = arrayLengthModule.main(fileContentWithoutIssue);
    /* expecting the object to be null */
    expect(issueObj).toBe(null);
  });
});
