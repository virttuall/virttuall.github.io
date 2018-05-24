function sieveOfEratosthenes(size)
{
  var isPrime = new Array(size+1);
  isPrime.fill(true);
  isPrime[0] = false;
  isPrime[1] = false;
  var primeSet = new Set();
  for( i = 2; i <= size; i++ )
  {
    if ( isPrime[i] )
    {
      primeSet.add(i);
      for( j = 2; j*i <= size; j++ ) isPrime[j*i] = false;
    }
  }
  return primeSet;
}

function gcd(a, b)
{
  if ( b == 0 ) return a;
  return gcd(b, a%b);
}

function lcm(a, b)
{
    return a*b/gcd(a, b);
}


function fibonacci(size)
{
    let result = new Array();
    result.push(0);
    result.push(1);
    for( i = 2; i < size; i++ )
    {
      result.push(result[i-1]+result[i-2]);
    }
    return result;
}



let mapAckermann = new Map();
function ackermann(m, n)
{
    if ( mapAckermann.has(m+","+n) )
      return mapAckermann.get(m+","+n)
    let result = 0;
    if ( m == 0 ) result = n+1;
    else if ( m > 0 && n == 0) result = ackermann(m-1, 1);
    else result = ackermann(m-1, ackermann(m, n-1));
    mapAckermann.set(m+","+n, result);
    return result;
}

function horner(factors, value)
{
    var result = factors[factors.length-1];
    for( i = factors.length-2; i >= 0; i-- )
    {
        result *= value;
        result += factors[i];
    }
    return result;
}


let primes = sieveOfEratosthenes(1000000);
let fibonacciNumbers = fibonacci(100);
