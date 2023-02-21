module.exports = function reverse(n) {
    let numTostr = String(n);
    console.log(numTostr)
    if (numTostr[0] === '-') {
        numTostr = numTostr.slice(1);
    }
    return +numTostr.split('').reverse().join('');
}
