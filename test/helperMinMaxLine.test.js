import {test, expect, describe} from '@jest/globals';
import getLineNumberMaxLengthAttribute from 'utils/helperMinMaxLine.js';
import fileContentWithIssue from './mock/snippets/minlength/fileWithMinLengthIssue';
import issueList from './mock/snippets/minMaxLengthIssue';

/**
@author      : Abhishek Hirani
@date        : 2023-05-12
@description : Getting the line numbers of matched issues in the file contents
*/
describe('Check Min Length Attribute in input tag', () => {
  /**
@author      : Abhishek Hirani
@date        : 2023-05-12
@description : getting the line numbers of matched issues in the file contents
*/
  test('CASE 1 - Should  getLineNumberMaxLengthAttribute method call to get the line numbers ::', () => {
    const expectedResult = [11];
    const data = getLineNumberMaxLengthAttribute(issueList.issues, fileContentWithIssue.fileContentsData);
    expect(data).toEqual(expectedResult);
  });
  /**
@author      : Abhishek Hirani
@date        : 2023-05-12
@description : getLineNumberMaxLengthAttribute method call with npo fileContent
*/
  test('CASE 2 - Should  getLineNumberMaxLengthAttribute method call with npo fileContent ::', () => {
    const expectedResult = [];
    const data = getLineNumberMaxLengthAttribute(issueList.issues, fileContentWithIssue.fileContentsNoData);
    expect(data).toEqual(expectedResult);
  });
});
