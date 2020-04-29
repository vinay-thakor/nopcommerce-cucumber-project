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

public class LoginPage extends UtilityRM {

    public static final Logger log = LogManager.getLogger(LoginPage.class.getName());

    @FindBy(css = "input#Email")
    WebElement _emailField;

    @FindBy(css = "input.password")
    WebElement _passwordField;

    @FindBy(css = "input.button-1.login-button")
    WebElement _loginBtnSubmit;

    @FindBy(xpath = "//h1[contains(text(),'Welcome, Please Sign In!')]")
    WebElement _welcomeText;



    public void enterEmailToField(String email){
        Reporter.addStepLog("Enter email:" + email + " to email filed " + _emailField.toString() + "<br>");
        sendTextToElement(_emailField,email);
        log.info("Enter email:" + email + " to email filed " + _emailField.toString());
    }
    public void enterPasswordToField(String password){
        Reporter.addStepLog("Enter Passwrod" + password + " to password field " + _passwordField.toString() + "<br>");
        sendTextToElement(_passwordField,password);
        log.info("Enter Passwrod" + password + " to password field " + _passwordField.toString());
    }
    public void clickOnLoginSubmitBtn(){
        Reporter.addStepLog("click on Login Submit Btn" + _loginBtnSubmit.toString() + "<br>");
        clickOnElement(_loginBtnSubmit);
        log.info("click on Login Submit Btn" + _loginBtnSubmit.toString());
    }
    public void verifyWelcomeText(String welcomeText){
        Reporter.addStepLog("verify Welcome Text" +welcomeText+ "displayed msg " + _welcomeText.toString()+ "<br>");
        verifyTextAssertMethod(_welcomeText,welcomeText);
        log.info("verify Welcome Text" +welcomeText+ "displayed msg " + _welcomeText.toString());
    }


}
