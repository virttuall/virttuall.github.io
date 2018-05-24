

let delta = 0.00000001;
// x^5 - 3x^4 +10x - 8

function f0(x)
{
  return 3.0*x+3.0;
}
function f1(x)
{
  return x*x*x*x*x - 3*x*x*x*x + 10*x - 8;
}

function f2(x)
{
  return Math.sin(x);
}

function f3(x)
{
  return x*x*x;
}

function fp(x)
{
  return Math.tan(x)-x+1.0;
}

function derivatep(x)
{
    return (1.0/(Math.cos(x)*Math.cos(x)))-1.0;
}

function derivate(func, x)
{
  return (func(x)-func(x+delta))/(-delta);
}

function equals(a, b)
{
  if ( Math.abs(a-b) < delta ) return true;
  return false;
}

function bisection(a, b, func, iter)
{
  let m;
  if ( equals(func(a), 0.0) ) return a;
  if ( equals(func(b), 0.0) ) return b;
  for( i = 0; i < iter; i++ )
  {
    m = (a+b)/2.0;
    if ( func(a)*func(m) > 0.0 )
    {
        a = m;
    }
    else
    {
        b = m;
    }
    if ( equals(func(m), 0.0) )
    {
      return (i+1)+" iterations and result = "+m;
    }
  }
  return "finish without find root";
}


function secant(x0, x1, func, iter)
{
  let xn;
  if ( equals(func(x0), 0.0) ) return x0;
  if ( equals(func(x1), 0.0) ) return x1;
  for( i = 0; i < iter; i++ )
  {
    xn = (x0*func(x1) - x1*func(x0))/(func(x1)-func(x0));

    /*if ( func(x1)*func(xn) > 0.0 )
    {
      x0 = x1;
      x1 = xn;
    }
    else
    {
      x1 = x0;
      x0 = xn;
    }*/
    //x1 = x0; 30 iter
    //x0 = xn;
    // 30 iter
    x0 = x1;
    x1 = xn;
    console.log("result:");
    console.log(func(xn));
    if ( equals(func(xn), 0.0) ) return (i+1)+" iterations and result = "+xn;
  }
  return "finish without find root";
}

function falsePosition(a, b, func, iter )
{
  let c;
  if ( equals(func(a), 0.0) ) return a;
  if ( equals(func(b), 0.0) ) return b;
  for( i = 0; i < iter; i++ )
  {
    c = (func(b)*a - func(a)*b)/(func(b)- func(a));
    if ( func(a)*func(c) < 0 )
    {
      b = c;
    }
    else
    {
      a = c;
    }
    if ( equals(func(c), 0.0) ) return (i+1)+" iterations and result = "+c;
  }
  return "finish without find root";
}

function newton(x, func, iter)
{
  if ( equals(func(x), 0.0) ) return x;
  let xn;
  for( i = 0; i < iter; i++ )
  {
    //console.log("here: "+x+ " "+derivate(func, x));
    xn = x - (func(x)/derivatep(x));
    x = xn;
    if ( equals(func(xn), 0.0) ) return (i+1)+" iterations and result = "+xn;
  }
  return "finish without find root";
}
let myFunction = fp;
console.log(newton(4.0, myFunction ,1000));
