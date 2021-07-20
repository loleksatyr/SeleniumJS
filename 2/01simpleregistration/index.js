const {Builder, By} = require("selenium-webdriver");
const driver = new Builder().forBrowser("firefox").build();

async function example(){
    try {
        await driver.get("https://rori4.github.io/selenium-practice/#/pages/practice/simple-registration");
        await driver.findElement(By.name("email")).sendKeys("example@gmail.com");
        await driver.findElement(By.id("password")).sendKeys("aaaaa");
        await driver.findElement(By.name("submit")).click();
    } catch (error) {
        console.log(error);
    }
    
}

async function example2(){
    try {
        await driver.get("https://rori4.github.io/selenium-practice/#/pages/practice/radio-button-form");

    } catch (error) {
        console.log(error);
    }
}
async function init(){
    try {
        await example();
        await example2();
    } catch (error) {
        console.log(error);
    }
}
init();
