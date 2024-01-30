const pkgJSONContent = {
  analyzer: {filesEnvironment: ['.tsx'], rootFolder: 'src', gitHubAuthKey: 'testkey'},
};

const packageJSONContent = {
  packageContent: {analyzer: {filesEnvironment: ['.tsx'], gitHubAuthKey: 'testkeygithubKeyValues', rootFolder: 'src'}},
};

const packageJSONContentLessGitHubLength = {
  packageContent: {analyzer: {filesEnvironment: ['.tsx'], gitHubAuthKey: 'testkey'}},
};

const packageJSONContentWithoutGitHub = {
  packageContent: {analyzer: {filesEnvironment: ['.tsx'], rootFolder: 'src'}},
};
const packageJSONContentNull = {
  packageContent: {},
};
const packageJSONAnalyzerContentNull = {
  packageContent: {analyzer: {}},
};
const packageJSONGitHubKeyContentNull = {
  packageContent: {analyzer: {filesEnvironment: ['.tsx'], gitHubAuthKey: ' '}},
};
const pkgJSONContentWithoutSupportedType = {
  analyzer: {filesEnvironment: ['.tsx1'], rootFolder: 'src', gitHubAuthKey: 'testkey'},
};

const pkgJSONContentWrongConfig = {
  analyzer: {},
};

const packageJSONContentWithRootFolder = {
  packageContent: {analyzer: {filesEnvironment: ['.tsx'], rootFolder: 'src', gitHubAuthKey: 'testkeygithubKeyValues'}},
};

const packageJSONContentWithEmptyRootFolder = {
  packageContent: {analyzer: {filesEnvironment: ['.tsx'], rootFolder: ' ', gitHubAuthKey: 'testkeygithubKeyValues'}},
};

const packageJSONContentWithoutRootFolder = {
  packageContent: {analyzer: {filesEnvironment: ['.tsx'], gitHubAuthKey: 'testkeygithubKeyValues'}},
};

const pkgJSONContentEmptyRootPath = {
  analyzer: {filesEnvironment: ['.tsx'], rootFolder: ' ', gitHubAuthKey: 'testkeygithubKeyValues'},
};

const packageJSONEmptyContent = `{
  "analyzer": { "filesEnvironment": [".ts",".tsx", ".js", ".jsx"],"rootFolder":"   src ", "gitHubAuthKey": "testkeygithubKeyValues" }
}`;

const pkgJSONContentWrongConfigWithoutAnalyzerContent = {};

export {
  pkgJSONContent,
  pkgJSONContentWithoutSupportedType,
  pkgJSONContentWrongConfig,
  pkgJSONContentWrongConfigWithoutAnalyzerContent,
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
  pkgJSONContentEmptyRootPath,
};
