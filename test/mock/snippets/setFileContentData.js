const finalDummyData = [
  {
    fileName: 'esLintIssueFile.ts',
    filePath: 'test/mock/analyzerFnMock/esLintIssueFile.ts',
    fileContent: '// eslint-disable\nfunction add(a, b) {\n    return a + b\n}',
    fileLines: 4,
    issueList: [{type: 'EsLint', issueCount: 1, issueLineNumber: [1]}],
  },
  {
    fileName: 'esLintIssueFile2.ts',
    filePath: 'test/mock/analyzerFnMock/esLintIssueFile2.ts',
    fileContent: '// eslint-disable\nfunction add(a, b) {\n    return a + b\n}',
    fileLines: 3,
    issueList: [{type: 'EsLint', issueCount: 1, issueLineNumber: [1]}],
  },
];

const fileData = `<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Code coverage report for Header/Header.component.tsx</title>
    <meta charset="utf-8" />
    <link rel="stylesheet" href="../../prettify.css" />
    <link rel="stylesheet" href="../../analyzer.css" />
    <link rel="shortcut icon" type="image/x-icon" href="../favicon.png" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
</head>
<body>
 <div class='pad1'>
        <h1>{{HEADING}}</h1>
        <div class='clearfix'>
            
            <div class='fl pad1y space-right2'>
                <span class="strong">{{PERCENTAGE}}%</span>
                <span class="quiet">Console Count</span>
                <span class='fraction'>{{CONSOLECOUNT}}/10</span>
            </div>
            
        </div>
        <h2>FILE PATH - {{FILEPATH_HEADING}}</h2>
    </div>
<div class='status-line high'></div><pre><table class="coverage"><tr><td class="line-count quiet">{{NUMBERS}}</td>
<td class="line-coverage quiet">{{SPACES}}</td><td class="text">
<pre class="prettyprint lang-js">{{LISTDATA}}
&nbsp;</pre></td></tr></table></pre>
 
  <script src="../../prettify.js"></script>
        <script>
            window.onload = function () {
                prettyPrint();
            };
        </script>
</body>
</html>
`;
export {finalDummyData, fileData};
