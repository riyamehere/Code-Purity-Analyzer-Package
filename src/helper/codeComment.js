import * as esprima from 'esprima';
import {jsDatatypeKeywordsList} from 'custConstants';

/**
 * returning the parsed JavaScript code of the `snippet` parameter using the `esprima` library.
 */
export const parseAsJSCode = (snippet) => {
  try {
    return esprima.parse(snippet);
  } catch (error) {
    return null;
  }
};

/**
 * returns `true` if the `snippet` parameter contains any of the JavaScript keywords defined in the `jsKeywords`
 * array, and `false` otherwise.
 */
export const hasJSKeywords = (codeSnippet) =>
  jsDatatypeKeywordsList.some((javascriptKeyword) => codeSnippet.includes(javascriptKeyword));

/**
 * The function `hasJavaScriptCode` returns a boolean value. It returns `true` if the input
 * `snippet` contains valid JavaScript code or if it contains any JavaScript keywords, and `false` otherwise.
 */
export const hasJavaScriptCode = (snippet) => {
  const parsedCode = parseAsJSCode(snippet);
  if (parsedCode !== null) {
    return true;
  }
  return hasJSKeywords(snippet);
};
