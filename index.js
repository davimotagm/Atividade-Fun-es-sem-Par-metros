// ATIVIDADE 1
let frase1 = "Hello World!";
console.log(frase1);

// ATIVIDADE 2
function metricasMonitor() {
    let entregas = 100;
    let entrevistasTecnicas = 100;
    let presenca = 100;

    if (entregas >= 100) {
        if (entrevistasTecnicas >= 100) {
            if (presenca >= 100) {
                console.log('Possível Monitor')
            }
        }
    } else {
        console.log("Selecionar outro(a) aluno(a).")
    }
}
metricasMonitor();

// ATIVIDADE 3
function oMaior() {
    let n1 = 10
    let n2 = 30
    let n3 = 50;

    if (n1 > n2 && n1 > n3) {
        console.log(n1);
    } else if (n2 > n1 && n2 > n3) {
        console.log(n2);
    } else if (n3 > n2 && n3 > n1) {
        console.log(n3);
    }
}
oMaior();

// ATIVIDADE 4
function minhaApresentação() {
    let nome = "Davi";
    let sobrenome = "Mota";
    let idade = 21;
    console.log(`Meu nome é ${nome} ${sobrenome} e tenho ${idade} anos.`)
}
minhaApresentação();
