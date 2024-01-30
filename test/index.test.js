import { describe, test, afterEach, expect, jest, beforeEach } from '@jest/globals';
import errors from 'custConstants/error.constant.js';

const originalProcess = process;

afterEach(() => {
  global.process = originalProcess;
  jest.resetModules();
  jest.resetAllMocks();
  jest.clearAllMocks();
});

beforeEach(() => {
  jest.resetAllMocks();
  jest.clearAllMocks();
  jest.restoreAllMocks();
});

jest.unstable_mockModule('lib/config/configuration.js', () => ({
  default: jest.fn(),
  __esModule: true,
}));

jest.unstable_mockModule('helper/error/error.js', () => ({
  checkPackageConfigError: jest.fn(),
}));

jest.unstable_mockModule('lib/versionCheck/checkNodeVersion.js', () => ({
  default: jest.fn(),
  __esModule: true,
}));

const checkConfiguration = (await import('lib/config/configuration.js')).default;
const checkVersion = (await import('lib/versionCheck/checkNodeVersion.js')).default;
const {checkPackageConfigError} = await import('helper/error/error.js');

describe('Index.js file', () => {
  test('anynonums method a call with throw error', async () => {
    global.process = {...originalProcess, versions: {node: '18'}, version: '12'};
    const spyOnProcess = jest.spyOn(process, 'exit').mockImplementation().mockReturnValue('0');
    checkVersion.mockImplementation().mockReturnValue(true);

    checkConfiguration.mockImplementation(() => { throw new Error({message: errors.PACK_NOT_CONFIG}); });
    checkPackageConfigError.mockImplementation();
    // await import('../index.js');
    return import('../index.js').then(() => {
      expect(spyOnProcess).toHaveBeenCalled();
      expect(checkPackageConfigError).toHaveBeenCalled();
    });
  });

  test('anynonums method a call with correct arguments', async () => {
    global.process = {...originalProcess, versions: {node: '18'}, version: '12'};
    const spyOnProcess = jest.spyOn(process, 'exit').mockImplementation().mockReturnValue('0');
    checkVersion.mockImplementation().mockReturnValue(true);

    checkConfiguration.mockImplementation();
    return import('../index.js').then(() => {
      expect(spyOnProcess).not.toHaveBeenCalled();
    });
  });

  test('anynonums method a call with correct arguments', async () => {
    global.process = {...originalProcess, versions: {node: '12'}, version: '12'};
    // const spyOnProcess = jest.spyOn(process, 'exit').mockImplementation().mockReturnValue('0');
    checkConfiguration.mockImplementation();
    checkVersion.mockImplementation().mockReturnValue(false);
    return import('../index.js').then(() => {
      expect(checkConfiguration).not.toHaveBeenCalled();
    });
  });
});
