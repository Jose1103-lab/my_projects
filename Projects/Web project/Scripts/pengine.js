//my first steps un javascript

    // A module that creates a "P" element
// function new_main_post(){
//    const new_para = document.createElement("p");
//    const main_node = document.getElementById("main_feed")
//    new_para.textContent = "New paragraph"
//    new_para.setAttribute('class', "logo") //♠♠
//    //♠♠ alert (main_node.parentNode.parentNode)
//    main_node.appendChild(new_para)
//return new_para.parentNode //check the current node parent 
//}
    
    //check the current node parent 
// let retrn = new_main_post();
// console.log(retrn)

    // Adds a new container to the main feed
const add_new_div_container = () => new_container = document.createElement("div");
    // Adds a new title to the container
// I will add a dropdnwn to select the size of the title
const add_new_title = () => new_title = document.createElement("h2");
    // Adds a new paragraph to the container
const add_new_paragraph = () => new_paragraph = document.createElement("p");

const text = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, necessitatibus officiis nesciunt corrupti tempore sit alias deleniti optio animivero! Voluptates numquam cupiditate cumque amet modi enim quos corrupti molestias, veritatis dolorem, eius soluta delectus adipisci aspernatur, vel sint illum non! Debitis voluptatum accusantium, doloremque soluta minima labore deserunt perspiciatis."

function add_new_feed_content(){
    //this fuction creates a new element for the main feed of the page
    const new_container = add_new_div_container();
        new_container.setAttribute("class", "mn-inside")
    const new_para = add_new_paragraph();
    const new_title = add_new_title();
    const main_node = document.getElementById("main_feed");
    //attaching the new elements to the main feed container
    main_node.appendChild(new_container);
    new_container.appendChild(new_title);
    new_container.appendChild(new_para);
    new_title.textContent = text;
    new_para.textContent = text;
}
    // a loop to add more content to the main feed #proof
// for(let i = 0; i < 25; i++){
//     add_new_feed_content()
// }

    // add a backgroundColor to all the last child of the main feed 
// let last_child = document.getElementById("main_feed");
// last_child.lastElementChild.style.backgroundColor = "red";

    //action added to add more elements using a botton
let adder = document.getElementById("operator+").addEventListener("click", () => {add_new_feed_content()});

    //a loop for a calculator
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
    
