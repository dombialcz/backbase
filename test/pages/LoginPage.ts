import {mainpageurl} from "test/data/test.data";
import {Page} from "test/pages/Page";

export class LoginPage extends Page  {
    url = mainpageurl+"/#/login";

    get usernameField () {  return $('input[placeholder="Username"]') }
    get passwordField () { return $('input[placeholder="Password"]') }

    get submitButton () { return $('button')}

    get errorMessages () {
        return $$('.error-messages > li');
    }

    get errorMessagesList () : string[] {
        let output: string[] = [""];

        const errorMessagesArray = this.errorMessages;
        for (var message of errorMessagesArray) {
            output.push(message.getText().trim());
        }

        return output;
    }

    public waitForErrors (): void {
        $('ul[class="error-messages"]').waitForExist();
    }

    // Remember to click a field and check for isValid or isTouched before submitting or risk uninitialized validators
    public submit () : void {
        this.submitButton.click();
    }
}

export default new LoginPage();
