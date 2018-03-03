//Create a sting called computation
//For every button clicked. the inner HTML AND the string is updated
//Once the user types equal, then te traverse string operation starts.
//It goes through a value, breaks at a sign and then stores the value as a number
//Once it reaches a sign, it takes note and continues the getting number function until the end of the string
//Decimal doesn't need a function because the traverse should automatically convert the string into a floating point integer (this is javascript)


//Button Inputs
var zero = document.getElementById("zero").addEventListener("click", function (){
    var input = document.getElementById("input");
    input.innerHTML += "0";
});

var one = document.getElementById("one").addEventListener("click", function (){
    var input = document.getElementById("input");
    input.innerHTML += "1";
});
var two = document.getElementById("two").addEventListener("click", function (){
    var input = document.getElementById("input");
    input.innerHTML += "2";
});
var three = document.getElementById("three").addEventListener("click", function (){
    var input = document.getElementById("input");
    input.innerHTML += "3";
});
var four = document.getElementById("four").addEventListener("click", function (){
    var input = document.getElementById("input");
    input.innerHTML += "4";
});
var five = document.getElementById("five").addEventListener("click", function (){
    var input = document.getElementById("input");
    input.innerHTML += "5";
});
var six = document.getElementById("six").addEventListener("click", function (){
    var input = document.getElementById("input");
    input.innerHTML += "6";
});
var seven = document.getElementById("seven").addEventListener("click", function (){
    var input = document.getElementById("input");
    input.innerHTML += "7";
});
var eight = document.getElementById("eight").addEventListener("click", function (){
    var input = document.getElementById("input");
    input.innerHTML += "8";
});
var nine = document.getElementById("nine").addEventListener("click",function (){
    var input = document.getElementById("input");
    input.innerHTML += "9";
});

var multiply = document.getElementById("multiply").addEventListener("click",function (){
    var input = document.getElementById("input");
    input.innerHTML += " x ";
});

var divide = document.getElementById("divide").addEventListener("click",function (){
    var input = document.getElementById("input");
    input.innerHTML += " / ";
});

var add = document.getElementById("add").addEventListener("click",function (){
    var input = document.getElementById("input");
    input.innerHTML += " + ";
});

var subtract = document.getElementById("subtract").addEventListener("click",function (){
    var input = document.getElementById("input");
    input.innerHTML += " - ";
});

var decimal = document.getElementById("decimal").addEventListener("click",function (){
    var input = document.getElementById("input");
    input.innerHTML += ".";
});

var leftPara = document.getElementById("left-para").addEventListener("click",function (){
    var input = document.getElementById("input");
    input.innerHTML += "(";
});

var rightPara = document.getElementById("right-para").addEventListener("click",function (){
    var input = document.getElementById("input");
    input.innerHTML += ")";
});

var back = document.getElementById("backspace").addEventListener("click", backSpace);

var sine = document.getElementById("sin").addEventListener("click", sin);
var cosine = document.getElementById("cos").addEventListener("click", cos);
var tangent = document.getElementById("tan").addEventListener("click", tan);

var squareRoot = document.getElementById("square-root").addEventListener("click", squareRt);
var xSquared = document.getElementById("x-squared").addEventListener("click", x2);
var modulus = document.getElementById("modulus").addEventListener("click", modulus);
var fact = document.getElementById("factorial").addEventListener("click", factorial);
//Equals
var evaluate = document.getElementById("equal").addEventListener("click", equals);


//Clearing the screen.
var c = document.getElementById("c")
c.addEventListener("click", clearScreen);

function clearScreen(){
    var input = document.getElementById("input");
    input.innerHTML = "";
}


function addition(a, b){
    //alert("a =" + a);
    //alert(b); add(x, y)
    return a + b;
}

function subtraction(a, b){ 
    return a - b;

}

function multiplication(a, b){
    return a * b;
}

function division(a,b){
    return a / b;
}

function sin (x){
    x = document.getElementById("input");
    
    var temp = x.innerHTML;
    x.innerHTML = "sin(" + temp +")";
    var value = Math.sin(temp); //Had to use temp values to help with the computation showing on the input screen.
    y = document.getElementById("result");
    result.innerHTML = value; //Instead of returning it, it just dsiplays it on the screen.
}

function cos (x){
    x = document.getElementById("input");
    var temp = x.innerHTML;
    x.innerHTML = "cos(" + temp +")";
    var value = Math.cos(temp); //Had to use temp values to help with the computation showing on the input screen.
    y = document.getElementById("result");
    result.innerHTML = value; //Instead of returning it, it just dsiplays it on the screen.
}

