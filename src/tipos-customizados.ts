type direcao ="cima" | "baixo" | "esquerda" | "direita"

type movimento = {
    direcao: direcao;
    qtdPassos: number;

}

function movimentar(move:movimento) {
    console.log(`O personagem andou ${move.qtdPassos} passos para ${move.direcao}`);

}

movimentar({ direcao: "cima", qtdPassos: 2});

