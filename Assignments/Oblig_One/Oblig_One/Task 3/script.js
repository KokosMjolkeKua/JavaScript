console.log("Hello World!");
let name = "User";
console.log("Name: ", name);
alert("Hello World!");


function conversion(){
    let input = document.getElementById("yard").value;
    let z = parseFloat(input);

    if(isNaN(z)){
        alert("Please write a number!");
        return;
    }

    const yard = 1.0936132983;
    const convert = z * yard;

    console.log("Conversion:");
    console.log("1 meter is 1.0936132983 yards");
    console.log("User Input: ", z);
    console.log("Yard result: ", convert);

    if(convert > 300){
        console.log("That is a really long golf drive!");
    }
}

