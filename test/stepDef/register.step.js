const {Given, When, Then} = require('@wdio/cucumber-framework');
const {expect, $} = require('@wdio/globals');
const loginPage = require('../pages/login.page');
const registerPage = require('../pages/register.page');
const {config} = require('../../wdio.conf');

const data = {
    "namaToko": "store name",
    "email": "storeName@gmail.com",
    "password": "storeNam3",
    "invalidEmail": "storeName@gmail"
}

Given(/^I am open kasirAja login page$/, async () => {
    await browser.url(config.baseUrl);
});

When(/^I click text ingin mencoba daftar$/, async () => {
    await (await loginPage.inginMencobaDaftarTxt).click();
})

Then(/^I should be on the Register page$/, async () => {
    await expect(browser).toHaveUrl(`${config.baseUrl}/register`);
})

Given(/^I am open Register page$/, async () => {
    await browser.url(config.baseUrl);
    await (await loginPage.inginMencobaDaftarTxt).click();
})

When(/^I didn't input all mandatory field$/, async () => {
    await (await registerPage.daftarBtn).click();
})

When(/^I input valid nama toko, invalid email, and valid password$/, async () => {
    await registerPage.inputNamaToko(data.namaToko);
    await registerPage.inputEmail(data.invalidEmail);
    await registerPage.inputPassword(data.password);
    await (await registerPage.daftarBtn).click();
})

Then(/^I should see register error message$/, async () => {
    await expect(await registerPage.errorMessage).toBeDisplayed();
})

When(/^I input valid data$/, async () => {
    await registerPage.inputNamaToko(data.namaToko);
    await registerPage.inputEmail(data.email);
    await registerPage.inputPassword(data.password);
    await (await registerPage.daftarBtn).click();
})

Then(/^I should be on the Login page$/, async () => {
    await expect(await registerPage.successMessage).toBeDisplayed();
    await expect(await registerPage.successMessage).toHaveText('Toko berhasil didaftarkan');
    await expect(browser).toHaveUrl(`${config.baseUrl}/login`);
})