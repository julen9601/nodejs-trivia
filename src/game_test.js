const Game = require('./game');

describe("The test environment", function () {
  it("should pass", function () {
    expect(true).toBe(true);
  });

  it("should access game", function () {
    expect(Game).not.toEqual(undefined);
  });
});

describe("Your specs...", function () {
  // it ...
});


describe('Game Add function tests', () => {

  const game  = new Game()
  
  it('Adds newPlayer to the end of players array', () => {
    const newPlayer = '2iqPlayerHonestly'
    game.getPlayers = function getPlayers(){ console.log(players)}

    console.log(game.getPlayers.exists())
    
    const lastPlayer = game.players[game.players.length -1]
    expect(lastPlayer).toBe(newPlayerName)
  })
});
