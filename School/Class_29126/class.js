//MAking Constructor
function Person(name,age){
    //need to fill in 
}


//Expression
//const person = {
    //firstname: "John",
    //lastname: "Doe",
    //age: 50
//};

//Methods

const person = {
    firstname: "John",
    lastname: "Doe",
    age: 50,
    fullName: function(){
        return this.firstname+" "+this.lastname;
    }
};
//this string value is still looked upon as an object, even thou its a string
//and this way you are able to access it. 


//Exercise:
var library = [
    {
        title:"Bill Gates",
        author: "The Road Ahead",
        readingStatus: true
    },
    {
        title: "Steve Jobs",
        author: "Walter Isaacson",
        readingStatus: true
    },
    {
        title: "Hunger Games",
        author: "IDk",
        readingStatus: false
    }
];


//FUNCTION Open Laptop:
//Step 1.open laptop
function openLaptop(){
    setTimeout(function(){
        console.log("Laptop is opened!");
    }, 1000);
}

//step 2:
function writeCode(){
    setTimeout(function(){
        console.log("Code is written!");
    },3000);
}

//step 3 submit code
function submitCode(){
    setTimeout(function(){
        console.log("Code is Submitted!");
    },3000);
}