

function getPolynomial(values)
{
  let l = values.length;
  let aux, mult, count;
  let result = new Array(l+1);
  result.fill(0);
  for( let i = 1; i < (1<<l); i++ )
  {
    aux = i;
    mult = 1;
    count = 0;
    for( j = 0; j < l; j++ )
    {
      if ( (aux >> j) % 2 == 1 )
      {
        mult *= values[j];
        count++;
      }
    }
    if ( count != 0) result[count] += mult;
  }
  result[0] = 1;
  return result;
}

function lagrangePolynomial(xs, k)
{
  values = new Array(xs.length-1);
  index = 0;
  for( i = 0; i < xs.length; i++ )
  {
    if ( i != k )
      values[index++] = -xs[i];
  }
  coeficients = getPolynomial(values);
  denominator = 1;
  for( i = 0; i < xs.length; i++ )
  {
    if ( i != k )
    {
      denominator *= (xs[k]-xs[i]);
    }
  }
  for( i = 0; i < coeficients.length; i++ )
  {
    coeficients[i] /= denominator;
  }
  return coeficients;
}

Array.prototype.add = function(other)
{
  let result = new Array();
  for( i = 0; i < this.length; i++ )
  {
    result.push(other[i]+this[i]);
  }
  return result;
}

function getInterpolationPolynomial(xs, ys)
{
    let l = xs.length;
    let result = lagrangePolynomial(xs, 0);
    result = result.map(function(x){ return x*ys[0]; });
    let result1;
    for( t = 1; t < l; t++ )
    {
      result1 = lagrangePolynomial(xs, t);
      result1 = result1.map(function(x){ return x*ys[t]; });
      result = result.add(result1);
    }
    return result;
}


function findCoeficientsDD(xs, ys)
{
    let l = xs.length;
    let dp = new Array(l);
    let result = new Array();
    result.push(ys[0]);
    for( i = 0; i < l; i++ )
    {
      dp[i] = new Array(l);
      dp[i][i] = ys[i];
    }
    for( i = 1; i < l; i++ )
    {
      for( j = 0; j < l-i; j++ )
      {
        dp[j][i+j] = (dp[j+1][i+j] - dp[j][i+j-1])/(xs[i+j]-xs[j]);
        if ( j == 0 ) result.push(dp[j][i+j]);
      }
    }
    return result;
}


Array.prototype.combine = function(other)
{
  let result = this.slice();
  for( let i = 0; i < other.length; i++ )
  {
    result[this.length-1-i] += other[other.length-1-i];
  }
  return result;

}
function dividesDiferences( xs, ys )
{
  let coeficients = findCoeficientsDD(xs, ys);
  let l = xs.length;
  let values2 = xs.slice();
  values2 = values2.map( function(x){ return -x} );
  let result = new Array(l);
  result.fill(0);
  result[l-1] = 1*coeficients[0];
  for( i = 1; i < l; i++ )
  {
      let result1 = getPolynomial(values2.slice(0, i));
      result1 = result1.map(function(x){ return x*coeficients[i]; });
      result = result.combine(result1);
  }
  return result;
}

//console.log(getInterpolationPolynomial([0, 1, -1, 2], [7, 13, 5, 29] ));
//console.log(dividesDiferences([0, 1, -1, 2], [7, 13, 5, 29] ));
