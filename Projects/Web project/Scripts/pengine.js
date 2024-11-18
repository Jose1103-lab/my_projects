//my first steps un javascript

 let yolo = document.getElementById("mango");

// let sustraction = (value1, value2) => value1 - value2 
// let division = (value1, value2) => value1 / value2 
// let multiplication = (value1, value2) => value1 * value2 
// let exponentiation = (value1, value2) => value1 ** value2 

//  while(true){
     let operator = prompt ("Opertion:\n A) Sum\n B) Subtraction\n C) Multiplication\n D) Division\n E) Exponentiation\n (F) Close");
    //  if(operator.toLowerCase() === "f"){break;}
     let value1 = parseFloat(prompt("First digit:"));
     let value2 = parseFloat(prompt("Second digit:"));

     switch(operator.toLowerCase()){
         case "a":             
            let suma = (a, b) => value1 + value2
            yolo.style.background= "red"; 
            display = getElementById("displayaa");
            display.textContent= "jhsgfh"
            // let result = suma
            alert(suma())
            if (suma > 5){
                //something new 
            }
            break;    
         case "b":
             alert();
             break;    
         case "c":
             alert();
             break;    
         case "d":
             alert();
             break;    
         case "e":
             alert();
         default:
             alert("Invalid operation ("+operator.toUpperCase()+")" );
     }
//  }