function tan (x){
    x = document.getElementById("input");
    var temp = x.innerHTML;
    x.innerHTML = "tan(" + temp +")";
    var value = Math.tan(temp); //Had to use temp values to help with the computation showing on the input screen.
    y = document.getElementById("result");
    result.innerHTML = value; //Instead of returning it, it just dsiplays it on the screen.
}

function mod (a, b){
    return a % b;
}

function exp (){

}

function log (x){
    return Math.log10(x);
}

function factorialComputation (x){
    if (x == 0){
        return 1;
    }
    return x * factorialComputation (x - 1);    
}

function factorial(){
    x = document.getElementById("input");
    var temp = x.innerHTML;
    temp = Number(temp);


    result.innerHTML = factorialComputation(temp);
}

function squareRt (x){
    x = document.getElementById("input");
    var temp = x.innerHTML;
    x.innerHTML = temp;
    var value = Math.sqrt(temp); //Had to use temp values to help with the computation showing on the input screen.
    y = document.getElementById("result");
    result.innerHTML = value; //Instead of returning it, it just dsiplays it on the screen.
}

function x2(x){
    x = document.getElementById("input");
    var temp = x.innerHTML;
    x.innerHTML = temp;
    temp = Number(temp);
    var value = Math.pow(temp, 2); //Had to use temp values to help with the computation showing on the input screen.
    y = document.getElementById("result");
    result.innerHTML = value; //Instead of returning it, it just dsiplays it on the screen.
}

function xPowerY(x,y){

}

function backSpace(){
    var res = document.getElementById("input");
    var temp = res.innerHTML;
    //console.log(temp);
    var temp2 = temp.slice(0, -1);
    //console.log(temp2);
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
    var tempOp = ""; //Temporary operand.
    for (var i = 0; i <= str.length; i++){
        
        if ((str.charAt(i) == "1") || (str.charAt(i) == "2") || (str.charAt(i) == "3") || (str.charAt(i) == "4") || (str.charAt(i) == "5") || (str.charAt(i) == "6") || (str.charAt(i) == "7") || (str.charAt(i) == "8") || (str.charAt(i) == "9") || (str.charAt(i) == "0")){
            tempOp += str.charAt(i);
            console.log("x" + tempOp);
                    var j = i + 1;

                        while ((str.charAt(j) != " ") && (j <= str.length) && (str.charAt(j) != ")")){ //Checks if the next value is a space, because if an operator is there, there'd definitely a space. Aso checks value used for iteration is beyond the bounds, so we don;t have an infinite loop. //|| (str.charAt(j) != "+") || (str.charAt(j) != "-") || (str.charAt(j) != "x") || (str.charAt(j) != "/")){
                            tempOp += str.charAt(j); //Add the next value
                            j++; 
                            i++; //Jump to the next value.
                            
                        } 
                                
                        newString.unshift(tempOp);
                        console.log(tempOp);
                        tempOp = "";
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
    //str += ")"; //Makes the if statement work for some reason. Because charAt(i) is for strings and this makes it a string
    alert(str);
    var stack = [];
    var currentAns = ""; 
    for (var i = str.length; i >= 0; i--){    
        if (isNaN(str[i]) == false){ //Checks if the value is a number or not.

            stack.unshift(str[i]);
            console.log(str[i] + "is num");
            
        }

        else if ((str[i] == "+") || (str[i] == "-") || (str[i] == "x") || (str[i] == "/")){

            if (str[i] == "+"){
        
                    var y = stack.shift();
                    var x = stack.shift();
                    x = Number(x);
                    y = Number(y);
        
                    Number(currentAns);
                    currentAns = addition(x, y);
                    //alert(currentAns);
                    stack.unshift(currentAns);
                    alert("Final:" + stack);

            }

            else if (str[i] == "-"){
                var y = stack.shift();
                var x = stack.shift();
                x = Number(x);
                y = Number(y);
    
                Number(currentAns);
                currentAns = subtraction(x, y);
                //alert(currentAns);
                stack.unshift(currentAns);
            }

            else if (str[i] == "x"){
                var y = stack.shift();
                var x = stack.shift();
                x = Number(x);
                y = Number(y);
    
                Number(currentAns);
                currentAns = multiplication(x, y);
                //alert(currentAns);
                stack.unshift(currentAns);
            }

            else if (str[i] == "/"){
                var y = stack.shift();
                var x = stack.shift();
                x = Number(x);
                y = Number(y);
    
                Number(currentAns);
                currentAns = division(x, y);
                //alert(currentAns);
                stack.unshift(currentAns);
            }
        }
        
    }
return currentAns;    
}


function computesin(){

}

function equals (){
    var computation = document.getElementById("input").innerHTML;
    
    var x = (traverseString(computation));
    var resultValue = postfixComputation(x);
    document.getElementById("result").innerHTML= resultValue;

}
