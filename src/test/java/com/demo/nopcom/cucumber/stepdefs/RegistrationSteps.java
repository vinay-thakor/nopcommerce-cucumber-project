package com.demo.nopcom.cucumber.stepdefs;

import com.demo.nopcom.pages.HomePage;
import com.demo.nopcom.pages.RegistrationCompletePage;
import com.demo.nopcom.pages.RegistrationPage;
import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

/*
 * Ravi's Creation
 * Date of Creation
 */

// this page is for registration details to fill
public class RegistrationSteps {
    @When("^I click on Register Link$")
    public void iClickOnRegisterLink() {
        new HomePage().clickOnRegistrationLink();
    }

    @Then("^I should navigate to Register page successfully$")
    public void iShouldNavigateToRegisterPageSuccessfully() {
        new RegistrationPage().verifyYourPersonalDetail("Your Personal Details");
    }

    @And("^I enter first name \"([^\"]*)\"$")
    public void iEnterFirstName(String firstname)  {
        new RegistrationPage().enterTextToFirstNameField(firstname);

    }

    @And("^I enter last name \"([^\"]*)\"$")
    public void iEnterLastName(String lastname)  {
        new RegistrationPage().enterTextToLastNameField(lastname);

    }

    @And("^I enter day \"([^\"]*)\"$")
    public void iEnterDay(String day)  {
        new RegistrationPage().selectDayDOBFromDropDownMenu(day);
    }

    @And("^I enter month \"([^\"]*)\"$")
    public void iEnterMonth(String month)  {
        new RegistrationPage().selectMonthDOBFromDropDownMenu(month);

    }

    @And("^I enter year \"([^\"]*)\"$")
    public void iEnterYear(String year)  {
        new RegistrationPage().selectYearDOBFromDropDownMenu(year);

    }

    @And("^I enter email address \"([^\"]*)\"$")
    public void iEnterEmailAddress(String email)  {
        new RegistrationPage().enterTextToEmailField(email);

    }

    @And("^I enter company name \"([^\"]*)\"$")
    public void iEnterCompanyName(String CompanyName)  {
        new RegistrationPage().enterTextToCompanyField(CompanyName);

    }

    @And("^I enter register password \"([^\"]*)\"$")
    public void iEnterRegisterPassword(String pwd)  {
        new RegistrationPage().enterTextToPasswordField(pwd);

    }

    @And("^I enter register confirm password \"([^\"]*)\"$")
    public void iEnterRegisterConfirmPassword(String pwd)  {
        new RegistrationPage().enterTextToConfirmPasswordField(pwd);

    }

    @And("^I click on Register button$")
    public void iClickOnRegisterButton() {
        new RegistrationPage().clickOnRegisterButton();
    }

    @Then("^I should be able to Register and create an account successfully$")
    public void iShouldBeAbleToRegisterAndCreateAnAccountSuccessfully() {
        new RegistrationCompletePage().verifyTextYourRegistrationCompleted("Your registration completed");
    }

    @Then("^I should see the error message \"([^\"]*)\"$")
    public void iShouldSeeTheErrorMessage(String errMsg)  {
        new RegistrationPage().verifyRequiredFieldErrorText(errMsg);

    }

    @And("^I enter random email address$")
    public void iEnterRandomEmailAddress() {
        new RegistrationPage().enterRandomEmailToEmailField();
    }
}
