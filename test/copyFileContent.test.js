/* eslint-disable no-unused-vars */

/**
@TODO : Eslint disabled due to mock function required some parameters and we don't use them.
*/

/**
@author      : 
@date        : 2023-04-08
@description : Add Description Here
@params      : Input Params
@return      : Return Output
*/

import {test, expect, describe, jest, beforeEach, afterEach} from '@jest/globals';

jest.unstable_mockModule('fs', () => ({
  copyFileSync: jest.fn(),
}));

const {copyFileSync} = await import('fs');

const copyTemplate = (await import('utils/copyFileContent')).default;

const src = 'mock/test.js';
const destination = 'mock/test1.js';

describe('Copy File Test Cases', () => {
  afterEach(() => {
    jest.resetModules();
  });

  beforeEach(() => {
    jest.resetAllMocks();
  });

  test('Should call copyTemplate method correctly', async () => {
    /* Create Mock of process write  */
    copyFileSync.mockImplementation((mockSrc, mockDest) => true);
    copyTemplate(src, destination);
    /* Check file already exists */
    expect(copyFileSync).toHaveBeenCalledTimes(1);
  });

  test('Should throw error when copyTemplate method', async () => {
    try {
      jest.spyOn(process.stdout, 'write').mockImplementation(() => jest.fn());
      copyFileSync.mockImplementation((mockSrc, mockDestination) => { throw new Error('ok'); });
      /* copyTemplate method */
      copyTemplate(src, destination);
    } catch (error) {
      /* Exception throw while calling a function */
      expect(process.stdout.write).toHaveBeenCalledTimes(1);
    }
  });
});
