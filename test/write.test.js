import {test, expect, describe, jest, beforeEach, afterEach} from '@jest/globals';

jest.unstable_mockModule('node:fs/promises', () => ({
  writeFile: jest.fn(),
}));

const {writeFile} = await import('node:fs/promises');

const writeToFile = (await import('utils/write')).default;

const src = 'test3.txt';
const data = 'hello world';

describe('WriteToFile Methods', () => {
  afterEach(() => {
    jest.resetModules();
  });

  beforeEach(() => {
    jest.resetAllMocks();
  });

  test('Should throw error when writeToFile method a call', async () => {
    /* Create Mock of process write  */
    writeFile.mockImplementation(() => { throw new Error('Failed to write data to file test3.txt'); });
    /* Check error line is a called */
    try {
      await writeToFile(src, data);
    } catch (error) {
      expect(error).toEqual(new Error(`Failed to write data to file ${src}`));
    }
  });

  test('should call writeFile with correct arguments', async () => {
    writeFile.mockImplementation();
    await writeToFile(src, data);
    /* Check exact writeFile method a call */
    expect(writeFile).toHaveBeenCalledTimes(1);
  });
});
