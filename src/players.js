const Player = require("./player")

var Players = function(){
  var playerList = new Array()
  var currentPlayer = 0


  this.didPlayerWin = function () {
    return !(playerList[currentPlayer].getPurse() == 6)
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

  this.setPlayerPlace = function (newPlace) {
    playerList[currentPlayer].setPlace(newPlace)
  }

  this.getPlayerPlace = function () {
    return playerList[currentPlayer].getPlace()
  }

  this.setPlayerIsGettingOutOfTheBox = function (value){
    playerList[currentPlayer].setIsGettingOutOfPenaltyBox()
  }

  this.getPlayerIsGettingOutOfPenaltyBox = function () {
    return playerList[currentPlayer].isGettingOutOfPenaltyBox()
  }

  this.getPlayerInPenaltyBox = function() {
    return playerList[currentPlayer].getInPenaltyBox()
  }

  this.getCurrentPlayerName = function() {
    return playerList[currentPlayer].getName()
  }

  this.setCurrentPlayer = function () {
    currentPlayer += 1
    if(currentPlayer == playerList.length) currentPlayer = 0
  }

  this.setPlayerInPenaltyBox = function (value) {
    playerList[currentPlayer].setPenaltyBox(value)
  }
  this.getPlayerPurse = function () {
    return playerList[currentPlayer].getPurse()
  }
  this.getPlayerListLength = function () {
    return playerList.length
  }
}
module.exports = Players;