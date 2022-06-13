console.log('Arquivo de testes. Pode mexer nele como quiser.')

// DESAFIO 01
type employeeType = {
  code: number;
  name: string;
}

const employee: employeeType = {
  code: 10,
  name: 'John'
};

// DESAFIO 02
enum Trabalho {
  Atriz,
  Padeiro
}

type pessoaType = {
  nome: string;
  idade: number;
  profissao: Trabalho;
}
let pessoa1: pessoaType = {
  nome: 'maria',
  idade: 29,
  profissao: Trabalho.Atriz
};


let pessoa2: pessoaType = {
  nome: 'roberto',
  idade: 19,
  profissao: Trabalho.Padeiro
}

let pessoa3: pessoaType = {
  nome: 'laura',
  idade: 32,
  profissao: Trabalho.Atriz
};

let pessoa4: pessoaType = {
  nome: 'carlos',
  idade: 19,
  profissao: Trabalho.Padeiro
}


// DESAFIO 03
let botaoAtualizar = document.getElementById('atualizar-saldo');
let botaoLimpar = document.getElementById('limpar-saldo');
let soma = document.getElementById('soma') as HTMLInputElement;
let campoSaldo = document.getElementById('campo-saldo');

let saldoTotal = 0;

function somarAoSaldo(soma: number) {
  if (campoSaldo) {
    saldoTotal += soma
    campoSaldo.innerHTML = saldoTotal.toString();

    limparCampoSoma();
  }
}

function limparCampoSoma() {
  soma.value = "";
}

function limparSaldo() {
  if (campoSaldo) {
    saldoTotal = 0;
    campoSaldo.innerHTML = saldoTotal.toString();
  }
}

botaoAtualizar?.addEventListener('click', function () {
  somarAoSaldo(Number(soma.value));
});

botaoLimpar?.addEventListener('click', function () {
  limparSaldo();
});