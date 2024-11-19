//my first steps un javascript

 while(true){
     let operator = prompt ("Opertion:\n A) Sum\n B) Subtraction\n C) Multiplication\n D) Division\n E) Exponentiation\n (F) Close");
     if(operator.toLowerCase() === "f"){break;}
     let value1 = parseFloat(prompt("First digit:"));
     let value2 = parseFloat(prompt("Second digit:"));
     let display1 = document.getElementById("display");
     let result


     function new_main_post(){
        const new_para = document.createElement("p");
        const main_node = document.getElementById("main_feed")
        new_para.textContent = "New paragraph"
        main_node.appendChild(new_para)
     }
     
     switch(operator.toLowerCase()){
         case "a": 
            let suma = (a, b) => value1 + value2;
            result = suma()
            break;    
        case "b":
            let sustraction = (a, b) => value1 - value2;
            result = sustraction()
            break;    
        case "c":
            let multiplication = (a, b) => value1 * value2;
            result = multiplication()
            break;    
        case "d":
            let division = (a, b) => value1 / value2;
            result = division()
            break;    
        case "e":
             let exponentiation = (a, b) => value1 ** value2;
             result = exponentiation()
             break;
        default:
            display1.style.fontSize = "16px";
            display1.style.color = "red";
            result = "Invalid operation ("+operator.toUpperCase()+")";
             
        }
        display1.textContent = result;
    }
    
    new_main_post();