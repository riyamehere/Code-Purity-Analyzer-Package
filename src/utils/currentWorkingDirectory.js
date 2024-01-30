/**
@author      : Riya
@date        : 2023-05-23
@description : This function returns the current working directory path for a particular file
@params      : filePath
@return      : string containing current working directory path
*/
const getCurrentWorkingDirectory = (filePath) => `${process.cwd()}/${filePath}`;

export default getCurrentWorkingDirectory;
