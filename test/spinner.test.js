import { afterEach, describe, expect, jest, test } from '@jest/globals';
import { startSpinner, stopSpinner } from '../src/lib/spinner/spinner';
/**
@author      : Ajinkya Deshmukh
@date        : 2023-04-24
@description : check starting spinner and as per requirement stop spinner provided by ora lib
*/
/* mock of ora */
jest.unstable_mockModule('ora', () => ({
  start: jest.fn(),
  stop: jest.fn(),
  color: '',
  text: '',
  __esModule: true,
}));

describe('spinner', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('startSpinner', () => {
    test('should create spinner with default values', () => {
      const spinnerObj = {};
      const spinner = startSpinner(spinnerObj);
      expect(spinner.color).toBe('blue');
      expect(spinner.text).toBe('Loading...');
    });
  });

  describe('stopSpinner', () => {
    test('should stop the spinner', () => {
      const spinnerInstance = {
        stop: jest.fn(),
      };
      stopSpinner(spinnerInstance);
      expect(spinnerInstance.stop).toHaveBeenCalledTimes(1);
    });
  });
});
