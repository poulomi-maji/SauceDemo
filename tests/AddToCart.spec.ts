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
    await page.locator(".product_sort_container").selectOption({value:"lohi"})
    await page.locator("//div[.='Sauce Labs Fleece Jacket']").click()
    let text= await page.locator("//div[@data-test='inventory-item-price']").innerText()
    console.log("the Price of the product is ="+text)
    await page.locator("//button[.='Add to cart']").click()
     console.log("**Orange T-shirt added successfully**")

    //logout
    await page.locator("#react-burger-menu-btn").click()
    await page.locator("//a[.='Logout']").click()

})