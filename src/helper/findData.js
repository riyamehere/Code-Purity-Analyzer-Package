/**
@author      : Riya
@date        : 2023-03-09
@description : find the item with filename in the data
*/
const findItemWithFilename = (data, fileName) => data.find((item) => item.fileName === fileName);

export default findItemWithFilename;
