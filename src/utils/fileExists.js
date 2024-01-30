import {existsSync} from 'fs';
import chalk from 'chalk';

/* THis function Checks if the given file path exists or not and returns true/ false accordingly */
const checkFilePathExist = (path) => {
  try {
    if (existsSync(path)) {
      return true;
    }
    process.stdout.write(chalk.red(`Specified directory: ${path} does not exist`));
    return false;
  } catch (err) {
    process.stdout.write(err.message);
    throw err;
  }
};

export default checkFilePathExist;
