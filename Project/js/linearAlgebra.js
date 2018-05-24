
function sumVector( vector1, vector2 )
{
  let result = new Array();
  for( i = 0; i < vector1.length; i++ )
  {
    result.push( vector1[i]+vector2[i] );
  }
  return result;
}


function subtractionVector( vector1, vector2 )
{
  let result = new Array();
  for( i = 0; i < vector1.length; i++ )
  {
    result.push( vector1[i]-vector2[i]);
  }
  return result;
}

function pointProduct( vector1, vector2 )
{
  let result = 0;
  for( i = 0; i < vector1.length; i++ )
  {
    result += vector1[i]*vector2[i];
  }
  return result;
}

function crossProduct( u, v )
{
  if ( u.length != 3 )
  {
    console.error("cross product is only define for 3*3 vector");
    return undefined;
  }

  let iValue = u[1]*v[2] - u[2]*v[1];
  let jValue = -( u[0]*v[2] - u[2]*v[0] );
  let kValue = u[0]*v[1] - u[1]*v[0];
  let result = [ iValue, jValue, kValue ];
  return result;
}


function sumMatrix( matrix1, matrix2 )
{
  let result = new Array(matrix1.length);
  for( i = 0; i < matrix1.length; i++ )
  {
    result[i] = new Array(matrix1[0].length);
    for( j = 0; j < matrix1[0].length; j++ )
    {
      result[i][j] = matrix1[i][j]+matrix2[i][j];
    }
  }
  return result;
}


function subMatrix( matrix1, matrix2 )
{
  let result = new Array(matrix1.length);
  for( i = 0; i < matrix1.length; i++ )
  {
    result[i] = new Array(matrix1[0].length);
    for( j = 0; j < matrix1[0].length; j++ )
    {
      result[i][j] = matrix1[i][j]-matrix2[i][j];
    }
  }
  return result;
}

function prodMatrix( matrix1, matrix2 )
{
  let result = new Array(matrix1.length);
  for( i = 0; i < matrix1.length; i++ )
  {
    result[i] = new Array(matrix2[0].length);
    for( j = 0; j < matrix2[0].length; j++ )
    {
      let sumT = 0;
      for( k = 0; k < matrix1[0].length; k++ )
      {
        sumT += matrix1[i][k]*matrix2[k][j];
      }
      result[i][j] = sumT;
    }
  }
  return result;
}


function equals(value1, value2)
{
  if ( Math.abs(value1 - value2) < 0.0000001 ) return true;
  return false;
}
Array.prototype.swap = function(index1, index2)
{
  let tmp = this[index1];
  this[index1] = this[index2];
  this[index2] = tmp;
}
function gauss( A, B )
{
  let l = A.length;
  let aux;
  let value;
  for( i = 0; i < l; i++ )
  {
    let index = -1;
    for( j = i; j < l; j++ )
    {
      if ( !equals(A[j][i], 0.0 ))
      {
        index = j;
        value = A[j][i];
        break;
      }
    }
    if ( index == -1 )
    {
      console.error("gauss error");
      return -1;
    }
    A.swap(i, index);
    B.swap(i, index);
    aux = A[i][i];
    for( j = i; j < l; j++ )
    {
      A[i][j] /= aux;
    }
    B[i] /= aux;
    for( j = i+1; j < l; j++ )
    {
      value = A[j][i];
      for( k = 0; k < l; k++ )
      {
        A[j][k] = A[j][k] - value*A[i][k];
      }
      B[j] = B[j] - value*B[i];
    }
  }
  let result = Array(A.length);
  for( i = result.length-1; i >= 0; i-- )
  {
    let sumT = 0.0;
    for( k = i+1; k < result.length; k++ )
    {
      sumT += A[i][k]*result[k];
    }
    result[i] = (B[i]-sumT)/A[i][i];
  }
  return result;
}
