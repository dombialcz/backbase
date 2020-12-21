
# Can signup with blank password

- Status: TODO
- Severity: Major
- Priority: Blocker
- Component/s: BBlog signup form
- Version:
```
-  runtime-es2015.3577b981b804aa3f4ea7.js
-  polyfills-es2015.4536616019abe65746a1.js
-  runtime-es5.995d689bbb5032bebfe3.js
-  polyfills-es5.01217191fff3cb604a19.js
-  es2015.775d5578b163d82b126c.js 
-  main-es5.e61d726a2e8a02003a4a.js
```
# Environment

Chrome 87, Mac OS 10.15.6 (Catalina)

# Prerequisites

- User isn't logged in
- User doesn't have cookies from last login

# Steps to reproduce

| Step No. | Step description | Test Data | Expected result |
|---|---|---|---|
|  1 | Enter main web page   | | Main page is displayed na signup button is visible |
| 2 | Press Sign up button  | | Register sub page is opened |
| 3 | Enter unique username | username: `test` + current date format `%y%m%H%M` | |
| 4 | Enter email address | email: `test@test.com` |
| 5 | Enter password | |
| 6 | Press `signup` button |  | see below|


# Expected result

- Expected error message to be displayed:
- password can't be blank

# Actual result

- User is registered
