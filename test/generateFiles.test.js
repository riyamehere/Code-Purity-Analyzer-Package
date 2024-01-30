import { describe, expect, it, jest, afterEach, beforeEach } from '@jest/globals';

/* This covers copySnippetContent, createDirectory method & check file written if file exist on that path */
/**
@author      : 
@date        : 2023-04-20
@description : This test case covers directory creation, file exist & content written into it with fs or not
*/

/* mock of external libraries methods */
jest.unstable_mockModule('fs', () => ({
  existsSync: jest.fn(),
  mkdirSync: jest.fn(),
  open: jest.fn(),
  copyFileSync: jest.fn(),
}));

/* destructured actual methods of fs module which refers as mock */
const { existsSync, open, mkdirSync, copyFileSync } = await import('fs');
/* imported function from default export */
const createAnalyzerFolder = (await import('helper/analyzer/generateFiles')).default;

describe('Generate files related with analyzer', () => {
  afterEach(() => {
    jest.resetModules();
  });
  beforeEach(() => {
    jest.resetAllMocks();
  });

  /* dir created, file exists then only copySnippetContent should call */
  it('Test Case:1:: Should createAnalyzerFolder call copySnippetContent', () => {
    existsSync.mockImplementation().mockReturnValue(true);
    mkdirSync.mockImplementation();
    copyFileSync.mockImplementation();
    open.mockImplementation();
    copyFileSync.mockImplementation();
    createAnalyzerFolder();
    expect(open).not.toHaveBeenCalled();
    expect(copyFileSync).toHaveBeenCalledTimes(16);
  });

  /* dir created but file doesn't exists then check for open and create file if any err thrown should handle it */
  it('Test Case:2:: Should createAnalyzerFolder call throw error for open methods', () => {
    existsSync.mockImplementation().mockReturnValue(false);
    mkdirSync.mockImplementation();
    copyFileSync.mockImplementation();
    open.mockImplementation((path, options, callback) => callback(new Error('error'), null));
    const writeStdoutSpyOn = jest.spyOn(process.stdout, 'write');
    expect(() => createAnalyzerFolder()).toThrowError('error');
    expect(writeStdoutSpyOn).toHaveBeenCalledTimes(1);
  });

  /* dir created but file doesn't exists then check for open and create file if any err thrown should handle it */
  it('Test Case:3:: Should createAnalyzerFolder call throw error for open methods', () => {
    existsSync.mockImplementation().mockReturnValue(false);
    mkdirSync.mockImplementation();
    open.mockImplementation((path, options, callback) => callback(null, 'data'));
    copyFileSync.mockImplementation();
    createAnalyzerFolder();
    expect(open).toHaveBeenCalledTimes(7);
    expect(copyFileSync).toHaveBeenCalledTimes(16);
  });

  /* dir created but file doesn't exists then check for open and create file if any err thrown should handle it */
  it('Test Case:4:: Should createAnalyzerFolder call throw error for open methods', () => {
    existsSync.mockImplementation().mockReturnValue(false);
    mkdirSync.mockImplementation();
    copyFileSync.mockImplementation();
    open
      .mockImplementation((path, options, callback) => callback(new Error('error'), 'data'))
      .mockReturnValueOnce('ok1');
    const writeStdoutSpyOn = jest.spyOn(process.stdout, 'write');
    expect(() => createAnalyzerFolder()).toThrowError('error');
    expect(writeStdoutSpyOn).toHaveBeenCalledTimes(1);
  });

  /* dir created but file doesn't exists then check for open and create file if any err thrown should handle it */
  it('Test Case:5:: Should createAnalyzerFolder call throw error for open methods', () => {
    existsSync.mockImplementation().mockReturnValue(false);
    mkdirSync.mockImplementation();
    copyFileSync.mockImplementation();
    open
      .mockImplementation((path, options, callback) => callback(new Error('error'), 'data'))
      .mockReturnValueOnce('ok1')
      .mockReturnValueOnce('ok1');
    const writeStdoutSpyOn = jest.spyOn(process.stdout, 'write');
    expect(() => createAnalyzerFolder()).toThrowError('error');
    expect(writeStdoutSpyOn).toHaveBeenCalledTimes(1);
  });

  /* dir created but file doesn't exists then check for open and create file if any err thrown should handle it */
  it('Test Case:6:: Should createAnalyzerFolder call throw error for open methods', () => {
    existsSync.mockImplementation().mockReturnValue(false);
    mkdirSync.mockImplementation();
    copyFileSync.mockImplementation();
    open
      .mockImplementation((path, options, callback) => callback(new Error('error'), 'data'))
      .mockReturnValueOnce('ok1')
      .mockReturnValueOnce('ok1')
      .mockReturnValueOnce('ok1');
    const writeStdoutSpyOn = jest.spyOn(process.stdout, 'write');
    expect(() => createAnalyzerFolder()).toThrowError('error');
    expect(writeStdoutSpyOn).toHaveBeenCalledTimes(1);
  });

  /* dir created but file doesn't exists then check for open and create file if any err thrown should handle it */
  it('Test Case:7:: Should createAnalyzerFolder call throw error for open methods', () => {
    existsSync.mockImplementation().mockReturnValue(false);
    mkdirSync.mockImplementation();
    copyFileSync.mockImplementation();
    open
      .mockImplementation((path, options, callback) => callback(new Error('error'), 'data'))
      .mockReturnValueOnce('ok1')
      .mockReturnValueOnce('ok1')
      .mockReturnValueOnce('ok1');
    const writeStdoutSpyOn = jest.spyOn(process.stdout, 'write');
    expect(() => createAnalyzerFolder()).toThrowError('error');
    expect(writeStdoutSpyOn).toHaveBeenCalledTimes(1);
  });

  /* dir created but file doesn't exists then check for open and create file if any err thrown should handle it */
  it('Test Case:8:: Should createAnalyzerFolder call throw error for open methods', () => {
    existsSync.mockImplementation().mockReturnValue(false);
    mkdirSync.mockImplementation();
    copyFileSync.mockImplementation();
    open
      .mockImplementation((path, options, callback) => callback(new Error('error'), 'data'))
      .mockReturnValueOnce('ok1')
      .mockReturnValueOnce('ok1')
      .mockReturnValueOnce('ok1')
      .mockReturnValueOnce('ok1');
    const writeStdoutSpyOn = jest.spyOn(process.stdout, 'write');
    expect(() => createAnalyzerFolder()).toThrowError('error');
    expect(writeStdoutSpyOn).toHaveBeenCalledTimes(1);
  });

  /* dir created but file doesn't exists then check for open and create file if any err thrown should handle it */
  it('Test Case:9:: Should createAnalyzerFolder call throw error for open methods', () => {
    existsSync.mockImplementation().mockReturnValue(false);
    mkdirSync.mockImplementation();
    copyFileSync.mockImplementation();
    open
      .mockImplementation((path, options, callback) => callback(new Error('error'), 'data'))
      .mockReturnValueOnce('ok1')
      .mockReturnValueOnce('ok1')
      .mockReturnValueOnce('ok1')
      .mockReturnValueOnce('ok1')
      .mockReturnValueOnce('ok1');
    const writeStdoutSpyOn = jest.spyOn(process.stdout, 'write');
    expect(() => createAnalyzerFolder()).toThrowError('error');
    expect(writeStdoutSpyOn).toHaveBeenCalledTimes(1);
  });

  /* dir created but file doesn't exists then check for open and create file if any err thrown should handle it */
  it('Test Case:10:: Should createAnalyzerFolder call throw error for open methods', () => {
    existsSync.mockImplementation().mockReturnValue(false);
    mkdirSync.mockImplementation();
    copyFileSync.mockImplementation();
    open
      .mockImplementation((path, options, callback) => callback(new Error('error'), 'data'))
      .mockReturnValueOnce('ok1')
      .mockReturnValueOnce('ok1')
      .mockReturnValueOnce('ok1')
      .mockReturnValueOnce('ok1')
      .mockReturnValueOnce('ok1')
      .mockReturnValueOnce('ok1');
    const writeStdoutSpyOn = jest.spyOn(process.stdout, 'write');
    expect(() => createAnalyzerFolder()).toThrowError('error');
    expect(writeStdoutSpyOn).toHaveBeenCalledTimes(1);
  });
});
