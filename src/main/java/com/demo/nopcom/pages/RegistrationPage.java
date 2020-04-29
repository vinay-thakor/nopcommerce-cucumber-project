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
public class RegistrationPage extends UtilityRM {

    public static final Logger log = LogManager.getLogger(RegistrationPage.class.getName());

    @FindBy(xpath = "//div[@class='page-body']//strong[text()='Your Personal Details']")
    WebElement _textYourPersonalDetails;

    @FindBy(xpath = "//input[@id='gender-male']")
    WebElement _maleGenderRadioBtn;

    @FindBy(xpath = "//input[@id='gender-female']")
    WebElement _femaleGenderRadioBtn;

    @FindBy(xpath = "//input[@id='FirstName']")
    WebElement _firstNameField;

    @FindBy(xpath = "//input[@id='LastName']")
    WebElement _lastNameField;

    @FindBy(xpath = "//select[@name='DateOfBirthDay']")
    WebElement _dayOfBirth;

    @FindBy(xpath = "//select[@name='DateOfBirthMonth']")
    WebElement _monthOfBirth;

    @FindBy(xpath = "//select[@name='DateOfBirthYear']")
    WebElement _yearOfBirth;

    @FindBy(xpath = "//input[@id='Email']")
    WebElement _emailField;

    @FindBy(xpath = "//input[@id='Company']")
    WebElement _companyNameField;

    @FindBy(css = "input#Newsletter")
    WebElement _newsLtrCheckBox;

    @FindBy(xpath = "//input[@id='Password']")
    WebElement _passwordField;

    @FindBy(xpath = "//input[@id='ConfirmPassword']")
    WebElement _confPasswordField;

    @FindBy(xpath = "//input[@id='register-button']")
    WebElement _registerBtn;

    @FindBy(xpath = "//span[@class='field-validation-error']")
    WebElement _requiredFieldErrorText;


    public void verifyYourPersonalDetail(String yourPrsnlDetail) {
        Reporter.addStepLog("verify massage" + yourPrsnlDetail + "displayd Msg" + _textYourPersonalDetails.toString() + "<br>");
        verifyTextAssertMethod(_textYourPersonalDetails, yourPrsnlDetail);
        log.info("verify massage" + yourPrsnlDetail + "displayd Msg" + _textYourPersonalDetails.toString());
    }

    public void selectmaleGenderRadioButton() {
        Reporter.addStepLog("select male gender btn :" + _maleGenderRadioBtn.toString() + "<br>");
        radioButtonClick(_maleGenderRadioBtn);
        log.info("select male gender btn :" + _maleGenderRadioBtn.toString());

    }

    public void selectFemaleGenderRadioButton() {
        Reporter.addStepLog("select female gender btn :" + _femaleGenderRadioBtn.toString() + "<br>");
        radioButtonClick(_femaleGenderRadioBtn);
        log.info("select female gender btn :" + _femaleGenderRadioBtn.toString());

    }

    public void enterTextToFirstNameField(String strFirstName) {
        Reporter.addStepLog("enter firstname" + strFirstName + "to the field " + _firstNameField.toString() + "<br>");
        sendTextToElement(_firstNameField, strFirstName);
        log.info("enter firstname" + strFirstName + "to the field " + _firstNameField.toString());

    }

    public void enterTextToLastNameField(String strLastName) {
        Reporter.addStepLog("enter lastname" + strLastName + "to the field" + _lastNameField.toString() + "<br>");
        sendTextToElement(_lastNameField, strLastName);
        log.info("enter lastname" + strLastName + "to the field" + _lastNameField.toString());
    }

    public void selectDayDOBFromDropDownMenu(String day) {
        Reporter.addStepLog("select day" + _dayOfBirth.toString() + "<br>");
        selectByVisibleTextFromDropDown(_dayOfBirth, day);
        log.info("select day" + _dayOfBirth.toString());
    }

