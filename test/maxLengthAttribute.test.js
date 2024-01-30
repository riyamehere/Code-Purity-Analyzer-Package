import {test, expect, describe} from '@jest/globals';
import maxLenAttributeModule from 'lib/logs/issues/maxLengthAttribute.js';
import {issueNames} from 'custConstants';
import issueList from 'helper/issues.js';
import fileContentWithIssue from './mock/snippets/fileWithIssue.js';
import fileContentWithoutIssue from './mock/snippets/fileWithoutIssue.js';
import fileContentWithIssueMock from './mock/snippets/mock.js';

describe('Check Max Length Attribute in input tag', () => {
  test('CASE 1 - when issue is found ::', () => {
    const issueObj = maxLenAttributeModule.main(fileContentWithIssue, issueList[4]);
    /* expecting the object to contain type as max length attribute */
    expect(issueObj.type).toBe(issueNames.MAX_LENGTH_ATTRIBUTE);
    /* expecting the object to contain issue count to be 1  */
    expect(issueObj.issueCount).toBe(1);
    expect(issueObj.issueLineNumber[0]).toBe(12);
  });
  test('CASE 2 - when issue is not found, issueObj will be null ::', () => {
    const issueObj = maxLenAttributeModule.main(fileContentWithoutIssue);
    /* expecting the object to be null in this case  */
    expect(issueObj).toBe(null);
  });
  test('CASE 3 - when content is maxLength exists ::', () => {
    const issueObj = maxLenAttributeModule.main(fileContentWithIssueMock);
    expect(issueObj).toBe(null);
  });

  /**
  @TODO : @Piyush has to handle line no 5, mock function
  */
});
