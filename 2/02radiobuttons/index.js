const{Builder,By} = require("selenium-webdriver");
const driver = new Builder().forBrowser("firefox").build();

async function example3(){
    try {
        await driver.get("https://rori4.github.io/selenium-practice/#/pages/practice/radio-button-form");
        await driver.findElement(By.css("#title")).sendKeys("blabalsdiahodishaiodhasoidhoai");
        await driver.findElement(By.css("#description")).sendKeys("sahdusahudhaiuhdiaushihdasihui");
        await driver.findElement(By.css("div.form-check:nth-child(1) > label:nth-child(1) > span:nth-child(3)")).click();
        await driver.findElement(By.css("#submit")).click();
    } catch (error) {
        console.log(error);
    }
    
}
example3();