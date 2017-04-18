class Greeter {
    constructor(public greeting: string) { }
    greet() {
        return "<h1>" + this.greeting + "</h1>";
    }
};

var xyz = "Hey" + " you"
var newmessage = xyz + ", how are you, I am from Dev"
var greeter = new Greeter(newmessage); 

document.body.innerHTML = greeter.greet();