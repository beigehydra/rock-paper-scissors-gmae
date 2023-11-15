
            //to display what we stored in the local storage
            let score = JSON.parse(localStorage.getItem('score')) || {
                wins: 0,
                losses: 0,
                ties: 0
            };

                updateScoreElement();
            /*if(!score){
                score={
                wins: 0,
                losses: 0,
                ties: 0
            }
            }*/

              function playGame(playerMove){
             //we can also save the function into a variable in order to prevent the error of the variable only available in the scope
            const computerMove=pickComputerMove();
            let result = '';
            if(playerMove === 'scissors'){
                
            if(computerMove === 'rock'){
                result = 'You lose';
            } else if(computerMove === 'paper'){
                result = 'You win.';
            } else if (computerMove === 'scissors'){
                result='Tie.';
            }
            }
            
            else if(playerMove==='paper'){
                if(computerMove=== 'rock'){
                    result = 'You win';
                } else if(computerMove === 'paper'){
                    result = 'Tie.';
                } else if (computerMove === 'scissors'){
                    result='You lose.';
                }
            } 
            
            else if(playerMove==='rock'){
                if(computerMove === 'rock'){
                    result = 'Tie.';
                    } else if(computerMove === 'paper'){
                        result = 'You lose.';
                    } else if (computerMove === 'scissors'){
                        result='You win.';
                    }
            }

            if(result === 'You win.') {
                score.wins += 1;
            }
            else if(result === 'You lose.'){
                score.losses += 1;
            }
            else if(result === 'Tie.'){
                score.ties += 1;
            }

            //we can also save our string into the local storage by doing this
            localStorage.setItem('score', JSON.stringify(score));

            updateScoreElement();

            document.querySelector('.js-result').innerHTML = result;

            document.querySelector('.js-moves').innerHTML = 
            `<div class="row">
            <div class="col-lg-6 col-md-6 col-xs-6 order-sm-1 order-md-1 "><h5 class="text-center">You</h5></div>
            <div class="col-lg-6 col-md-6 col-xs-6 order-sm-3 order-md-3 align-items-center"><div class="row result-icon-box"><img class="result-icon" src="images/${playerMove}-emoji.png"></div></div>
            <div class="col-lg-6 col-md-6 col-xs-6 order-sm-4 order-md-4 align-items-center"><div class="row result-icon-box"><img class="result-icon" src="images/${computerMove}-emoji.png"></div></div>
            <div class="col-lg-6 col-md-6 col-xs-6 order-sm-2 order-md-2"><h5 class="text-center">Computer</h5></div>
            </div>`

            
            
        }

        function updateScoreElement(){
            document.querySelector('.js-score').innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}.`

            document.querySelector('.js-moves').innerHTML = '';
            document.querySelector('.js-result').innerHTML = '';


        }

        function pickComputerMove(){
        const randomNumber = Math.random();
        let computerMove = '';
        if(randomNumber > 0 && randomNumber <= 1/3){
            computerMove = 'rock';
        }
        else if(randomNumber > 1/3 && randomNumber <= 2/3){
            computerMove = 'paper';
        }
        else{
            computerMove = 'scissors';
        }
        console.log(computerMove);

        //another way to use a variable name outside a function is to return it
        //returning a variable is preferred to using a global variable
        return computerMove;
            }