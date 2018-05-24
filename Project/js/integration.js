function f5(x)
{
  return Math.sin(x);
}

function f6(x)
{
  return x*x*x*x*x - 3*x*x*x*x + 10*x - 8;
}


function f7(x)
{
  return Math.abs(x);
}

function f8(x)
{
  return x*x;
}


function simpson(func, a, b , n)
{
  if ( n % 2 != 0 ) return "n should be even";
  if ( b < a ) return "b should be greater than a";
  let h = (b-a)/n;
  let sum = func(a)+func(b);
  for( let i = 1; i < n; i++ )
  {
    if ( i % 2 == 1 ) sum += 4.0*func(a+i*h);
    else sum += 2.0*func(a+i*h);
  }
  return sum*(h/3.0);
}


function trapeze(func, a, b, n)
{
  if ( b < a ) return "b should be greater than a";
  let h = (b-a)/n;
  let sum = func(a)+func(b);
  for( let i = 1; i < n; i++ )
  {
    sum += 2.0*func(a+i*h);
  }
  return sum*(h/2.0);
}
