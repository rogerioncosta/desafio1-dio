let nome = "Hero";
let qtdeXP = 1000;
let nivel = "0";

if (qtdeXP < 1000) {
    nivel = "Ferro";
}else if (qtdeXP > 1000 && qtdeXP <= 2000) {
    nivel = "Bronze";
}else if (qtdeXP > 2000 && qtdeXP <= 5000) {
    nivel = "Prata";
}else if (qtdeXP > 5000 && qtdeXP <= 7000) {
    nivel = "Ouro";
}else if (qtdeXP > 7000 && qtdeXP <= 8000) {
    nivel = "Platina";
}else if (qtdeXP > 8000 && qtdeXP <= 9000) {
    nivel = "Ascendente";
}else if (qtdeXP > 9000 && qtdeXP <= 10000) {
    nivel = "Imortal";
}else if (qtdeXP >= 10001) {
    nivel = "Radiante";
}

console.log("O Herói de nome " + nome + " está no nível de " + nivel);
