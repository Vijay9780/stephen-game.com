let boxes = document.querySelectorAll(".box");

let turn = "S";
let isGameOver = false;

boxes.forEach(e =>{
    e.innerHTML = ""
    e.addEventListener("click", ()=>{
        if(!isGameOver && e.innerHTML === ""){
            e.innerHTML = turn;
            cheakWin()
            cheakDraw();
            changeTurn();
        }
    })
})

function changeTurn(){
    if(turn === "S"){
        turn = "V";
        document.querySelector(".bg").style.left = "85px";
        plaound("Phone Dialing 1.mp3")
    }
    else{
        turn = "S";
        document.querySelector(".bg").style.left = "0";
        plaound("Phone Dialing 2.mp3")
    }
}

function cheakWin(){
    let winConditions = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ]
    for(let i = 0; i<winConditions.length; i++){
        let v0 = boxes[winConditions[i][0]].innerHTML;
        let v1 = boxes[winConditions[i][1]].innerHTML;
        let v2 = boxes[winConditions[i][2]].innerHTML;

        if(v0 != "" && v0 === v1 && v0 === v2){
            isGameOver = true;
            document.querySelector("#results").innerHTML = turn + " win";
            document.querySelector("#play-again").style.display = "inline"
            

            for(j = 0; j<3; j++){
                boxes[winConditions[i][j]].style.backgroundColor = "#08D9D6"
                boxes[winConditions[i][j]].style.color = "#000"
            }
        }
    }
}

function cheakDraw(){
    if(!isGameOver){
        let isDraw = true;
        boxes.forEach(e =>{
            if(e.innerHTML === "") isDraw = false;
        })

        if(isDraw){
            isGameOver = true;
            document.querySelector("#results").innerHTML = "Draw";
            document.querySelector("#play-again").style.display = "inline"
        }
    }
}

document.querySelector("#play-again").addEventListener("click", ()=>{
    plaSound("3...2...1... GO! With Voice (320 kbps) (mp3cut.net).mp3");
    isGameOver = false;
    turn = "S";
    document.querySelector(".bg").style.left = "0";
    document.querySelector("#results").innerHTML = "";
    document.querySelector("#play-again").style.display = "none";

    boxes.forEach(e =>{
        e.innerHTML = "";
        e.style.removeProperty("background-color");
        e.style.color = "#fff"
    })
})

function plaSound(audioName){
    let audio = new Audio(audioName);
    audio.play();
    }
function plaound(audioName){
    let audio = new Audio(audioName);
    audio.play();
    }

var audio1 = document.getElementById('audio');
var play1 = document.getElementById('play2')
var count = 0;

function playpause(){
    if(count == 0){
        count =1;
        audio.loop = true;
        audio.play();
    }else{
          count = 0;
          audio.pause(); 
    }
}