const fibonacci = n => n <= 1 ? n : n * fibonacci(n - 1)

module.exports = fibonacci
