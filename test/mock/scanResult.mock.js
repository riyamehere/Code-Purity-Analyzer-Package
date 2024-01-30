export const mockFinalScanData = [{
  fileName: 'Authenticate.component.tsx',
  filePath: 'src/components/Authenticate/Authenticate.component.tsx',
  fileContent: '/* eslint-disable react/button-has-type */\n/* this is a functional component */\nimport React from \'react\';\nimport {style} from \'./Authenticate.css\';\n\n/* define the function type and the return type here */\nconst Authenticate: React.FC<Record<string, unknown>> = () => (\n  <div>\n    <h1 style={style.heading}>Authenticate</h1>\n  </div>\n);\nexport default Authenticate;\n',
  fileLines: 13,
  issueList: [
    {type: 'EsLint', issueType: 'Code Smell', issuePriority: 'Medium', issueCount: 1, issueLineNumber: [1]},
    {type: 'HardCodedString', issueType: 'Code Smell', issuePriority: 'Medium', issueCount: 1, issueLineNumber: [9]},
  ],
}];
