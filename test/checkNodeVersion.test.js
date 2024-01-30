import {jest, test, expect, describe, afterEach} from '@jest/globals';
import errors from 'custConstants/error.constant';

import checkVersion from 'lib/versionCheck/checkNodeVersion';

const originalProcess = process;

afterEach(() => {
  global.process = originalProcess;
});

describe('Check the current node version', () => {
  test('CASE 2 : Check version Fail', async () => {
    global.process = {...originalProcess, versions: {node: '12'}, version: '12'};
    jest.spyOn(process, 'exit').mockImplementation();
    try {
      await checkVersion();
    } catch (error) {
      expect(error).toEqual(new Error(errors.NODE_NOT_SUPPORT));
    }
  });

  test('CASE 3: If result is null nothing to check', async () => {
    global.process = {...originalProcess, versions: {node: null}, version: '12'};
    jest.spyOn(process, 'exit').mockImplementation();
    try {
      await checkVersion();
    } catch (error) {
      expect(error).toEqual(new Error(errors.NODE_NOT_SUPPORT));
    }
  });

  test('CASE 1 : Check version Pass', async () => {
    const version = process.versions.node;
    const result = version;
    const versionCheckPassMessage = `Good to Go with your Node Version: ${result}`;
    const spy = jest.spyOn(process.stdout, 'write');
    await checkVersion();
    expect(spy.mock.calls.flatMap((item) => item).join()).toContain(versionCheckPassMessage);
  });
});
