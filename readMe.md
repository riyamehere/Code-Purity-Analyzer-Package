# Code Analyzer

## Getting Started

### Commands to run in package's folder

1. clone the repository and do **npm i**.
2. Build the package using **npm run build** command.
3. Do **npm link**.

### Commands to run in project's folder

1. Run this command in the project's root.

- **npm link konverge-code-analyzer**

- This command will install the package in the project's node modules directory.

2. Create a script in project's package.json as follows -

- "groot:analyzer": "konverge-code-analyzer"

- **Note** : You can give any name to the script.

- Run the command **npm run groot:analyzer**

- This creates an analyzer folder in the root of project, inside the analyzer folder, open index.html. In index.html, you can watch the reports of all the file containing console.log/console.error or any other bad coding practices. On clicking the particular file, all the contents of file will be displayed along with the highlights on line number containing issue.

### How to provide configuration

- In package.json of project add configuration as and also add githubkey configuration in that
  "analyzer": {
  "filesEnvironment": [ ".tsx" ],
  "rootFolder": "src",
  "gitHubAuthKey": "XXXXXXXXXX"
  }

  For running this package on multiple extension you will need to add configuration as
  "analyzer": {
  "filesEnvironment": [".ts",".tsx", ".js", ".jsx"],
  "rootFolder": "src",
  "gitHubAuthKey": "XXXXXXXXXX"
  }

  **Available Options**

| Option               | Description                   | Example                                    |
| -------------------- | ----------------------------- | -------------------------------------------|
| **filesEnvironment** | Takes file type as argument   | "filesEnvironment": ".tsx"                 |
| **gitHubAuthKey**    | Takes GitHubKey as argument   | "gitHubAuthKey": "XXXXXXXXXX"              |
| **rootFolder**       | Takes root folder as argument | "rootFolder": "src"                        |


## Available scripts

In the package project directory, you can run :

**Note**: Following commands and scripts will only runs on linux bash not on other OS native cli's.

| Command                | Description                                                                   |
| ---------------------- | ----------------------------------------------------------------------------- |
| `npm run lint`         | Checks for lint issues in the src folder.                                     |
| `npm run lint:fix`     | Fixes all fixable lint issues in the src folder.                              |
| `npm run prettier`     | Checks for the prettier issues.                                               |
| `npm run prettier:fix` | Fixes prettier issues.                                                        |
| `npm run build`        | Build the package (creates dist folder).                                      |
| `npm run test`         | Checks if the test cases pass configured for specific path in jest.config.mjs |
| `npm run test:watch`   | Checks if the test cases pass in watch mode.                                  |
| `npm run link`         | Runs the build and link commands one after the other                          |

## Issues covered in this package

Following are the issues covered in this package :

| Issue                  | Description                                                              |
| -----------------------| -------------------------------------------------------------------------|
| `Console`              | Finds out all the console statements in our code.                        |
| `Any`                  | Finds out all the any keyword usage in our code.                         |
| `EsLint`               | Checks for eslint-disable statements.                                    |
| `HardCodedString`      | Finds any hardcoded string present in the code.                          |
| `MaxLength attribute`  | Finds if input tag is present without the maxlength attribute.           |
| `.env file missing`    | .env missing in gitignore file.                                          |
| `MaxLines`             | Highlight lines in files having lines more than 500.                     |
| `Secret Key Found`     | Find if any secret key is present in code.                               |
| `ArrayLength`          | Finds files having commented code.                                       |
| `MinLength attribute`  | Finds file having missing minLength attribute in input type=password tag.|
| `Empty functions`      | Finds files having empty functions.                                      |
| `Detect only keyword`  | Finds only keyword present in test files.                                |
| `Spelling Mistake`     | Finds file having spelling mistake.                                      |

## Node version check

**NOTE** : Node version >= 14.20.0 is required for package, terminal message will be displayed accordingly.
