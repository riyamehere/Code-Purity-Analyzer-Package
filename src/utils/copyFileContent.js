import {copyFileSync} from 'fs';

/* create template for component */
const copyTemplate = (src, dest) => {
  try {
    copyFileSync(src, dest);
  } catch (err) {
    process.stdout.write(err.message);
    throw err;
  }
};

export default copyTemplate;
