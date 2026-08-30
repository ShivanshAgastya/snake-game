let SnakeVelocity = {x: 0, y: 0};
const foodSound = new Audio('food.mp3');
const Oversound = new Audio('gameover.mp3');
const moveSound = new Audio('move.mp3');
const musicsound = new Audio('music.mp3');
let isGameOver = false;
let speed = 5;
let score = 0;
let isPaused = false;
let lastPaintTime = 0;
let snakeArr = [
    {x: 13, y: 15}
]
food = {x: 6, y: 7};
poison = { x: 9 , y: 18}; 
poison2 = null; 
poison3 = null; 
setInterval(() => {
    if(!isGameOver && !isPaused){
        let a = 2, b = 43, c = 2, d = 16;
        poison = {x: Math.round(a + (b-a)* Math.random()), y: Math.round(c + (d-c)* Math.random())}
    }
}, 6000);
setInterval(() => {
    if(!isGameOver && !isPaused && poison2 !== null){
        let a = 2, b = 43, c = 2, d = 16;
        poison2 = {x: Math.round(a + (b-a)* Math.random()), y: Math.round(c + (d-c)* Math.random())}
    }
}, 6000);

setInterval(() => {
    if(!isGameOver && !isPaused && poison3 !== null){
        let a = 2, b = 43, c = 2, d = 16;
        poison3 = {x: Math.round(a + (b-a)* Math.random()), y: Math.round(c + (d-c)* Math.random())}
    }
}, 6000);


function main(ctime) {
    window.requestAnimationFrame(main);
    console.log(ctime)
    if((ctime - lastPaintTime)/1000 < 1/speed){
        return;
    }
    lastPaintTime = ctime;
    if(isPaused){
        return; 
    }
    musicsound.play()
    gameEngine();
}

function iscollide(snake){
    for(let i = 1; i< snakeArr.length; i++){
        if(snake[i].x ===snake[0].x && snake[i].y === snake[0].y){
            
            return true;
        } 
        
    }
    return false;
}


