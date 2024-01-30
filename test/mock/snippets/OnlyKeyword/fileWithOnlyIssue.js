/* Exporting dummy file content with issue (any, max length, eslint, console etc) as string */
const fileContentWithIssue = {
  fileName: 'Header.spec.tsx',
  filePath: 'src/components/Header.spec.tsx',
  fileContent: `/* default test case for component */
   import {fireEvent, render} from '@testing-library/react';
   import Header from 'components/Header/Header.component';
   import '@testing-library/jest-dom';
   import {IPageLabel} from 'interfaces';
   import {LabelContext} from 'contexts';
   
   const getlabelContextValue = {
     menuItems: {},
     loginPage: {loginText: 'Login here', login: 'Login', logout: 'Logout'},
     mainPage: {
       mainText: 'Frontend boilerplate Application',
       username: 'Hi User',
       profile: 'Profile',
       account: 'My Account',
       mode: 'Dark Mode',
       language: 'Language',
     },
     pageNotFound: {},
     exceptionPage: {},
     privacyPolicy: {},
   } as IPageLabel;
   const getHeaderRenderComponent = () =>
     render(
       <LabelContext.Provider value={getlabelContextValue}>
         <Header />
       </LabelContext.Provider>,
     );
   
   describe('Header Component', () => {
     test.only('sdsa');
     it('Should logo image displayed properly', () => {
       const headerCompoRef = getHeaderRenderComponent();
       const logo = headerCompoRef.getByRole('img');
       expect(logo).toHaveAttribute('alt', 'logo');
     });
   
     it('Should Header component render properly', () => {
       const componentRef = getHeaderRenderComponent();
       expect(componentRef.getByText('Hi User')).toBeInTheDocument();
     });
     test.only(' sdsa ');
     it('Should check dark mode active', () => {
       const componentRef = getHeaderRenderComponent();
       fireEvent.click(componentRef.getByTestId('iconBtn'));
       fireEvent.click(componentRef.getByTestId('headerMenu'));
       fireEvent.click(componentRef.getByTestId('dark'));
       expect(componentRef.getByTestId('header')).toHaveStyle('color: var(--white)');
     });
   
     test.only('sdsa');
     describe.only('sdsa');
     it('Should check light mode active', () => {
       const componentRef = getHeaderRenderComponent();
       fireEvent.click(componentRef.getByTestId('iconBtn'));
       fireEvent.click(componentRef.getByTestId('headerMenu'));
       fireEvent.click(componentRef.getByTestId('dark'));
       fireEvent.click(componentRef.getByTestId('dark'));
       expect(componentRef.getByTestId('header')).toHaveStyle('color: var(--black)');
     });
     test.only('sdsa');
     it.only('sdsa');
   });
   `,
  fileContentNoIssue: `/* default test case for component */
   import {fireEvent, render} from '@testing-library/react';
   import Header from 'components/Header/Header.component';
   import '@testing-library/jest-dom';
   import {IPageLabel} from 'interfaces';
   import {LabelContext} from 'contexts';
   
   const getlabelContextValue = {
     menuItems: {},
     loginPage: {loginText: 'Login here', login: 'Login', logout: 'Logout'},
     mainPage: {
       mainText: 'Frontend boilerplate Application',
       username: 'Hi User',
       profile: 'Profile',
       account: 'My Account',
       mode: 'Dark Mode',
       language: 'Language',
     },
     pageNotFound: {},
     exceptionPage: {},
     privacyPolicy: {},
   } as IPageLabel;
   const getHeaderRenderComponent = () =>
     render(
       <LabelContext.Provider value={getlabelContextValue}>
         <Header />
       </LabelContext.Provider>,
     );
   describe('Header Component', () => {
     it('Should Header component render properly', () => {
       const componentRef = getHeaderRenderComponent();
       expect(componentRef.getByText('Hi User')).toBeInTheDocument();
     });
     test.only(' sdsa ');
     it('Should check dark mode active', () => {
       const componentRef = getHeaderRenderComponent();
       fireEvent.click(componentRef.getByTestId('iconBtn'));
       fireEvent.click(componentRef.getByTestId('headerMenu'));
       fireEvent.click(componentRef.getByTestId('dark'));
       expect(componentRef.getByTestId('header')).toHaveStyle('color: var(--white)');
     });
   
   });
   `,
  fileLines: 20,
  issueList: [],
};
export default fileContentWithIssue;
