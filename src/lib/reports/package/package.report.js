import filterPackageData from 'helper/filterPackageData';
import generatePackageTableData from 'helper/package/packageReportTable.helper.js';
import getAllPackageDetailReport from 'helper/package/packageDetail.js';
import generatePackageReport from 'helper/package/generatePackageReport.helper.js';
import chalk from 'chalk';
import {stopSpinner, startSpinner} from 'lib/spinner/spinner.js';
import {getDevDependenciesDependenciesData,
  getNPMPackageReportLoadingText,
  getNPMPackageReportErrorText,
  getNPMPackageReportCompletedText} from 'helper/package/packageJson.helper.js';

const generatedPackageReports = async (packageData) => {
  const spinnerInstance = startSpinner({
    color: 'blue',
    text: chalk.yellow(getNPMPackageReportLoadingText()),
  });
  try {
    const npmPackageDataList = await getAllPackageDetailReport(getDevDependenciesDependenciesData(packageData.packageContent), packageData.packageContent);
    if (npmPackageDataList && npmPackageDataList.length > 0) {
      await generatePackageReport(generatePackageTableData(filterPackageData(npmPackageDataList)));
      stopSpinner(spinnerInstance);
      process.stdout.write(chalk.blueBright(getNPMPackageReportCompletedText()));
    }
  } catch (error) {
    stopSpinner(spinnerInstance);
    process.stdout.write(chalk.red(getNPMPackageReportErrorText()));
  }
};

export default generatedPackageReports;
