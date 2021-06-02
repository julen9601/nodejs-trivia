var Player = function(name){
  var name = name
  var purse = 0
  var place = 0
  var inPenaltyBox = false
  var isGettingOutOfPenaltyBox = false

  this.getPurse = function () {
    return purse
  }

  this.inPenaltyBox = function () {
    return inPenaltyBox
  }

  this.setPenaltyBox = function (value) {
    inPenaltyBox = value
  }
  this.getInPenaltyBox = function () {
    return  inPenaltyBox
  }

  this.isGettingOutOfPenaltyBox = function () {
    return isGettingOutOfPenaltyBox
  }

  this.setPurse = function(coins) {
    purse += coins
  }

  this.getPurse = function () {
    return purse
  }

  this.setPlace = function (newPlace) {
    place = newPlace
  }

  this.getPlace = function () {
    return place
  }

  this.getName = function () {
    return name
  }

  this.setIsGettingOutOfPenaltyBox = function (value){
    isGettingOutOfPenaltyBox = value
  }

}

module.exports = Player;