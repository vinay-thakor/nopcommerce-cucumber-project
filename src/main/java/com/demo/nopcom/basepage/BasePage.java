package com.demo.nopcom.basepage;

import org.apache.log4j.PropertyConfigurator;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;

/*
 * Ravi's Creation
 * Date of Creation 27 Apr 20
 */

public class BasePage {
    // web driver
    public static WebDriver driver;
    // constructor created
    public BasePage(){
        PropertyConfigurator.configure(System.getProperty("user.dir")+"/src/test/java/com/demo/nopcom/resources/properties/log4j.properties");
        PageFactory.initElements(driver,this);
    }
}
