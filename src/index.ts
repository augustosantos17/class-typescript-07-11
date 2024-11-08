import {Aluno} from "./models/aluno"

var pedrinho = new Aluno("Augustão", 19);
pedrinho.detalhar();
pedrinho.andar("cima");
pedrinho.chorar(51);

var paulao = new Aluno("Paulão ", 40)
paulao.andar("direita");
paulao.chorar(10);
paulao.detalhar();