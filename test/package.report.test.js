import { describe, expect, it, jest } from '@jest/globals';
import { npmPackageMock } from './mock/npmPackage.mock.js';
import { packages } from './mock/dependency.js';
/**
@author      : Ajinkya Deshmukh
@date        : 2023-04-24
@description : check for report genrated for all the package dependency
*/
/* mock for required function */
jest.unstable_mockModule('helper/package/packageDetail.js', () => ({
  default: jest.fn(),
  __esModule: true,
}));

jest.unstable_mockModule('helper/package/generatePackageReport.helper', () => ({
  default: jest.fn(),
  __esModule: true,
}));

const getAllPackageDetailReport = (await import('helper/package/packageDetail')).default;

const generatedPackageReports = (await import('lib/reports/package/package.report.js')).default;

const generatePackageReport = (await import('helper/package/generatePackageReport.helper')).default;

/* test report generated when valid data provided */
describe('check with valid data', () => {
  it('test data', async () => {
    const spyOnWrite = jest.spyOn(process.stdout, 'write').mockImplementation(() => '');
    getAllPackageDetailReport.mockImplementation().mockReturnValue([npmPackageMock]);
    generatePackageReport.mockImplementation();
    await generatedPackageReports(packages);
    expect(spyOnWrite).toHaveBeenCalledTimes(1);
  });

  /* test report generated when detailreport data is empty */
  it('check with empty invalid data', async () => {
    const spyOnWrite = jest.spyOn(process.stdout, 'write');
    getAllPackageDetailReport.mockImplementation().mockReturnValue([]);
    generatePackageReport.mockImplementation();
    await generatedPackageReports(packages);
    expect(spyOnWrite).not.toHaveBeenCalled();
  });

  /* test handling report while exception occur */
  it('check with exception handling', async () => {
    const spyOnWrite = jest.spyOn(process.stdout, 'write');
    getAllPackageDetailReport.mockImplementation(() => { throw new Error('error'); });
    generatePackageReport.mockImplementation();
    try {
      await generatedPackageReports(packages);
    } catch (error) {
      expect(spyOnWrite).toHaveBeenCalledTimes(1);
    }
  });
});
