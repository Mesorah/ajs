function parouimpar(n) {
    if (n % 2 == 0) {
        return `par`;
    } 

    return `ímpar`;
}

let verifica = parouimpar(2);
console.log(verifica);