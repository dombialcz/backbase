import { expect } from 'chai';
import LoginPage from '../../pages/LoginPage'
import UsersAPI from "test/utils/UsersAPI";

const DEFAULT_TIMEOUT = 5000;

describe('BBlog login user frontend tests', () => {
    describe('Main page navigation test', () => {
        const username = UsersAPI.generateUsername();
        const email = UsersAPI.generateEmail();
        const password = UsersAPI.generatePassword();

        UsersAPI.registerNewUser(username, email,password);

        before(() => {
            LoginPage.open();
        });
        it('should display username and password fields', () => {
            expect(LoginPage.usernameField.isDisplayed()).to.be.true;
            expect(LoginPage.passwordField.isDisplayed()).to.be.true;
        });
        it('should inform that password cannot be blank', () => {
            LoginPage.usernameField.click();
            LoginPage.usernameField.setValue('test');

            expect(LoginPage.usernameField.isValid()).to.be.true;

            LoginPage.submit();
            LoginPage.waitForErrors();

            expect(LoginPage.errorMessagesList).to.include("password can\'t be blank");

        });
        it('should inform that password is invalid', () => {
            LoginPage.usernameField.click();
            LoginPage.usernameField.setValue('test');
            browser.waitUntil( () => LoginPage.usernameField.isValid());

            LoginPage.passwordField.click();
            LoginPage.passwordField.setValue('test');
            LoginPage.passwordField.click();
            LoginPage.passwordField.addValue('test');
            browser.waitUntil( () => LoginPage.usernameField.isValid());

            LoginPage.submit();
            LoginPage.waitForErrors();

            expect(LoginPage.errorMessagesList).to.include("email or password is invalid");

        });
        it('should login succesfully', () => {
            LoginPage.usernameField.setValue(username);
            LoginPage.usernameField.click();
            browser.waitUntil( () => LoginPage.usernameField.isValid());

            LoginPage.passwordField.setValue(password);
            LoginPage.passwordField.click();
            browser.waitUntil( () => LoginPage.usernameField.isValid());

            LoginPage.submit();
            LoginPage.waitForErrors();

            expect(LoginPage.errorMessagesList).to.include("email or password is invalid");

        });
        afterEach( () => {
            LoginPage.usernameField.click();
            LoginPage.usernameField.clearValue();
            LoginPage.passwordField.click();
            LoginPage.passwordField.clearValue();
        })
    });
});
