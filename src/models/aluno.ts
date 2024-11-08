import {movimentar} from "../types/movimentar";

class Aluno {
    nome: string;
    idade: number;

    constructor (_nome: string, _idade: number) {
        this.nome = _nome;
        this.idade = _idade;
    }

    andar(direcao: string) {
        console.log("Aluno esta andando na direção ", direcao)
    }

    chorar(qtdLitros: number) {
        console.log(`O ${this.nome} chorou  ${qtdLitros} litros`)
    }

    detalhar() {
        console.log (`O aluno ${this.nome} tem a idade ${this.idade}`)
    }
}



