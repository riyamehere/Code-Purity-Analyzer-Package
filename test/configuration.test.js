import {describe, expect, it, jest} from '@jest/globals';
import {
  pkgJSONContentWithoutSupportedType,
  pkgJSONContent,
} from './mock/packageContent.js';
/* test case for checking file configuration and validate if configuration not provided properly */
/**
@author      : Author Name
@date        : 2023-04-24
@description : Check all configuration setting and check validation files.
*/

/* all required mocks */
jest.unstable_mockModule('node:fs/promises', () => ({
  readFile: jest.fn(),
}));

jest.unstable_mockModule('lib/analyzer/createAnalyzer.js', () => ({
  default: jest.fn(),
  __esModule: true,
}));

/* imported function from default export which refered as mock */

const createAnalyzer = (await import('lib/analyzer/createAnalyzer.js')).default;
const {readFile} = await import('node:fs/promises');
const checkConfiguration = (await import('lib/config/configuration')).default;

/* expect invalid file type message on invalid file extension when data is in proper format */
describe('Configuration test file', () => {
  it('Checks with invalid file type configuration with formatted data', async () => {
    readFile.mockImplementation().mockReturnValue(JSON.stringify(pkgJSONContentWithoutSupportedType));
    const processWriteSPYOnMock = jest.spyOn(process.stdout, 'write').mockImplementation().mockReturnValue('');
    jest.spyOn(process, 'exit').mockImplementation().mockReturnValue(0);
    await checkConfiguration();
    expect(processWriteSPYOnMock).toHaveBeenCalledTimes(2);
  });

  /* expect invalid file type message on invalid file extension when data is not in proper format which is not parsed */
  it('Checks with invalid file type configuration with unformatted data', async () => {
    readFile.mockImplementation().mockReturnValue(pkgJSONContentWithoutSupportedType);
    const processWriteSPYOnMock = jest.spyOn(process.stdout, 'write').mockImplementation().mockReturnValue('');
    jest.spyOn(process, 'exit').mockImplementation().mockReturnValue(0);
    await checkConfiguration();
    expect(processWriteSPYOnMock).toHaveBeenCalledTimes(1);
  });

  /* expect to handle exception */
  it('Checks for exception handle if any unexpected error occur', async () => {
    readFile.mockImplementation(() => {
      throw new Error('Error in reading file');
    });
    jest.spyOn(process, 'exit').mockImplementation().mockReturnValue(0);
    jest.spyOn(console, 'trace').mockImplementation().mockReturnValue('');
    try {
      await checkConfiguration();
    } catch (error) {
      expect(error).toThrowError('Error in reading file');
    }
  });

  /* expect to check valid file types configuration with formatted data */
  it('Checks for valid type configuration with proper formatted data', async () => {
    createAnalyzer.mockImplementation();
    readFile.mockImplementation().mockReturnValue(JSON.stringify(pkgJSONContent));
    await checkConfiguration();
    expect(createAnalyzer).toHaveBeenCalledTimes(1);
  });
});
