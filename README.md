# Ugly Trivia game kata

This is a kata intended to practice the Golden Master refactoring technique.

Suggested workflow:
- Test the game
- Refactor it

The original kata lives at https://github.com/jbrains/trivia

## Preparing your environment

You can skip steps 1 and 2 if your development environment already has NodeJS 15 set up. Check the [`.tool-versions`](.tool-versions) file to know the specific NodeJS version this repo requires.

1. Install [asdf](https://asdf-vm.com/)
2. Add the NodeJS plugin to asdf with `asdf plugin add nodejs`   
3. Fork [this repo](https://github.com/ggalmazor-training/nodejs-trivia), clone it somewhere in your computer, and run `asdf install` and `npm install` where you cloned it.
4. Test your environment by running the tests with `npm run test`


## Add Documentation (by Julen)

  Juego Basado en 1 Clase llamada *Game*
  1. Se instancia la clase Game.
  2. Se añaden los jugadores (String) mediante el método Game.add(player)
  3. Se ejecuta un bucle Do While  mientras notAWinner sea True.
  4. 


  # Clase Game:
  1. Propiedades:
    1. players:  Array con el nombre de los jugadores
    2. places: 
    3. purses:
    4. inPenaltyBox:



  1. # Función Add(playerName)
    1. Añade playerName (String) al array de players[] mediante .push() => lo inserta como último. /testear 
    2. Setea los valores posicionales del jugador a 0 en los Arrays places y purses.
  2.  # Función Roll(roll):
    Nota: Función y nombre iguales, un poco confuso.
    1. Propiedad roll, número aleatorio entre el 1 y el 6
    2. Condicional: Si el juegador actual se encuentra en PenaltyBox y roll es impar, sale de penaltyBox. /Testear
    2. Condicional: 