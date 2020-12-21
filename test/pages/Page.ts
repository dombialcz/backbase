import {mainpageurl} from "test/data/test.data";
import RegisterPage from "test/pages/RegisterPage";

export abstract class Page  {
    protected url: string = mainpageurl;

    open() {
        browser.url(this.url);

        browser.waitUntil(function () {
                const state = browser.execute(function () {
                    return document.readyState;
                });
                //console.log("state:" + state)
                return state === 'complete';
            },
            {
                timeout: 60000, //60secs
                timeoutMsg: 'Couldnt load page in designated time, url: ' + this.url
            });
    }
}
