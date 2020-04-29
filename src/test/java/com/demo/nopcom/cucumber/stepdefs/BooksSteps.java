package com.demo.nopcom.cucumber.stepdefs;

import com.demo.nopcom.pages.BooksPage;
import com.demo.nopcom.pages.HomePage;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

/*
 * Ravi's Creation
 * Date of Creation
 */

//  this page contains books catagory to be sorted out in A to Z and price low to high
public class BooksSteps {

    @When("^I click on Book Link$")
    public void iClickOnBookLink() {
        new HomePage().clickOnBooksLink();
    }

    @Then("^I should navigate to Book page successfully$")
    public void iShouldNavigateToBookPageSuccessfully() {
        new BooksPage().verifyBooksPageText("Books");
    }

    @And("^I sort books by Name: A to Z$")
    public void iSortBooksByNameAToZ() {
        new BooksPage().clickOnSortByAtoZ();
    }

    @Then("^I should see the products displayed on the books page sorted by alphabetic order$")
    public void iShouldSeeTheProductsDisplayedOnTheBooksPageSortedByAlphabeticOrder() {

    }

    @And("^I sort books by Price: Low to High$")
    public void iSortBooksByPriceLowToHigh() {
        new BooksPage().clickOnPriceLowToHigh();
    }

    @Then("^I should see the products displayed on the books page sorted by prices in ascending order$")
    public void iShouldSeeTheProductsDisplayedOnTheBooksPageSortedByPricesInAscendingOrder() {
    }
}
