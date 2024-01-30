/* Exporting dummy file content with issue as string to check array length syntax */
export const fileContentWithIssue = {
  fileName: 'app.controller.ts',
  filePath: 'src/app.controller.ts',
  fileContent: '/*\n' +
  '   @Get()\n' +
  '  getHello() {\n' +
  '    return this.appService.getHello();\n' +
  '  }\n' +
  '  */',
  fileLines: 25,
  issueList: [],
};

/* Exporting dummy file content with issue as string to check array length syntax */
export const fileContentWithoutIssue = {
  fileName: 'app.controller.ts',
  filePath: 'src/app.controller.ts',
  fileContent: '/* multiline comment */',
  fileLines: 25,
  issueList: [],
};

/* These are three constants being exported in JavaScript for testing. */
export const javascriptCode = '/* function add(a, b) { return a + b; } console.log(add(5,5))*/';
export const invalidJavascriptCode = 'function add(a, b) { return a + }';
export const nonJavascriptCode = '/* Hello, World */';
