import {test, expect, describe, jest, beforeEach, afterEach} from '@jest/globals';

jest.unstable_mockModule('fs', () => ({
  existsSync: jest.fn(),
}));

const {existsSync} = await import('fs');

const checkFilePathExist = (await import('utils/fileExists')).default;

const data = 'mock_test.js';

describe('Make Directory', () => {
  afterEach(() => {
    jest.resetModules();
  });

  beforeEach(() => {
    jest.resetAllMocks();
  });

  test('Should call checkFilePathExist method correctly', async () => {
    /* Create Mock of process write  */
    existsSync.mockImplementation((folderPath) => folderPath).mockReturnValue(true);
    const fileExists = checkFilePathExist(data);
    /* Check file already exists */
    expect(fileExists).toBe(true);
  });

  test('Should call checkFilePathExist return false ', async () => {
    /* Create Mock of process write  */
    existsSync.mockImplementation((folderPath) => folderPath).mockReturnValue(false);
    const fileExists = checkFilePathExist(data);
    /* Check file already exists */
    expect(fileExists).toBe(false);
  });

  test('Should throw error when checkFilePathExist method', async () => {
    try {
      jest.spyOn(process.stdout, 'write').mockImplementation(() => jest.fn());
      existsSync.mockImplementation(() => { throw new Error('ok'); });
      /* CheckFilePathExist method */
      checkFilePathExist(data);
    } catch (error) {
      /* Exception throw while calling a function */
      expect(process.stdout.write).toHaveBeenCalledTimes(1);
    }
  });
});
