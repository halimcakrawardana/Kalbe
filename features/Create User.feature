Feature: User

Scenario: Create User

  Given I open Kalbe login page
  When Click Login button
  Then Input User Name
  Then Wait for 3s
  Then Input Password
  Then Click Login
  Then Wait for 3s
  Then Click Master button
  Then User Click Create New button
  Then Input User ID
  Then Input Nama User
  Then Input NIK
  Then Input Email
  Then Click Create
  Then Verify Success