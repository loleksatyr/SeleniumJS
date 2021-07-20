const { Builder, By, Key } = require("selenium-webdriver");
const driver = new Builder().forBrowser("firefox").build();

async function Iframe() {
    try {
        await driver.get("https://rori4.github.io/selenium-practice/#/pages/practice/iframe-form");
        await driver.switchTo().frame(0);
        await driver.findElement(By.xpath("//input[@aria-labelledby='i1']")).sendKeys("dasda");
        // await driver.findElement(By.xpath(" //label[@for='i24']//div//div")).click();
        await driver.actions().sendKeys(Key.TAB).perform();
        await driver.actions().sendKeys(Key.chord(Key.ARROW_DOWN, Key.ARROW_DOWN, Key.ARROW_DOWN, Key.ARROW_DOWN)).perform();
        await driver.actions().sendKeys(Key.TAB).perform();
        await driver.actions().sendKeys(Key.TAB).perform();
        await driver.actions().sendKeys(Key.TAB).perform();
        await driver.actions().sendKeys(Key.chord( Key.ARROW_DOWN, Key.ARROW_DOWN,Key.ENTER)).perform();
        await driver.actions().sendKeys(Key.chord(Key.TAB,"11")).perform();
        await driver.actions().sendKeys(Key.chord(Key.TAB,"12")).perform();
        await driver.actions().sendKeys(Key.chord(Key.TAB,"13")).perform();
        await driver.actions().sendKeys(Key.chord(Key.TAB,Key.SPACE)).perform();
        await driver.actions().sendKeys(Key.chord(Key.TAB,Key.SPACE)).perform();
        await driver.actions().sendKeys(Key.chord(Key.TAB,"djjdj")).perform();
        await driver.actions().sendKeys(Key.chord(Key.TAB,Key.SPACE)).perform();

    } catch (error) {
        console.log(error);
    }



}

Iframe();
