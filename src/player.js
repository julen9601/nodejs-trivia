var Player = function(name){
  var name = name
  var purse = 0
  var place = 0
  var currentPosition
  var inPenaltyBox = false
  var isGettingOutOfPenaltyBox = false

  this.didPlayerWin = function(){
    return !(purses == 6)
  }

  this.inPenaltyBox = function () {
    return inPenaltyBox
  }

  this.setPenaltyBox = function () {

  }

  this.isGettingOutOfPenaltyBox = function () {
    return isGettingOutOfPenaltyBox
  }

  this.setPurse = function(coins) {
    purse += coins
  }


}

module.exports = Player;