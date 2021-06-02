const getType = require('jest-get-type');
const fs = require('fs')
const prueba = require('./prueba.json');
const Game = require('./game');

describe("The test environment", function () {
  it("should pass", function () {
    expect(true).toBe(true);
  });

  // it("should access game", function () {
  //   expect(Game).not.toEqual(undefined);
  // });
});

describe("Your specs...", function () {
  
  test.skip('manipulate game output', () => {
    const randomArray = [1, 2, 3, 4, 5, 6, 7]
    const logs = []
    const oldConsole = console.log
    console.log = (message) => logs.push(message)  
    randomArray.forEach( rNumber => {
      global.Math.floor = () => rNumber
      require('./game')
    });

    fs.writeFileSync('/home/julen/testing_course/nodejs-trivia/prueba.json', JSON.stringify(logs))
    const file = fs.readFileSync('/home/julen/testing_course/nodejs-trivia/prueba.json', 'utf-8')
    
    console.log = oldConsole
    console.log(file)
  })

  test('compare new test output with the gotten one before', () => {
    const array = []
    let x = false
    console.log = jest.fn((message) => array.push(message) )
    const Game = require('./game')
    const game2 = new Game()
    global.Math.floor = () =>  1
    game2.start()

    fs.writeFileSync('/home/julen/testing_course/nodejs-trivia/secondTest.json', JSON.stringify(array))
    const file = fs.readFileSync('/home/julen/testing_course/nodejs-trivia/prueba.json', 'utf-8')
    if(JSON.stringify(array) == file) x = true

    expect(file).toEqual(fs.readFileSync('/home/julen/testing_course/nodejs-trivia/secondTest.json', 'utf-8'))
    expect(array.length).toBeGreaterThan(1)
    
  })
});

describe('Multiple Game() test with different outputs', function() {
  const originalLog = console.log
  const originalMathFloor = Math.floor
  const projectPath = '/home/julen/testing_course/nodejs-trivia/'
  const arrayRandomValues = [1, 2, 3, 4, 5, 6]
  const game = new Game()
  
  afterEach(()=> {

  })
  
  afterAll(()=> {
    console.log = originalLog
    Math.floor = originalMathFloor
  })


  test.skip.each(arrayRandomValues)('tests different values', (randomValue) => {
    const array = []
    const folderName = 'testDataFiles/'
    const fileName = randomValue.toString() + '.json'
    Math.floor = () => randomValue
    if(!fs.existsSync(projectPath + folderName)) fs.mkdirSync(projectPath + folderName, {recursive: true})

    console.log = (message) => array.push(message)
    
    game.start()

    fs.writeFileSync(projectPath + folderName + fileName, JSON.stringify(array))

    expect(fs.existsSync(projectPath + folderName + fileName)).toBeTruthy()
    
  })

  test.each(arrayRandomValues)(`Verifies tests still have same console.log outputs `, randomValue => {
    const array = []
    const folderPath = projectPath + 'testDataFiles/'
    global.Math.floor = () =>  randomValue
    global.console.log = (message) => array.push(message)

    game.start()
    fs.writeFileSync('/tmp/' + randomValue + '.json', JSON.stringify(array))


    const newFile = fs.readFileSync('/tmp/' + randomValue + '.json', 'utf-8')
    const oldFile = fs.readFileSync(folderPath + randomValue + '.json', 'utf-8')

    expect(oldFile).toEqual(newFile)
  })

  // test('compare new test that should not have the same output', () => {
  //   const array = []
  //   let x = false
  //   jest.fn(()=> {
  //     console.log = (message) => array.push(message)
  //     global.Math.floor = () => 2
  //     require('./game') 
  //   })
  //   const file = fs.readFileSync('/home/julen/testing_course/nodejs-trivia/prueba.json', 'utf-8')
  //   if(JSON.stringify(array) == file) x = true

  //   expect(array.length).toBeGreaterThan(1)
  //   expect(x).toBe(false)

  // })
});


// test('test isPlayable function, if 2 players or more returns true, otherwise false.', () => {
//   const game1 = new Game()
//   const game2 = new Game()

//   game1.add('player1')
//   game2.add('player2')
//   game2.add('player22')
//   game2.add('player222')


//   const game1Playable = game1.isPlayable(game1.howManyPlayers())
//   const game2Playable = game2.isPlayable(game2.howManyPlayers())
//   expect(game1Playable).toBe(false)
//   expect(game2Playable).toBe(true)
// });

// test('howManyPlayers function, returns a number, and player amount', () => {
//   const game = new Game()
//   const playerList = ['Julen', 'notJulen']

//   playerList.forEach( playerName => {
//     game.add(playerName)
//   });

//   const playerAmount = game.howManyPlayers()
//   expect(playerAmount).toEqual(playerList.length)
//   expect(playerAmount).toEqual(2)
//   expect(getType(playerAmount)).toBe('number')
// })

// describe('Test wasCorrectlyAnswered function.', () => {
//   it('Player is on PenaltyBox and GettingOutPenaltyBox', () => {
//     jest.fn()
    
//     expect(playerCoins).toBe(startingPlayerCoins + 1)
//   });
// });

// test('wrongAnswer. ', () => {
//   const game = new Game()
//   game.inPentaltyBox = [false, false, false]
//   game.players = ['julen', 'julentxibi', 'julentxihiru']
//   game.currentPlayer = 0

//   console.log(game.getPlayers())

//   game.wrongAnswer()

  
//   expect(game.wrongAnswer()).toBe(true)
// });

// // describe('Game Add function tests', () => {

// //   const game  = new Game()
  
// //   it('Adds newPlayer to the end of players array', () => {
// //     const newPlayer = '2iqPlayerHonestly'
    
// //     game.add(newPlayer)
// //     game.getPlayersArray()
    
    
// //     expect(lastPlayer).toBe(newPlayerName)
// //   })

// // });


// test('createRockQuestion testing', () => {
//  const game = new Game()
//   const index = 1

//  const value = game.createRockQuestion(index)
//  expect(value).toBe("Rock Question " + index)
// } )


// describe('Unit tests for Game class ', () => {
//   it('should ', () => {
    
//   });
// });