var player1 = 1;
var player2 = 0;
var placar;

// if ternario
player1 != -1 && player2 != -1
  ? console.log("Os Jogadores são validos")
  : console.log("Jogadores Inválidos");

if (player1 > 0 && player2 == 0) {
  console.log("Player 1 marcou ponto!");
  placar = player1 > player2;
} else if (player2 > 0 && player1) {
  console.log("Player 2 marcou ponto!");
  placar = player2 > player1;
} else {
  console.log("Ningúem marcou!");
}

switch (placar) {
  case placar = player1 > player2:
    console.log("Player 1 ganhou!");
    break;
  case placar = player2 > player1:
    console.log('Player 2 Ganhou!');
    break
  default:
    console.log("Empate")
}
