import { BasePage } from "./BasePage";
import { ProductCard } from "./ProductCard";

export class ProductPage extends BasePage {
    constructor(page) {
        super(page);
        this.products = this.page.locator('#product-list'); 
    } 
async getProductsByName(name)
{
    const count = await this.products.count();

    for( let i=0;i<= count ; i++)
    {
        const product = await this.product.nth(i);
        const card = new ProductCard(this.page,product);
        const productname = await card.getProductName();
        if (productName.trim() === name) {
                return card;
            }
    
    }
    throw new Error(`Product ${name} not found`);

}
async addProductToCart(productname){
    const product = await this.getProductByName(productName);
    await product.addToCart();
}
    
//async addProductToCart(name) {
  //  const productLocator = this.page.locator('#product-list', { hasText: name });
    //const product = new ProductCard(this.page, productLocator);
    //await product.addToCart();}
}

