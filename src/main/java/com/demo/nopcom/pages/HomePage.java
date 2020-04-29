package com.demo.nopcom.pages;

import com.cucumber.listener.Reporter;
import com.demo.nopcom.utility.UtilityRM;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

import javax.xml.ws.WebEndpoint;

/*
 * Ravi's Creation
 * Date of Creation 27 Apr 20
 */
public class HomePage extends UtilityRM {

    private static final Logger log = LogManager.getLogger(HomePage.class.getName());

    // list of element and locators
    @FindBy(xpath = "//a[@class='ico-login']")
    WebElement _loginLink;

    @FindBy(xpath = "//div[@class='header-links-wrapper']//a[contains(text(),'Register')]")
    WebElement _registrationLink;

    @FindBy(xpath = "//ul[@class='top-menu notmobile']//a[contains(text(),'Computers')]")
    WebElement _computerLink;

    @FindBy(xpath = "//ul[@class='top-menu notmobile']//a[contains(text(),'Books')]")
    WebElement _booksLink;

    public void clickOnLoginLink() {
        Reporter.addStepLog("clicking on login link" + _loginLink.toString() + "<br>");
        // <br> is to brake line
        clickOnElement(_loginLink); //  using web element method form utility for this for log 4 j
        log.info("clicking on login link" + _loginLink.toString());
    }
    public void clickOnRegistrationLink(){
        Reporter.addStepLog("cliking on registration link" + _registrationLink.toString() + "<br>");
        clickOnElement(_registrationLink);
        log.info("cliking on registration link" + _registrationLink.toString());
    }
    public void clickOnComputerLink(){
        Reporter.addStepLog("clicking on computer link"+_computerLink.toString()+"<br>");
        clickOnElement(_computerLink);
        log.info("clicking on computer link"+_computerLink.toString());
    }
    public void clickOnBooksLink(){
        Reporter.addStepLog("clicking on books link "+_booksLink.toString());
        clickOnElement(_booksLink);
        log.info("clicking on books link "+_booksLink.toString());
    }


}
