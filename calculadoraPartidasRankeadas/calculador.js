function nivelHeroi(saldoRankedas) {
    if (saldoRankedas < 10) {
        return 'Ferro'
    } else if(saldoRankedas >= 11 && saldoRankedas <= 20) {
        return 'Bronze'
    } else if(saldoRankedas >= 21 && saldoRankedas <= 50) {
        return 'Prata'
    } else if(saldoRankedas >= 51 && saldoRankedas <= 80) {
        return 'Ouro'
    } else if(saldoRankedas >= 81 && saldoRankedas <= 90) {
        return 'Diamante'
    } else if(saldoRankedas >= 91 && saldoRankedas <= 100) {
        return 'Lendário'
    } else {
        return 'Imortal'
    }
}

function calcularVitoriasDerrotas(qtdVitoria, qtdDerrotas) {
    return qtdVitoria - qtdDerrotas;
}

const qtdVitoria = 100;
const qtdDerrotas = 5;

const saldoRankedas = calcularVitoriasDerrotas(qtdVitoria, qtdDerrotas)

console.log(`O Herói tem de saldo de ${saldoRankedas} está no nível de ${nivelHeroi(saldoRankedas)}`)

