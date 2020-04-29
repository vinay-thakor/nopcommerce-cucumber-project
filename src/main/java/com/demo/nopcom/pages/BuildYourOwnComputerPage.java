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
public class BuildYourOwnComputerPage extends UtilityRM {

    private static final Logger log = LogManager.getLogger(BuildYourOwnComputerPage.class.getName());

    @FindBy(id = "product_attribute_3_7")
    WebElement _hdd400GBRadioBtn;

    @FindBy(id = "add-to-cart-button-1")
    WebElement _addToCartBtn;

    @FindBy(xpath = "//p[@class='content']")
    WebElement _productAddedToCartText;


    public void clickOn400GBHarddrive() {
        Reporter.addStepLog("click on 400gb hdd" + _hdd400GBRadioBtn.toString() + "<br>");
        clickOnElement(_hdd400GBRadioBtn);
        log.info("click on 400gb hdd" + _hdd400GBRadioBtn.toString());
    }

    public void clickAddToCartButton() {
        Reporter.addStepLog("click on add to cart"+_addToCartBtn.toString()+"<br>");
        clickOnElement(_addToCartBtn);
        log.info("click on add to cart"+_addToCartBtn.toString());
    }

    public void assertProductAddSuccessfullyText(String str) {
        Reporter.addStepLog("verify text"+str+"is displayed "+_productAddedToCartText.toString());
        verifyText(_productAddedToCartText, "The product has been added to your shopping cart");
        log.info("verify text"+str+"is displayed "+_productAddedToCartText.toString());
    }
}
