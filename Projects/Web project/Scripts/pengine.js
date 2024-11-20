//my first steps un javascript

// // A module that creates a "P" element
// function new_main_post(){
//    const new_para = document.createElement("p");
//    const main_node = document.getElementById("main_feed")
//    new_para.textContent = "New paragraph"
//    new_para.setAttribute('class', "logo") //♠♠
//    //♠♠ alert (main_node.parentNode.parentNode)
//    main_node.appendChild(new_para)
    
// return new_para.parentNode //check the current node parent 
// }
// //check the current node parent 
// let retrn = new_main_post();
// console.log(retrn)


// // Adding more main containers to the main feed
const add_new_div_container() => return new_container = document.createElement("div");
const add_new_paragraph() => return new_container = document.createElement("p");


function add_new_feed_content(){
    const new_container = add_new_div_container();
        new_container.setAttribute("class", "mn-inside")
    const new_para = add_new_paragraph();
    const new_title = document.createElement("h2");
    const main_node = document.getElementById("main_feed")
    main_node.appendChild(new_container)
    new_container.appendChild(new_title)
    new_container.appendChild(new_para)
    new_title.textContent = "New biography"
    new_para.textContent = "New biography paragraph"
}

for(let i=0; i < 10; i++){
    add_new_feed_content()
}


// const adder = addEventListener("click", () => {...}


// while(true){
//      let operator = prompt ("Opertion:\n A) Sum\n B) Subtraction\n C) Multiplication\n D) Division\n E) Exponentiation\n (F) Close");
//      if(operator.toLowerCase() === "f"){break;}
//      let value1 = parseFloat(prompt("First digit:"));
//      let value2 = parseFloat(prompt("Second digit:"));
//      let display1 = document.getElementById("display");
//      let result

     
//      switch(operator.toLowerCase()){
//          case "a": 
//             let suma = (a, b) => value1 + value2;
//             result = suma()
//             break;    
//         case "b":
//             let sustraction = (a, b) => value1 - value2;
//             result = sustraction()
//             break;    
//         case "c":
//             let multiplication = (a, b) => value1 * value2;
//             result = multiplication()
//             break;    
//         case "d":
//             let division = (a, b) => value1 / value2;
//             result = division()
//             break;    
//         case "e":
//              let exponentiation = (a, b) => value1 ** value2;
//              result = exponentiation()
//              break;
//         default:
//             display1.style.fontSize = "16px";
//             display1.style.color = "red";
//             result = "Invalid operation ("+operator.toUpperCase()+")";
             
//         }
//         display1.textContent = result;
//     }
    
