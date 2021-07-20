const {Builder, By, Key} = require("selenium-webdriver");
const driver = new Builder().forBrowser("firefox").build();

async function Welcome(){
    try {
        await driver.get("https://rori4.github.io/selenium-practice/#/pages/practice/datepicker-form");
       await driver.findElement(By.xpath("//input[@formcontrolname='dateOne']")).sendKeys("Jul 17, 2021");
       await driver.findElement(By.xpath("//input[@formcontrolname='dateTwo']")).sendKeys("Jul 17, 2021 - Jul 19, 2021");
       await driver.findElement(By.name("submit")).click();
    } catch (error) {
        console.log(error);
    }
   
}
Welcome();