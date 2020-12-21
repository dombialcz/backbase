import {Page} from "test/pages/Page";

export class MainPage extends Page {
    get loginButton() { return $('a[routerlink="/login"]') }
    get registerButton() { return $('a[routerlink="/register"]') }
    get logo() { return $('=BBlog') }
}

export default new MainPage();
