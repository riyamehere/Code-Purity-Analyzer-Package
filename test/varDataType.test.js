import { test, expect, describe } from '@jest/globals';
import varModule from 'lib/logs/issues/varDataType.js';
import { issueNames } from 'custConstants';
import issueList from 'helper/issues.js';
import fileContentWithIssue from './mock/snippets/fileWithIssue.js';
import fileContentWithoutIssue from './mock/snippets/fileWithoutIssue.js';

describe('Any File', () => {
  test('CASE 1 - when issue is found ::', () => {
    const issueObj = varModule.main(fileContentWithIssue, issueList[8]);
    /* expecting the object to contain issue type to be any */
    expect(issueObj.type).toBe(issueNames.VAR_DATATYPE);
    /* expecting the object to contain issue count to be 1  */
    const anyCount = issueObj.issueCount;
    expect(anyCount).toBe(1);
  });
  test('CASE 2 - when issue is not found, issueObj will be null ::', () => {
    const issueObj = varModule.main(fileContentWithoutIssue);
    /* expecting the object to be null in this case  */
    expect(issueObj).toBe(null);
  });
});
