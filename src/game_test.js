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
