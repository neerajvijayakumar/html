      let score ={
        wins : 0,
        losses : 0,
        tie : 0
      }

      function playgame(playermove)
      {
        const computerMove = computerpick();
        let result = '';

        document.querySelector('.js-move')
        .innerHTML = `Your move:${playermove}, computer move :${computerMove}`;


            if (playermove === 'stone')
          {
            if(computerMove === 'stone')
            {
              result = 'tie';
            }
            else if (computerMove === 'scissor')
            {
              result = 'win';
            }
            else if(computerMove === 'paper')
            {
              result = 'lose';
            }
          }
           else if (playermove === 'paper')
          {
            if(computerMove === 'stone')
            {
              result = 'win';
            }
            else if (computerMove === 'scissor')
            {
              result = 'lose';
            }
            else if(computerMove === 'paper')
            {
              result = 'tie';
            }
          }
           else if (playermove === 'scissor')
          {
            if(computerMove === 'stone')
            {
              result = 'lose';
            }
            else if (computerMove === 'scissor')
            {
              result = 'tie';
            }
            else if(computerMove === 'paper')
            {
              result = 'win';
            }
          }

            if (result === 'win') {
          score.wins += 1;
        } else if (result === 'lose') {
          score.losses += 1;
        } else if (result === 'tie') {
          score.tie += 1;
        }
          updateScore();
      }
        
        function updateScore()
        {
          document.querySelector('.js-score')
          .innerHTML = `Wins${score.wins},Losses ${score.losses},Tie${score.tie}`;
        }
       

      
      function computerpick()
      {
        const randomNumber = Math.random()
          let computerMove = '';
          if(randomNumber >= 0 && randomNumber < 1/3)
          {
            computerMove = 'stone';

          }else if(randomNumber>= 1/3 && randomNumber <2/3)
          {
            computerMove='paper';
          }else if(randomNumber >= 2/3 && randomNumber <= 1)
          {
            computerMove = 'scissor';
          }
          return computerMove

      }
        