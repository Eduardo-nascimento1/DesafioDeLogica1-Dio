# DesafioDeLogica1-Dio
# 1️⃣ Desafio Classificador de Nível de Herói

**DIO.me - Lógica de Programação com JavaScript**

---

## Objetivo do Desafio

Criar um classificador de nível de herói com base na **quantidade de XP**.

### Requisitos
- Variáveis  
- Operadores  
- Estruturas de decisão (`switch` + `true`)  
- Saída formatada

---

## Tabela de Níveis

| XP                | Nível       |
|-------------------|-------------|
| ≤ 1.000           | Ferro       |
| 1.001 – 2.000     | Bronze      |
| 2.001 – 5.000     | Prata       |
| 5.001 – 7.000     | Ouro        |
| 7.001 – 8.000     | Platina     |
| 8.001 – 9.000     | Ascendente  |
| 9.001 – 10.000    | Imortal     |
| ≥ 10.001          | **Radiante** |

---

## Solução (Código)

```js
let nomeDoHeroi = "Eduardo";
let MensagemComNomeDoHeroi = "O herói de nome " + nomeDoHeroi;
let XP = 10001;
let nivel;
let MensagemComNivelDoHeroi = " está no nível de ";

switch (true) {
    case (XP <= 1000):
        nivel = "Ferro";
        break;
    case (XP >= 1001 && XP <= 2000):
        nivel = "Bronze";
        break;
    case (XP >= 2001 && XP <= 5000):
        nivel = "Prata";
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

console.log(MensagemComNomeDoHeroi + MensagemComNivelDoHeroi + nivel);
