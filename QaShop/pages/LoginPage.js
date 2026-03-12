import { BasePage } from "./BasePage";

export class LoginPage extends BasePage {
    constructor(page)
    {
        super(page);
        this.user = this.page.locator('#email');
        this.pass = this.page.locator('#password');
        this.loginbutton = this.page.locator('#loginBtn');
        this.logoutbutton = this.page.locator('#logoutBtn')

        //Error Messages
        this.errormessage =this.page.locator('#errorMsg');
        this.emailerror = this.page.locator('#emailerror');
        this.passworderror = this.page.locator('#passerror');
        this.home = this.page.locator('a').filter({ hasText: 'Home' }).last();

    }

    async loginWithValidCredentials(username,password)
    {
        await this.user.fill(username);
        await this.pass.fill(password);
        await this.loginbutton.click();
    }

    async loginWithInvalidCredentials(username,password)
    {
        await this.user.fill(username);
        await this.pass.fill(password);
        await this.loginbutton.click();
    }   

    async getErrorMessage()
    {

        return await this.errormessage.textContent();
    }

    async getInvalidEmailErrorMessage()
    {

        return await this.emailerror.textContent();
    }

    async getPasswordErrorMessage()
    {

        return await this.passworderror.textContent();
    }

    async getHomePage()
    {

        return await this.home.textContent();
    
    }

}
module.exports = {LoginPage}