import { Locator, Page } from "@playwright/test";

export class LoginPage {

    readonly page: Page;
    readonly loginLink: Locator;
    readonly username: Locator;
    readonly password: Locator;
    readonly loginButton: Locator;
    readonly welcomeUser: Locator;

    constructor(page: Page) {

        this.page = page;

        this.loginLink = page.locator("#login2");
        this.username = page.locator("#loginusername");
        this.password = page.locator("#loginpassword");
        this.loginButton = page.locator("//button[text()='Log in']");
        this.welcomeUser = page.locator("#nameofuser");

    }

    async launchApplication() {

        await this.page.goto(process.env.URL!);

    }

    async login(username: string, password: string) {
        await this.loginLink.click();
        await this.username.fill(username);
        await this.password.fill(password);
        await this.loginButton.click();

    }
}