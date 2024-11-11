//my first steps un javascript

 let yolo = document.getElementById("mango");
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
     switch(operator.toLowerCase()){
         case "a":             
         alert(suma(value1, value2));
         if (suma(value1, value2) > 5){
//something new 
             yolo.style.background= "red"; 
         }
         break;    
         case "b":
             alert(sustraction(value1, value2));
             break;    
         case "c":
             alert(multiplication(value1, value2));
             break;    
         case "d":
             alert(division(value1, value2));
             break;    
         case "e":
             alert(exponentiation(value1, value2));
         default:
             alert("Invalid operation ("+operator.toUpperCase()+")" );
     }
 }
