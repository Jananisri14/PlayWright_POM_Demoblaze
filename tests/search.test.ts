import { test, expect } from "../fixtures/baseFixture";
import productData from "../test-data/productData.json";

test.beforeEach(async ({ loginPage }) => {

    await loginPage.launchApplication();
    await loginPage.login(
        process.env.uname!,
        process.env.pword!
    );

});

test("Search Samsung Galaxy S6", async ({ searchPage}) => {
    await searchPage.selectProduct(productData.product);
    await expect(searchPage.productTitle).toHaveText(productData.product);

});

test("Navigate Back To Home", async ({ searchPage }) => {
    await searchPage.selectProduct(productData.product);
    await searchPage.goToHomePage();
    await expect(searchPage.page.locator("#tbodyid")).toBeVisible();

});