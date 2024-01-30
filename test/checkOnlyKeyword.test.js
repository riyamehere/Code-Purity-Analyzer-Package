import {test, expect, describe} from '@jest/globals';
import onlyKeywordModule from 'lib/logs/issues/checkOnlyKeyword';
import {issueNames} from 'custConstants';
import issueList from 'helper/issues.js';
import fileContentWithIssue from './mock/snippets/OnlyKeyword/fileWithOnlyIssue';
/**
@author      : Abhishek Hirani
@date        : 2023-05-12
@description : Check Min Length Attribute in input tag of component
*/
describe('Check Min Length Attribute in input tag', () => {
  /**
@author      : Abhishek Hirani
@date        : 2023-05-12
@description : when minlength issue is found in any file
*/
  test('CASE 1 - when issue is found ::', () => {
    const issueObj = onlyKeywordModule.main(fileContentWithIssue, issueList[12]);
    /* expecting the object to contain type as only keyword */
    expect(issueObj.type).toBe(issueNames.TEST_ONLY_ISSUE);
    /* expecting the object to contain issue count to be 1  */
    expect(issueObj.issueCount).toBe(6);
    expect(issueObj.issueLineNumber[0]).toBe(31);
  });
  /**
@author      : Abhishek Hirani
@date        : 2023-05-12
@description : When minlength issue is not found in any file
*/
  test('CASE 2 - when issue is not found, issueObj will be null ::', () => {
    const issueObj = onlyKeywordModule.main(fileContentWithIssue.fileContentNoIssue);
    /* expecting the object to be null in this case  */
    expect(issueObj).toBe(null);
  });

 
});
