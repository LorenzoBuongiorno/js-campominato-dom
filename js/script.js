const buttons = document.querySelector(".difficulty");

const buttonEasy = document.querySelector(".easy");
const buttonMedium = document.querySelector(".medium"); 
const buttonHard = document.querySelector(".hard"); 

const container = document.querySelector(".container"); 
const backBox = document.querySelector(".back-box"); 

const result = document.querySelector(".result"); 






const bombs = [];
const totalBox = [];
let points = 0;





//3 event con scelta della difficoltà

//difficoltà facile
buttonEasy.addEventListener("click", function(){
    
    buttons.classList.add("none");
    bombsGenerator(100);
    
    for(let i = 1; i <= 100; i++){
        
        let grid = "easy-grid";
        addBox(container,i,grid);
        backBox.classList.add("grey");
        totalBox.push(i);
        
    }
    
})

//difficoltà media
buttonMedium.addEventListener("click", function(){
    
    buttons.classList.add("none");
    bombsGenerator(81);
    
    for(let i = 1; i <= 81; i++){
        
        let grid = "medium-grid";
        addBox(container,i,grid);
        backBox.classList.add("grey");
        totalBox.push(i);
        
    }
    
})

//difficoltà difficile
buttonHard.addEventListener("click", function(){

    buttons.classList.add("none");
    bombsGenerator(49);
    
    for(let i = 1; i <= 49; i++){
        
        let grid = "hard-grid";
        addBox(container,i,grid);
        backBox.classList.add("grey");
        totalBox.push(i);
        
    }
    
})

// funzione di aggiunta box
function addBox(outputContainer,boxNumber,grid){
    const box = document.createElement("div"); 
    box.className = `box ${grid}`;
    outputContainer.append(box);
    box.innerHTML += `${boxNumber}`;
    
    
    // coloro i box selezionati
    box.addEventListener("click", function(){
        //selezione numero
        const numberChose = parseInt(this.innerHTML);
        console.log(numberChose);
        //se il numero è nella lista bomba o no
        if (!bombs.includes(numberChose)){
            this.classList.add("color-blue");
            points++;
            //vittoria per completamento
            if(points === totalBox.length - 16){
                console.log("win");
                container.classList.add("none");
                backBox.classList.remove("grey");
                result.innerHTML = `YOU WIN </br> points: ${points}`;
            }

        } else {

            //perdita
            this.classList.add("color-red");
            container.classList.add("none");
            backBox.classList.remove("grey");
            result.innerHTML = `GAME OVER </br> points: ${points}`;
        }
        
    }, {once : true})
    
}
//generatore numeri random
function random(min,max){
    return Math.round(Math.random() * (max - min)) + min;
}

//generatore di bombe in un array
function bombsGenerator(MaxBombValue){
while(bombs.length < 16){
    const number = random(1,MaxBombValue);
    if (!bombs.includes(number)){
        bombs.push(number);
    }
} 
}
