import {test, expect} from '@playwright/test'

test("create an Account", async({page})=>{
    //login
    await page.goto("https://www.saucedemo.com/")
    await page.getByPlaceholder("Username").fill("standard_user")
    await page.getByPlaceholder("Password").fill("secret_sauce")
    await page.locator("#login-button").click()
    console.log("**loggin successfully**")
    //verify
    await expect(page.locator("//span[.='Products']")).toBeVisible()
    await expect(page.locator("//span[.='Products']")).toHaveText("Products")
    console.log("**Login successfully and Product page is displaying**")

    //add to cart
    await page.locator(".product_sort_container").selectOption({value:"za"})
    await page.locator("//div[.='Sauce Labs Backpack']").click()
    await page.locator("//button[.='Add to cart']").click()
    console.log("**Product added successfully**")
    await page.locator("//button[@id='add-to-cart-sauce-labs-backpack']").click()
    await page.locator("//a[@class='shopping_cart_link']").click()

    //checkout
    await page.locator("#checkout").click()
    await page.getByPlaceholder("First Name").type("Poulomi");
    await page.getByPlaceholder("Last Name").fill("Maji")
    await page.getByPlaceholder("Zip/Postal Code").fill("700102")
    await page.locator("#continue").click()
    await page.locator("#finish").click()
    await expect(page.locator("//h2[.='Thank you for your order!']")).toBeVisible()
    await expect(page.locator("//h2[.='Thank you for your order!']")).toHaveText("Thank you");
    console.log("**Order Placed**")

    //logout
    await page.locator("#react-burger-menu-btn").click()
    await page.locator("//a[.='Logout']").click()
    console.log("** loggout successfully **")
})