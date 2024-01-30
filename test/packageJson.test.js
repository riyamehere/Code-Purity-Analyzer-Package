import {genericConst, errors} from 'custConstants';
import {describe, expect, it} from '@jest/globals';
import {
  getDevDependenciesDependenciesData,
  getNPMPackageReportCompletedText,
  getNPMPackageReportErrorText,
  getNPMPackageReportLoadingText,
  getNPMPackageReportKey,
  getPackageJSONFormatData,
  checkGitHubKeyVal,
  getRootFolderPath,
} from 'helper/package/packageJson.helper';
import {
  packageJSONContent,
  packageJSONContentWithoutGitHub,
  packageJSONContentLessGitHubLength,
  packageJSONContentNull,
  packageJSONAnalyzerContentNull,
  packageJSONGitHubKeyContentNull,
  packageJSONContentWithRootFolder,
  packageJSONContentWithoutRootFolder,
  packageJSONContentWithEmptyRootFolder,
  packageJSONEmptyContent,
} from './mock/packageContent.js';

/**
@author      : Ajinkya Deshmukh
@date        : 2023-04-24
@description : packageJson returns all the dependency such as devDependency or dependency in single object.
*/

/* check for data parse into JSON format */
describe('getPackageJSONFormatData', () => {
  /**
  @author      : Abhishek
  @date        : 2023-05-18
  @description : getPackageJSONFormatData method is calling with correct data and get package content in JSON format
  */
  it('should return package content in JSON format', () => {
    const expectedDeps = {
      packageContent: {
        analyzer: {
          filesEnvironment: ['.ts', '.tsx', '.js', '.jsx'],
          rootFolder: '   src ',
          gitHubAuthKey: 'testkeygithubKeyValues',
        },
      },
    };
    const actualOutput = getPackageJSONFormatData(packageJSONEmptyContent);
    expect(actualOutput).toEqual(expectedDeps);
  });

  /**
  @author      : Abhishek
  @date        : 2023-05-18
  @description : getPackageJSONFormatData method is calling and should return an error message when packageContent is not a valid JSON string
  */
  it('should return an error message when packageContent is not a valid JSON string', () => {
    const packageContent = '{"name": "eslint"}';
    const expectedDeps = {error: {message: errors.PACKAGE_JSON_VALID_TYPE}};
    const actualOutput = getPackageJSONFormatData(packageContent);
    expect(actualOutput).toEqual(expectedDeps);
  });

  /**
  @author      : Abhishek
  @date        : 2023-05-18
  @description : getPackageJSONFormatData method is calling and should return an error message when rootFolder is empty string
  */
  it('should return an error message when rootFolder is empty string', () => {
    const packageContent =
      '{"analyzer": { "filesEnvironment": [".ts",".tsx", ".js", ".jsx"],"rootFolder":"   ", "gitHubAuthKey": "testkeygithubKeyValues"} }';
    const expectedDeps = {error: {message: errors.ROOT_FOLDER_PATH}};
    const actualOutput = getPackageJSONFormatData(packageContent);
    expect(actualOutput).toEqual(expectedDeps);
  });

  /**
  @author      : Abhishek
  @date        : 2023-05-18
  @description : getPackageJSONFormatData method is calling and should return an error message when packageContent is empty
  */

  it('should return an error message when packageContent is empty', () => {
    const packageContent = ' ';
    const expectedDeps = {error: {message: errors.PACKAGE_JSON_VALID_TYPE}};
    const actualOutput = getPackageJSONFormatData(packageContent);
    expect(actualOutput).toEqual(expectedDeps);
  });
});

/* check returns common depenedency object or not */
describe('getDevDependenciesDependenciesData', () => {
  it('should return all dependencies and devDependencies data', () => {
    const packageFileContent = {
      dependencies: {
        eslint: '^8.35.0',
      },
      devDependencies: {
        axios: '^1.3.5',
      },
    };
    const expectedDeps = {
      eslint: '^8.35.0',
      axios: '^1.3.5',
    };
    const actualOutput = getDevDependenciesDependenciesData(packageFileContent);
    expect(actualOutput).toEqual(expectedDeps);
  });

  it('return an empty object when packageFileContent is not provided', () => {
    const expectedDeps = {};
    const actualOutput = getDevDependenciesDependenciesData();
    expect(actualOutput).toEqual(expectedDeps);
  });

  it('check dependencies data when devDependencies data is not provided', () => {
    const packageFileContent = {
      dependencies: {
        eslint: '^8.35.0',
      },
    };
    const expectedDeps = {
      eslint: '^8.35.0',
    };
    const actualOutput = getDevDependenciesDependenciesData(packageFileContent);
    expect(actualOutput).toEqual(expectedDeps);
  });

  it('check devDependencies data when dependencies data is not provided', () => {
    const packageFileContent = {
      devDependencies: {
        axios: '^1.3.5',
      },
    };
    const expectedDeps = {
      axios: '^1.3.5',
    };
    const actualOutput = getDevDependenciesDependenciesData(packageFileContent);
    expect(actualOutput).toEqual(expectedDeps);
  });
});

/* check loading text message */
describe('getNPMPackageReportLoadingText', () => {
  it('should return loading text', () => {
    const expectedDeps = `*********************************************************************************************************************************************************************************************************
**************************** ${genericConst.NPM_PACKAGE_LOADING_TEXT} ******************************************************************
***********************************************************************************************************************************************************************************************************\n`;
    const actualOutput = getNPMPackageReportLoadingText();
    expect(actualOutput).toEqual(expectedDeps);
  });
});

