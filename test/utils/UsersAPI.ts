import {APIconfig} from "test/data/test.data";
var request = require('request');

const apiUrl: string = "https://qa-task.backbasecloud.com/api/users";


export class UsersAPI  {

    public generateUsername () { return "hello" + new Date().getTime(); }
    public generateEmail () { return this.generateUsername() + "@test.com"}
    public generatePassword () { return "secret1234" }

    public registerNewUser = async   (
        customUsername?: string, customEmail?: string , customPassword?: string, ) => {

        let username = customUsername || this.generateUsername();
        let email = customEmail || this.generateEmail();
        let password = customPassword || this.generatePassword();

        console.log("username", username);
        console.log("email", email);
        console.log("password", password);

        const options = {
            'method': 'POST',
            'url': apiUrl,
            'headers': {
                'Content-Type': 'application/json',
                'Authorization': 'Basic Y2FuZGlkYXRleDpxYS1pcy1jb29s'
            },
            body: JSON.stringify({"user":{"username":username,"email":email,"password":password}})

        };
        request(options, function (error, response) {
            if (error) throw new Error(error);
            console.log(response.body);
        });

    }

}

export default new UsersAPI();

interface Headers {
    'Content-Type': string;
    Authorization: string;
}
