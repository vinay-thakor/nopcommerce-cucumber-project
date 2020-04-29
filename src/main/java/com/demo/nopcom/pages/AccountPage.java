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
public class AccountPage extends UtilityRM {

    private static final Logger log = LogManager.getLogger(AccountPage.class.getName());

    @FindBy(xpath = "//a[@class='ico-account']")
    WebElement _myAccountText;

    public void verifyMyAccountText(String myAccTxt) {
        waitUntilElementToBeClickable(_myAccountText,20);
        Reporter.addStepLog("Verify text: " + myAccTxt + " is displayed on the Account Page " + _myAccountText.toString());
        verifyTextAssertMethod(_myAccountText, myAccTxt);
        log.info("Verify text: " + myAccTxt + " is displayed on the Account Page " + _myAccountText.toString());
    }

}
