import checkAnalyzerConfig from 'lib/fileExtension/checkFileExtension.js';
import createAnalyzer from 'lib/analyzer/createAnalyzer.js';
import readPackageJsonContent from 'lib/read/readPackageJson.js';
import {getPackageJSONFormatData} from 'helper/package/packageJson.helper.js';
import {checkPackageConfigError} from 'helper/error/error.js';

/**
@author      : Piyush Patil
@date        : 2023-04-15
@description : Managed all configuration setting and check validation files passes properly or not, if we get any errors in config, throw an error.
@params      : Nothing
@return      : Nothing
*/
const checkConfiguration = async () => {
  try {
    /* Get all package.json file content here */
    const packageJSONContent = getPackageJSONFormatData(await readPackageJsonContent());
    if (packageJSONContent.packageContent) {
      /* Check Configuration and displayed error on screen */
      const configResult = checkAnalyzerConfig(packageJSONContent.packageContent);
      if (configResult.fileType.length > 0) {
        createAnalyzer(configResult.fileType, packageJSONContent);
      } else {
        checkPackageConfigError(configResult.error);
        process.exit(1);
      }
    } else {
      checkPackageConfigError(packageJSONContent.error);
      process.exit(1);
    }
  } catch (error) {
    checkPackageConfigError(error);
    process.exit(1);
  }
};

export default checkConfiguration;
