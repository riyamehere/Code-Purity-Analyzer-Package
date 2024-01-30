import axios from 'axios';
import {urlPath} from 'custConstants';
/* Github API call using axios and add github API key here  */
/**
@TODO : Never push code with github api key
*/
const getGitData = (packageName, gitHubSecKey) =>
  axios.get(`${urlPath.GITHUB_URL}${packageName}`, {
    headers: {Authorization: gitHubSecKey},
  });

/**
 @author      : Piyush Patil
 @date        : 2023-04-15
 @description : Get all NPM Package List details using github API
 @params      : package.json file data
 @return      : all API data using promise
 */
const getAllPackageDetailReport = (allNPMpackageList, gitHubSecKey) => {
  const allPackageKeyValueObj = Object.fromEntries(Object.entries(allNPMpackageList));
  const allPackageKeyNameList = Object.keys(allPackageKeyValueObj);
  const promises = [];
  for (let i = 0; i < allPackageKeyNameList.length; i += 1) {
    /* Add all api call here */
    promises.push(getGitData(allPackageKeyNameList[i].replace('@', ''), gitHubSecKey?.analyzer.gitHubAuthKey));
  }
  return Promise.all(promises);
};

export default getAllPackageDetailReport;
