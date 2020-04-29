package com.demo.nopcom.cucumber.stepdefs;

import com.demo.nopcom.pages.BuildYourOwnComputerPage;
import com.demo.nopcom.pages.ComputerPage;
import com.demo.nopcom.pages.DesktopPage;
import com.demo.nopcom.pages.HomePage;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

/*
 * Ravi's Creation
 * Date of Creation
 */

// this page contains building your own computer as srs

public class ComputerSteps {

    @When("^I click on Computer link$")
    public void iClickOnComputerLink() {
        new HomePage().clickOnComputerLink();
    }

    @Then("^I navigate to computer page successfully$")
    public void iNavigateToComputerPageSuccessfully() {
        new ComputerPage().assertComputerText("Computers");
    }
    @And("^I click on desktop link$")
    public void iClickOnDesktopLink() {
        new ComputerPage().clickOnDesktopButton();
    }

    @And("^I select build your own computer$")
    public void iSelectBuildYourOwnComputer() {
        new DesktopPage().clickOnBuildOnYourComputer();
    }

    @And("^I select HDD$")
    public void iSelectHDD() {
        new BuildYourOwnComputerPage().clickOn400GBHarddrive();
    }

    @And("^I click on add to cart$")
    public void iClickOnAddToCart() {
        new BuildYourOwnComputerPage().clickAddToCartButton();
    }

    @Then("^The product is added successfully$")
    public void theProductIsAddedSuccessfully() {
        new BuildYourOwnComputerPage().assertProductAddSuccessfullyText("The product has been added to your ");

    }

}
