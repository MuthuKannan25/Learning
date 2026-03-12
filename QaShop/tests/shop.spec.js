import {test,expect} from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { Homepage } from '../pages/HomePage';       


test.beforeEach('login-valid username and password', async ({page}) => {
    const Login = new LoginPage(page);
    await Login.navigateTo("https://shop.qaautomationlabs.com/index.php");
    await Login.loginWithValidCredentials('demo@demo.com','demo');
    // logout button check 
    await expect(Login.logoutbutton).toBeVisible();
    // check home breadcrumb is visible 
    const home = await Login.getHomePage();
    console.log(home);
    await expect(home).toContain("Home");

})
test('login-Invalid username and password', async ({page}) => {

    const Login = new LoginPage(page);
    await Login.navigateTo("https://shop.qaautomationlabs.com/index.php");
    await Login.loginWithInvalidCredentials('demo@gmail.com','password');
    const invalid = await Login.getErrorMessage();
    await expect(invalid).toContain("Invalid email or password!");

})

test('login-Invalid E-mailid validation', async ({page}) => {
    const Login = new LoginPage(page);
    await Login.navigateTo("https://shop.qaautomationlabs.com/index.php");
    await Login.loginWithInvalidCredentials('democom','demo');
    const invalidEmail = await Login.getInvalidEmailErrorMessage();
    await expect(invalidEmail).toContain("Please enter a valid email address.");
    
})

test('login-Password length validation', async ({page}) => {
    const Login = new LoginPage(page);
    await Login.navigateTo("https://shop.qaautomationlabs.com/index.php");
    await Login.loginWithInvalidCredentials('demo@demo.com','dem');
    const invalidPass = await Login.getPasswordErrorMessage();
    //console.log(invalidPass);
    await expect(invalidPass).toContain("Password must be at least 4 characters long.");
    
})

test('navigatetomalefashionpage',async ({page}) => {
   const Home = new Homepage(page);
   await Home.navigateToMalePage();
   const pagenmae =  await Home.getPageHeader('Mens Wear');
   console.log(pagenmae);
 
   
})
