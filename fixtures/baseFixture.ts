import { test as base ,expect} from '@playwright/test';

import { LoginPage } from '../pages/LoginPage';
import { SearchPage } from '../pages/SearchPage';
import { CartPage } from '../pages/CartPage';


type MyFixtures = {
    loginPage: LoginPage;
    searchPage: SearchPage;
    cartPage: CartPage;
};

export const test = base.extend<MyFixtures>({

    loginPage: async ({ page }, use) => {
        await use(new LoginPage(page));

    },

    searchPage: async ({ page }, use) => {
        await use(new SearchPage(page));
    },

    cartPage: async ({ page }, use) => {
        await use(new CartPage(page));
    }
});

export { expect };