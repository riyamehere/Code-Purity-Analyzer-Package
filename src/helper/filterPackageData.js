const checkObjectNull = (obj, key) => {
  if (obj && obj[key]) {
    return obj[key];
  }
  return null;
};

const modifyPromisesAllData = (npmPackageDataList) => {
  if (npmPackageDataList.length > 0) {
    return npmPackageDataList.map((npmPkgItemData) => npmPkgItemData.data || {});
  }
  return [];
};

const filterPackageData = (npmPackageDataList) => {
  const modifiedNPMPkgData = modifyPromisesAllData(npmPackageDataList);
  if (modifiedNPMPkgData && modifiedNPMPkgData.length > 0) {
    return modifiedNPMPkgData.map((githubDataItem) => {
      const modifiedGithubData = {};
      if (githubDataItem && githubDataItem.items[0]) {
        const itemsData = githubDataItem.items[0];
        modifiedGithubData.full_name = checkObjectNull(itemsData, 'full_name');
        modifiedGithubData.name = checkObjectNull(itemsData, 'name');
        modifiedGithubData.html_url = checkObjectNull(itemsData, 'html_url');
        modifiedGithubData.forks_url = checkObjectNull(itemsData, 'forks_url');
        modifiedGithubData.star_count = checkObjectNull(itemsData, 'stargazers_count');
        modifiedGithubData.forks_count = checkObjectNull(itemsData, 'forks_count');
        modifiedGithubData.openIssue = checkObjectNull(itemsData, 'open_issues_count');
      }
      return modifiedGithubData;
    });
  }
  return [];
};

export default filterPackageData;
