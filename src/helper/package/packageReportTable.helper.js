function isObjectBlankValue(obj, prop) {
  if (obj[prop] && obj[prop] !== null) {
    return obj[prop];
  }
  return '-';
}

const generatePackageTableData = (npmPkgDataList) => {
  let tableData = '';
  if (npmPkgDataList && npmPkgDataList.length > 0) {
    npmPkgDataList.forEach((npmPkgData, index) => {
      if (npmPkgData && Object.keys(npmPkgData).length !== 0) {
        tableData += `<tr>
        <td class="issue-table-td">${index + 1}</td>
        <td class="issue-table-td">${isObjectBlankValue(npmPkgData, 'full_name')}</td>
                      <td class="issue-table-td">${isObjectBlankValue(npmPkgData, 'name')}</td>
                      <td class="issue-table-td"><a href="${isObjectBlankValue(npmPkgData, 'forks_url')}" target="_blank">${isObjectBlankValue(npmPkgData, 'forks_url')}</a></td>
                      <td class="issue-table-td">${isObjectBlankValue(npmPkgData, 'forks_count')}</td>
                      <td class="issue-table-td">${isObjectBlankValue(npmPkgData, 'star_count')}</td>
                      <td class="issue-table-td">${isObjectBlankValue(npmPkgData, 'openIssue')}</td>
                      <td class="issue-table-td"><a href="${isObjectBlankValue(npmPkgData, 'html_url')}" target="_blank">Open</a></td>
                    </tr>`;
      }
    });
  }
  return tableData;
};
export default generatePackageTableData;
