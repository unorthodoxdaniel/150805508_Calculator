//FIND 306 note. This may be an implementation of parse tree

//Create a sting called computation
//For every button clicked. the inner HTML AND the string is updated
//Once the user types equal, then te traverse string operation starts.
//It goes through a value, breaks at a sign and then stores the value as a number
//Once it reaches a sign, it takes note and continues the getting number function until the end of the string
//Decimal doesn't need a function because the traverse should automatically convert the string into a floating point integer (this is javascript)




//Button Inputs
var zero = document.getElementById("zero").addEventListener("click", function (){
    var result = document.getElementById("result");
    result.innerHTML += "0";
});

var one = document.getElementById("one").addEventListener("click", function (){
    var result = document.getElementById("result");
    result.innerHTML += "1";
});
var two = document.getElementById("two").addEventListener("click", function (){
    var result = document.getElementById("result");
    result.innerHTML += "2";
});
var three = document.getElementById("three").addEventListener("click", function (){
    var result = document.getElementById("result");
    result.innerHTML += "3";
});
var four = document.getElementById("four").addEventListener("click", function (){
    var result = document.getElementById("result");
    result.innerHTML += "4";
});
var five = document.getElementById("five").addEventListener("click", function (){
    var result = document.getElementById("result");
    result.innerHTML += "5";
});
var six = document.getElementById("six").addEventListener("click", function (){
    var result = document.getElementById("result");
    result.innerHTML += "6";
});
var seven = document.getElementById("seven").addEventListener("click", function (){
    var result = document.getElementById("result");
    result.innerHTML += "7";
});
var eight = document.getElementById("eight").addEventListener("click", function (){
    var result = document.getElementById("result");
    result.innerHTML += "8";
});
var nine = document.getElementById("nine").addEventListener("click",function (){
    var result = document.getElementById("result");
    result.innerHTML += "9";
});

var multiply = document.getElementById("multiply").addEventListener("click",function (){
    var result = document.getElementById("result");
    result.innerHTML += " x ";
});

var divide = document.getElementById("divide").addEventListener("click",function (){
    var result = document.getElementById("result");
    result.innerHTML += " / ";
});

var add = document.getElementById("add").addEventListener("click",function (){
    var result = document.getElementById("result");
    result.innerHTML += " + ";
});

var subtract = document.getElementById("subtract").addEventListener("click",function (){
    var result = document.getElementById("result");
    result.innerHTML += " - ";
});

var decimal = document.getElementById("decimal").addEventListener("click",function (){
    var result = document.getElementById("result");
    result.innerHTML += ".";
});


var c = document.getElementById("c")
c.addEventListener("click", clearScreen);

function clearScreen(){
    var result = document.getElementById("result");
    result.innerHTML = "0";
}





var computation;


function add (a, b){
    return a + b;
}

function subtract (){
    return a - b;

}

function multiply (){
    return a * b;
}

function divide (){
    return a / b;
}

function sin (){
    

}

function cos (){

}

function tan (){

}

function mod (){
    return a % b;
}

function exp (){

}

function log (){

}

function factorial (){

}

function equals (){

}

function traverseString(){

}

/*function BodmasChecker(){

}*/




