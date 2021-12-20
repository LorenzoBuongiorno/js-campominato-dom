const buttons = document.querySelector(".difficulty");

const buttonEasy = document.querySelector(".easy");
const buttonMedium = document.querySelector(".medium"); 
const buttonHard = document.querySelector(".hard"); 

const container = document.querySelector(".container"); 
const backBox = document.querySelector(".back-box"); 

const bombs = [];




//3 event con scelta della difficoltà

buttonEasy.addEventListener("click", function(){
    
    buttons.classList.add("none");
    bombsGenerator(100);
    
    for(let i = 1; i <= 100; i++){
        
        let grid = "easy-grid";
        addBox(container,i,grid);
        backBox.classList.add("grey");
        
    }
    
})

buttonMedium.addEventListener("click", function(){
    
    buttons.classList.add("none");
    bombsGenerator(81);
    
    for(let i = 1; i <= 81; i++){
        
        let grid = "medium-grid";
        addBox(container,i,grid);
        backBox.classList.add("grey");
        
    }
    
})

buttonHard.addEventListener("click", function(){

    buttons.classList.add("none");
    bombsGenerator(49);
    
    for(let i = 1; i <= 49; i++){
        
        let grid = "hard-grid";
        addBox(container,i,grid);
        backBox.classList.add("grey");
        
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
        
        this.classList.add("color");
        
        
    })
    
}

function random(min,max){
    return Math.round(Math.random() * (max - min)) + min;
}


function bombsGenerator(MaxBombValue){
while(bombs.length < 16){
    const number = random(1,MaxBombValue);
    if (!bombs.includes(number)){
        bombs.push(number);
    }
} 
}