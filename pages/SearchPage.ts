import { Locator, Page } from "@playwright/test";

export class SearchPage {

    readonly page: Page;
    readonly productTitle: Locator;
    readonly homeLink: Locator;

    constructor(page: Page) {

        this.page = page;

        this.productTitle = page.locator(".name");
        this.homeLink = page.locator("//a[text()='Home ']");

    }

    async selectProduct(product: string) {
        await this.page.locator(`//a[text()='${product}']`).click();
    }

    async goToHomePage() {
        await this.homeLink.click();
    }

}