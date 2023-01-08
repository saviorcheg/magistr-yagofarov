function convertToBinary (number) {
    if (number > 0) {
        return convertToBinary (parseInt(number / 2)) + (number % 2)
    };
    return "";
}

console.log(convertToBinary(25));