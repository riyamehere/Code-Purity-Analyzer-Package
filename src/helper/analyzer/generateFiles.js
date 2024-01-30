import { existsSync, open } from 'fs';
import chalk from 'chalk';
import { analyzerPaths } from 'custConstants';
import createDirectory from 'utils/makeDirectory.js';
import copySnippetContent from 'helper/analyzer/copySnippet.js';

/**
@author      : Riya
@date        : 2023-03-09
@description : This function creates all the required files in analyzer folder like index.html, analyzer.css, prettify.css, prettify.js etc
*/
const createAnalyzerFolder = () => {
  createDirectory(analyzerPaths.MAIN_DIR);
  if (!existsSync(analyzerPaths.INDEX)) {
    try {
      open(analyzerPaths.INDEX, 'w', (err) => {
        if (err) throw err;
      });
      open(analyzerPaths.ISSUES, 'w', (err) => {
        if (err) throw err;
      });
      open(analyzerPaths.SINGLEISSUES, 'w', (err) => {
        if (err) throw err;
      });
      open(analyzerPaths.DEPENDENCY_REPORTS, 'w', (err) => {
        if (err) throw err;
      });
      open(analyzerPaths.CSS, 'w', (err) => {
        if (err) throw err;
      });
      open(analyzerPaths.PRETTIFY_CSS, 'w', (err) => {
        if (err) throw err;
      });
      open(analyzerPaths.PRETTIFY_JS, 'w', (err) => {
        if (err) throw err;
      });
    } catch (err) {
      process.stdout.write(err.message);
      throw err;
    }
    copySnippetContent();
  } else {
    copySnippetContent();
  }
  process.stdout.write(chalk.green('Analyzer created Successfully!\n'));
};

export default createAnalyzerFolder;
