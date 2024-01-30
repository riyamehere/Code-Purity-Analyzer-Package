import errors from 'custConstants/error.constant.js';
import chalk from 'chalk';

/**
@author      : Piyush Patil
@date        : 2023-04-15
@description : Populate all screen error with chalks lib
@params      : Error message
@return      : Nothing
*/

const checkPackageConfigError = (error) => {
  if (error.message === errors.PACK_NOT_CONFIG) {
    process.stdout.write(chalk.red(errors.PROVIDE_CONFIGURATION));
  } else if (error.message === errors.VALID_TYPE) {
    process.stdout.write(chalk.red(errors.VALID_FILE_FILETYPE));
    process.stdout.write(chalk.red(errors.EXTENSION_TYPES));
  } else if (error.message === errors.ROOT_FOLDER_PATH) {
    process.stdout.write(chalk.red(`${errors.ROOT_FOLDER_PATH}\n`));
  } else if (error.message === errors.PACKAGE_JSON_VALID_TYPE) {
    process.stdout.write(chalk.red(`${errors.PACKAGE_JSON_VALID_TYPE}\n`));
  } else {
    /* Piyush commented this line due to trace all untraceable error */
    // eslint-disable-next-line no-console
    console.trace(error);
  }
};

export {checkPackageConfigError};
