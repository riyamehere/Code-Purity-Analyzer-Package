import errors from 'custConstants/error.constant.js';
import { test, describe, expect } from '@jest/globals';
import checkAnalyzerConfig from 'lib/fileExtension/checkFileExtension.js';
import {pkgJSONContent,
  pkgJSONContentWithoutSupportedType,
  pkgJSONContentWrongConfig,
  pkgJSONContentWrongConfigWithoutAnalyzerContent} from './mock/packageContent.js';

describe('CheckFileExtension File', () => {
  test('CASE 1 : Should a call checkAnalyzerConfig method for supported extension type', () => {
    const result = checkAnalyzerConfig(pkgJSONContent);
    expect(result).toEqual({fileType: ['.tsx'], error: {}});
  });

  test('CASE 2 : Should check checkAnalyzerConfig methods with unsupported extension type', () => {
    const result = checkAnalyzerConfig(pkgJSONContentWithoutSupportedType);
    expect(result).toEqual({error: {message: errors.VALID_TYPE}, fileType: []});
  });

  test('CASE 3 : Should check checkAnalyzerConfig methods with wrong config', () => {
    const result = checkAnalyzerConfig(pkgJSONContentWrongConfig);
    expect(result).toEqual({error: {message: errors.PACK_NOT_CONFIG}, fileType: []});
  });

  test('CASE 4 : Should check checkAnalyzerConfig methods with wrong config', async () => {
    const result = checkAnalyzerConfig(pkgJSONContentWrongConfigWithoutAnalyzerContent);
    expect(result).toEqual({error: {message: errors.PACK_NOT_CONFIG}, fileType: []});
  });
});
