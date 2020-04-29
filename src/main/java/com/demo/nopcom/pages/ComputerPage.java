package com.demo.nopcom.pages;

import com.cucumber.listener.Reporter;
import com.demo.nopcom.utility.UtilityRM;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

/*
 * Ravi's Creation
 * Date of Creation 27 Apr 20
 */
public class ComputerPage extends UtilityRM {

private static final Logger log = LogManager.getLogger(ComputerPage.class.getName());


    @FindBy(xpath = "//h1[contains(text(),'Computers')]")
    WebElement _computerText;

    @FindBy(xpath = "//li[@class='inactive']//a[@href='/desktops']")
    WebElement _deskTopBtn;

    public void assertComputerText(String text) {
        Reporter.addStepLog("verify text"+ text + "is displayed on computer page"+_computerText.toString()+"<br>" );
        verifyText(_computerText, "Computers");
        log.info("verify text"+ text + "is displayed on computer page"+_computerText.toString());
    }
    public void clickOnDesktopButton() {
        Reporter.addStepLog("click on desktop btn"+_deskTopBtn.toString());
        clickOnElement(_deskTopBtn);
        log.info("click on desktop btn"+_deskTopBtn.toString());
    }

}
