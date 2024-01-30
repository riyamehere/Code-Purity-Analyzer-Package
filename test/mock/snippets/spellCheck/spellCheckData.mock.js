/* Exporting dummy file content with spell check issue as string */
const spellCheckContentWithIssue = {
  fileName: 'spellCheck.component.jsx',
  filePath: 'test/mock/snippets/spellCheck/spellCheck.component.jsx',
  fileContent:
    "import React from 'react';\n" +
    "import './Authenticate.css';\n" +
    '\n' +
    'const Authenticate = () => (\n' +
    '  <h1 className="heading">Authentcate</h1>\n' +
    ');\n' +
    '  \n' +
    'export default Authenticate;\n',
  fileLines: 8,
  issueList: [],
};
/* Exporting dummy file content with out spell check issue as string */
const spellCheckContentWithOutIssue = {
  fileName: 'spellCheckWithoutIssue.component.jsx',
  filePath: 'test/mock/snippets/spellCheck/spellCheckWithoutIssue.component.jsx',
  fileContent:
    "import React from 'react';\n" +
    "import './Authenticate.css';\n" +
    '\n' +
    'const Authenticate = () => (\n' +
    '  <h1 className="heading">Authenticate</h1>\n' +
    ');\n' +
    '  \n' +
    'export default Authenticate;\n',
  fileLines: 8,
  issueList: [],
};

export {spellCheckContentWithIssue, spellCheckContentWithOutIssue};
