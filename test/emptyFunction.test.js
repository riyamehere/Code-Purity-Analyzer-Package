import {test, expect, describe} from '@jest/globals';
import emptyFunctionModule from 'lib/logs/issues/emptyFunction.js';
import {issueNames} from 'custConstants';
import issueList from 'helper/issues.js';
import fileContentWithIssue from './mock/snippets/emptyFunction/fileWithEmptyFunctionIssue';

describe('Check Empty function in file content', () => {
  /**
    @author      : Abhishek
    @date        : 2023-05-18
    @description : main method calling and finding empty function issues in the file content
    */
  test('CASE 1 - when issue is found ::', () => {
    const issueObj = emptyFunctionModule.main(fileContentWithIssue, issueList[11]);
    /* expecting the object to contain type as max length attribute */
    expect(issueObj.type).toBe(issueNames.EMPTY_FUNCTION);
    /* expecting the object to contain issue count to be 1  */
    expect(issueObj.issueCount).toBe(2);
    expect(issueObj.issueLineNumber[0]).toBe(12);
  });
  /**
    @author      : Abhishek
    @date        : 2023-05-18
    @description : main method calling and is not found any issues then issueObj will be null
    */
  test('CASE 2 - when issue is not found, issueObj will be null ::', () => {
    const issueObj = emptyFunctionModule.main(fileContentWithIssue.fileContentNull);
    /* expecting the object to be null in this case  */
    expect(issueObj).toBe(null);
  });

 
});
