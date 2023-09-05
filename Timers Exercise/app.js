//Countdown
function countDown (num){
    let x = setInterval(function (){
        num --;
        if (num <= 0){
            clearInterval(x)
            return console.log('DONE!')
        }
        else{
            console.log(num)
        }
    }, 1000)
}

//Random Game
function randomGame(){
    let counter = 0;
    let x = 0;
    let game = setInterval(function(){
        counter ++;
        x = Math.random();
        if (x > 0.75){
            clearInterval(game)
            return console.log('Game Over!', 'final number =', x, 'count =', counter)
        }
        else{
            console.log(x)
        }
    }, 1000)
}