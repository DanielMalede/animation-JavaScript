// var StartBTN = document.createElement("button")
// StartBTN.innerText = "CLICK HERE TO PLAY"
// document.body.append(StartBTN)
// StartBTN.addEventListener("click",changeTextColor)

// var StopBTN = document.createElement("button")
// StopBTN.innerText = "CLICK HERE TO STOP"
// document.body.append(StopBTN)
// StopBTN.addEventListener("click",stopBTN)

// var FirstDiv = document.createElement("div")
// FirstDiv.style.width="30px"
// FirstDiv.style.height="30px"
// FirstDiv.style.backgroundColor="red"
// document.body.append(FirstDiv)
// FirstDiv.addEventListener("click",changeColor)

// var IntervalId;
// var distanc=0;

// function playBTN() {
//     IntervalId=setInterval(()=>{
//     FirstDiv.style.height=distanc++ +"px"
//     },10)
// }
// function stopBTN() {
//     clearInterval(IntervalId)
// }

// function StopTheAnimation(event) {
//     if (event.key=="Enter") {
//         // console.log(event.key);
//         stopBTN()        
//     }
// }

// function changeColor() {
//     var Rcolor= Math.floor(Math.random()*256)
//     var Bcolor= Math.floor(Math.random()*256)
//     var Gcolor= Math.floor(Math.random()*256)
//     FirstDiv.style.backgroundColor= "rgb("+Rcolor+","+Gcolor+","+Bcolor+")"   
// }


// var userInputWidth = document.createElement("input")
// userInputWidth.type="number"
// document.body.append(userInputWidth)
// userInputWidth.placeholder="enter width number"
// var userInputHeigth = document.createElement("input")
// userInputHeigth.type="number"
// document.body.append(userInputHeigth)
// userInputHeigth.placeholder="enter heigth number"

// var counter = 0;
// function getWidthAndHeight() {
//     IntervalId=setInterval(()=>{
//         if (counter<userInputHeigth.value) {
//             FirstDiv.style.height=counter++ +"px"
//         }
//         if (counter<userInputWidth.value) {
//             FirstDiv.style.width=counter++ +"px"

//         }
//         },10)
// }
// function StopTheAnimation(event) {
//     if (event.key==" ") {
//             stopBTN()        
//     }
// }

// var userColor = document.createElement("input")
// userColor.type="color"
// document.body.append(userColor)
// var userText = document.createElement("input")
// document.body.append(userText)

// var h2_text = document.createElement("h2")
// document.body.append(h2_text)

// var RND;
// var array = []
// function changeTextColor() {
//     if (array.length<=5) {
//         array.push(userColor.value)
//     }
//     if (array.length>=5) {
//         IntervalId = setInterval (()=>{
//             RND= Math.floor(Math.random()*6)
//             h2_text.innerText=userText.value

//             h2_text.style.color=array[RND]
//         },100) 
//     } 
// }
// function stopBTN() {
//     clearInterval(IntervalId)
// }

