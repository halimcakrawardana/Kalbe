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
  Then Click Department LOB button
  Then Click Create New button
  Then Input LOB
  Then Input LOB Description
  Then Input COA Segment 2
  Then Input COA Segment 4
  Then Input COA Segment 6
  Then Click Create
  Then Verify Success