package com.demo.nopcom.cucumber.stepdefs;

import com.cucumber.listener.Reporter;
import com.demo.nopcom.pages.AccountPage;
import com.demo.nopcom.pages.HomePage;
import com.demo.nopcom.pages.LoginPage;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

/*
 * Ravi's Creation
 * Date of Creation
 */

// this page contains home page links to navigate certain pages

public class MyStepdefs {
    @Given("^I am on Home page$")
    public void iAmOnHomePage() {
        Reporter.addStepLog(" I am on Home Page ");
    }

    @When("^I click on Login Link$")
    public void iClickOnLoginLink() {
        new HomePage().clickOnLoginLink();
    }

    @Then("^I should navigate to Login page successfully$")
    public void iShouldNavigateToLoginPageSuccessfully() {
        new LoginPage().verifyWelcomeText("Welcome, Please Sign In!");
    }

    @And("^I enter email \"([^\"]*)\"$")
    public void iEnterEmail(String email)  {
        new LoginPage().enterEmailToField(email);
    }

    @And("^I enter password \"([^\"]*)\"$")
    public void iEnterPassword(String pwd)  {
       new LoginPage().enterPasswordToField(pwd);
    }

    @And("^I click on Login button$")
    public void iClickOnLoginButton() {
        new LoginPage().clickOnLoginSubmitBtn();
    }

    @Then("^I should Login successfully$")
    public void iShouldLoginSuccessfully() {
        new AccountPage().verifyMyAccountText("My account");
    }

    @And("^I enter “<email>” in the email field$")
    public void iEnterEmailInTheEmailField(String email) {
        new LoginPage().enterEmailToField(email);
    }


    // this method has background for log in page to click few buttons

    @And("^I enter “<password>” in the password field and I click on the Login button$")
    public void iEnterPasswordInThePasswordFieldAndIClickOnTheLoginButton(String password) {
        new LoginPage().enterPasswordToField(password);
        new LoginPage().clickOnLoginSubmitBtn();
    }

}
