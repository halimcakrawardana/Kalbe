const { client } = require('nightwatch-api');
const { Given, Then, When } = require('cucumber');

let LOB = 'LOB'
let description = 'desc'
let coasegment2 = 'coa2'
let coasegment4 = 'coa4'
let coasegment6= 'coa'

Given(/^Click Master button$/, () => {
    client.useXpath()
    client.click("//a[contains(.,'MASTER')]");
  });

Then(/^LOB Click Department LOB button$/, () => {
    client.click("//a[.='DEPARTMENT LOB']");
  });

Then(/^Click Create New button$/, () => {
    client.click("//a[.='Create New']");
  });

Then(/^Input LOB$/, () => {
    client.setValue("//input[@id='txtLOB']", [LOB]);
  });

  Then(/^Input LOB Description$/, () => {
    client.setValue("//input[@id='txtLOBDescription']", [description]);
  });
  
  Then(/^Input COA Segment 2$/, () => {
    client.setValue("//div[3]//input[@class='form-control text-uppercase']", [coasegment2]);
  });

  Then(/^Input COA Segment 4$/, () => {
    client.setValue("//div[4]//input[@class='form-control text-uppercase']", [coasegment4]);
  });

  Then(/^Input COA Segment 6$/, () => {
    client.setValue("//div[5]//input[@class='form-control text-uppercase']", [coasegment6]);
  });

  Then(/^Click Create$/, () => {
    client.click("//input[@name='btn']");
  });

  Then(/^Verify Success$/, () => {
    client.isPresent('Master Department LOB', "//h2[.='Master Department LOB']");
  });
