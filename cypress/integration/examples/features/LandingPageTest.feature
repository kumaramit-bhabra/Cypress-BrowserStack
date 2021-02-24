Feature: Check the Landing Page and functionality associated with it
   This test suite describes validation of the landing page and user registeration

Scenario: Check the title of the Landing Page
   Given User is on the landing Page
   Then Title of the page should be correct

Scenario: Validate that binding example is having same value as name entered
   Given User is on the landing Page
   When User Enters the name
   Then Binding example should have the same value as name entered

Scenario: Validate the content and Layout of the page
   Given User is on the landing Page
   Then Validate the state of the page elements

Scenario: Validate the user is able to enter the details and submit the form
   Given User is on the landing Page
   And Fill up the Details for User Registration and Press Submit
   Then User should be successfully Registered