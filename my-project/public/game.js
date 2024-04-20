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
      "Saving money grows like magic? Compound interest turns pennies into treasure chests over time!",
      "Budgeting is like leveling up in a financial game. Can you beat your high score and conquer your money goals?",
      "Emergency funds are your secret stash for rainy days. Aim to fill it with enough gold coins to weather any storm!",
      "Diversification is like building an all-star team for your finances. Mix and match your assets to conquer risk!",
      "Your credit score is the hero of your financial story, battling evil interest rates and saving you gold coins!",
      "Paying off high-interest debt is like defeating the final boss in a video game. Victory means no more interest draining your treasure chest!",
      "Retirement accounts are like time-traveling portals, transporting your gold coins into a future where you can live like royalty!",
      "Asset allocation is the strategy game of investing—balance your knights, wizards, and rogues for an epic financial fortress!",
      "Rebalancing your portfolio is like leveling up your characters in a role-playing game. Keep them balanced for financial success!",
      "Dollar-cost averaging is the secret potion for smooth sailing through market ups and downs. Keep investing regularly and watch your wealth grow!",
      "Long-term care insurance is your shield against healthcare dragons. Breathe fire back at those pesky expenses!",
      "Mastering needs vs. wants is the ultimate treasure-hunting skill. Separate the gold coins from the fool's gold and live like a king!",
      "Mastering financial terms unlocks your inner wizardry! Learn the spells and wield your financial power!",
      "Insurance is your shield against life's surprises. It's like having a superhero cape that protects your treasure!",
      "Estate planning ensures your treasure is passed down to future generations. Leave behind a legacy fit for royalty!",
      "Tax planning is the art of keeping more gold coins for yourself. Dodge the taxman's arrows and keep your treasure safe!",
      "Education savings plans are like magic wands, conjuring up funds for your child's future education without breaking a sweat!",
      "Watch out for sneaky investment fees—they're like goblins trying to steal your treasure! Keep an eye on your accounts and fend them off!",
      "Beware of financial scams—they're traps set by mischievous imps looking to steal your treasure! Stay vigilant and protect your coins!",
      "Reviewing your financial goals is like plotting your next epic quest. Adjust your course and keep striving for financial greatness!",
    ];

    const randomFact = facts[Math.floor(Math.random() * facts.length)];
    $('#fact-text').text(randomFact); // Displaying fact in the fact container
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
