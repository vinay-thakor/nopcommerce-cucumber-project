package com.demo.nopcom.pages;

import com.cucumber.listener.Reporter;
import com.demo.nopcom.utility.UtilityRM;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

/*
 * Ravi's Creation
 * Date of Creation 27 Apr 20
 */
public class DesktopPage extends UtilityRM {

    private static final Logger log = LogManager.getLogger(DesktopPage.class.getName());

    @FindBy(xpath = "//a[contains(text(),'Build your own computer')]")
    WebElement _buildYourownComputer;

    public void clickOnBuildOnYourComputer() {
        Reporter.addStepLog("click on build your own comp"+_buildYourownComputer.toString());
        clickOnElement(_buildYourownComputer);
        log.info("click on build your own comp"+_buildYourownComputer.toString());

    }
}
