/* Exporting dummy file content with issue as string to check array length syntax */
export const fileContentWithIssue = {
  fileName: 'app.controller.ts',
  filePath: 'src/app.controller.ts',
  fileContent:
    "import { Controller, Get } from '@nestjs/common';\n" +
    "import { ApiTags } from '@nestjs/swagger';\n" +
    "import { AppService } from './app.service';\n" +
    "@ApiTags('Welcome')\n" +
    '@Controller()\n' +
    'export class AppController {\n' +
    '  constructor(private readonly appService: AppService) {}\n' +
    '\n' +
    '  myArray: any[] = [];\n' +
    '\n' +
    '  @Get()\n' +
    '  getHello() {\n' +
    '    this.myArray.length<=0;\n' +
    '    this.myArray.length <=0;\n' +
    '    this.myArray.length<= 0;\n' +
    '    this.myArray.length <= 0;\n' +
    '\n' +
    '    this.myArray.length<0;\n' +
    '    this.myArray.length <0;\n' +
    '    this.myArray.length< 0;\n' +
    '    this.myArray.length < 0;\n' +
    '    return this.appService.getHello();\n' +
    '  }\n' +
    '\n' +
    '    this.myArray.length===0;\n' +
    '    this.myArray.length ===0;\n' +
    '    this.myArray.length=== 0;\n' +
    '    this.myArray.length === 0;\n' +
    '    return this.appService.getHello();\n' +
    '  }\n' +
    '}\n',
  fileLines: 25,
  issueList: [],
};

/* Exporting dummy file content with issue as string to check array length syntax */
export const fileContentWithoutIssue = {
  fileName: 'app.controller.ts',
  filePath: 'src/app.controller.ts',
  fileContent:
    "import { Controller, Get } from '@nestjs/common';\n" +
    "import { ApiTags } from '@nestjs/swagger';\n" +
    "import { AppService } from './app.service';\n" +
    "@ApiTags('Welcome')\n" +
    '@Controller()\n' +
    'export class AppController {\n' +
    '  constructor(private readonly appService: AppService) {}\n' +
    '\n' +
    '  myArray: any[] = [];\n' +
    '\n' +
    '  @Get()\n' +
    '  getHello() {\n' +
    '    this.myArray.length>=0;\n' +
    '    this.myArray.length >=0;\n' +
    '    this.myArray.length>= 0;\n' +
    '    this.myArray.length >= 0;\n' +
    '\n' +
    '    this.myArray.length>0;\n' +
    '    this.myArray.length >0;\n' +
    '    this.myArray.length> 0;\n' +
    '    this.myArray.length > 0;\n' +
    '    return this.appService.getHello();\n' +
    '  }\n' +
    '\n' +
    '    this.myArray.length===0;\n' +
    '    this.myArray.length ===0;\n' +
    '    this.myArray.length=== 0;\n' +
    '    this.myArray.length === 0;\n' +
    '    return this.appService.getHello();\n' +
    '  }\n' +
    '}\n',
  fileLines: 25,
  issueList: [],
};
