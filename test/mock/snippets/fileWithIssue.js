/* Exporting dummy file content with issue (any, max length, eslint, console etc) as string */
const fileContentWithIssue = {
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
    '<h1>Hey</h1>\n' +
    'var name:any = "tom"  \n' +
    '  <div>  \n' +
    '/*    <input type="text" id="username" name="username"> */\n' +
    '    <input type="text" id="username" name="username">\n ' +
    '    <h1 style={style.heading}>Authenticate</h1>\n' +
    '  </div>\n' +
    '  console.log()\n' +
    ');\n' +
    '\n' +
    '\n' +
    '\n' +
    'export default Authenticate;\n',
  fileLines: 20,
  issueList: [],
};
export default fileContentWithIssue;
