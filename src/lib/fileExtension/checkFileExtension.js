import errors from 'custConstants/error.constant.js';
import {fileExtensions} from 'custConstants/fileExtension.constant.js';

/* checks configuration object analyzer exist or not in package.json */
const isConfigDefined = (packageJSONContent) => packageJSONContent && packageJSONContent.analyzer;

/* Check file type extension properly provide or not */
const checkFilesTypes = (filesExtensions) => filesExtensions.every((fileExt) => fileExtensions.includes(fileExt));

/* checks configuration object (analyzer) & file_type provided in package.json or not  */
const checkFilesExtension = (packageJSONContent) => {
  let fileTypeList = [];
  let configErrors = {};
  if (isConfigDefined(packageJSONContent)) {
    if (packageJSONContent.analyzer.filesEnvironment
      && packageJSONContent.analyzer.filesEnvironment.length > 0) {
      /* Check File extension properly provide or not */
      if (checkFilesTypes(packageJSONContent.analyzer.filesEnvironment)) {
        fileTypeList = packageJSONContent.analyzer.filesEnvironment;
      } else {
        configErrors = {message: errors.VALID_TYPE};
      }
    } else {
      configErrors = {message: errors.PACK_NOT_CONFIG};
    }
  } else {
    configErrors = {message: errors.PACK_NOT_CONFIG};
  }
  return {configErrors, fileTypeList};
};

/**
@author      : Piyush Patil
@date        : 2023-04-15
@description : Check Analyzer Configuration Settings
@params      : Package JSON File Content Object
@return      : Return File Type or Error
*/

const checkAnalyzerConfig = (packageJSONContent) => {
  const configResult = checkFilesExtension(packageJSONContent);
  if (configResult && configResult.fileTypeList && configResult.fileTypeList.length > 0) {
    return {fileType: configResult.fileTypeList, error: {}};
  }
  return {error: configResult.configErrors, fileType: []};
};

export default checkAnalyzerConfig;
