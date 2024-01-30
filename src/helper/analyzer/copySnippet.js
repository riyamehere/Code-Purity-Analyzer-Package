import copyTemplate from 'utils/copyFileContent.js';
import {snippetPaths, analyzerPaths} from 'custConstants';

/**
@author      : Riya
@date        : 2023-03-09
@description : This functions copies the content from template to the actual file
*/

const copySnippetContent = () => {
  /* copy the file content from index.txt template to newly created index.html file */
  copyTemplate(snippetPaths.INDEX, analyzerPaths.INDEX);
  /* copy the bootstrap file content from bootstrap.txt template to newly created bootstrap.css file */
  copyTemplate(snippetPaths.BOOTSTRAP_CSS, analyzerPaths.BOOTSTRAP_CSS);
  /* copy the file content from code_analyzer.txt template to newly created code_index.html file */
  copyTemplate(snippetPaths.CODE_INDEX, analyzerPaths.CODE_INDEX);
  /* copy the file content from issues.txt template to newly created issues.html file */
  copyTemplate(snippetPaths.ISSUES, analyzerPaths.ISSUES);
  /* copy the file content from singleissue.txt template to newly created singleissue.js file */
  copyTemplate(snippetPaths.SINGLEISSUES, analyzerPaths.SINGLEISSUES);
  /* copy the file content from analyzer.txt template to newly created analyzer.css file */
  copyTemplate(snippetPaths.CSS, analyzerPaths.CSS);
  /* copy the file content from prettifycss.txt template to newly created prettify.css file */
  copyTemplate(snippetPaths.PRETTIFY_CSS, analyzerPaths.PRETTIFY_CSS);
  /* copy the file content from prettifyjs.txt template to newly created prettify.js file */
  copyTemplate(snippetPaths.PRETTIFY_JS, analyzerPaths.PRETTIFY_JS);
  /* copy the file content from download.txt template to newly created download.js file */
  copyTemplate(snippetPaths.DOWNLOAD_JS, analyzerPaths.DOWNLOAD_JS);
  /* copy the file content from jspdf.txt template to newly created jspdf.js file */
  copyTemplate(snippetPaths.JS_PDF, analyzerPaths.JS_PDF);
  /* copy the file content from html2canvas.txt template to newly created html2canvas.js file */
  copyTemplate(snippetPaths.HTML2CANVAS_PDF, analyzerPaths.HTML2CANVAS_PDF);
  /* copy the file content from autotable.txt template to newly created autotable.js file */
  copyTemplate(snippetPaths.AUTOTABLE, analyzerPaths.AUTOTABLE);
  /* copy the banner image to analyze folder */

  copyTemplate(snippetPaths.BANNER, analyzerPaths.BANNER);
  /* copy the logo image to analyze folder */

  copyTemplate(snippetPaths.LOGO, analyzerPaths.LOGO);
  /* copy the analyzer image to analyze folder */

  copyTemplate(snippetPaths.CODE_ANALYZER, analyzerPaths.CODE_ANALYZER);
  /* copy the pkg analyzer image to analyze folder */

  copyTemplate(snippetPaths.PKG_ANALYZER, analyzerPaths.PKG_ANALYZER);
};

export default copySnippetContent;
