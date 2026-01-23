console.log("Hello World");
console.log("Welcome to my Website!");
alert("Hello World!");

function changeColour(){
    let s = document.getElementById("select").value;
    if(s === "red"){
        document.body.style.backgroundColor = "red";
    }
    else if(s === "yellow"){
        document.body.style.backgroundColor = "yellow";
    }
    else if(s === "blue"){
        document.body.style.backgroundColor = "blue";
    }
    else if(s === "green"){
        document.body.style.backgroundColor = "green";
    }
    else if(s === "orange"){
        document.body.style.backgroundColor = "orange";
    }
    else{
        document.body.style.backgroundColor = "rgba(25, 149, 42, 0.5)";
    }
}