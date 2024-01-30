import chalk from 'chalk';
import errors from 'custConstants/error.constant';

/* This function check the current nide version and compares it with the required, and displays the message accordingly on terminal */
const checkVersion = () =>
  new Promise((resolve, reject) => {
    const version = process.versions.node;
    const result = version;
    if (result) {
      if (parseFloat(result) >= 14.20) {
        process.stdout.write(
          '************************************************************************************************************\n',
        );
        process.stdout.write(
          '************************************************************************************************************\n',
        );
        process.stdout.write(
          '************************************************************************************************************\n',
        );
        process.stdout.write(
          chalk.green(
            `***************************** Good to Go with your Node Version: ${result} ***********************************\n`,
          ),
        );
        process.stdout.write(
          '************************************************************************************************************\n',
        );
        process.stdout.write(
          '************************************************************************************************************\n',
        );
        process.stdout.write(
          '************************************************************************************************************\n\n\n',
        );
        resolve(true);
      } else {
        process.stdout.write(
          '************************************************************************************************************\n',
        );
        process.stdout.write(
          '************************************************************************************************************\n',
        );
        process.stdout.write(
          '************************************************ NOTE ******************************************************\n',
        );
        process.stdout.write(
          '****************************                                            ************************************\n',
        );
        process.stdout.write(
          chalk.red(
            '****************************      Command failed due to Node Version    ************************************\n',
          ),
        );
        process.stdout.write(
          chalk.green(
            '****************************    Please install Node Version >= 14.20.0  ************************************\n',
          ),
        );
        process.stdout.write(
          chalk.blue(
            `****************************    Your current Node Version is: ${result}   ***********************************\n`,
          ),
        );
        process.stdout.write(
          '****************************                                            ************************************\n',
        );
        process.stdout.write(
          '************************************************************************************************************\n',
        );
        process.stdout.write(
          '************************************************************************************************************\n',
        );
        process.stdout.write(
          '************************************************************************************************************\n',
        );
        reject(new Error(errors.NODE_NOT_SUPPORT));
      }
    } else {
      reject(new Error(errors.NODE_NOT_SUPPORT));
    }
  });
export default checkVersion;
