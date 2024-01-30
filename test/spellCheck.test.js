import {test, expect, describe} from '@jest/globals';
import spellCheckModule from 'lib/logs/issues/spellCheck.js';
import {issueNames} from 'custConstants';
import issueList from 'helper/issues.js';
import {
  spellCheckContentWithIssue,
  spellCheckContentWithOutIssue,
} from './mock/snippets/spellCheck/spellCheckData.mock';

/**
@author      : Riya
@date        : 2023-05-21
@description : Unit test for spellCheck.js where passing the mock data files as parameters
*/
describe('Spell check File', () => {
  test('CASE 1 - when spelling mistake issue is found ::', async () => {
    const issueObj = await spellCheckModule.main(spellCheckContentWithIssue, issueList[13]);
    /* expecting the object to contain issue type to be spelling mistake */
    expect(issueObj.type).toBe(issueNames.SPELLING_ISSUE);
    /* expecting the object to contain issue count to be 1  */
    const misspellCount = issueObj.issueCount;
    expect(misspellCount).toBe(1);
  });
  test('CASE 2 - when spelling mistake issue is not found, issueObj will be null ::', async () => {
    const issueObj = await spellCheckModule.main(spellCheckContentWithOutIssue, issueList[13]);
    /* expecting the object to be null in this case  */
    expect(issueObj).toBe(null);
  });
});
