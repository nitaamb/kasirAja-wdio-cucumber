@login
Feature: kasirAja Login Tests

    @login @negative
    Scenario: Failed logged in with blank email and password
        Given I am open kasirAja page
        When I didn't input an email and password
        Then I should see an error message

    @login @negative
    Scenario: Failed logged in with invalid email
        Given I am open kasirAja page
        When I input invalid email and valid password
        Then I should see an error message

    @login @negative
    Scenario: Failed logged in with invalid password
        Given I am open kasirAja page
        When I input valid email and invalid password
        Then I should see an error message

    @login @positive
    Scenario: Successfully logged in with valid credentials
        Given I am open kasirAja page
        When I input valid credentials
        Then I should be on the Dashboard page