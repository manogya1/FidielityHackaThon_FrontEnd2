function submitAnswers() {
    var answer1 = document.querySelector('input[name="q1"]:checked');
    var answer2 = document.querySelector('input[name="q2"]:checked');
    var answer3 = document.querySelector('input[name="q3"]:checked');
    var answer4 = document.querySelector('input[name="q4"]:checked');

    var score = 0;

    if (answer1 && answer1.value === "paris") {
      score++;
    }
    if (answer2 && answer2.value === "4") {
      score++;
    }
    if (answer3 && answer3.value === "shakespeare") {
      score++;
    }
    if (answer4 && answer4.value === "h2o") {
      score++;
    }

    // Display quiz end section
    document.getElementById("quizEnd_page").style.display = "block";

    // Display score
    document.getElementById("result").innerText = "Your score is: " + score + "/4";
  }