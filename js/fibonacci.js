var num = Number(prompt("Please enter your number"));

function fibonacci(num){
  var ourArray = [1,1];
  if(num === 1 || num === 2){
    var fib = 1;
    return document.write(ourArray  + '<br>' + 'Your number ' + num + ' in Fibonacci sequence is ' + fib);
  }
    for(var i=2; i<num; i++){
      fib = ourArray[ourArray.length-1] + ourArray[ourArray.length-2];
      ourArray.push(fib);
    }
  return document.write(ourArray  + '<br>' + 'Your number ' + num + ' in Fibonacci sequence is ' + fib);
} 

fibonacci(num);