function gameEngine(){
    if(iscollide(snakeArr) && !isGameOver){
        isGameOver = true;
        musicsound.pause();
        Oversound.play();
        score = 0;
        SnakeVelocity = {x: 0, y: 0};

        setTimeout(() => {
            score = 0;
            scorebox.innerHTML = "SCORE : " + score;
            alert("Game over , khel khtm press any key to restart!");
            snakeArr = [{x: 13, y: 15}];
            musicsound.play();
            
            speed = 5;
            isGameOver = false;
        }, 100);
    
    }

    
    //eating food
    if(snakeArr[0].y === food.y && snakeArr[0].x === food.x){
        foodSound.play();
        score = score + 1;
        
        if(score % 2 === 0 && speed < 25){
        speed += 1;
        }
        scorebox.innerHTML = "SCORE : " + score;
        snakeArr.unshift({x: snakeArr[0].x + SnakeVelocity.x, y: snakeArr[0].y + SnakeVelocity.y});
        let a = 2;
        let b = 43;
        let c = 2;
        let d = 16;
        food = {x: Math.round(a + (b-a)* Math.random()), y: Math.round(c + (d-c)* Math.random())}
        }

        if(score === 8 && poison2 === null){
            let a2 = 2, b2 = 43, c2 = 2, d2 = 16;
            poison2 = {x: Math.round(a2 + (b2-a2)* Math.random()), y: Math.round(c2 + (d2-c2)* Math.random())}
        }

        
        if(score === 16 && poison3 === null){
            let a3 = 2, b3 = 43, c3 = 2, d3 = 16;
            poison3 = {x: Math.round(a3 + (b3-a3)* Math.random()), y: Math.round(c3 + (d3-c3)* Math.random())}
    }

    else if(snakeArr[0].y === poison.y && snakeArr[0].x === poison.x){
            let a = 2;
            let b = 43;
            let c = 2;
            let d = 16;
            poison = {x: Math.round(a + (b-a)* Math.random()), y: Math.round(c + (d-c)* Math.random())}
            isGameOver = true;
            musicsound.pause();
            Oversound.play();
            SnakeVelocity = {x: 0, y: 0};

        setTimeout(() => {
            score = 0;
            scorebox.innerHTML = "SCORE : " + score;
            alert("Game over , khel khtm press any key to restart!");
            snakeArr = [{x: 13, y: 15}];
            musicsound.play();
            
            speed = 5;
            isGameOver = false;
        }, 100);
            
    }
    else if(poison2 !== null && snakeArr[0].y === poison2.y && snakeArr[0].x === poison2.x){
            let a = 2;
            let b = 43;
            let c = 2;
            let d = 16;
            poison2 = {x: Math.round(a + (b-a)* Math.random()), y: Math.round(c + (d-c)* Math.random())}
            isGameOver = true;
            musicsound.pause();
            Oversound.play();
            SnakeVelocity = {x: 0, y: 0};

        setTimeout(() => {
            score = 0;
            scorebox.innerHTML = "SCORE : " + score;
            alert("Game over , khel khtm press any key to restart!");
            snakeArr = [{x: 13, y: 15}];
            musicsound.play();
            
            speed = 5;
            isGameOver = false;
            poison2 = null;
            poison3 = null;
        }, 100);
            
    }

    else if(poison3 !== null && snakeArr[0].y === poison3.y && snakeArr[0].x === poison3.x){
            let a = 2;
            let b = 43;
            let c = 2;
            let d = 16;
            poison3 = {x: Math.round(a + (b-a)* Math.random()), y: Math.round(c + (d-c)* Math.random())}
            isGameOver = true;
            musicsound.pause();
            Oversound.play();
            SnakeVelocity = {x: 0, y: 0};

        setTimeout(() => {
            score = 0;
            scorebox.innerHTML = "SCORE : " + score;
            alert("Game over , khel khtm press any key to restart!");
            snakeArr = [{x: 13, y: 15}];
            musicsound.play();
            speed = 5;
            isGameOver = false;
            poison2 = null;
            poison3 = null;
        }, 100);
            
        }
    
       
    else {
        snakeArr.unshift({x: snakeArr[0].x + SnakeVelocity.x, y: snakeArr[0].y + SnakeVelocity.y});
        snakeArr.pop();
     }
     // Wraparound
    if (snakeArr[0].x > 45) snakeArr[0].x = 1;
    if (snakeArr[0].x < 1) snakeArr[0].x = 45;
    if (snakeArr[0].y > 18) snakeArr[0].y = 1;
    if (snakeArr[0].y < 1) snakeArr[0].y = 18;


    //display
    board.innerHTML = "";
    snakeArr.forEach((e,index)=>{
        snakeElement = document.createElement('div');
        snakeElement.style.gridRowStart = e.y;
        snakeElement.style.gridColumnStart = e.x;
        if(index === 0){
            snakeElement.classList.add('head');
        }   
        else{
            snakeElement.classList.add('snake');
        }
        board.appendChild(snakeElement);
    });
    foodElement = document.createElement('div');
    foodElement.style.gridRowStart = food.y;
    foodElement.style.gridColumnStart = food.x;
    foodElement.classList.add('food');
    foodElement.innerHTML = "⭐";
    board.appendChild(foodElement);

    poisonElement = document.createElement('div');
    poisonElement.style.gridRowStart = poison.y;
    poisonElement.style.gridColumnStart = poison.x;
    poisonElement.classList.add('poisonfood');
    poisonElement.innerHTML = "💀";
    board.appendChild(poisonElement);

if(poison2 !== null){
    poisonElement2 = document.createElement('div');
    poisonElement2.style.gridRowStart = poison2.y;
    poisonElement2.style.gridColumnStart = poison2.x;
    poisonElement2.classList.add('poisonfood');
    poisonElement2.innerHTML = "💀";
    board.appendChild(poisonElement2);
}

if(poison3 !== null){
    poisonElement3 = document.createElement('div');
    poisonElement3.style.gridRowStart = poison3.y;
    poisonElement3.style.gridColumnStart = poison3.x;
    poisonElement3.classList.add('poisonfood');
    poisonElement3.innerHTML = "💀";
    board.appendChild(poisonElement3);
}

}
window.requestAnimationFrame(main);
window .addEventListener('keydown', e=>{
    if(e.key === " "){
        isPaused = !isPaused;
        musicsound.pause()
        return;}
    if(["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(e.key)){
        document.getElementById('startText').style.display = "none";
    }
    
    moveSound.play();
    switch (e.key) {

        case "ArrowUp":
            console.log("ArrowUp");
            if(SnakeVelocity.y !== 1){  
                SnakeVelocity = {x: 0, y: -1};
            }
            break;
        case "ArrowDown":
            console.log("ArrowDown");
            if(SnakeVelocity.y !== -1){ 
                SnakeVelocity = {x: 0, y: 1};
            }
            break;
        case "ArrowLeft":
            console.log("ArrowLeft");
            if(SnakeVelocity.x !== 1){  
                SnakeVelocity = {x: -1, y: 0};
            }
            break;
        case "ArrowRight":
            console.log("ArrowRight");
            if(SnakeVelocity.x !== -1){  
                SnakeVelocity = {x: 1, y: 0};
            }
            
            break;
    }

});

