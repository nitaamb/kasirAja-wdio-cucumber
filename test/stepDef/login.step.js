const {Given, When, Then} = require('@wdio/cucumber-framework');
const {expect, $} = require('@wdio/globals');
const loginPage = require('../pages/login.page');
const {config} = require('../../wdio.conf');

const data = {
    "email": "storeName@gmail.com",
    "password": "storeNam3",
    "invalidEmail": "storeName@yahoo",
    "invalidPassword": "store"
}

Given(/^I am open kasirAja page$/, async () => {
    await browser.url(config.baseUrl);
});

When(/^I didn't input an email and password$/, async () => {
    await (await loginPage.loginBtn).click();
})

When(/^I input invalid email and valid password$/, async () => {
    await loginPage.inputEmail(data.invalidEmail);
    await loginPage.inputPassword(data.password);
    await (await loginPage.loginBtn).click();
})

When(/^I input valid email and invalid password$/, async () => {
    await loginPage.inputEmail(data.email);
    await loginPage.inputPassword(data.invalidPassword);
    await (await loginPage.loginBtn).click();
})

Then(/^I should see an error message$/, async () => {
    await expect(await loginPage.errorMessage).toBeDisplayed();
})

When(/^I input valid credentials$/, async () => {
    await loginPage.inputEmail(data.email);
    await loginPage.inputPassword(data.password);
    await (await loginPage.loginBtn).click();
});

Then(/^I should be on the Dashboard page$/, async () => {
    await expect(browser).toHaveUrl(`${config.baseUrl}/dashboard`);
});