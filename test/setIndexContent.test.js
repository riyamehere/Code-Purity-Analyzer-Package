import {test, expect, describe, jest} from '@jest/globals';
import {finalDummyData, fileContentCodeIndex} from './mock/snippets/finalModifiedData';

/* Importing the function readFile from fs/promises  */
jest.unstable_mockModule('fs/promises', () => ({
  readFile: jest.fn(),
}));

/* Importing the function writeFile from node:fs/promises  */
jest.unstable_mockModule('node:fs/promises', () => ({
  writeFile: jest.fn(),
}));

/* Importing the function readFile from fs/promises  */
const {readFile} = await import('fs/promises');
/* Importing the function writeFile from node:fs/promises  */
const {writeFile} = await import('node:fs/promises');

/* importing the function replaceIndexContents function */
const replaceIndexContents = (await import('helper/setIndexContent')).default;

describe('Test cases for Set index content File', () => {
  /**
  @author      : Riya
  @date        : 2023-04-24
  @description : CASE 1 : When replaceIndexContents() is called with all correct parameters
  */
  test('CASE 1 : When replaceIndexContents() is called with all correct parameters ', async () => {
    /* passing mock return value as a case when readFile gets the correct value */
    readFile.mockImplementation().mockReturnValue(fileContentCodeIndex);
    writeFile.mockImplementation();
    /* calling the main function i.e replaceIndexContents() here */
    await replaceIndexContents(finalDummyData);
    /* expect readFile to have been called 2 times */
    expect(readFile).toHaveBeenCalledTimes(2);
  });

  /**
  @author      : Riya
  @date        : 2023-04-24
  @description : CASE 2 : When it will go in catch block i.e readFIle throws error
  */
  test('CASE 2 : When it will go in catch block i.e readFIle/ writefile throws error ', async () => {
    /* Error is thrown in the readFile */
    readFile.mockImplementation(() => {
      throw new Error('error');
    });
    /* Error is thrown in the readFile */
    writeFile.mockImplementation((path, options, callback) => callback(new Error('error'), null));
    /* creates a mock for process.stdout.write function */
    const spyOnWrite = jest.spyOn(process.stdout, 'write');
    try {
      /* calling the main function i.e replaceIndexContents() here */
      await replaceIndexContents(finalDummyData);
    } catch (error) {
      /* expect the process.stdout.write function to have been called */
      expect(spyOnWrite).toHaveBeenCalled();
      /* error is expected to be thrown in the catch block */
      expect(error).toEqual(new Error('error'));
    }
  });

  /**
  @author      : Riya
  @date        : 2023-04-24
  @description : CASE 3 : When readFile returns null i.e If condition breaks
  */
  test('CASE 3 : When readFile returns null i.e If condition breaks ', async () => {
    /* passing the mock return value as null in readFile mock for the CASE 3 : When readFile returns null i.e If condition breaks */
    readFile.mockImplementation().mockReturnValue(null);
    writeFile.mockImplementation();
    /* calling the main function i.e replaceIndexContents() here */
    await replaceIndexContents(finalDummyData);
    /* expect writeFile to not have been called since the if condition is broken */
    expect(writeFile).not.toHaveBeenCalled();
  });
});
