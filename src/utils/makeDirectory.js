import {mkdirSync, existsSync} from 'fs';

/* This function creates a directory according to the path provided in the arguments */
const createDirectory = (path) => {
  if (!existsSync(path)) {
    try {
      mkdirSync(path);
    } catch (err) {
      process.stdout.write(err.message);
      throw err;
    }
  }
};

export default createDirectory;
