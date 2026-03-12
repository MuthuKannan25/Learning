export class BasePage{
    constructor(page) {
    this.page =page;
    }

    async navigateTo(url)
    {

        await this.page.goto(url);

    }

    async getpagetitle()
    {

        return this.page.title();
    }

    async waitForPageLoad() {
        await this.page.waitForLoadState('load');
    }
    
}
module.exports={BasePage};