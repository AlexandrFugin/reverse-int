module.exports = function reverse (n) {
  let rev = n.toString().split('').reverse().join(''); 
  let float = parseFloat(rev);
    return float;
}
