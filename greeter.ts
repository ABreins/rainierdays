class Greeter {
    constructor(public greeting: string) { }
    greet() {
        return "<h1>" + this.greeting + "</h1>";
    }
};

var xyz = "Hey" + " you"
var newmessage = xyz + ", how are you"
var greeter = new Greeter("Hello, world!"); 
document.body.innerHTML = greeter.greet();