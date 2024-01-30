import {writeFile} from 'node:fs/promises';

/**
 * It's common methods to write the file..
 *
 * @param {string} filePath - The path to the file to write.
 * @param {string} data - The data to write to the file.
 * @returns {Promise<void>} A Promise that resolves when the write operation is complete.
 * @throws {Error} If the write operation fails.
 */

const writeToFile = async (filePath, data) => {
  try {
    return await writeFile(filePath, data);
  } catch (err) {
    throw new Error(`Failed to write data to file ${filePath}`);
  }
};

export default writeToFile;
