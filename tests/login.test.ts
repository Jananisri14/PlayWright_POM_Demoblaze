import { test, expect } from "../fixtures/baseFixture";

test("Login Test", async ({loginPage}) => {

    await loginPage.launchApplication();
    await loginPage.login(
        process.env.uname!,
        process.env.pword!
    );
    await expect(loginPage.welcomeUser).toBeVisible();

});