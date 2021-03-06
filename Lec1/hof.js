function getFirstname(fullName){
    fullName =fullName.split(" ");
    return fullName[0];
}
function getLastname(fullName){
    fullName =fullName.split(" ");
    return fullName[1];
}
function sayHi( fullName  , fun  ){
    let name = fun(fullName);
    console.log(name);
}
sayHi("Adarsh Mishra",getFirstname);
sayHi("john cena ",getLastname);
