"use strict";
function movimentar(move) {
    console.log(`O personagem andou ${move.qtdPassos} passos para ${move.direcao}`);
}
movimentar({ direcao: "cima", qtdPassos: 2 });
