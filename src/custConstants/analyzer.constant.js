/**
 * @description : storing the analyzer paths as constants array
 */
const dirName = 'analyzer';

const analyzerPaths = {
  MAIN_DIR: `${dirName}`,
  INDEX: `${dirName}/index.html`,
  BOOTSTRAP_CSS: `${dirName}/bootstrap.css`,
  CODE_INDEX: `${dirName}/code_index.html`,
  PACKAGE_INDEX: `${dirName}/package_index.html`,
  ISSUES: `${dirName}/issues.html`,
  SINGLEISSUES: `${dirName}/singleissue.js`,
  DEPENDENCY_REPORTS: `${dirName}/dependencyreports.html`,
  CSS: `${dirName}/analyzer.css`,
  PRETTIFY_CSS: `${dirName}/prettify.css`,
  PRETTIFY_JS: `${dirName}/prettify.js`,
  REPORTS: `${dirName}/reports`,
  RESULT: `${dirName}/.result`,
  DATA_NOT_FOUND: `${dirName}/.result/dataNotFound.json`,
  CONFIG: './package.json',
  GITIGNORE_PATH: '.gitignore',
  GITIGNORE_MESSAGE: 'PLEASE ADD ".env" FILE IN THE GITIGNORE FILE',
  PACKAGE_JSON_FILE_PATH: './package.json',
  DOWNLOAD_JS: `${dirName}/download.js`,
  JS_PDF: `${dirName}/jspdf.js`,
  HTML2CANVAS_PDF: `${dirName}/html2canvas.js`,
  AUTOTABLE: `${dirName}/autotable.js`,
  LOGO: `${dirName}/logo.svg`,
  BANNER: `${dirName}/banner.svg`,
  CODE_ANALYZER: `${dirName}/code_analyzer.svg`,
  PKG_ANALYZER: `${dirName}/pkg_analyzer.svg`,
};
export default analyzerPaths;
