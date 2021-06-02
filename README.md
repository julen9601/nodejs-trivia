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
  Las variables son privadas por lo que no se puede acceder a ellas desde fuera de la función, lo cual limita la manera de hacer los tests.
  1. Variables:
    1. players:  Array con el nombre de los jugadores
    2. places: Array que guarda la posición del jugador actual.
    3. purses: Array que guarda el total de monedas de cada jugador
    4. inPenaltyBox:

  2. Bucle que crea 50 preguntas de cada tipo 

  Debido al hecho de no poder acceder directamente a las variables de la función Game, Hacemos uso de métodos útiles de la propia clase:
    1. howManyPlayers():  devuelve players.length (Int) //test
    2. currentCategory(): devuelve el nombre de la categoria (String) //test
    3. isPlayable(howManyPlayers): valor booleano if >= 2  (2  = 3 jugadores)) //test
    4. didPlayerWin(): returns Boolean.   6 coin on purse = True 
    5. currentCategory(): return String. Según places[currentPlayer]. 0,4,8 = Pop. 1,5,9 = Science. 2,6,9 Sports. Otro = rock.
    6. createRockQuestion(index): return "Rock Question" + index.
    7. askQuestion():
    


  1.   add(playerName)
    1. Añade playerName (String) al array de players[] mediante .push() => lo inserta como último. /testear 
    2. Setea los valores posicionales del jugador a 0 en los Arrays places y purses.
  2.    roll(roll):
    Nota: Función y nombre iguales, un poco confuso.
    1. Propiedad roll, número aleatorio entre el 1 y el 6
    2. Condicional: Si el juegador actual se encuentra en PenaltyBox y roll es impar, sale de penaltyBox. /Testear
    2. Condicional:
  3.   wasCorrectlyAnswered()
    1. Si currentPlayer se encuentra en PenaltyBox y isGettingOutPenaltyBox.
      - Suma 1 a la cartera del jugador actual
      - Verifica si el jugador ha ganado la partida
    2. Si currentPlayer se encuentra en PenaltyBox pero !isGettingOutPenaltyBox
      - Salta al siguiente jugador
    3. !PenaltyBox
      - Suma 1 a la cartera del jugador actual
      - Verifica si el jugador ha ganado la partida
  
  ## REFACTORIZACIÓN
  Como punto de partida, tengo 2 tests antes de empezar a editar nada.
  El primer test, haciendo uso de un valor manipulado de Math.floor() genera un fichero que contiene todos los console logs.

  El segundo test y el cual utilizaremos para verificar si el programa sigue funcionando de la misma manera, genera otro fichero que lo comparará con el anterior.

  1. Refactor -> lo primero que voy a hacer es crear una función start() dentro de Game.
    Ésta función se encargará de inicializar el el juego, instanciando los 3 jugadores y ejecutando el bucle Do While. De esta manera, podré ejecutar el juego cuantas veces quiera. 
    - Ahora que hemos refactorizado el bucle, podemos crear Multiples test para conseguir una variedad de outputs modificando Math.floor() -> De ésta manera, verificaremos que  la funcionalidad persiste, de manera más certera.

    Una vez creados todos los ficheros con las diferentes casuisticas (7 en mi  caso) 
    creamos un # test que verificará que todos los casos después de realizar cambios sean iguales

  2. Refactor -> Refactorizamos currentCategory().  Testeamos cada vez que modificamos una línea. Reducimos de  9 condicionales a 3, haciendo algo más legible el código.

  3. CreateRockQuestion -> Ya que createRockQuestion solo es utilizada en un bucle independiente, implementamos la función directamente en el bucle y la eliminamos.
    (ejemplo, el test rompe, porque olvidé un espacio en el string).
  
  4. isPlayable -> ésta función no tiene implementación, alguna, probamos a testear el código comentandola

  5. howManyPlayers -> No veo que podría modificarle de momento

  6. add -> elimino el return pues no le veo utilidad alguna  y empiezo a pensar que Players podría tener su podría clase y  métodos.

  7. askQuestion -> echo una ojeada a la función y comienzo a pensar que Deberia haber una clase Categorias. Lo único que se me ocurre es cambiar los if por un switch case
  Debería haber una función para hacer el console.log(question.shift())


  8. roll -> intentamos reducir  los condicionales. no consigo poner la última parte bien.

  9. -> Estoy cansado






    