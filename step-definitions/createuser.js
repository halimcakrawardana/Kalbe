const { client } = require('nightwatch-api');
const { Given, Then, When } = require('cucumber');

let userid = 'halim1'
let namauser = 'desc'
let nik = 'coa2'
let email = 'coa4'

Then(/^User Click Create New button$/, () => {
    client.click("//a[.='Create New']");
  });

Then(/^Input User ID$/, () => {
    client.setValue("//input[@id='User_txtUserID']", [userid]);
  });

  Then(/^Input Nama User$/, () => {
    client.setValue("//input[@id='User_txtNamaUser']", [namauser]);
  });
  
  Then(/^Input NIK$/, () => {
    client.setValue("//div[3]//input[@class='form-control text-uppercase']", [nik]);
  });

  Then(/^Input Email$/, () => {
    client.setValue("//input[@id='User_txtEmail']", [email]);
  });

  Then(/^Click Create$/, () => {
    client.click("//button[@class='btn btn-primary']");
  });

  Then(/^Verify Success$/, () => {
    client.isPresent('Master User', "//h2[.='Master User']");
  });
