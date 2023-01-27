//const buttons = document.querySelectorAll("button");
const buttons = document.getElementsByClassName("button");
const show = document.querySelector(".displayScreen");
//const numbers = document.querySelectorAll(".digit");
//const equal = document.querySelector(".equalSign")
//const operations = document.querySelectorAll(".op");
//const ce = document.querySelector(".clearEntry");

let arrayButtons = Array.from(buttons);

arrayButtons.map(button => {
    button.addEventListener('click', (e) => {
        //e.preventDefault();
       switch(e.target.innerHTML) {
            case '=':
                show.innerHTML = eval(show.innerHTML);
                break;
            case 'CE':
                show.innerHTML = '';
                break;
            default:
               
                show.innerHTML += e.target.innerHTML ; 
        }
        
       
        });
});












// var displayButtons ='';
//     buttons.forEach(key_pad =>{
//     key_pad.addEventListener("click",(e) =>{
//         displayButtons +=e.target.innerText;
//         display.innerText=displayButtons;;
    
//     })
// })
// // var displayNum='';
// // numbers.forEach(digit => {
// //     digit.addEventListener('click', (e)=>{
// //         displayNum +=e.target.innerText;
// //         display.innerText=displayNum;
// //     })
// // })

// // var displayOp='';

// // operations.forEach(op=>{
// //     op.addEventListener("click",(e)=>{
// //         displayOp +=e.target.innerText;
// //         display.innerText=displayOp;
// //     })
// // })



  