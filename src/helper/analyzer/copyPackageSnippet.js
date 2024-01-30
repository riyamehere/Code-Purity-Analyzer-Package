import copyTemplate from 'utils/copyFileContent.js';
import {snippetPaths, analyzerPaths} from 'custConstants';

/**
@author      :  
@date        : 2023-03-09
@description : This functions copies the content from template to the actual file
*/

const copyPackageSnippetContent = () => {
  /* copy the file content from package_analyzer.txt template to newly created package_index.html file */
  copyTemplate(snippetPaths.PACKAGE_INDEX, analyzerPaths.PACKAGE_INDEX);
  /* copy the file content from dependencyreports.txt template to newly created dependencyreports.html file */
  copyTemplate(snippetPaths.DEPENDENCY_REPORTS, analyzerPaths.DEPENDENCY_REPORTS);
};

export default copyPackageSnippetContent;
