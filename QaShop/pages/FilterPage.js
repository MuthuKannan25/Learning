import { BasePage } from './BasePage'

export class FilterPage extends BasePage{

    constructor(page){
    super(page);
    //backtobutton
    this.gotobackbtn = this.page.getByRole('link', {name: 'Go To Back'});
    }


    getCategory(value) 
    {
    return this.page.locator(`input[value="${value}"]`);
    }

    getPriceid(price)
    {
     return this.page.locator(`#price-"${price}"`);
    }
    
    getBySize(size)
    {
      return this.page.locator(`input[value="${size}"]`);
    }

    getByColor(colour)
    {
        return this.page.locator(`input[value="${colour}"]`);
    }
    
    getByType(type)
    {
        return this.page.locator(`input[value="${type}"]`);
    }
    getByBrand(brand)
    {
        return this.page.locator(`input[value="${brand}"]`);
    }
   
    async applyGetCategoryFilter(value)
    {
        await this.getCategory(value).check();
    }

    async applyGetPriceId(price){
        await this.getCategory(price).check();

    
} 
}
module.exports = {FilterPage};