import { defineConfig, devices } from '@playwright/test';
import dotenv from 'dotenv';

const envName = process.env.ENV || 'qa';

dotenv.config({
  path: `./env/.env.${envName}`,
});

export default defineConfig({
  testDir: './tests',


  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: [
  ['html'],
  ['allure-playwright']
],

  use: {
    baseURL: process.env.BASE_URL,
    trace: 'on-first-retry',
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    // {
    //   name: 'firefox',
    //   use: { ...devices['Desktop Firefox'] },
    // },
    // {
    //   name: 'webkit',
    //   use: { ...devices['Desktop Safari'] },
    // },
  ],
});