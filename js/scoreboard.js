var scoreboard = function() {

  // private members
  var results = []; // array to store result of every game

  function addResult(newResult) {
    results.push(newResult);
  }

  function updateScoreboard() {
    var output = '<h2>Scoreboard</h2>';

    // loop over all results and create the html for the scoreboard
    for (var i = 0; i < results.length; i++) {
      var result = results[index];
      output += '<h4>';
      output += `${result.name} : ${result.score} /${result.problems} for factor ${result.factor}`;
      output += '</h4>'
    }

    // add the updated scoreboard to the page
    var scoresElement = document.getElementById('scores');
    scoresElement.innerHTML = output;
  }

  // Expose the API
  return {
    addResult: addResult,
    updateScoreboard: updateScoreboard
  }

}();