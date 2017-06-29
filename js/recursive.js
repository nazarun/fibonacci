var num = Number(prompt('Enter your number'));

function fib(num) {
  if (num <= 1){
    return num;
  }
  return fib(num - 1) + fib(num - 2);
}
document.write('Your number ' + num + ' in Fibonacci sequence is ' + fib(num));