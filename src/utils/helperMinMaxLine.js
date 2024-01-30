/* filtering out the commented lines here to match the regex */
const checkCommentedLines = (string, line) => {
  if (string) {
    const splitLines = string.split('\n');
    const commentReg = /(\/\*([\s\S]*?)\*\/)|(\/\/(.*)$)/g;
    /* filtering out the commented lines here to match the regex */
    if (commentReg.test(splitLines[line - 1])) {
      return true;
    }
  }
  return false;
};

/* finds the line number for a specific match you need to know it index */
const getLineNumberByIndex = (index, string) => {
  let line = 0;
  let match;
  const re = /(^)[\S\s]/gm;
  while ((match = re.exec(string))) {
    if (match.index > index) break;
    line += 1;
  }
  return checkCommentedLines(string, line) ? null : line;
};

/* an array of matches (how many times a keyword is present in file contents is returned */
const getLineNumberMaxLengthAttribute = (keyword, contentsInFile) => {
  const a = [];
  let index = -1;
  if (keyword && keyword.length > 0) {
    while ((index = contentsInFile.indexOf(keyword, index + 1)) !== -1) {
      const lineNumberMatch = getLineNumberByIndex(index, contentsInFile);
      if (lineNumberMatch) {
        a.push(lineNumberMatch);
      }
    }
  }
  return a;
};

export default getLineNumberMaxLengthAttribute;
