function GreetPerson(name: any) {
    let greet;
    if (name === "Son") {
        greet = "Hello Son";
    }
    else  greet = "Hello There";
    console.log(greet);
}
GreetPerson("Son");

var a = 1;
let b = 2

if(a==1)
{
    a = 10;
    let b = 10
}
console.log(a)
console.log(b)