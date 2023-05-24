export class Users {
    name: string;
    firstName: string;
    age: number;
    quote: string;
    photo: string;
    hide: boolean

    constructor(name: string, firstName: string, age: number, photo: string) {
        this.name = name;
        this.firstName = firstName;
        this.age = age;
        this.photo = photo;
        this.quote = "";
        this.hide = true;
    }
}