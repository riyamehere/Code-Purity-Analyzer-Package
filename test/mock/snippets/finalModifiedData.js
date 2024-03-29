/**
@author      : Riya
@date        : 2023-04-24
@description : Returning the finalDummyData from here required in setINdexContent.test file
*/
const finalDummyData = [
  {
    fileName: 'esLintIssueFile.ts',
    filePath: 'test/mock/analyzerFnMock/esLintIssueFile.ts',
    fileContent: '// eslint-disable\nfunction add(a, b) {\n    return a + b\n}',
    fileLines: 4,
    issueList: [{type: 'EsLint', issueCount: 1, issueLineNumber: [1]}],
  },
];
/**
@author      : Riya
@date        : 2023-04-24
@description : Returning the fileContent from here required in setINdexContent.test file
*/
const fileContentCodeIndex = `<!doctype html>
<html lang="en">

<head>
    <title>Comment Analyzer report</title>
    <meta charset="utf-8" />
    <link rel="stylesheet" href="prettify.css" />
    <link rel="stylesheet" href="analyzer.css" />
    <link rel="shortcut icon" href="src/assets/images/logo.png" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
</head>
    
<body>
<div class='wrapper'>
    <div class='pad1'>
        <h1 class="header">Code Analyzer</h1>
        <h1>All files</h1>
        <button onClick="createPDF()" class="downloadBtn">Download Reports 📥</button>
    </div>
    <div class='status-line high'></div>
    <div class="pad1">
<table class="coverage-summary">
<thead>
<tr>
   <th data-col="file" data-fmt="html" data-html="true" class="file">File Name</th>
   <th data-col="statements" data-type="number" data-fmt="pct" class="pct">Total number of issues</th>
</tr>
</thead>
{{table}}
{{data}}
</table>
</div>
    <div class='push'></div><!-- for sticky footer -->
            </div><!-- /wrapper -->
            <div class='footer quiet pad2 space-top1 center small'>
                Code Analyzer
            </div>
        <script src="prettify.js"></script>
        <script src="jspdf.js"></script>
        <script src="html2canvas.js"></script>
        <script src="autotable.js"></script>
        <script>
            window.onload = function () {
                prettyPrint();
            };
        </script>
        {{window_add_script}}
        <script src="download.js"></script>
    </body>
</html>
    `;

export {finalDummyData, fileContentCodeIndex};
