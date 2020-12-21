
# Register form validation - negative test

Objective: Test register form validation
Test front-end form validation

# Environment

Chrome 87, Mac OS 10.15.6 (Catalina)

# Input data

### Test data 1 - user already exists
- Login: test
- email: test@test.com
- Password: test
  
### Test data 2 - invalid email
- Login: unique_1111
- email: test
- Password: test

### Test data 3 - empty password
- Login: test
- email: test
- Password: 
- Password left blank intentionally

### Test data 4 - empty string
- Login: unique_1111
- email:
- Password: test
- email left blank intentionally

### Test data 5 - special characters
- Login: test555@!$%
- email: test@test.com
- Password: test

### Test data 6 - multiple blank errors
- Login: test_1
- email:  test@test.com
- Password:
- password left blank intentionally

# Prerequisites

- User isn't logged in
- User doesn't have cookies from last login
- User `test` already exists
- User `unique_1111` does not exist

# Steps

| Step No. | Step description | Expected result |
|---|---|---|
|  1 | Enter main web page   |  Main page is displayed na signup button is visible |
| 2 | Press Sign up button  | Register sub page is opened |
| 3 | Enter username | |
| 4 | Enter email address | |
| 5 | Enter password | |
| 6 | Press `signup` button | An error is shown |


# Expected result

- user is NOT logged in
- user is NOT registered
- Expected error message to be displayed:

### Test data 1 - user already exists
- username is already taken
  
### Test data 2 - invalid email
- email is invalid

### Test data 3 - empty password
- password can't be blank
- TODO: password at this moment can be blank, see  [bug report](../bugreports/bugreport.md)

### Test data 4 - empty string
- email can't be blank

### Test data 5 - special characters
- username is invalid

### Test data 6 - multiple blank errors
- username is invalid
- email is already taken
- password can't be blank
- TODO: password at this moment can be blank, see [bug report](../bugreports/bugreport.md)
