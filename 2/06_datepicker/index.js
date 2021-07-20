const { Builder,By} = require("selenium-webdriver");
const driver = new Builder().forBrowser("firefox").build();

async function Upload(){
    try {
        await driver.get("https://rori4.github.io/selenium-practice/#/pages/practice/file-form");
        await driver.findElement(By.xpath("//input[@type = 'file']")).sendKeys(__dirname+"\\index.js");
        await driver.findElement(By.id("submit")).click();
    
    } catch (error) {
        console.log(error);
    }
    
}
Upload();