import {test, expect} from '@playwright/test'

test("create an Account", async({page})=>{
    //login
    await page.goto("https://www.saucedemo.com/")
    await page.getByPlaceholder("Username").fill("standard_user")
    await page.getByPlaceholder("Password").fill("secret_sauce")
    await page.locator("#login-button").click()
    console.log("**loggin successfully**")

    await expect(page.locator("//span[.='Products']")).toBeVisible()
    await expect(page.locator("//span[.='Products']")).toHaveText("Products")
    console.log("**Login successfully and Product page is displaying**")

    //add to cart
    await page.locator("//button[@id='add-to-cart-sauce-labs-backpack']").click()
    await page.locator("//a[@class='shopping_cart_link']").click()
    await page.locator("//button[.='Remove']").click();
     console.log("**added successfully**")

    //logout
    await page.locator("#react-burger-menu-btn").click()
    await page.locator("//a[.='Logout']").click()

})