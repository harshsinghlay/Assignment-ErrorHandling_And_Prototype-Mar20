

class User {
    username;
    password;
    constructor(username, password) {
        this.username = username;
        this.password = password;
    }
    static hidden(pass) {
        return pass.replaceAll(/./g, "*");
    }
    static isValid(pass) {
        if (pass.length >= 8 && /[A-Z]/.test(pass) && /\d/.test(pass)) {
            return true;
        } else {
            throw new Error("Error: Password must be at least 8 Characters long and contain at leasst one number and one uppercase letter");
        }
    }
    getPassword() {
        return User.hidden(this.password);
    }
    setPassword(pass) {
        if (User.isValid(pass)) {
            this.password = pass;
        }
    }
}
const user = new User("harsh", "Password@123");
console.log(user.getPassword());
user.setPassword("mypassword");
user.setPassword("Mypassword");
user.setPassword("Mypassword123");