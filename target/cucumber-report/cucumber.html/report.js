$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/com/demo/nopcom/resources/featurefiles/books.feature");
formatter.feature({
  "line": 1,
  "name": "Book Feature",
  "description": "\r\nAs a user I want to view products on Books page",
  "id": "book-feature",
  "keyword": "Feature"
});
formatter.before({
  "duration": 73337307300,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "User should navigate to Book page successfully",
  "description": "",
  "id": "book-feature;user-should-navigate-to-book-page-successfully",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "I am on Home page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I click on Book Link",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I should navigate to Book page successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.iAmOnHomePage()"
});
formatter.result({
  "duration": 369806300,
  "status": "passed"
});
formatter.match({
  "location": "BooksSteps.iClickOnBookLink()"
});
formatter.result({
  "duration": 3254334100,
  "status": "passed"
});
formatter.match({
  "location": "BooksSteps.iShouldNavigateToBookPageSuccessfully()"
});
formatter.result({
  "duration": 194789300,
  "status": "passed"
});
formatter.after({
  "duration": 2072228900,
  "status": "passed"
});
formatter.before({
  "duration": 16212679900,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "User should see results on Book page sorted by AtoZ",
  "description": "",
  "id": "book-feature;user-should-see-results-on-book-page-sorted-by-atoz",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 11,
  "name": "I am on Home page",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "I click on Book Link",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I sort books by Name: A to Z",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I should see the products displayed on the books page sorted by alphabetic order",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.iAmOnHomePage()"
});
formatter.result({
  "duration": 650400,
  "status": "passed"
});
formatter.match({
  "location": "BooksSteps.iClickOnBookLink()"
});
formatter.result({
  "duration": 2102179100,
  "status": "passed"
});
formatter.match({
  "location": "BooksSteps.iSortBooksByNameAToZ()"
});
formatter.result({
  "duration": 2678486000,
  "status": "passed"
});
formatter.match({
  "location": "BooksSteps.iShouldSeeTheProductsDisplayedOnTheBooksPageSortedByAlphabeticOrder()"
});
formatter.result({
  "duration": 32500,
  "status": "passed"
});
formatter.after({
  "duration": 859775100,
  "status": "passed"
});
formatter.before({
  "duration": 64910626600,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "User should see prices on Books page sorted by LowToHigh",
  "description": "",
  "id": "book-feature;user-should-see-prices-on-books-page-sorted-by-lowtohigh",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 17,
  "name": "I am on Home page",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "I click on Book Link",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "I sort books by Price: Low to High",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I should see the products displayed on the books page sorted by prices in ascending order",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.iAmOnHomePage()"
});
formatter.result({
  "duration": 568300,
  "status": "passed"
});
formatter.match({
  "location": "BooksSteps.iClickOnBookLink()"
});
formatter.result({
  "duration": 2422245700,
  "status": "passed"
});
formatter.match({
  "location": "BooksSteps.iSortBooksByPriceLowToHigh()"
});
formatter.result({
  "duration": 1708493400,
  "status": "passed"
});
formatter.match({
  "location": "BooksSteps.iShouldSeeTheProductsDisplayedOnTheBooksPageSortedByPricesInAscendingOrder()"
});
formatter.result({
  "duration": 35500,
  "status": "passed"
});
formatter.after({
  "duration": 903827000,
  "status": "passed"
});
formatter.uri("src/test/java/com/demo/nopcom/resources/featurefiles/computer.feature");
formatter.feature({
  "line": 1,
  "name": "Computer feature",
  "description": "\r\nAs a user I want to navigate to computer Page and select a product successfully",
  "id": "computer-feature",
  "keyword": "Feature"
});
formatter.before({
  "duration": 15033476600,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "As a user I want to navigate to computer page successfully",
  "description": "",
  "id": "computer-feature;as-a-user-i-want-to-navigate-to-computer-page-successfully",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "I am on Home page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I click on Computer link",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I navigate to computer page successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.iAmOnHomePage()"
});
formatter.result({
  "duration": 511700,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iClickOnComputerLink()"
});
formatter.result({
  "duration": 876863600,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iNavigateToComputerPageSuccessfully()"
});
formatter.result({
  "duration": 468975500,
  "status": "passed"
});
formatter.after({
  "duration": 861605700,
  "status": "passed"
});
formatter.before({
  "duration": 13121463300,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "As a user I want to select Build my own Computer product successfully",
  "description": "",
  "id": "computer-feature;as-a-user-i-want-to-select-build-my-own-computer-product-successfully",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 11,
  "name": "I am on Home page",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "I click on Computer link",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I navigate to computer page successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "I click on desktop link",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I select build your own computer",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I select HDD",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I click on add to cart",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "The product is added successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.iAmOnHomePage()"
});
formatter.result({
  "duration": 598500,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iClickOnComputerLink()"
});
formatter.result({
  "duration": 922715800,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iNavigateToComputerPageSuccessfully()"
});
formatter.result({
  "duration": 85947600,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iClickOnDesktopLink()"
});
formatter.result({
  "duration": 137346400,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iSelectBuildYourOwnComputer()"
});
formatter.result({
  "duration": 20756230000,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//a[contains(text(),\u0027Build your own computer\u0027)]\"}\n  (Session info: chrome\u003d81.0.4044.122)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-59P8T20\u0027, ip: \u0027192.168.43.144\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 81.0.4044.122, chrome: {chromedriverVersion: 80.0.3987.106 (f68069574609..., userDataDir: C:\\Users\\HP\\AppData\\Local\\T...}, goog:chromeOptions: {debuggerAddress: localhost:53973}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: f3bcfda67c96c0997d0b8de9851f64dd\n*** Element info: {Using\u003dxpath, value\u003d//a[contains(text(),\u0027Build your own computer\u0027)]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy19.click(Unknown Source)\r\n\tat com.demo.nopcom.utility.UtilityRM.clickOnElement(UtilityRM.java:38)\r\n\tat com.demo.nopcom.pages.DesktopPage.clickOnBuildOnYourComputer(DesktopPage.java:23)\r\n\tat com.demo.nopcom.cucumber.stepdefs.ComputerSteps.iSelectBuildYourOwnComputer(ComputerSteps.java:36)\r\n\tat ✽.And I select build your own computer(src/test/java/com/demo/nopcom/resources/featurefiles/computer.feature:15)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "ComputerSteps.iSelectHDD()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ComputerSteps.iClickOnAddToCart()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ComputerSteps.theProductIsAddedSuccessfully()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 1616865100,
  "status": "passed"
});
formatter.uri("src/test/java/com/demo/nopcom/resources/featurefiles/login.feature");
formatter.feature({
  "line": 1,
  "name": "Login Feature",
  "description": "\r\nAs a user I want to login to my nop commerce account",
  "id": "login-feature",
  "keyword": "Feature"
});
formatter.before({
  "duration": 17771574900,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "User should navigate to Login page successfully",
  "description": "",
  "id": "login-feature;user-should-navigate-to-login-page-successfully",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "I am on Home page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I click on Login Link",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I should navigate to Login page successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.iAmOnHomePage()"
});
formatter.result({
  "duration": 352400,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iClickOnLoginLink()"
});
formatter.result({
  "duration": 5074366100,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iShouldNavigateToLoginPageSuccessfully()"
});
formatter.result({
  "duration": 148215200,
  "status": "passed"
});
formatter.after({
  "duration": 1643299100,
  "status": "passed"
});
formatter.before({
  "duration": 12531939700,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "User should Login successfully with valid credentials",
  "description": "",
  "id": "login-feature;user-should-login-successfully-with-valid-credentials",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 11,
  "name": "I am on Home page",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "I click on Login Link",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I enter email \"ram444@yahoo.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I enter password \"london4\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I click on Login button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I should Login successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.iAmOnHomePage()"
});
formatter.result({
  "duration": 639500,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iClickOnLoginLink()"
});
formatter.result({
  "duration": 1287949600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ram444@yahoo.com",
      "offset": 15
    }
  ],
  "location": "MyStepdefs.iEnterEmail(String)"
});
formatter.result({
  "duration": 514924500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "london4",
      "offset": 18
    }
  ],
  "location": "MyStepdefs.iEnterPassword(String)"
});
formatter.result({
  "duration": 479247500,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iClickOnLoginButton()"
});
formatter.result({
  "duration": 11618382200,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iShouldLoginSuccessfully()"
});
formatter.result({
  "duration": 244936400,
  "status": "passed"
});
formatter.after({
  "duration": 1162525100,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 18,
  "name": "User should Login successfully with valid credentials",
  "description": "",
  "id": "login-feature;user-should-login-successfully-with-valid-credentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 19,
  "name": "I am on Home page",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "I click on Login Link",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "I enter email \"\u003cemail\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I enter password \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I click on Login button",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "I should Login successfully",
  "keyword": "Then "
});
formatter.examples({
  "line": 25,
  "name": "",
  "description": "",
  "id": "login-feature;user-should-login-successfully-with-valid-credentials;",
  "rows": [
    {
      "cells": [
        "email",
        "password"
      ],
      "line": 26,
      "id": "login-feature;user-should-login-successfully-with-valid-credentials;;1"
    },
    {
      "cells": [
        "ram444@yahoo.com",
        "london4"
      ],
      "line": 27,
      "id": "login-feature;user-should-login-successfully-with-valid-credentials;;2"
    },
    {
      "cells": [
        "ram555@yahoo.com",
        "london5"
      ],
      "line": 28,
      "id": "login-feature;user-should-login-successfully-with-valid-credentials;;3"
    },
    {
      "cells": [
        "xyz13@gmail.com",
        "abc123"
      ],
      "line": 29,
      "id": "login-feature;user-should-login-successfully-with-valid-credentials;;4"
    },
    {
      "cells": [
        "xyz1@gmail.com",
        "abc1234"
      ],
      "line": 30,
      "id": "login-feature;user-should-login-successfully-with-valid-credentials;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 37563373900,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "User should Login successfully with valid credentials",
  "description": "",
  "id": "login-feature;user-should-login-successfully-with-valid-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 19,
  "name": "I am on Home page",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "I click on Login Link",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "I enter email \"ram444@yahoo.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I enter password \"london4\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I click on Login button",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "I should Login successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.iAmOnHomePage()"
});
formatter.result({
  "duration": 1274900,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iClickOnLoginLink()"
});
formatter.result({
  "duration": 1488138100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ram444@yahoo.com",
      "offset": 15
    }
  ],
  "location": "MyStepdefs.iEnterEmail(String)"
});
formatter.result({
  "duration": 119292100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "london4",
      "offset": 18
    }
  ],
  "location": "MyStepdefs.iEnterPassword(String)"
});
formatter.result({
  "duration": 162827000,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iClickOnLoginButton()"
});
formatter.result({
  "duration": 129136700,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iShouldLoginSuccessfully()"
});
formatter.result({
  "duration": 30665231500,
  "error_message": "org.openqa.selenium.TimeoutException: Expected condition failed: waiting for element to be clickable: Proxy element for: DefaultElementLocator \u0027By.xpath: //a[@class\u003d\u0027ico-account\u0027]\u0027 (tried for 20 second(s) with 500 milliseconds interval)\r\n\tat org.openqa.selenium.support.ui.WebDriverWait.timeoutException(WebDriverWait.java:95)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:272)\r\n\tat com.demo.nopcom.utility.UtilityRM.waitUntilElementToBeClickable(UtilityRM.java:365)\r\n\tat com.demo.nopcom.pages.AccountPage.verifyMyAccountText(AccountPage.java:22)\r\n\tat com.demo.nopcom.cucumber.stepdefs.MyStepdefs.iShouldLoginSuccessfully(MyStepdefs.java:52)\r\n\tat ✽.Then I should Login successfully(src/test/java/com/demo/nopcom/resources/featurefiles/login.feature:24)\r\nCaused by: org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//a[@class\u003d\u0027ico-account\u0027]\"}\n  (Session info: chrome\u003d81.0.4044.122)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-59P8T20\u0027, ip: \u0027192.168.43.144\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 81.0.4044.122, chrome: {chromedriverVersion: 80.0.3987.106 (f68069574609..., userDataDir: C:\\Users\\HP\\AppData\\Local\\T...}, goog:chromeOptions: {debuggerAddress: localhost:54049}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 00b114f43ee59829fdad04a42c098283\n*** Element info: {Using\u003dxpath, value\u003d//a[@class\u003d\u0027ico-account\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy19.isDisplayed(Unknown Source)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.elementIfVisible(ExpectedConditions.java:314)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.access$000(ExpectedConditions.java:43)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$10.apply(ExpectedConditions.java:300)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$10.apply(ExpectedConditions.java:297)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$23.apply(ExpectedConditions.java:670)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$23.apply(ExpectedConditions.java:666)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:249)\r\n\tat com.demo.nopcom.utility.UtilityRM.waitUntilElementToBeClickable(UtilityRM.java:365)\r\n\tat com.demo.nopcom.pages.AccountPage.verifyMyAccountText(AccountPage.java:22)\r\n\tat com.demo.nopcom.cucumber.stepdefs.MyStepdefs.iShouldLoginSuccessfully(MyStepdefs.java:52)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.ExamplesRunner.run(ExamplesRunner.java:59)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.ScenarioOutlineRunner.run(ScenarioOutlineRunner.java:53)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.internal.runners.statements.RunAfters.evaluate(RunAfters.java:27)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\r\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:68)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:33)\r\n\tat com.intellij.rt.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:230)\r\n\tat com.intellij.rt.junit.JUnitStarter.main(JUnitStarter.java:58)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 1290770600,
  "status": "passed"
});
formatter.before({
  "duration": 13251690100,
  "status": "passed"
});
formatter.scenario({
  "line": 28,
  "name": "User should Login successfully with valid credentials",
  "description": "",
  "id": "login-feature;user-should-login-successfully-with-valid-credentials;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 19,
  "name": "I am on Home page",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "I click on Login Link",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "I enter email \"ram555@yahoo.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I enter password \"london5\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I click on Login button",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "I should Login successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.iAmOnHomePage()"
});
formatter.result({
  "duration": 481200,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iClickOnLoginLink()"
});
formatter.result({
  "duration": 1557195100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ram555@yahoo.com",
      "offset": 15
    }
  ],
  "location": "MyStepdefs.iEnterEmail(String)"
});
formatter.result({
  "duration": 205317900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "london5",
      "offset": 18
    }
  ],
  "location": "MyStepdefs.iEnterPassword(String)"
});
formatter.result({
  "duration": 136588300,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iClickOnLoginButton()"
});
formatter.result({
  "duration": 12380318700,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iShouldLoginSuccessfully()"
});
formatter.result({
  "duration": 332133200,
  "status": "passed"
});
formatter.after({
  "duration": 1175308800,
  "status": "passed"
});
formatter.before({
  "duration": 13013990800,
  "status": "passed"
});
formatter.scenario({
  "line": 29,
  "name": "User should Login successfully with valid credentials",
  "description": "",
  "id": "login-feature;user-should-login-successfully-with-valid-credentials;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 19,
  "name": "I am on Home page",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "I click on Login Link",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "I enter email \"xyz13@gmail.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I enter password \"abc123\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I click on Login button",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "I should Login successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.iAmOnHomePage()"
});
formatter.result({
  "duration": 668500,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iClickOnLoginLink()"
});
formatter.result({
  "duration": 1803005500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "xyz13@gmail.com",
      "offset": 15
    }
  ],
  "location": "MyStepdefs.iEnterEmail(String)"
});
formatter.result({
  "duration": 129026400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abc123",
      "offset": 18
    }
  ],
  "location": "MyStepdefs.iEnterPassword(String)"
});
formatter.result({
  "duration": 155869000,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iClickOnLoginButton()"
});
formatter.result({
  "duration": 138649900,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iShouldLoginSuccessfully()"
});
formatter.result({
  "duration": 30681800400,
  "error_message": "org.openqa.selenium.TimeoutException: Expected condition failed: waiting for element to be clickable: Proxy element for: DefaultElementLocator \u0027By.xpath: //a[@class\u003d\u0027ico-account\u0027]\u0027 (tried for 20 second(s) with 500 milliseconds interval)\r\n\tat org.openqa.selenium.support.ui.WebDriverWait.timeoutException(WebDriverWait.java:95)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:272)\r\n\tat com.demo.nopcom.utility.UtilityRM.waitUntilElementToBeClickable(UtilityRM.java:365)\r\n\tat com.demo.nopcom.pages.AccountPage.verifyMyAccountText(AccountPage.java:22)\r\n\tat com.demo.nopcom.cucumber.stepdefs.MyStepdefs.iShouldLoginSuccessfully(MyStepdefs.java:52)\r\n\tat ✽.Then I should Login successfully(src/test/java/com/demo/nopcom/resources/featurefiles/login.feature:24)\r\nCaused by: org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//a[@class\u003d\u0027ico-account\u0027]\"}\n  (Session info: chrome\u003d81.0.4044.122)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-59P8T20\u0027, ip: \u0027192.168.43.144\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 81.0.4044.122, chrome: {chromedriverVersion: 80.0.3987.106 (f68069574609..., userDataDir: C:\\Users\\HP\\AppData\\Local\\T...}, goog:chromeOptions: {debuggerAddress: localhost:54104}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 1b392ceb16ab26326afe630473b3d4d0\n*** Element info: {Using\u003dxpath, value\u003d//a[@class\u003d\u0027ico-account\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy19.isDisplayed(Unknown Source)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.elementIfVisible(ExpectedConditions.java:314)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.access$000(ExpectedConditions.java:43)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$10.apply(ExpectedConditions.java:300)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$10.apply(ExpectedConditions.java:297)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$23.apply(ExpectedConditions.java:670)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$23.apply(ExpectedConditions.java:666)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:249)\r\n\tat com.demo.nopcom.utility.UtilityRM.waitUntilElementToBeClickable(UtilityRM.java:365)\r\n\tat com.demo.nopcom.pages.AccountPage.verifyMyAccountText(AccountPage.java:22)\r\n\tat com.demo.nopcom.cucumber.stepdefs.MyStepdefs.iShouldLoginSuccessfully(MyStepdefs.java:52)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.ExamplesRunner.run(ExamplesRunner.java:59)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.ScenarioOutlineRunner.run(ScenarioOutlineRunner.java:53)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.internal.runners.statements.RunAfters.evaluate(RunAfters.java:27)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\r\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:68)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:33)\r\n\tat com.intellij.rt.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:230)\r\n\tat com.intellij.rt.junit.JUnitStarter.main(JUnitStarter.java:58)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 1390849500,
  "status": "passed"
});
formatter.before({
  "duration": 15412135000,
  "status": "passed"
});
formatter.scenario({
  "line": 30,
  "name": "User should Login successfully with valid credentials",
  "description": "",
  "id": "login-feature;user-should-login-successfully-with-valid-credentials;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 19,
  "name": "I am on Home page",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "I click on Login Link",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "I enter email \"xyz1@gmail.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I enter password \"abc1234\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I click on Login button",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "I should Login successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.iAmOnHomePage()"
});
formatter.result({
  "duration": 375700,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iClickOnLoginLink()"
});
formatter.result({
  "duration": 1373757800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "xyz1@gmail.com",
      "offset": 15
    }
  ],
  "location": "MyStepdefs.iEnterEmail(String)"
});
formatter.result({
  "duration": 124898400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abc1234",
      "offset": 18
    }
  ],
  "location": "MyStepdefs.iEnterPassword(String)"
});
formatter.result({
  "duration": 112494400,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iClickOnLoginButton()"
});
formatter.result({
  "duration": 140301900,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iShouldLoginSuccessfully()"
});
formatter.result({
  "duration": 30629342200,
  "error_message": "org.openqa.selenium.TimeoutException: Expected condition failed: waiting for element to be clickable: Proxy element for: DefaultElementLocator \u0027By.xpath: //a[@class\u003d\u0027ico-account\u0027]\u0027 (tried for 20 second(s) with 500 milliseconds interval)\r\n\tat org.openqa.selenium.support.ui.WebDriverWait.timeoutException(WebDriverWait.java:95)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:272)\r\n\tat com.demo.nopcom.utility.UtilityRM.waitUntilElementToBeClickable(UtilityRM.java:365)\r\n\tat com.demo.nopcom.pages.AccountPage.verifyMyAccountText(AccountPage.java:22)\r\n\tat com.demo.nopcom.cucumber.stepdefs.MyStepdefs.iShouldLoginSuccessfully(MyStepdefs.java:52)\r\n\tat ✽.Then I should Login successfully(src/test/java/com/demo/nopcom/resources/featurefiles/login.feature:24)\r\nCaused by: org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//a[@class\u003d\u0027ico-account\u0027]\"}\n  (Session info: chrome\u003d81.0.4044.122)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-59P8T20\u0027, ip: \u0027192.168.43.144\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 81.0.4044.122, chrome: {chromedriverVersion: 80.0.3987.106 (f68069574609..., userDataDir: C:\\Users\\HP\\AppData\\Local\\T...}, goog:chromeOptions: {debuggerAddress: localhost:54132}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 81291cb36f91e0629d9195e9a8a88e9c\n*** Element info: {Using\u003dxpath, value\u003d//a[@class\u003d\u0027ico-account\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy19.isDisplayed(Unknown Source)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.elementIfVisible(ExpectedConditions.java:314)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.access$000(ExpectedConditions.java:43)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$10.apply(ExpectedConditions.java:300)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$10.apply(ExpectedConditions.java:297)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$23.apply(ExpectedConditions.java:670)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$23.apply(ExpectedConditions.java:666)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:249)\r\n\tat com.demo.nopcom.utility.UtilityRM.waitUntilElementToBeClickable(UtilityRM.java:365)\r\n\tat com.demo.nopcom.pages.AccountPage.verifyMyAccountText(AccountPage.java:22)\r\n\tat com.demo.nopcom.cucumber.stepdefs.MyStepdefs.iShouldLoginSuccessfully(MyStepdefs.java:52)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.ExamplesRunner.run(ExamplesRunner.java:59)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.ScenarioOutlineRunner.run(ScenarioOutlineRunner.java:53)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.internal.runners.statements.RunAfters.evaluate(RunAfters.java:27)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\r\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:68)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:33)\r\n\tat com.intellij.rt.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:230)\r\n\tat com.intellij.rt.junit.JUnitStarter.main(JUnitStarter.java:58)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 1762795700,
  "status": "passed"
});
formatter.uri("src/test/java/com/demo/nopcom/resources/featurefiles/registration.feature");
formatter.feature({
  "line": 1,
  "name": "Registration Feature",
  "description": "\r\nAs a user I want to register an account on nop commerce website\r\n\r\nScenario : User should navigate to Register page successfully\r\n  Given   I am on Home page\r\n  When    I click on Register Link\r\n  Then    I should navigate to Register page successfully\r\n\r\nScenario : User should Register and create an account successfully\r\n  Given   I am on Home page\r\n  When    I click on Register Link\r\n  And     I enter first name \"Ram\"\r\n  And     I enter last name \"Raghu\"\r\n  And     I enter day \"11\"\r\n  And     I enter month \"May\"\r\n  And     I enter year \"1980\"\r\n  And     I enter random email address\r\n  And     I enter company name \"cucumber test\"\r\n  And     I enter register password \"london\"\r\n  And     I enter register confirm password \"london\"\r\n  And     I click on Register button\r\n  Then    I should be able to Register and create an account successfully",
  "id": "registration-feature",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 25,
  "name": "Verify error message when user tries to register account without entering first name",
  "description": "",
  "id": "registration-feature;verify-error-message-when-user-tries-to-register-account-without-entering-first-name",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 26,
  "name": "I am on Home page",
  "keyword": "Given "
});
formatter.step({
  "line": 27,
  "name": "I click on Register Link",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "I enter last name \"\u003clast name\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I enter day \"\u003cday\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I enter month \"\u003cmonth\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I enter year \"\u003cyear\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I enter email address \"\u003cemail\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I enter company name \"\u003ccompany name\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I enter register password \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I enter register confirm password \"\u003cconfirm password\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "I click on Register button",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "I should see the error message \"\u003cerrorMessage\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 39,
  "name": "",
  "description": "",
  "id": "registration-feature;verify-error-message-when-user-tries-to-register-account-without-entering-first-name;",
  "rows": [
    {
      "cells": [
        "last name",
        "day",
        "month",
        "year",
        "email",
        "company name",
        "password",
        "confirm password",
        "errorMessage"
      ],
      "line": 41,
      "id": "registration-feature;verify-error-message-when-user-tries-to-register-account-without-entering-first-name;;1"
    },
    {
      "cells": [
        "Shah",
        "12",
        "February",
        "2004",
        "ydhisthir@gmail.com",
        "Agni",
        "tana",
        "tana",
        "First name is required."
      ],
      "line": 42,
      "id": "registration-feature;verify-error-message-when-user-tries-to-register-account-without-entering-first-name;;2"
    },
    {
      "cells": [
        "Sheth",
        "18",
        "May",
        "2005",
        "bhim@gmail.com",
        "Vayu",
        "timbi",
        "timbi",
        "First name is required."
      ],
      "line": 43,
      "id": "registration-feature;verify-error-message-when-user-tries-to-register-account-without-entering-first-name;;3"
    },
    {
      "cells": [
        "Shukla",
        "29",
        "November",
        "2006",
        "arjun@gmail.com",
        "jal",
        "bajud",
        "bajud",
        "First name is required."
      ],
      "line": 44,
      "id": "registration-feature;verify-error-message-when-user-tries-to-register-account-without-entering-first-name;;4"
    },
    {
      "cells": [
        "Sharma",
        "5",
        "February",
        "2007",
        "nakul@gmail.com",
        "Akash",
        "vartej",
        "vartej",
        "First name is required."
      ],
      "line": 45,
      "id": "registration-feature;verify-error-message-when-user-tries-to-register-account-without-entering-first-name;;5"
    },
    {
      "cells": [
        "Suchak",
        "5",
        "February",
        "2007",
        "sahdev@gmail.com",
        "Dharti",
        "shihor",
        "shihor",
        "First name is required."
      ],
      "line": 46,
      "id": "registration-feature;verify-error-message-when-user-tries-to-register-account-without-entering-first-name;;6"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 15037768400,
  "status": "passed"
});
formatter.scenario({
  "line": 42,
  "name": "Verify error message when user tries to register account without entering first name",
  "description": "",
  "id": "registration-feature;verify-error-message-when-user-tries-to-register-account-without-entering-first-name;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 26,
  "name": "I am on Home page",
  "keyword": "Given "
});
formatter.step({
  "line": 27,
  "name": "I click on Register Link",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "I enter last name \"Shah\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I enter day \"12\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I enter month \"February\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I enter year \"2004\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I enter email address \"ydhisthir@gmail.com\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I enter company name \"Agni\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I enter register password \"tana\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I enter register confirm password \"tana\"",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "I click on Register button",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "I should see the error message \"First name is required.\"",
  "matchedColumns": [
    8
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.iAmOnHomePage()"
});
formatter.result({
  "duration": 1196800,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationSteps.iClickOnRegisterLink()"
});
formatter.result({
  "duration": 870055200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Shah",
      "offset": 19
    }
  ],
  "location": "RegistrationSteps.iEnterLastName(String)"
});
formatter.result({
  "duration": 222584600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "12",
      "offset": 13
    }
  ],
  "location": "RegistrationSteps.iEnterDay(String)"
});
formatter.result({
  "duration": 590227000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "February",
      "offset": 15
    }
  ],
  "location": "RegistrationSteps.iEnterMonth(String)"
});
formatter.result({
  "duration": 183203900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2004",
      "offset": 14
    }
  ],
  "location": "RegistrationSteps.iEnterYear(String)"
});
formatter.result({
  "duration": 191113600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ydhisthir@gmail.com",
      "offset": 23
    }
  ],
  "location": "RegistrationSteps.iEnterEmailAddress(String)"
});
formatter.result({
  "duration": 321580000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Agni",
      "offset": 22
    }
  ],
  "location": "RegistrationSteps.iEnterCompanyName(String)"
});
formatter.result({
  "duration": 150667500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "tana",
      "offset": 27
    }
  ],
  "location": "RegistrationSteps.iEnterRegisterPassword(String)"
});
formatter.result({
  "duration": 179336200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "tana",
      "offset": 35
    }
  ],
  "location": "RegistrationSteps.iEnterRegisterConfirmPassword(String)"
});
formatter.result({
  "duration": 222976100,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationSteps.iClickOnRegisterButton()"
});
formatter.result({
  "duration": 209773600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "First name is required.",
      "offset": 32
    }
  ],
  "location": "RegistrationSteps.iShouldSeeTheErrorMessage(String)"
});
formatter.result({
  "duration": 244949900,
  "status": "passed"
});
formatter.after({
  "duration": 926290300,
  "status": "passed"
});
formatter.before({
  "duration": 14891677900,
  "status": "passed"
});
formatter.scenario({
  "line": 43,
  "name": "Verify error message when user tries to register account without entering first name",
  "description": "",
  "id": "registration-feature;verify-error-message-when-user-tries-to-register-account-without-entering-first-name;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 26,
  "name": "I am on Home page",
  "keyword": "Given "
});
formatter.step({
  "line": 27,
  "name": "I click on Register Link",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "I enter last name \"Sheth\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I enter day \"18\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I enter month \"May\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I enter year \"2005\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I enter email address \"bhim@gmail.com\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I enter company name \"Vayu\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I enter register password \"timbi\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I enter register confirm password \"timbi\"",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "I click on Register button",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "I should see the error message \"First name is required.\"",
  "matchedColumns": [
    8
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.iAmOnHomePage()"
});
formatter.result({
  "duration": 396900,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationSteps.iClickOnRegisterLink()"
});
formatter.result({
  "duration": 1512224000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sheth",
      "offset": 19
    }
  ],
  "location": "RegistrationSteps.iEnterLastName(String)"
});
formatter.result({
  "duration": 115078000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "18",
      "offset": 13
    }
  ],
  "location": "RegistrationSteps.iEnterDay(String)"
});
formatter.result({
  "duration": 215762400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "May",
      "offset": 15
    }
  ],
  "location": "RegistrationSteps.iEnterMonth(String)"
});
formatter.result({
  "duration": 276593200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2005",
      "offset": 14
    }
  ],
  "location": "RegistrationSteps.iEnterYear(String)"
});
formatter.result({
  "duration": 200495100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "bhim@gmail.com",
      "offset": 23
    }
  ],
  "location": "RegistrationSteps.iEnterEmailAddress(String)"
});
formatter.result({
  "duration": 199179200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Vayu",
      "offset": 22
    }
  ],
  "location": "RegistrationSteps.iEnterCompanyName(String)"
});
formatter.result({
  "duration": 178936700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "timbi",
      "offset": 27
    }
  ],
  "location": "RegistrationSteps.iEnterRegisterPassword(String)"
});
formatter.result({
  "duration": 165093200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "timbi",
      "offset": 35
    }
  ],
  "location": "RegistrationSteps.iEnterRegisterConfirmPassword(String)"
});
formatter.result({
  "duration": 162391100,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationSteps.iClickOnRegisterButton()"
});
formatter.result({
  "duration": 213331500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "First name is required.",
      "offset": 32
    }
  ],
  "location": "RegistrationSteps.iShouldSeeTheErrorMessage(String)"
});
formatter.result({
  "duration": 163040500,
  "status": "passed"
});
formatter.after({
  "duration": 1114174300,
  "status": "passed"
});
formatter.before({
  "duration": 14242926200,
  "status": "passed"
});
formatter.scenario({
  "line": 44,
  "name": "Verify error message when user tries to register account without entering first name",
  "description": "",
  "id": "registration-feature;verify-error-message-when-user-tries-to-register-account-without-entering-first-name;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 26,
  "name": "I am on Home page",
  "keyword": "Given "
});
formatter.step({
  "line": 27,
  "name": "I click on Register Link",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "I enter last name \"Shukla\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I enter day \"29\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I enter month \"November\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I enter year \"2006\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I enter email address \"arjun@gmail.com\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I enter company name \"jal\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I enter register password \"bajud\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I enter register confirm password \"bajud\"",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "I click on Register button",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "I should see the error message \"First name is required.\"",
  "matchedColumns": [
    8
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.iAmOnHomePage()"
});
formatter.result({
  "duration": 295300,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationSteps.iClickOnRegisterLink()"
});
formatter.result({
  "duration": 1498078700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Shukla",
      "offset": 19
    }
  ],
  "location": "RegistrationSteps.iEnterLastName(String)"
});
formatter.result({
  "duration": 119550100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "29",
      "offset": 13
    }
  ],
  "location": "RegistrationSteps.iEnterDay(String)"
});
formatter.result({
  "duration": 188133500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "November",
      "offset": 15
    }
  ],
  "location": "RegistrationSteps.iEnterMonth(String)"
});
formatter.result({
  "duration": 186504300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2006",
      "offset": 14
    }
  ],
  "location": "RegistrationSteps.iEnterYear(String)"
});
formatter.result({
  "duration": 186806900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "arjun@gmail.com",
      "offset": 23
    }
  ],
  "location": "RegistrationSteps.iEnterEmailAddress(String)"
});
formatter.result({
  "duration": 215636400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "jal",
      "offset": 22
    }
  ],
  "location": "RegistrationSteps.iEnterCompanyName(String)"
});
formatter.result({
  "duration": 135648800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "bajud",
      "offset": 27
    }
  ],
  "location": "RegistrationSteps.iEnterRegisterPassword(String)"
});
formatter.result({
  "duration": 130871900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "bajud",
      "offset": 35
    }
  ],
  "location": "RegistrationSteps.iEnterRegisterConfirmPassword(String)"
});
formatter.result({
  "duration": 139168000,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationSteps.iClickOnRegisterButton()"
});
formatter.result({
  "duration": 138335800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "First name is required.",
      "offset": 32
    }
  ],
  "location": "RegistrationSteps.iShouldSeeTheErrorMessage(String)"
});
formatter.result({
  "duration": 152255600,
  "status": "passed"
});
formatter.after({
  "duration": 833681500,
  "status": "passed"
});
formatter.before({
  "duration": 12748703700,
  "status": "passed"
});
formatter.scenario({
  "line": 45,
  "name": "Verify error message when user tries to register account without entering first name",
  "description": "",
  "id": "registration-feature;verify-error-message-when-user-tries-to-register-account-without-entering-first-name;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 26,
  "name": "I am on Home page",
  "keyword": "Given "
});
formatter.step({
  "line": 27,
  "name": "I click on Register Link",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "I enter last name \"Sharma\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I enter day \"5\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I enter month \"February\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I enter year \"2007\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I enter email address \"nakul@gmail.com\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I enter company name \"Akash\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I enter register password \"vartej\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I enter register confirm password \"vartej\"",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "I click on Register button",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "I should see the error message \"First name is required.\"",
  "matchedColumns": [
    8
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.iAmOnHomePage()"
});
formatter.result({
  "duration": 451900,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationSteps.iClickOnRegisterLink()"
});
formatter.result({
  "duration": 1684535900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sharma",
      "offset": 19
    }
  ],
  "location": "RegistrationSteps.iEnterLastName(String)"
});
formatter.result({
  "duration": 109676000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 13
    }
  ],
  "location": "RegistrationSteps.iEnterDay(String)"
});
formatter.result({
  "duration": 227871200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "February",
      "offset": 15
    }
  ],
  "location": "RegistrationSteps.iEnterMonth(String)"
});
formatter.result({
  "duration": 164267000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2007",
      "offset": 14
    }
  ],
  "location": "RegistrationSteps.iEnterYear(String)"
});
formatter.result({
  "duration": 212031100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "nakul@gmail.com",
      "offset": 23
    }
  ],
  "location": "RegistrationSteps.iEnterEmailAddress(String)"
});
formatter.result({
  "duration": 196118400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Akash",
      "offset": 22
    }
  ],
  "location": "RegistrationSteps.iEnterCompanyName(String)"
});
formatter.result({
  "duration": 144740500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "vartej",
      "offset": 27
    }
  ],
  "location": "RegistrationSteps.iEnterRegisterPassword(String)"
});
formatter.result({
  "duration": 136507000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "vartej",
      "offset": 35
    }
  ],
  "location": "RegistrationSteps.iEnterRegisterConfirmPassword(String)"
});
formatter.result({
  "duration": 146437300,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationSteps.iClickOnRegisterButton()"
});
formatter.result({
  "duration": 163792500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "First name is required.",
      "offset": 32
    }
  ],
  "location": "RegistrationSteps.iShouldSeeTheErrorMessage(String)"
});
formatter.result({
  "duration": 176485500,
  "status": "passed"
});
formatter.after({
  "duration": 803320200,
  "status": "passed"
});
formatter.before({
  "duration": 12888003500,
  "status": "passed"
});
formatter.scenario({
  "line": 46,
  "name": "Verify error message when user tries to register account without entering first name",
  "description": "",
  "id": "registration-feature;verify-error-message-when-user-tries-to-register-account-without-entering-first-name;;6",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 26,
  "name": "I am on Home page",
  "keyword": "Given "
});
formatter.step({
  "line": 27,
  "name": "I click on Register Link",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "I enter last name \"Suchak\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I enter day \"5\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I enter month \"February\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I enter year \"2007\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I enter email address \"sahdev@gmail.com\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I enter company name \"Dharti\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I enter register password \"shihor\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I enter register confirm password \"shihor\"",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "I click on Register button",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "I should see the error message \"First name is required.\"",
  "matchedColumns": [
    8
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.iAmOnHomePage()"
});
formatter.result({
  "duration": 859500,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationSteps.iClickOnRegisterLink()"
});
formatter.result({
  "duration": 1618830900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Suchak",
      "offset": 19
    }
  ],
  "location": "RegistrationSteps.iEnterLastName(String)"
});
formatter.result({
  "duration": 174572800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 13
    }
  ],
  "location": "RegistrationSteps.iEnterDay(String)"
});
formatter.result({
  "duration": 160902900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "February",
      "offset": 15
    }
  ],
  "location": "RegistrationSteps.iEnterMonth(String)"
});
formatter.result({
  "duration": 174898000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2007",
      "offset": 14
    }
  ],
  "location": "RegistrationSteps.iEnterYear(String)"
});
formatter.result({
  "duration": 210013300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "sahdev@gmail.com",
      "offset": 23
    }
  ],
  "location": "RegistrationSteps.iEnterEmailAddress(String)"
});
formatter.result({
  "duration": 215179500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Dharti",
      "offset": 22
    }
  ],
  "location": "RegistrationSteps.iEnterCompanyName(String)"
});
formatter.result({
  "duration": 181217400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "shihor",
      "offset": 27
    }
  ],
  "location": "RegistrationSteps.iEnterRegisterPassword(String)"
});
formatter.result({
  "duration": 178921300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "shihor",
      "offset": 35
    }
  ],
  "location": "RegistrationSteps.iEnterRegisterConfirmPassword(String)"
});
formatter.result({
  "duration": 151585600,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationSteps.iClickOnRegisterButton()"
});
formatter.result({
  "duration": 182306500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "First name is required.",
      "offset": 32
    }
  ],
  "location": "RegistrationSteps.iShouldSeeTheErrorMessage(String)"
});
formatter.result({
  "duration": 173869900,
  "status": "passed"
});
formatter.after({
  "duration": 802881600,
  "status": "passed"
});
});