$(document).ready(function() {
    let currentPlayer = "X";
    let board = ["", "", "", "", "", "", "", "", ""];
    let isFirstRound = true;
  
    // Function to start the game
    function startGame() {
      $('#home_container').fadeOut('slow', function() {
        $('#game-container').fadeIn('slow');
      });
    }
  
    // Function to end the game and return to homepage
    function endGame() {
      $('#game-container').fadeOut('slow', function() {
        $('#home_container').fadeIn('slow');
      });
    }
  
    // Function to handle player clicks on cells
    function handleCellClick() {
      const cellIndex = $(this).index();
      if (board[cellIndex] === "") {
        board[cellIndex] = currentPlayer;
        $(this).text(currentPlayer);
        if (checkWin(currentPlayer)) {
          alert(currentPlayer + " wins!");
          resetGame();
        } else if (checkDraw()) {
          alert("It's a draw!");
          resetGame();
        } else {
          currentPlayer = currentPlayer === "X" ? "O" : "X";
        }
      }
    }
  
    // Function to check for a win
    function checkWin(player) {
      const winCombinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
      ];
      return winCombinations.some(combination => {
        return combination.every(index => {
          return board[index] === player;
        });
      });
    }
  
    // Function to check for a draw
    function checkDraw() {
      return board.every(cell => {
        return cell !== "";
      });
    }
  
    // Function to reset the game
    function resetGame() {
      board = ["", "", "", "", "", "", "", "", ""];
      $('.cell').text("");
      currentPlayer = "X";
      showRandomFact();
      if (isFirstRound) {
        $('#reset-button').prop('disabled', false);
        isFirstRound = false;
      }
    }
  
    // Function to show a random financial fact
    function showRandomFact() {
      const facts = [
        "Fact 1: Financial literacy can empower individuals to make informed financial decisions.",
        "Fact 2: Saving even small amounts regularly can lead to significant financial growth over time.",
        // Add more facts here...
      ];
  
      const randomFact = facts[Math.floor(Math.random() * facts.length)];
      alert(randomFact);
      showPopup();
    }
  
    // Function to show the pop-up
    function showPopup() {
      $('#popup').fadeIn('slow');
    }
  
    // Event listener for the continue button in the pop-up
    $('#continue-button').click(function() {
      $('#popup').fadeOut('slow');
    });
  
    // Event listener for the reset button
    $('#reset-button').click(function() {
      resetGame();
    });
  
    // Event listener for the play button
    $('#play_button').click(startGame);
  
    // Event listener for the back to home button
    $('#back-to-home').click(endGame);
  
    // Event listener for cell clicks
    $('.cell').click(handleCellClick);
  });
  