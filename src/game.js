const Players = require("./players");

var Game = function () {
  // var players = new Array();
  // var places = new Array(6);
  // var purses = new Array(6);
  // var inPenaltyBox = new Array(6);
  // var currentPlayer = 0;
  // var isGettingOutOfPenaltyBox = false;

  var playerList = new Players()

  var popQuestions = new Array();
  var scienceQuestions = new Array();
  var sportsQuestions = new Array();
  var rockQuestions = new Array();


  // var didPlayerWin = function () {
  //   return !(purses[currentPlayer] == 6)
  // };

  // var currentCategory = function () {
  //   const POP = {places: [0, 4, 8], name: 'Pop'}
  //   const SCIENCE = {places: [1, 5, 9], name: 'Science'}
  //   const SPORTS = {places: [2, 6, 10], name: 'Sports'}
  //   const ROCK = {name: 'Rock'}
    
  //   if(POP.places.includes(places[currentPlayer]))
  //    return POP.name;
  //   if(SCIENCE.places.includes(places[currentPlayer]))
  //    return SCIENCE.name;
  //   if(places[currentPlayer] <= 10 && places[currentPlayer] >= 2)
  //    return SPORTS.name;
  //   return ROCK.name;
    
  // }

  var currentCategory = function () {
    const curPlaces = playerList.getPlayerPlace()

    if (curPlaces == 0 || curPlaces == 4 || curPlaces == 8)
      return 'Pop';
    if (curPlaces == 1 || curPlaces == 5 || curPlaces == 9)
      return 'Science';
    if (curPlaces == 2 || curPlaces == 6 || curPlaces == 10)
      return 'Sports';
    return 'Rock';
  };


  for (var i = 0; i < 50; i++) {
    popQuestions.push("Pop Question " + i);
    scienceQuestions.push("Science Question " + i);
    sportsQuestions.push("Sports Question " + i);
    rockQuestions.push("Rock Question " + i);
  }
  ;

  // this.isPlayable = function (howManyPlayers) {
  //   return howManyPlayers >= 2;
  // };

  this.add = function (playerName) {
    playerList.addPlayer(playerName)
    // players.push(playerName); //
    // places[this.howManyPlayers() - 1] = 0; //
    // purses[this.howManyPlayers() - 1] = 0; //
    // inPenaltyBox[this.howManyPlayers() - 1] = false; // 

    console.log(playerName + " was added");
    console.log("They are player number " + playerList.getPlayerListLength());

  };

  // this.howManyPlayers = function () { // no se necesita despues
  //   return players.length;
  // };


  var askQuestion = function () {
    switch(currentCategory()){
      case 'Pop':
        console.log(popQuestions.shift())
        break
      case 'Science':
        console.log(scienceQuestions.shift())
        break
      case 'Sports':
        console.log(sportsQuestions.shift())
        break
      case 'Rock':
        console.log(rockQuestions.shift())
        break
    }
  };

  this.roll = function (roll) {
    console.log(playerList.getCurrentPlayerName() + " is the current player");
    console.log("They have rolled a " + roll);

    if (playerList.getPlayerInPenaltyBox() && roll % 2 != 0 && playerList.getPlayerPlace() > 11 ) {
      //isGettingOutOfPenaltyBox = true
      playerList.setPlayerIsGettingOutOfTheBox(true)
      console.log(playerList.getCurrentPlayerName() + " is getting out of the penalty box");
      // places[currentPlayer] = places[currentPlayer] - 12;
      playerList.setPlayerPlace(playerList.getPlayerPlace() - 12)
      console.log(playerList.getCurrentPlayerName() + "'s new location is " + playerList.getPlayerPlace());
      console.log("The category is " + currentCategory());
      askQuestion();
    }
    if (playerList.getPlayerInPenaltyBox() && roll % 2 != 0 && playerList.getPlayerPlace() <= 11) {
      //isGettingOutOfPenaltyBox = true
      playerList.setPlayerIsGettingOutOfTheBox(true)
      console.log(playerList.getCurrentPlayerName() + " is getting out of the penalty box");
      
      console.log(playerList.getCurrentPlayerName() + "'s new location is " + playerList.getPlayerPlace());
      console.log("The category is " + currentCategory());
      askQuestion();
  
    if(playerList.getPlayerInPenaltyBox() && !(roll % 2 != 0 ))
        console.log(players[currentPlayer] + " is not getting out of the penalty box");
        isGettingOutOfPenaltyBox = false;
      }
    if(! playerList.getPlayerInPenaltyBox() ){
      
      // places[currentPlayer] = places[currentPlayer] + roll;
      playerList.setPlayerPlace(playerList.getPlayerPlace() + roll)
      if (playerList.getPlayerPlace() > 11) {
        //places[currentPlayer] = places[currentPlayer] - 12;
        playerList.setPlayerPlace(playerList.getPlayerPlace() - 12)
      }
      
      console.log(playerList.getCurrentPlayerName() + "'s new location is " + playerList.getPlayerPlace());
      console.log("The category is " + currentCategory());
      askQuestion();
    }
  };

  this.wasCorrectlyAnswered = function () {
    if (playerList.getPlayerInPenaltyBox()) {
      if (isGettingOutOfPenaltyBox) {
        console.log('Answer was correct!!!!');
        playerList.setPlayerPurses(1)
        console.log(playerList.getCurrentPlayerName() + " now has " +
          playerList.getPlayerPurse() + " Gold Coins.");

        var winner = playerList.didPlayerWin()
        playerList.setCurrentPlayer()
        playerList.setCurrentPlayer();

        return winner;
      } else {
        playerList.setCurrentPlayer();
        return true;
      }
    } 
    if(!playerList.getPlayerInPenaltyBox()){
      console .log("Answer was correct!!!!");
      // purses[currentPlayer] += 1;
      playerList.setPlayerPurses(1)
      
      console.log(playerList.getCurrentPlayerName() + " now has " +
        playerList.getPlayerPurse() + " Gold Coins.");

      var winner = playerList.didPlayerWin();

      playerList.setCurrentPlayer();

      return winner;
    }
    return didPlayerWin();
  };

  this.wrongAnswer = function () {
    console.log('Question was incorrectly answered');
    console.log(playerList.getCurrentPlayerName() + " was sent to the penalty box");
    //inPenaltyBox[currentPlayer] = true;
    playerList.setPlayerInPenaltyBox(true)

    playerList.setCurrentPlayer()
    return true;
  };


  this.start = function () {
    var notAWinner = false;

    this.add('Chet')
    this.add('Pat')
    this.add('Sue')

    do {
      this.roll(Math.floor(Math.random() * 6) + 1);
      
      if (Math.floor(Math.random() * 10) == 7) {
        notAWinner = this.wrongAnswer();
      } else {
        notAWinner = this.wasCorrectlyAnswered();
      }
      
    } while (notAWinner);

  }


};




module.exports = Game;
