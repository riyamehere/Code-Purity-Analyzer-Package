import ora from 'ora';

const startSpinner = (spinnerObj) => {
  const spinner = ora('').start();
  spinner.color = spinnerObj.color || 'blue';
  spinner.text = spinnerObj.text || 'Loading...';
  return spinner;
};

const stopSpinner = (spinnerInstance) => spinnerInstance.stop();

export {
  stopSpinner,
  startSpinner,
};
