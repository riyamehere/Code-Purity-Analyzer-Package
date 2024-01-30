import { describe, test, jest, expect } from '@jest/globals';
import getAllPackageDetailReport from 'helper/package/packageDetail.js';
import { mockNPMPackageGithubData } from './mock/npmPackageGithubData.mock';
import {mockNpmPackageList} from './mock/npmPackageList.mock';

jest.unstable_mockModule('axios', () => ({
  get: jest.fn(),
}));

const axios = (await import('axios'));

describe('Package Detail File', () => {
  test('Should getAllPackageDetailReport method a call with correct arguments and return promises', async () => {
    axios.get.mockResolvedValue(mockNPMPackageGithubData);
    jest.spyOn(Promise, 'all').mockImplementation().mockResolvedValue(mockNPMPackageGithubData);
    const npmPkgPromiseResult = await getAllPackageDetailReport(mockNpmPackageList);
    expect(npmPkgPromiseResult).toEqual(mockNPMPackageGithubData);
  });
});