/* check completed message */
describe('getNPMPackageReportCompletedText', () => {
  it('should return completed text', () => {
    const expectedDeps = `***********************************************************************************************************************************************************************************************************
**************************** ${genericConst.NPM_PACKAGE_COMPLETED_TEXT} ************************************************************************************
***********************************************************************************************************************************************************************************************************\n`;
    const actualOutput = getNPMPackageReportCompletedText();
    expect(actualOutput).toEqual(expectedDeps);
  });
});

/* check error message */
describe('getNPMPackageReportCompletedText', () => {
  it('should return error text', () => {
    const expectedDeps = `***********************************************************************************************************************************************************************************************************
**************************** ${genericConst.NPM_PACKAGE_ERROR_TEXT} ********************
***********************************************************************************************************************************************************************************************************\n`;
    const actualOutput = getNPMPackageReportErrorText();
    expect(actualOutput).toEqual(expectedDeps);
  });
});

/* check error message */
describe('getNPMPackageReportKey', () => {
  it('should return error text', () => {
    const expectedDeps = `***********************************************************************************************************************************************************************************************************
**************************** ${genericConst.NPM_PACKAGE_KEY_NOT_ADDED_TEXT} ********************
***********************************************************************************************************************************************************************************************************\n`;
    const actualOutput = getNPMPackageReportKey();
    expect(actualOutput).toEqual(expectedDeps);
  });
});

/**
@author      : Abhishek Hirwani
@date        : 2023-05-15
@description : checkGitHubKeyVal method call and check it has Git Hub key value or not
*/
describe('checkGitHubKeyVal ', () => {
  it('should checkGitHubKeyVal method call with the correct config', () => {
    const actualOutput = checkGitHubKeyVal(packageJSONContent);
    expect(actualOutput).toEqual(true);
  });

  it('should checkGitHubKeyVal method call with the wrong config', () => {
    const actualOutput = checkGitHubKeyVal(packageJSONContentWithoutGitHub);
    expect(actualOutput).toEqual(false);
  });

  it('should checkGitHubKeyVal method call with the below ten lenth of githubkey', () => {
    const actualOutput = checkGitHubKeyVal(packageJSONContentLessGitHubLength);
    expect(actualOutput).toEqual(false);
  });

  it('should checkGitHubKeyVal method call with the Empty PackageJson content', () => {
    const actualOutput = checkGitHubKeyVal(packageJSONContentNull);
    expect(actualOutput).toEqual(false);
  });

  it('should checkGitHubKeyVal method call with the Empty analyzer', () => {
    const actualOutput = checkGitHubKeyVal(packageJSONAnalyzerContentNull);
    expect(actualOutput).toEqual(false);
  });

  it('should checkGitHubKeyVal method call with the Empty githubKey', () => {
    const actualOutput = checkGitHubKeyVal(packageJSONGitHubKeyContentNull);
    expect(actualOutput).toEqual(false);
  });
});

/**
@author      : Abhishek Hirwani
@date        : 2023-05-16
@description : getRootFolderPath method call to check the root folder value and length
*/
describe('getRootFolderPath method call to check the root folder value', () => {
  /**
  @author      : Abhishek Hirwani
  @date        : 2023-05-16
  @description : getRootFolderPath method call and with the correct packageJSONContent data
  */
  it('should getRootFolderPath method call with the correct config', () => {
    const expectedDeps = 'src';
    const actualOutput = getRootFolderPath(packageJSONContentWithRootFolder);
    expect(actualOutput).toEqual(expectedDeps);
  });

  /**
  @author      : Abhishek Hirwani
  @date        : 2023-05-16
  @description : getRootFolderPath method call and with the wring packageJSONContent data
  */
  it('should getRootFolderPath method call with the wrong config', () => {
    const actualOutput = getRootFolderPath(packageJSONContentWithoutRootFolder);
    expect(actualOutput).toEqual(null);
  });

  /**
  @author      : Abhishek Hirwani
  @date        : 2023-05-16
  @description : getRootFolderPath method call and check the PackageJson content
  */
  it('should getRootFolderPath method call with the Empty PackageJson content', () => {
    const actualOutput = getRootFolderPath(packageJSONContentNull);
    expect(actualOutput).toEqual(null);
  });

  /**
  @author      : Abhishek Hirwani
  @date        : 2023-05-16
  @description : getRootFolderPath method call and check the analyzer content
  */
  it('should getRootFolderPath method call with the Empty analyzer', () => {
    const actualOutput = getRootFolderPath(packageJSONAnalyzerContentNull);
    expect(actualOutput).toEqual(null);
  });

  /**
  @author      : Abhishek Hirwani
  @date        : 2023-05-16
  @description : getRootFolderPath method call and check the rootFolder is empty
  */
  it('should getRootFolderPath method call with the Empty rootFolder', () => {
    const actualOutput = getRootFolderPath(packageJSONContentWithEmptyRootFolder);
    expect(actualOutput).toEqual(null);
  });

  /**
  @author      : Abhishek Hirwani
  @date        : 2023-05-16
  @description : getRootFolderPath method call and check the rootFolder is empty
  */
  it('should getRootFolderPath method call with the Empty packageContent', () => {
    const packageContent = ' ';
    const actualOutput = getRootFolderPath(packageContent);
    expect(actualOutput).toEqual(null);
  });
});
