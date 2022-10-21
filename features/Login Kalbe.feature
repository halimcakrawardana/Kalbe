Feature: Login

Scenario: Valid Login

  Given I open Kalbe login page
  When Click Login button
  Then Input User Name
  Then Wait for 3s
  Then Input Password
  Then Click Login
  And Wait for 3s