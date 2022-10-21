const { client } = require('nightwatch-api');
const { Given, Then, When } = require('cucumber');

let username = 'michael.leonard'
let password = 'abc'

Given(/^I open Kalbe login page$/, () => {
  return client.url('https://pettycash.kalbenutritionals.web.id/').waitForElementVisible('body', 1000);
});

Then(/^Wait for 3s$/, () => {
  return client.pause(2000);
});

Then(/^Click Login button$/, () => {
  client.click("[href='/Account/Login']");
});

Then(/^Input User Name$/, () => {
  client.useXpath()
  client.sendKeys("//input[@id='txtUserName']", [username, client.Keys.TAB]);
});

Then(/^Input Password$/, () => {
  client.setValue("//input[@id='txtPassword']", [password]);
});

Then(/^Click Login$/, () => {
  client.click("//button[@name='btn']");
});
