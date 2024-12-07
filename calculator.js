const calculator = (function () {
    const number = 10

    return {
        add(num) {
            return number + num
        },

        subtract(num) {
            return number - num
        },

        multiply(num) {
            return number * num
        },

        divide(num) {
            return number / num
        },

        power(num) {
            return Math.pow(number, num)
        },

        sqrt(num) {
            return Math.sqrt(num)
        }
    }
})();

console.log(calculator.add(10));
console.log(calculator.subtract(10));
console.log(calculator.multiply(10));
console.log(calculator.divide(10));
console.log(calculator.power(10));
console.log(calculator.sqrt(100));