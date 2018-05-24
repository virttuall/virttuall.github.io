function createComplex(realValue, imaginaryValue)
{
    return { real: realValue, imaginary: imaginaryValue };
}

function sumComplex(complex1, complex2)
{
    var realPart = complex1.real + complex2.real;
    var imaginaryPart = complex1.imaginary + complex2.imaginary;
    return createComplex(realPart, imaginaryPart);
}

function subtComplex(complex1, complex2)
{
  var realPart = complex1.real - complex2.real;
  var imaginaryPart = complex1.imaginary - complex2.imaginary;
  return createComplex(realPart, imaginaryPart);
}

function multiplyComplex(complex1, complex2)
{
    var realPart = complex1.real*complex2.real - complex1.imaginary*complex2.imaginary;
    var imaginaryPart = complex1.real*complex2.imaginary + complex1.imaginary*complex2.real;
    return createComplex(realPart, imaginaryPart);
}

function argument2(complexValue)
{
    console.log(complexValue);
    console.log(complexValue.imaginary+complexValue.x);
    //console.log()
    return Math.atan2(complexValue.imaginary, complexValue.real);
}

function module(complexValue)
{
    return Math.sqrt(complexValue.real*complexValue.real + complexValue.imaginary*complexValue.imaginary );
}
