module.exports = function reverse (n) {
    const rev = String(Math.abs(n)).split('').reverse().join('')
    return +rev
}
