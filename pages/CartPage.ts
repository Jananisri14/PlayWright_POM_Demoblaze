import { Locator, Page } from "@playwright/test";

export class CartPage {

    readonly page: Page;
    readonly addToCart: Locator;
    readonly cart: Locator;
    readonly placeOrder: Locator;
    readonly product: Locator;

    constructor(page: Page) {

        this.page = page;

        this.addToCart = page.locator("//a[text()='Add to cart']");
        this.cart = page.locator("#cartur");
        this.placeOrder = page.locator("//button[text()='Place Order']");
        this.product = page.locator("//td[text()='Samsung galaxy s6']");

    }

    async addProductToCart() {

        this.page.once("dialog", async dialog => {
            await dialog.accept();
        });

        await this.addToCart.click();

    }

    async clickCart() {
        await this.cart.click();
    }

}