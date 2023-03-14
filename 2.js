function func(num) {
    if (!Number.isInteger(num) || num < 2 || num > 1000) return "данные неверны";

    let x = Math.sqrt(num);
    for (let i = 2; i <= x; i++)
        if (num % i === 0) return "непростое число";

    return "простое число";
}

console.log(func(0));
console.log(func(1));
console.log(func(7));
console.log(func(35));
console.log(func(1001));