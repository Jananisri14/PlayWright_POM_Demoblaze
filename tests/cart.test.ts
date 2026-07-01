import { test, expect } from "../fixtures/baseFixture";
import productData from "../test-data/productData.json";

test.beforeEach(async ({ loginPage, searchPage }) => {

    await loginPage.launchApplication();

    await loginPage.login(
        process.env.uname!,
        process.env.pword!
    );

    await searchPage.selectProduct(productData.product);

});

test("Add Product To Cart", async ({ cartPage }) => {

    await cartPage.addProductToCart();
    await cartPage.clickCart();
    await expect(cartPage.product).toBeVisible();

});

test("Verify Place Order Button", async ({ cartPage }) => {

    await cartPage.addProductToCart();
    await cartPage.clickCart();
    await expect(cartPage.placeOrder).toBeVisible();

});