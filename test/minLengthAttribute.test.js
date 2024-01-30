import {test, expect, describe} from '@jest/globals';
import minLenAttributeModule from 'lib/logs/issues/minLengthAttribute.js';
import {issueNames} from 'custConstants';
import issueList from 'helper/issues.js';
import fileWithMinLengthIssue from './mock/snippets/minlength/fileWithMinLengthIssue';
import fileWithoutMinLengthIssue from './mock/snippets/minlength/fileWithoutMinLengthIssue';
import fileContentWithIssueMock from './mock/snippets/minlength/fileWithIssueMock';

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
    const issueObj = minLenAttributeModule.main(fileWithMinLengthIssue, issueList[10]);
    /* expecting the object to contain type as max length attribute */
    expect(issueObj.type).toBe(issueNames.MIN_LENGTH_ATTRIBUTE);
    /* expecting the object to contain issue count to be 1  */
    expect(issueObj.issueCount).toBe(1);
    expect(issueObj.issueLineNumber[0]).toBe(12);
  });
  /**
@author      : Abhishek Hirani
@date        : 2023-05-12
@description : When minlength issue is not found in any file
*/
  test('CASE 2 - when issue is not found, issueObj will be null ::', () => {
    const issueObj = minLenAttributeModule.main(fileWithoutMinLengthIssue);
    /* expecting the object to be null in this case  */
    expect(issueObj).toBe(null);
  });
  /**
@author      : Abhishek Hirani
@date        : 2023-05-12
@description : When minlength issue is already in any file
*/
  test('CASE 3 - when content is minLength exists ::', () => {
    const issueObj = minLenAttributeModule.main(fileContentWithIssueMock);
    expect(issueObj).toBe(null);
  });
  
});
