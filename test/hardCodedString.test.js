import {test, expect, describe} from '@jest/globals';
import hardCodedStringModule from 'lib/logs/issues/hardCodedString.js';
import {issueNames} from 'custConstants';
import issueList from 'helper/issues.js';
import fileContentWithIssue from './mock/snippets/fileWithIssue.js';
import fileContentWithoutIssue from './mock/snippets/fileWithoutIssue.js';

describe('Hardcoded string Issue', () => {
  test('CASE 1 - when issue is found ::', () => {
    const issueObj = hardCodedStringModule.main(fileContentWithIssue, issueList[3]);
    /* expecting the object to contain issue type to be hardcoded string */
    expect(issueObj.type).toBe(issueNames.HARDCODED_STRING_ISSUE);
    /* expecting the object to contain issue count to be 2  */
    const hardCodedStringCount = issueObj.issueCount;
    expect(hardCodedStringCount).toBe(2);
    expect(issueObj.issueLineNumber[0]).toBe(8);
  });
  test('CASE 2 - when issue is not found, issueObj will be null ::', () => {
    const issueObj = hardCodedStringModule.main(fileContentWithoutIssue);
    /* expecting the object to be null in this case  */
    expect(issueObj).toBe(null);
  });
});
