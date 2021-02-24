Feature: Check the Product Listing Page

    Feature Description


Scenario: Validate title of Product Listing Page
Then Title of the page should be correct

Scenario: Validate shopping bag should be empty
Then Shopping bag should be empty

Scenario: Validate user is able to add the single product to shopping bag
Given user add the following phone
    | iphone X|

Scenario: Validate user is able to add multiple product to shopping bag
Given user add the following phone
    | iphone X|
    | Blackberry |

