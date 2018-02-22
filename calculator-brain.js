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

var leftPara = document.getElementById("left-para").addEventListener("click",function (){
    var result = document.getElementById("result");
    result.innerHTML += "(";
});

var rightPara = document.getElementById("right-para").addEventListener("click",function (){
    var result = document.getElementById("result");
    result.innerHTML += ")";
});

var back = document.getElementById("backspace").addEventListener("click", backSpace);

var evaluate = document.getElementById("equal").addEventListener("click", equals);


//Clearing the screen.
var c = document.getElementById("c")
c.addEventListener("click", clearScreen);

function clearScreen(){
    var result = document.getElementById("result");
    result.innerHTML = "0";
}


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
    x = document.getElementById("result").innerHTML;
    return Math.sin(x);
}

function cos (x){
    return Math.cos(x);
}

function tan (x){
    return Math.tan(x);
}

function mod (){
    return a % b;
}

function exp (){

}

function log (x){
    return Math.log10(x);
}

function factorial (x){
    
}

function backSpace(){
    var res = document.getElementById("result");
    var temp = res.innerHTML;
    console.log(temp);
    var temp2 = temp.slice(0, -1);
    console.log(temp2);
    res.innerHTML = temp2;
    if (res.innerHTML == ""){
        res.innerHTML = "0";
    }
}



function traverseString(str){
    //Converts infixToPostfix
    str += ")";
    var stack = [];
    stack.unshift("(");

    function checkPrec(x){
        if (x == "*" || "/"){
            return 3;
        }

        if (x == "+" || "-"){
            return 2 ;
        }

        if(x == "("){
            return 1;
        }

        if ((x == "1") ||(x ==  "2" )||(x ==  "3" )||(x ==  "4" )||(x ==  "5" )||(x ==  "6" )||(x ==  "7" ) ||(x ==  "8") ||(x ==  "9" )||(x ==  "0")){
         return 0;
    }
}
    

    var newString = [];
    for (var i = 0; i <= str.length; i++){
        
        if ((str.charAt(i) == "1") || (str.charAt(i) == "2") || (str.charAt(i) == "3") || (str.charAt(i) == "4") || (str.charAt(i) == "5") || (str.charAt(i) == "6") || (str.charAt(i) == "7") || (str.charAt(i) == "8") || (str.charAt(i) == "9") || (str.charAt(i) == "0")){
            newString.unshift(str.charAt(i));
            //alert("Postfix: " + newString);
            //alert("Stack: " + stack);
            
        }

        else if (str.charAt(i) == "("){
            stack.unshift("(");
        }

       else if ((str.charAt(i) == "+") || (str.charAt(i) == "-") || (str.charAt(i) == "x") || (str.charAt(i) == "/")){
            
            var operator = str.charAt(i);
            
            var j = 0;
            if (checkPrec(stack[j]) >= checkPrec(str.charAt(i))){ // has a higher than or equal to precedence"+" || "-" || "x" || "/")
                //To not let it remove the left parentheses
                if (stack[j] == "("){
                    stack.unshift(operator);
                }
                else {
                    newString.unshift(stack.shift());
                    stack.unshift(operator);                   
                }

            }

            else if (checkPrec(stack[j]) < checkPrec(str.charAt(i))){
                stack.unshift(operator);
            }
            
        }

        else if (str.charAt(i) == ")"){
            var j = 0;
            while (stack[j] != "(" ){
                newString.unshift(stack.shift());
                j--;
                j++;
            }
            stack.shift(); //Remove the left parenthesis.
        }




    }
    //alert("POSTFIX: " + newString);
    return newString; 
}
    


function postfixComputation (str){
    var str = str;
    
    var stack = [];
    for (var i = 0; i <= str.length; i++){
        if (str.charAt(i) == "1"){ //|| (str.charAt(i) == "2") || (str.charAt(i) == "3") || (str.charAt(i) == "4") || (str.charAt(i) == "5") || (str.charAt(i) == "6") || (str.charAt(i) == "7") || (str.charAt(i) == "8") || (str.charAt(i) == "9") || (str.charAt(i) == "0")){
            stack.unshift(charAt(i));
        }

        else if ((str.charAt(i) == "+") || (str.charAt(i) == "-") || (str.charAt(i) == "x") || (str.charAt(i) == "/")){
            
            operator = stack.shift(); //Remove the operand
            b = stack.shift();
            a = stack.shift();

            if (str.charAt(i) == "+"){
                var currentAns = add(a,b);
                stack.unshift(currentAns);
            }

            else if (str.charAt(i) == "-"){
                var currentAns = subtract(a,b);
                stack.unshift(currentAns);
            }

            else if (str.charAt(i) == "x"){
                var currentAns = multiply(a,b);
                stack.unshift(currentAns);
            }

            else if (str.charAt(i) == "/"){
                var currentAns = divide(a,b);
                stack.unshift(currentAns);
            }
        }
        
    }
}


function computesin(){

}
var sine = document.getElementById("sin").addEventListener("click", sin);


/*var stack = [];
stack.push(2);       
stack.push(5);       
var i = stack.pop(); 
alert(i);    
*/

/*stack.push("(");
//Traverse the stack
if operand, 
stack.push(operand)

if("(")
stack.push("(")

/*function BodmasChecker(){

}*/

function equals (){
    var computation = document.getElementById("result").innerHTML;
    
    var x = (traverseString(computation));
    alert(postfixComputation(x));

}
