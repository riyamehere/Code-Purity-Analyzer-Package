import {test, expect, describe} from '@jest/globals';
import getCurrentWorkingDirectory from 'utils/currentWorkingDirectory';

describe('Get current working directory', () => {
  test('Get current working directory according to filePath', () => {
    const filePath = 'src/components/Authenticate/Authenticate.spec.tsx';
    /* Store the original process.cwd() function in a variable */
    const originalCwd = process.cwd();
    /* calling the main function */
    const result = getCurrentWorkingDirectory(filePath);
    /* expecting the data of that particular filename to match the fileLines from the result object */
    expect(result).toBe(`${originalCwd}/src/components/Authenticate/Authenticate.spec.tsx`);
  });
});
