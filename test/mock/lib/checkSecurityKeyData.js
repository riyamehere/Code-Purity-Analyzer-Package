/* Exporting dummy file object with secret key issue */
export const fileContentWithSecretKey = {
  fileName: 'Authenticate.component.tsx',
  filePath: 'src/components/Authenticate.component.tsx',
  fileContent:
    '/* eslint-disable react/button-has-type */\n' +
    '/* this is a functional component */\n' +
    "import React from 'react';\n" +
    "import {style} from './Authenticate.css';\n" +
    '\n' +
    '/* define the function any type and the return type here */\n' +
    'const Authenticate: React.FC<Record<string, any>> = () => (\n' +
    'const AWS_ACCOUNT_ID = "nxksjdn.wke"' +
    '<h1>Hey</h1>\n' +
    'var name:any = "tom"  \n' +
    'const AWS_SESSION_TOKEN = "skjb"' +
    '  <div>  \n' +
    '    <input type="text" id="username" name="username">\n ' +
    '    <h1 style={style.heading}>Authenticate</h1>\n' +
    '  </div>\n' +
    '  console.log()\n' +
    ');\n' +
    '\n' +
    '\n' +
    '\n' +
    'export default Authenticate;\n',
  fileLines: 21,
  issueList: [],
};

/* Exporting dummy file object with out secret key issue */
export const fileContentWithOutSecretKey = {
  fileName: 'Authenticate.component.tsx',
  filePath: 'src/components/Authenticate.component.tsx',
  fileContent:
    '/* react/button-has-type */\n' +
    '/* this is a functional component */\n' +
    "import React from 'react';\n" +
    "import {style} from './Authenticate.css';\n" +
    '\n' +
    '/* define the function  type and the return type here */\n' +
    'const Authenticate: React.FC<Record<string, unknown>> = () => (\n' +
    '  <div>\n' +
    '  </div>\n' +
    '  \n' +
    ');\n',
  fileLines: 11,
  issueList: [],
};
