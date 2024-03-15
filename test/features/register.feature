@register
Feature: kasirAja Register New User

    @register @positive
    Scenario: Success open Register page
        Given I am open kasirAja login page
        When I click text ingin mencoba daftar
        Then I should be on the Register page

    @register @negative
    Scenario: Failed register with blank all mandatory field
        Given I am open Register page
        When I didn't input all mandatory field
        Then I should see register error message
    
    @register @negative
    Scenario: Failed register with invalid email
        Given I am open Register page
        When I input valid nama toko, invalid email, and valid password
        Then I should see register error message

    @register @positive
    Scenario: Successfully registered a new user with valid credentials
        Given I am open Register page
        When I input valid data
        Then I should be on the Login page