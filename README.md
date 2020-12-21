# Prerequisites

- [nodejs 14](https://nodejs.org/en/) 
- typescript ` npm install -g typescript `
- install dependencies `npm i`
- [install chrome](https://www.google.com/chrome/)

# Run
#####  run tests
```npm run test```
##### generate and display allure report locally
 ```npm run test-allure```


# Test cases

| Test case | Component| short description |
|---|---|---| 
| [Register new user](testcases/register.md) | Registration form | |
| [Register form validation - negative](testcases/register-negative.md)  | Registration form | test validators on front end |



# Bug reports

| Name | Severity | Component|
| --- | --- | --- |
| [Can signup with blank password](bugreports/bugreport.md) | Major (Blocker) | Registration form |

---
#####CircleCI
|  [![<CircleCI>](https://circleci.com/gh/dombialcz/backbase.svg?style=svg)](https://app.circleci.com/pipelines/github/dombialcz/backbase) | | https://app.circleci.com/pipelines/github/dombialcz/backbase|
| --- | --- | --- |

