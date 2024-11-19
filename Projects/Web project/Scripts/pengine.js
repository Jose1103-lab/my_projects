//my first steps un javascript

 function suma(value1, value2){
     let result = value1 + value2;
     return result;
    }
 function sustraction(value1, value2){
     let result = value1 - value2;
     return result;
    }
 function multiplication(value1, value2){
     let result = value1 * value2;
     return result;
 }
 function division(value1, value2){
     let result = value1 / value2;
     return result;
 }
 function exponentiation(value1, value2){
     let result = value1 ** value2;
     return result;
 }

 while(true){
     let operator = prompt ("Opertion:\n A) Sum\n B) Subtraction\n C) Multiplication\n D) Division\n E) Exponentiation\n (F) Close");
     if(operator.toLowerCase() === "f"){break;}
     let value1 = parseFloat(prompt("First digit:"));
     let value2 = parseFloat(prompt("Second digit:"));
     let display1 = document.getElementById("display");
     let result
     
     switch(operator.toLowerCase()){
         case "a":             
            result = suma(value1, value2);
            break;    
         case "b":
            result = sustraction(value1, value2);
            break;    
         case "c":
            result = multiplication(value1, value2);
             break;    
         case "d":
             result = division(value1, value2);
             break;    
         case "e":
             result = exponentiation(value1, value2);
             break;
         default:
            display1.style.fontSize = "16px";
            display1.style.color = "red";
            result = "Invalid operation ("+operator.toUpperCase()+")";
             
        }
        display1.textContent = result;
}
