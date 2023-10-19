function fizzbuzz(n) {

  if(typeof n !== 'number')
  {
    n = parseInt(n, 10);
  }

  /*console.log(typeof n);
  console.log(typeof 15);*/
  if(n % 15 === 0){
    return 'FizzBuzz'
  }
  if(n % 3 === 0){
    return 'Fizz'
  }
  if(n % 5 === 0){
    return 'Buzz'
  }
  return String(n)
}
module.exports = fizzbuzz