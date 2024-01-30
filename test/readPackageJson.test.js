import { describe, expect, it, jest } from '@jest/globals';

/* test read content from package.json */
/**
@author      : 
@date        : 2023-04-20
@description : Reads dependencies from package.json file
*/

/* mock of external libraries methods */
jest.unstable_mockModule('fs', () => ({
  readFile: jest.fn(),
}));

const { readFile } = await import('fs');

/* imported function from default export refered as mock */
const readPackageJsonContent = (await import('lib/read/readPackageJson')).default;

describe('Read Package.json file from project', () => {
  it('read file package.json', () => {
    readFile.mockImplementation().mockReturnValue(true);
    expect(readFile()).toBe(true);
    readPackageJsonContent();
  });
});
