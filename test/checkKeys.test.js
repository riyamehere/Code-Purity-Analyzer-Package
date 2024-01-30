import {test, expect, describe} from '@jest/globals';
import checkKeysModule from 'lib/logs/issues//checkKeys';
import {issueNames} from 'custConstants';
import issueList from 'helper/issues.js';
import {fileContentWithSecretKey, fileContentWithOutSecretKey} from './mock/lib/checkSecurityKeyData';

/**
@author      : Riya
@date        : 2023-05-08
@description : Test case for check secret key file, where we are using the dummy data,
 fileContentWithSecretKey and fileContentWithOutSecretKey to the main function.
*/

describe('Check secret key File', () => {
  test('CASE 1 - when key is found ::', () => {
    const issueObj = checkKeysModule.main(fileContentWithSecretKey, issueList[6]);
    /* expecting the object to contain issue type to be 'Secret Key Found' */
    expect(issueObj.type).toBe(issueNames.SECRET_KEY_ISSUE);
    const keyCount = issueObj.issueCount;
    /* expecting the object to contain issue count to be 2 */
    expect(keyCount).toBe(2);
  });
  test('CASE 2 - when key is not found, issueObj will be null ::', () => {
    const issueObj = checkKeysModule.main(fileContentWithOutSecretKey, issueList[6]);
    /* expecting the object to be null when no secret key is found */
    expect(issueObj).toBe(null);
  });
});
