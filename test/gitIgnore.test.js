import {test, expect, describe} from '@jest/globals';
import getGitIgnoreFileObject from 'lib/logs/issues/gitIgnore';
import {issueNames, analyzerPaths} from 'custConstants';

describe('CHeck if .env is present in .gitignore File', () => {
  test('CASE 1 - when env is not found ::', () => {
    analyzerPaths.GITIGNORE_PATH = 'test/mock/snippets/gitIgnoreWithoutEnv/.gitignore';
    const issueObj = getGitIgnoreFileObject();
    /* expecting the object to contain issue type to be gitignore issue */
    expect(issueObj.issueList[0].type).toBe(issueNames.GITIGNORE_ISSUE);
    /* expecting the object to contain issue count to be 1  */
    expect(issueObj.issueList[0].issueCount).toBe(1);
    const gitIgnoreIssueCount = issueObj.issueList[0].issueCount;
    expect(gitIgnoreIssueCount).toBe(1);
  });
  test('CASE 2 - when .env is found, issueObj will be null ::', () => {
    analyzerPaths.GITIGNORE_PATH = 'test/mock/snippets/gitIgnoreWithEnv/.gitignore';
    const issueObj = getGitIgnoreFileObject();
    /* expecting the object to be null in this case  */
    expect(issueObj).toBe(null);
  });
});
