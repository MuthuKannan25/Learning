export class ProductCard
{
    constructor(page,productLocator){
      this.page = page;
      this.product = productLocator;
      this.productname = this.product.locator('h6.text-decoration-none.text-truncate');
      this.productprice = this.product.locator('div.d-flex.align-items-center.justify-content-center.mt-2');
      this.addtocart = this.product.locator(page.locator('button').filter({ hasText: 'Add to Cart' }));

    }
        async getProductName(){

            return await this.productname.textContent();
        }

        async getProductPrice()
        {
            return await this.productprice.textContent();
        }
        async addtocart()
        {
            return await this.addtocart.click();
        }
}
module.exports = {ProductCard};