package com.demo.nopcom.browserselector;

import com.demo.nopcom.basepage.BasePage;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.ie.InternetExplorerDriver;

/*
 * Ravi's Creation
 * Date of Creation 27 Apr 20
 */
public class BrowserSelector extends BasePage {

    //log 4 j properties initiated
    private static final Logger log = LogManager.getLogger(BrowserSelector.class.getName());
    // project path for system to get
    String projectPath = System.getProperty("user.dir");

    public void selectBrowser(String browser){
        if(browser.equalsIgnoreCase("chrome")){
            System.setProperty("webdriver.chrome.driver",projectPath + "/drivers/chromedriver.exe");
            log.info("Launching Chrome Browser");
            driver = new ChromeDriver();
        }else if (browser.equalsIgnoreCase("firefox")){
            System.setProperty("webdriver.gecko.driver",projectPath + "/drivers/geckodriver.exe");
            log.info("Launching Firefox Driver");
            driver = new FirefoxDriver();
        }else if (browser.equalsIgnoreCase("ie")){
            System.setProperty("webdriver.ie.driver",projectPath + "/drivers/IEDriverServer.exe");
            log.info("Launching internet explorer");
            driver = new InternetExplorerDriver();
        }else
            System.out.println("Wrong Browser Selected");
    }

}
