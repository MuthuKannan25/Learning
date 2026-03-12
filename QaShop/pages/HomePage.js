const {BasePage} = require("../pages/BasePage");


export class Homepage extends BasePage{
   constructor(page)
   {
    super(page);
    this.shopNowButton     = this.page.getByRole('link', { name: 'Shop Now' });
    this.maleShopNowBtn    = this.shopNowButton.nth(0);
    this.womenShopNowBtn   = this.shopNowButton.nth(1);
    this.kidsShopNowBtn    = this.shopNowButton.nth(2);
    this.ElecShopNowBtn    = this.shopNowButton.nth(3);

    //this.menspage = this.page.locator('span').filter({ hasText: 'Mens Wear' });
    //this.womenspage =this.page.locator('span').filter({ hasText: 'Womens Wear' });
    //this.kidspage =this.page.locator('span').filter({ hasText: 'Kids Wear' });
    //this.electronicspage =this.page.locator('span').filter({ hasText: 'Electronics' });
    
   }

   async navigateToMalePage()
   {
       await this.maleShopNowBtn.click();
       
   }

   async navigateToWomensPage()
   {
      return this.womenShopNowBtn.click();
      
      
   }

   async navigateToKidsPage(){
      return this.kidsShopNowBtn.click();
      
   }

   async naviagteToElectronicsPage()
   {
      return this.ElecShopNowBtn.click();
      return awao

   }
    async getPageHeader(text) {
      return await this.page.locator('span')
         .filter({ hasText: text })
         .textContent();
   
}
}
module.exports = {Homepage}