/**
@author      : Riya
@date        : 2023-03-21
@description : This an array of object containing the list of issues, we can add other issues like any, eslint-disable etc.
*/
import {issueNames, issuePriority, issueType} from 'custConstants';

const issueList = [
  {
    issueName: issueNames.CONSOLE_ISSUE,
    issueNameFn: () => import('lib/logs/issues/console.js'),
    issuePriority: issuePriority.HIGH,
    issueType: issueType.CODE_SMELL,
  },
  {
    issueName: issueNames.ESLINT_ISSUE,
    issueNameFn: () => import('lib/logs/issues/eslintDisable.js'),
    issuePriority: issuePriority.MEDIUM,
    issueType: issueType.CODE_SMELL,
  },
  {
    issueName: issueNames.ANY_ISSUE,
    issueNameFn: () => import('lib/logs/issues/any.js'),
    issuePriority: issuePriority.LOW,
    issueType: issueType.CODE_SMELL,
  },
  {
    issueName: issueNames.HARDCODED_STRING_ISSUE,
    issueNameFn: () => import('lib/logs/issues/hardCodedString'),
    issuePriority: issuePriority.MEDIUM,
    issueType: issueType.CODE_SMELL,
  },
  {
    issueName: issueNames.MAX_LENGTH_ATTRIBUTE,
    issueNameFn: () => import('lib/logs/issues/maxLengthAttribute'),
    issuePriority: issuePriority.CRITICAL,
    issueType: issueType.SECURITY,
  },
  {
    issueName: issueNames.MAX_LENGTH_ISSUE,
    issueNameFn: () => import('lib/logs/issues/maxLength'),
    issuePriority: issuePriority.LOW,
    issueType: issueType.CODE_SMELL,
  },
  {
    issueName: issueNames.SECRET_KEY_ISSUE,
    issueNameFn: () => import('lib/logs/issues/checkKeys'),
    issuePriority: issuePriority.HIGH,
    issueType: issueType.SECURITY,
  },
  {
    issueName: issueNames.ARRAY_LENGTH,
    issueNameFn: () => import('lib/logs/issues/arrayLength'),
    issuePriority: issuePriority.LOW,
    issueType: issueType.CODE_SMELL,
  },
  {
    issueName: issueNames.VAR_DATATYPE,
    issueNameFn: () => import('lib/logs/issues/varDataType'),
    issuePriority: issuePriority.LOW,
    issueType: issueType.CODE_SMELL,
  },
  {
    issueName: issueNames.CODE_COMMENT,
    issueNameFn: () => import('lib/logs/issues/codeComment'),
    issuePriority: issuePriority.LOW,
    issueType: issueType.CODE_SMELL,
  },
  {
    issueName: issueNames.MIN_LENGTH_ATTRIBUTE,
    issueNameFn: () => import('lib/logs/issues/minLengthAttribute'),
    issuePriority: issuePriority.CRITICAL,
    issueType: issueType.SECURITY,
  },
  {
    issueName: issueNames.EMPTY_FUNCTION,
    issueNameFn: () => import('lib/logs/issues/emptyFunction'),
    issuePriority: issuePriority.MEDIUM,
    issueType: issueType.CODE_SMELL,
  },
  {
    issueName: issueNames.TEST_ONLY_ISSUE,
    issueNameFn: () => import('lib/logs/issues/checkOnlyKeyword'),
    issuePriority: issuePriority.LOW,
    issueType: issueType.CODE_SMELL,
  },
  {
    issueName: issueNames.SPELLING_ISSUE,
    issueNameFn: () => import('lib/logs/issues/spellCheck.js'),
    issuePriority: issuePriority.LOW,
    issueType: issueType.CODE_SMELL,
  },
];

export default issueList;
