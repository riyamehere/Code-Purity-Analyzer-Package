import {test, expect, describe} from '@jest/globals';
import findItemWithFilename from 'helper/findData.js';

describe('Find data', () => {
  test('Find data according to filename', () => {
    const data = [
      {
        fileName: 'Authenticate.component.tsx',
        filePath: 'src/components/Authenticate/Authenticate.component.tsx',
        fileContent: '',
        fileLines: 14,
        issueList: [],
      },
      {
        fileName: 'Sidebar.component.tsx',
        filePath: 'src/components/Sidebar/Sidebar.component.tsx',
        fileContent: '',
        fileLines: 24,
        issueList: [],
      },
      {
        fileName: 'Header.component.tsx',
        filePath: 'src/components/Header/Header.component.tsx',
        fileContent: '',
        fileLines: 9,
        issueList: [],
      },
    ];
    const fileName = 'Header.component.tsx';
    const result = findItemWithFilename(data, fileName);
    /* expecting the data of that particular filename to match the fileLines from the result object */
    expect(result.fileLines).toBe(9);
  });
});
