import {test, expect, describe, jest, beforeEach, afterEach} from '@jest/globals';

jest.unstable_mockModule('fs', () => ({
  mkdirSync: jest.fn(),
  existsSync: jest.fn(),
}));

const {mkdirSync, existsSync} = await import('fs');

const createDirectory = (await import('utils/makeDirectory.js')).default;

const data = 'mock_test';

describe('Make Directory', () => {
  afterEach(() => {
    jest.resetModules();
  });

  beforeEach(() => {
    jest.resetAllMocks();
  });

  test('Should call createDirectory method with proper arugment', async () => {
    /* Create Mock of process write  */
    mkdirSync.mockImplementation((folderPath) => folderPath);
    existsSync.mockImplementation((folderPath) => folderPath).mockReturnValue(false);
    createDirectory(data);
    /* Check error line is a called */
    expect(mkdirSync).toHaveBeenCalledTimes(1);
  });

  test('Should call not mkdirSync method', async () => {
    /* Create Mock of process write  */
    mkdirSync.mockImplementation((folderPath) => folderPath);
    existsSync.mockImplementation((folderPath) => folderPath).mockReturnValue(true);
    createDirectory(data);
    /* Check error line is a called */
    expect(mkdirSync).toHaveBeenCalledTimes(0);
  });

  test('Should throw error when create directory', async () => {
    try {
      mkdirSync.mockImplementation(() => {
        throw new Error('ok');
      });
      createDirectory(data);
    } catch (error) {
      /* Exception throw while calling a function */
      expect(error).toEqual(new Error('ok'));
    }
  });
});