    public void selectMonthDOBFromDropDownMenu(String month) {
        Reporter.addStepLog("select month" + _monthOfBirth.toString() + "<br>");
        selectByVisibleTextFromDropDown(_monthOfBirth, month);
        log.info("select month" + _monthOfBirth.toString());
    }

    public void selectYearDOBFromDropDownMenu(String year) {
        Reporter.addStepLog("selecct year" + _yearOfBirth.toString() + "<br>");
        selectByValueFromDropDown(_yearOfBirth, year);
        log.info("selecct year" + _yearOfBirth.toString());
    }

    public void enterTextToEmailField(String ragEmail) {
        //String ragEmail = "ram" + getRandomString(5) + "@yahoo.com";
        Reporter.addStepLog("enter email" + ragEmail + "to email filed" + _emailField.toString() + "<br>");
        sendTextToElement(_emailField, ragEmail);
        log.info("enter email" + ragEmail + "to email filed" + _emailField.toString());
    }
    public void enterRandomEmailToEmailField() {
        String ragEmail = "ram" + getRandomString(5) + "@gmail.com";
        Reporter.addStepLog("enter email" + ragEmail + "to email filed" + _emailField.toString() + "<br>");
        sendTextToElement(_emailField, ragEmail);
        log.info("enter email" + ragEmail + "to email filed" + _emailField.toString());
    }

    public void enterTextToCompanyField(String strCompanyName) {
        Reporter.addStepLog("enter comapny name" + strCompanyName + "to company field" + _companyNameField.toString() + "<br>");
        sendTextToElement(_companyNameField, strCompanyName);
        log.info("enter comapny name" + strCompanyName + "to company field" + _companyNameField.toString());
    }

    public void selectNewsLetterCheckBox() {
        Reporter.addStepLog("select news letter box" + _newsLtrCheckBox.toString() + "<br>");
        elementIsSelected(_newsLtrCheckBox);
        log.info("select news letter box" + _newsLtrCheckBox.toString());
    }

    public void enterTextToPasswordField(String strPassword) {
        Reporter.addStepLog("enter password" + strPassword + "to field" + _passwordField.toString() + "<br>");
        sendTextToElement(_passwordField, strPassword);
        log.info("enter password" + strPassword + "to field" + _passwordField.toString());
    }

    public void enterTextToConfirmPasswordField(String strPassword) {
        Reporter.addStepLog("enter confirm passwrod" + strPassword + "to the field" + _confPasswordField.toString() + "<br>");
        sendTextToElement(_confPasswordField, strPassword);
        log.info("enter confirm passwrod" + strPassword + "to the field" + _confPasswordField.toString());
    }

    public void clickOnRegisterButton() {
        Reporter.addStepLog("click on register"+_registerBtn.toString()+"<br>");
        clickOnElement(_registerBtn);
        log.info("click on register"+_registerBtn.toString());
    }
    public void verifyRequiredFieldErrorText(String errMsg) {
        Reporter.addStepLog("Verify text: " + errMsg + " when * marked mandatory fields are left empty " + _requiredFieldErrorText.toString());
        waitUntilElementToBeClickable(_requiredFieldErrorText, 20);
        verifyTextAssertMethod(_requiredFieldErrorText, errMsg);
        log.info("Verify text: " + errMsg + " when * marked mandatory fields are left empty " + _requiredFieldErrorText.toString());
    }



//    public void fillTheRegistrationForm(String strFirstName,  String strLastName, String day, String month, String year, String email, String strCompanyName, String strPassword){
//        enterTextToFirstNameField(strFirstName);
//        enterTextToLastNameField(strLastName);
//        selectDayDOBFromDropDownMenu(day);
//        selectMonthDOBFromDropDownMenu(month);
//        selectYearDOBFromDropDownMenu(year);
//        enterTextToEmailField(email);
//        enterTextToCompanyField(strCompanyName);
//        selectNewsLetterCheckBox();
//        enterTextToPasswordField(strPassword);
//        enterTextToConfirmPasswordField(strPassword);
//        clickOnRegisterButton();
//    }


}
