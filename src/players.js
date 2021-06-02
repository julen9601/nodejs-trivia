const Player = require("./player")

var Players = function(){
  var playerList = new Array()
  var currentPlayer = 0


  this.didPlayerWin = function () {
    return playerList[currentPlayer].didPlayerWin()
  }

  this.addPlayer = function (name) {
    playerList.push(new Player(name))
  }

  this.isPlayerInPenaltyBox = function () {
    return playerList[currentPlayer].inPenaltyBox()
  }

  this.setPlayerPurses = function (coins) {
    playerList[currentPlayer].setPurse(coins)
  }

  this.setPlayerPlace = function () {
    playerList[currentPlayer].setPlace
  }
}
module.exports = Players;