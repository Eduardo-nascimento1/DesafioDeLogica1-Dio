let nomeDoHeroi = "Eduardo";
let MensagemComNomeDoHeroi = " O heroi de nome " + nomeDoHeroi;
let XP = 10001;
let nivel;
let MensagemComNivelDoHeroi = " está no nível ";

switch (true) {
    case (XP <= 1000):
        nivel = "ferro";
        break;
    case (XP >= 1001 && XP <= 2000):
        nivel = "bronze";
        break;
    case (XP >= 2001 && XP <= 5000):
        nivel = "prata";
        break;
    case (XP >= 5001 && XP <= 7000):
        nivel = "Ouro";
        break;
    case (XP >= 7001 && XP <= 8000):
        nivel = "Platina";
        break;
    case (XP >= 8001 && XP <= 9000):
        nivel = "Ascendente";
        break;
    case (XP >= 9001 && XP <= 10000):
        nivel = "Imortal";
        break;
    case (XP >= 10001):
        nivel = "Radiante";
        break;
}

console.log(MensagemComNomeDoHeroi + MensagemComNivelDoHeroi + nivel)

