/**
 @author      : 
@date        : 2023-04-15
@description : Read the Package.json file contents from specified project directory.
@params      : No
@return      : Return Package contents
*/

import { readFile } from 'node:fs/promises';
import {analyzerPaths} from 'custConstants';

const readPackageJsonContent = () => readFile(analyzerPaths.PACKAGE_JSON_FILE_PATH, { encoding: 'utf8' });

export default readPackageJsonContent;
