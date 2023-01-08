function toDecimal(n) {
    if (n == 0) return 0;
    return n % 2 + 10 * toDecimal(Math.floor(n / 2));
}

console.log(toDecimal(10));