import { expect } from 'chai';
import MainPage from '../../pages/MainPage'
import RegisterPage from '../../pages/RegisterPage'
import LoginPage from "test/pages/LoginPage";

const DEFAULT_TIMEOUT = 5000;

describe('BBlog register user frontend tests', () => {
    describe('Main page navigation test', () => {
        before(() => {
            MainPage.open();
        });
        it('should navigate to register page and have username, email and password fields visible', () => {
            MainPage.registerButton.click();

            RegisterPage.usernameField.waitForDisplayed({ timeout: DEFAULT_TIMEOUT });

            expect(RegisterPage.usernameField.isDisplayed()).to.be.true;
            expect(RegisterPage.emailField.isDisplayed()).to.be.true;
            expect(RegisterPage.passwordField.isDisplayed()).to.be.true;
        });
    });


    describe('Register user negative tests', () => {
        before(() => {
            RegisterPage.open();
        });
        it('should inform user already exists', () => {
            RegisterPage.usernameField.setValue('test');
            RegisterPage.usernameField.click();
            browser.waitUntil( () => RegisterPage.usernameField.isValid());
            RegisterPage.submit();
            RegisterPage.waitForErrors();

            expect(RegisterPage.errorMessagesList).to.include("username is already taken.");
        });
        it('should inform email is invalid', () => {
            RegisterPage.usernameField.setValue('unique11112222');
            RegisterPage.usernameField.click();
            RegisterPage.emailField.setValue('invalid');
            RegisterPage.emailField.click();
            browser.waitUntil( () => RegisterPage.emailField.isValid());
            RegisterPage.submit();
            RegisterPage.waitForErrors();

            expect(RegisterPage.errorMessagesList).to.include("email is invalid");
        });
        it('should inform username is invalid', () => {
            RegisterPage.usernameField.setValue('test555@!$%');
            RegisterPage.usernameField.click();
            RegisterPage.emailField.setValue('unique11112222@test.com');
            RegisterPage.emailField.click();
            browser.waitUntil( () => RegisterPage.emailField.isValid());
            RegisterPage.submit();
            RegisterPage.waitForErrors();

            expect(MainPage.logo.isDisplayed()).to.be.true; // TODO: fix cannot login with missing email field from form
        });
        afterEach( () => {
            LoginPage.usernameField.click();
            LoginPage.usernameField.clearValue();
            LoginPage.passwordField.click();
            LoginPage.passwordField.clearValue();
        })
    });


    describe('Fresh form test for blank input', () => {
        before(() => {
            RegisterPage.open();
        });
        it('should inform email is blank', () => {
            RegisterPage.usernameField.setValue('unique11112222');
            RegisterPage.usernameField.click();
            RegisterPage.submit();
            RegisterPage.waitForErrors();

            expect(RegisterPage.errorMessagesList).to.include("email can\'t be blank");
        });
    });
});
