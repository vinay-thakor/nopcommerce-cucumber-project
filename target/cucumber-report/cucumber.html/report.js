$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/com/demo/nopcom/resources/featurefiles/login.feature");
formatter.feature({
  "line": 1,
  "name": "Login Feature",
  "description": "\r\nAs a user I want to login to my nop commerce account",
  "id": "login-feature",
  "keyword": "Feature"
});
formatter.before({
  "duration": 15461626600,
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
  "duration": 305256100,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iClickOnLoginLink()"
});
formatter.result({
  "duration": 2556920400,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iShouldNavigateToLoginPageSuccessfully()"
});
formatter.result({
  "duration": 99178500,
  "status": "passed"
});
formatter.after({
  "duration": 2185790800,
  "status": "passed"
});
formatter.before({
  "duration": 12523812100,
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
  "duration": 1603200,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iClickOnLoginLink()"
});
formatter.result({
  "duration": 2575475400,
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
  "duration": 930864200,
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
  "duration": 650493200,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iClickOnLoginButton()"
});
formatter.result({
  "duration": 13116490700,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iShouldLoginSuccessfully()"
});
formatter.result({
  "duration": 115448200,
  "status": "passed"
});
formatter.after({
  "duration": 773074600,
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
  "duration": 12427031600,
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
  "duration": 1500400,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iClickOnLoginLink()"
});
formatter.result({
  "duration": 1836423800,
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
  "duration": 379304700,
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
  "duration": 300905200,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iClickOnLoginButton()"
});
formatter.result({
  "duration": 11755726700,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iShouldLoginSuccessfully()"
});
formatter.result({
  "duration": 183283800,
  "status": "passed"
});
formatter.after({
  "duration": 2967111600,
  "status": "passed"
});
formatter.before({
  "duration": 13649737100,
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
  "duration": 4406900,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iClickOnLoginLink()"
});
formatter.result({
  "duration": 1264363200,
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
  "duration": 148888800,
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
  "duration": 206050000,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iClickOnLoginButton()"
});
formatter.result({
  "duration": 155940600,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iShouldLoginSuccessfully()"
});
formatter.result({
  "duration": 20056549900,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//a[@class\u003d\u0027ico-account\u0027]\"}\n  (Session info: chrome\u003d81.0.4044.122)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LENSESUK\u0027, ip: \u0027192.168.0.15\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 81.0.4044.122, chrome: {chromedriverVersion: 80.0.3987.106 (f68069574609..., userDataDir: C:\\Users\\LENSES~1\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:50345}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: ca780f440648533290bf4f7597ac8067\n*** Element info: {Using\u003dxpath, value\u003d//a[@class\u003d\u0027ico-account\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy19.getText(Unknown Source)\r\n\tat com.demo.nopcom.utility.UtilityRM.verifyTextAssertMethod(UtilityRM.java:394)\r\n\tat com.demo.nopcom.pages.AccountPage.verifyMyAccountText(AccountPage.java:23)\r\n\tat com.demo.nopcom.cucumber.stepdefs.MyStepdefs.iShouldLoginSuccessfully(MyStepdefs.java:52)\r\n\tat ✽.Then I should Login successfully(src/test/java/com/demo/nopcom/resources/featurefiles/login.feature:24)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 1217738700,
  "status": "passed"
});
formatter.before({
  "duration": 12493179500,
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
  "duration": 2510600,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iClickOnLoginLink()"
});
formatter.result({
  "duration": 1542549300,
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
  "duration": 149648900,
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
  "duration": 202411700,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iClickOnLoginButton()"
});
formatter.result({
  "duration": 213691000,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iShouldLoginSuccessfully()"
});
formatter.result({
  "duration": 20079378900,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//a[@class\u003d\u0027ico-account\u0027]\"}\n  (Session info: chrome\u003d81.0.4044.122)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LENSESUK\u0027, ip: \u0027192.168.0.15\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 81.0.4044.122, chrome: {chromedriverVersion: 80.0.3987.106 (f68069574609..., userDataDir: C:\\Users\\LENSES~1\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:50388}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 4e532a5d9597fa30b9708266dade28ee\n*** Element info: {Using\u003dxpath, value\u003d//a[@class\u003d\u0027ico-account\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy19.getText(Unknown Source)\r\n\tat com.demo.nopcom.utility.UtilityRM.verifyTextAssertMethod(UtilityRM.java:394)\r\n\tat com.demo.nopcom.pages.AccountPage.verifyMyAccountText(AccountPage.java:23)\r\n\tat com.demo.nopcom.cucumber.stepdefs.MyStepdefs.iShouldLoginSuccessfully(MyStepdefs.java:52)\r\n\tat ✽.Then I should Login successfully(src/test/java/com/demo/nopcom/resources/featurefiles/login.feature:24)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 1135254200,
  "status": "passed"
});
formatter.before({
  "duration": 12382850600,
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
  "duration": 2649000,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iClickOnLoginLink()"
});
formatter.result({
  "duration": 1962076400,
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
  "duration": 456360900,
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
  "duration": 257470400,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iClickOnLoginButton()"
});
formatter.result({
  "duration": 12241291200,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iShouldLoginSuccessfully()"
});
formatter.result({
  "duration": 118539000,
  "status": "passed"
});
formatter.after({
  "duration": 887554700,
  "status": "passed"
});
});