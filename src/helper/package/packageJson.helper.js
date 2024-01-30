import {genericConst, errors} from 'custConstants';
/**
@author      : Piyush Patil
@date        : 2023-04-15
@description : Get all package.json file contents in JSON format
@params      : package content in string format
@return      : JSON Format content
*/
const getPackageJSONFormatData = (packageContent) => {
  try {
    const parsePackageContent = JSON.parse(packageContent);
    if (parsePackageContent.analyzer) {
      if (parsePackageContent.analyzer.rootFolder && parsePackageContent.analyzer.rootFolder.trim('').length > 0) {
        return {packageContent: parsePackageContent};
      }
      return {error: {message: errors.ROOT_FOLDER_PATH}};
    }
    return {error: {message: errors.PACKAGE_JSON_VALID_TYPE}};
  } catch (error) {
    return {error: {message: errors.PACKAGE_JSON_VALID_TYPE}};
  }
};

/**
@author      : Piyush Patil
@date        : 2023-04-15
@description : Get all
@params      : Input Params
@return      : Return Output
*/
const getDevDependenciesDependenciesData = (packageFileContent) => {
  let npmPackageData = {};
  if (packageFileContent && packageFileContent.dependencies) {
    npmPackageData = { ...npmPackageData, ...packageFileContent.dependencies };
  }
  if (packageFileContent && packageFileContent.devDependencies) {
    npmPackageData = { ...npmPackageData, ...packageFileContent.devDependencies };
  }
  return npmPackageData;
};

const getNPMPackageReportLoadingText = () => `*********************************************************************************************************************************************************************************************************
**************************** ${genericConst.NPM_PACKAGE_LOADING_TEXT} ******************************************************************
***********************************************************************************************************************************************************************************************************\n`;

const getNPMPackageReportCompletedText = () => `***********************************************************************************************************************************************************************************************************
**************************** ${genericConst.NPM_PACKAGE_COMPLETED_TEXT} ************************************************************************************
***********************************************************************************************************************************************************************************************************\n`;

const getNPMPackageReportErrorText = () => `***********************************************************************************************************************************************************************************************************
**************************** ${genericConst.NPM_PACKAGE_ERROR_TEXT} ********************
***********************************************************************************************************************************************************************************************************\n`;

const getNPMPackageReportKey = () => `***********************************************************************************************************************************************************************************************************
**************************** ${genericConst.NPM_PACKAGE_KEY_NOT_ADDED_TEXT} ********************
***********************************************************************************************************************************************************************************************************\n`;

/**
@author      : Abhishek Hirwani
@date        : 2023-05-15
@description : Here checking the github value and length of the key
@params      : Getting the github key value
@return      : Returning the true if key value is found or valid
*/
const checkGitHubKeyVal = (packageJSONContent) => {
  if (
    packageJSONContent.packageContent &&
    packageJSONContent.packageContent.analyzer &&
    packageJSONContent.packageContent.analyzer.gitHubAuthKey &&
    packageJSONContent.packageContent.analyzer.gitHubAuthKey.trim('').length > 10
  ) {
    return true;
  }
  return false;
};

/**
@author      : Abhishek Hirwani
@date        : 2023-05-16
@description : Here checking the root folder value and length of the root folder
@params      : Getting the root folder value
@return      : Returning the true if root folder value is found or valid
*/
const getRootFolderPath = (packageJSONContent) => {
  if (packageJSONContent.packageContent) {
    if (packageJSONContent.packageContent.analyzer) {
      if (
        packageJSONContent.packageContent.analyzer.rootFolder &&
        packageJSONContent.packageContent.analyzer.rootFolder.trim('').length > 0
      ) {
        return packageJSONContent.packageContent.analyzer.rootFolder.trim('');
      }
    }
  }
  return null;
};

export {
  getPackageJSONFormatData,
  getDevDependenciesDependenciesData,
  getNPMPackageReportLoadingText,
  getNPMPackageReportErrorText,
  getNPMPackageReportCompletedText,
  getNPMPackageReportKey,
  checkGitHubKeyVal,
  getRootFolderPath,
};
