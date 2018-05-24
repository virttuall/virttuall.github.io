$(window).load( () =>
  {

    $("#cal_is_prime").click( () =>
    {
      let val = $("#input_number_is_prime").val();
      let answer = "";
      if ( primes.has(parseInt(val)) )
        answer = "The number "+val+" is prime.";
      else
        answer = "The number "+val+" is not prime";
      $("#answer_is_prime").text(answer);
    } );

    $("#cal_gcd").click( () =>
    {
      let val1 = $("#input_gcd_1").val();
      let val2 = $("#input_gcd_2").val();
      answer = "The gcd of "+val1+" and "+val2 + " is "+gcd(parseInt(val1), parseInt(val2))+".";
      $("#answer_gcd").text(answer);
    });


    $("#cal_lcm").click( () =>
    {
      let val1 = $("#input_lcm_1").val();
      let val2 = $("#input_lcm_2").val();
      answer = "The lcm of "+val1+" and "+val2 + " is "+lcm(parseInt(val1), parseInt(val2))+".";
      $("#answer_lcm").text(answer);
    });


    $("#cal_fib").click( () =>
    {
      let val1 = $("#input_fib").val();
      answer = "The "+val1+"-th number of fibonacci serie is "+fibonacci(101)[parseInt(val1)-1]+".";
      $("#answer_fib").text(answer);
    });


    $("#cal_ack").click( () =>
    {
      let val1 = $("#input_ack_row").val();
      let val2 = $("#input_ack_column").val();
      answer = "Ackerman in row "+val1+" in column "+val2+" is "+ackermann(parseInt(val1), parseInt(val2));
      $("#answer_ack").text(answer);
    });


    $("#cal_degree_polinomial").click( () =>
    {
      $("#horner_data").empty();
      $("#button_calculate").empty();
      let val1 = $("#input_degree_polinomial").val();
      let content = "";
      for( i = 0; i < parseInt(val1); i++ )
      {
        content += '<label for="input_a_'+i+'">a<sub>'+i+'</sub></label>';
        content += '<input type = "text" id="input_a_'+i+'" class = "form-control">';
      }
      content += '<label for="input_x"> x </label>';
      content += '<input type = "text" id="input_x" class = "form-control">';
      $("#horner_data").append(content);
      content = '<button type="button" id="cal_horner" class = "btn btn-success">Calculate</button>';
      $("#button_calculate").append(content);

      $("#cal_horner").click( () =>
      {
        let n = parseInt($("#input_degree_polinomial").val());
        let factors = new Array();
        for( i = 0; i < n; i++ )
        {
          factors.push(parseFloat($("#input_a_"+i+"").val()));
        }
        let value = parseFloat($("#input_x").val());

        answer = "P("+value+") = "+horner(factors, value);
        $("#answer_horner").text(answer);
      });

      window.scrollTo(0,document.body.scrollHeight);
    });

    $("#cal_sum_complex").click( () =>
    {
      let val1 = $("#input_sum_1_real").val();
      let val2 = $("#input_sum_1_imaginary").val();
      let val3 = $("#input_sum_2_real").val();
      let val4 = $("#input_sum_2_imaginary").val();
      //console.log(val1+ " "+val2+" "+val3+" "+val4);
      let number1 = createComplex(parseFloat(val1), parseFloat(val2));
      let number2 = createComplex(parseFloat(val3), parseFloat(val4));
      //console.log(number1.real +" " + number1.imaginary);
      //console.log(number2.real +" " + number2.imaginary);
      let result = sumComplex(number1, number2);
      answer = "The sum is equal to "+result.real+" + "+result.imaginary+"i";
      $("#answer_complex_sum").text(answer);
    });

    $("#cal_sub_complex").click( () =>
    {
      let val1 = $("#input_sub_1_real").val();
      let val2 = $("#input_sub_1_imaginary").val();
      let val3 = $("#input_sub_2_real").val();
      let val4 = $("#input_sub_2_imaginary").val();
      let number1 = createComplex(parseFloat(val1), parseFloat(val2));
      let number2 = createComplex(parseFloat(val3), parseFloat(val4));
      let result = subtComplex(number1, number2);
      let answer = "The subtraction is equal to "+result.real+" + "+result.imaginary+"i";
      $("#answer_complex_sub").text(answer);
    });

    $("#cal_prod_complex").click( () =>
    {
      let val1 = $("#input_prod_1_real").val();
      let val2 = $("#input_prod_1_imaginary").val();
      let val3 = $("#input_prod_2_real").val();
      let val4 = $("#input_prod_2_imaginary").val();
      let number1 = createComplex(parseFloat(val1), parseFloat(val2));
      let number2 = createComplex(parseFloat(val3), parseFloat(val4));
      let result = multiplyComplex(number1, number2);
      let answer = "The product is equal to "+result.real+" + "+result.imaginary+"i";
      $("#answer_complex_product").text(answer);
    });

    $("#cal_arg_complex").click( () =>
    {
      let val1 = $("#input_arg_real").val();
      let val2 = $("#input_arg_imaginary").val();
      let number1 = createComplex(parseFloat(val1), parseFloat(val2));
      console.log(number1);
      let argument1 = argument2(number1);
      let answer = "The argument is "+argument1;
      $("#answer_complex_arg").text(answer);
    });

    $("#cal_mod_complex").click( () =>
    {
      let val1 = $("#input_mod_real").val();
      let val2 = $("#input_mod_imaginary").val();
      let number1 = createComplex(parseFloat(val1), parseFloat(val2));
      let argument1 = module(number1);
      let answer = "The modulus is "+argument1;
      $("#answer_complex_mod").text(answer);
    });

    $("#cal_size_vector").click( () =>
    {
      $("#vector_sum_data").empty();
      $("#button_calculate_sum_vector").empty();
      let size = $("#input_size_vector").val();
      let content = "";
      for( i = 0; i < parseInt(size); i++ )
      {
        content += '<label for="input_vector_1_sum_'+i+'">First vector, '+(i+1)+'-th value</label>';
        content += '<input type = "text" id="input_vector_1_sum_'+i+'" class = "form-control">';
      }
      for( i = 0; i < parseInt(size); i++ )
      {
        content += '<label for="input_vector_2_sum_'+i+'">Second vector, '+(i+1)+'-th value</label>';
        content += '<input type = "text" id="input_vector_2_sum_'+i+'" class = "form-control">';
      }
      $("#vector_sum_data").append(content);
      content = '<button style = "margin-right: 30px" type="button" id="cal_vector_sum" class = "btn btn-success">Calculate sum</button>';
      content += '<button style = "margin-right: 30px" type="button" id="cal_vector_sub" class = "btn btn-success">Calculate subtraction</button>';
      content += '<button style = "margin-right: 30px" type="button" id="cal_vector_point_product" class = "btn btn-success">Calculate point product</button>';
      content += '<button type="button" id="cal_vector_cross_product" class = "btn btn-success">Calculate cross product</button>';
      $("#button_calculate_sum_vector").append(content);


      // listeners
      let getValues = function()
      {
          let val1s = new Array();
          let val2s = new Array();
          for( i = 0; i < parseInt(size); i++ )
          {
            val1s.push(parseInt( $("#input_vector_1_sum_"+i+"").val() ));
            val2s.push(parseInt( $("#input_vector_2_sum_"+i+"").val() ));
          }
          console.log(val1s);
          console.log(val2s);
          return { vector1: val1s, vector2: val2s };
      };

      $("#cal_vector_sum").click( () =>
      {
          let values = getValues();
          let result = sumVector(values.vector1, values.vector2 );
          let answer = "The sum of the two vector is: (";
          for( i = 0; i < result.length; i++ )
          {
            answer += result[i];
            if ( i != result.length - 1 )
            {
              answer += ", ";
            }
            else
            {
              answer += ").";
            }
          }
          $("#answer_vector_sum").text(answer);
      });


      $("#cal_vector_sub").click( () =>
      {
          let values = getValues();
          let result = subtractionVector(values.vector1, values.vector2 );
          let answer = "The subtraction of the two vector is: (";
          for( i = 0; i < result.length; i++ )
          {
            answer += result[i];
            if ( i != result.length - 1 )
            {
              answer += ", ";
            }
            else
            {
              answer += ").";
            }
          }
          $("#answer_vector_sum").text(answer);
      });


      $("#cal_vector_point_product").click( () =>
      {
          let values = getValues();
          let result = pointProduct(values.vector1, values.vector2 );
          let answer = "The point producto of the two vector is: "+result;
          $("#answer_vector_sum").text(answer);
      });

      $("#cal_vector_cross_product").click( () =>
      {
          let answer
          if ( parseInt(size) == 3 )
          {
            let values = getValues();
            let result = crossProduct(values.vector1, values.vector2 );
            answer = "The cross product of the two vector is: (";
            for( i = 0; i < result.length; i++ )
            {
              answer += result[i];
              if ( i != result.length - 1 )
              {
                answer += ", ";
              }
              else
              {
                answer += ").";
              }
            }
          }
          else
          {
            answer = "The cross product is only defined in 3d vectors";
          }
          $("#answer_vector_sum").text(answer);
      });

    });



    let getValuesMatrix = function(rows, columns)
    {
      let matrix1 = new Array(rows);
      let matrix2 = new Array(rows);
      for( i = 0 ; i < rows; i++ )
      {
        matrix1[i] = new Array(columns);
        matrix2[i] = new Array(columns);
        for( j = 0; j < columns; j++ )
        {
          matrix1[i][j] = parseFloat($("#matrix1_"+i+"_"+j+"").val());
          matrix2[i][j] = parseFloat($("#matrix2_"+i+"_"+j+"").val());
        }
      }
      return { M1: matrix1, M2: matrix2 };
    }

    $("#cal_size_matrix").click( () =>
    {
      console.log("size of matrix");
      $("#content_matrix").empty();
      let rows = parseInt($("#input_row_matrix").val());
      let cols = parseInt($("#input_col_matrix").val());
      let content = "<h1>Matrix 1</h1><br>";
      for( i = 0; i < rows; i++ )
      {
        content += '<div class = "row">';
        for( j = 0; j < cols; j++ )
        {
          content += '<div class = "col-md-1">'+'<input type = "text" id="matrix1_'+i+'_'+j+'" class = "form-control">'+'</div>';
        }
        content += '</div>'
      }

      content += "<h1>Matrix 2</h1><br>";
      for( i = 0; i < rows; i++ )
      {
        content += '<div class = "row">';
        for( j = 0; j < cols; j++ )
        {
          content += '<div class = "col-md-1">'+'<input type = "text" id="matrix2_'+i+'_'+j+'" class = "form-control">'+'</div>';
        }
        content += '</div>'
      }
      content += '<br>';
      content += '<button style = "margin-right: 30px" type="button" id="cal_sum_matrix" class = "btn btn-success">Sum</button>';
      content += '<button style = "margin-right: 30px" type="button" id="cal_sub_matrix" class = "btn btn-success">Subtraction</button>';
      content += '<button style = "margin-right: 30px" type="button" id="cal_prod_matrix" class = "btn btn-success">Product</button>';
      content += '<h1> Result </h1><br>';
      for( i = 0; i < rows; i++ )
      {
        content += '<div class = "row">';
        for( j = 0; j < cols; j++ )
        {
          content += '<div class = "col-md-1">'+'<input type = "text" id="matrix3_'+i+'_'+j+'" class = "form-control" readonly>'+'</div>';
        }
        content += '</div>'
      }
      $("#content_matrix").append(content);

      $("#cal_sum_matrix").click( () =>
      {
        let data = getValuesMatrix(rows, cols);
        result = sumMatrix(data.M1, data.M2);
        for( i = 0; i < rows; i++ )
        {
          for( j = 0; j < cols; j++ )
          {
            $("#matrix3_"+i+"_"+j+"").val(result[i][j]);
          }
        }
      });

      $("#cal_sub_matrix").click( () =>
      {
        let data = getValuesMatrix(rows, cols);
        result = subMatrix(data.M1, data.M2);
        for( i = 0; i < rows; i++ )
        {
          for( j = 0; j < cols; j++ )
          {
            $("#matrix3_"+i+"_"+j+"").val(result[i][j]);
          }
        }
      });


      $("#cal_prod_matrix").click( () =>
      {
        let data = getValuesMatrix(rows, cols);
        result = prodMatrix(data.M1, data.M2);
        for( i = 0; i < rows; i++ )
        {
          for( j = 0; j < cols; j++ )
          {
            $("#matrix3_"+i+"_"+j+"").val(result[i][j]);
          }
        }
      });

    });

    $("#cal_size_gauss").click( () =>
    {
      $("#content_guass").empty();
      let size = parseInt($("#input_size_gauss").val());
      let content = '<br>A'
      for( i = 0; i < size; i++ )
      {
        content += '<div class = "row">';
        for( j = 0; j < size; j++ )
        {
          content += '<div class = "col-md-1">'+'<input type = "text" id="gauss'+i+'_'+j+'" class = "form-control">'+'</div>';
        }
        content += '</div>'
      }
      content += '<br>B'
      content += '<div class = "row">';
      for( j = 0; j < size; j++ )
      {
        content += '<div class = "col-md-1">'+'<input type = "text" id="gauss'+j+'" class = "form-control">'+'</div>';
      }
      content += '</div><br>'
      content += '<button type="button" id="cal_gauss" class = "btn btn-success">Calculate</button>';
      content += '<br><br>result'
      content += '<div class = "row">';
      for( j = 0; j < size; j++ )
      {
        content += '<div class = "col-md-1">'+'<input type = "text" id="gauss_result'+j+'" class = "form-control" readonly>'+'</div>';
      }
      content += '</div>'
      $("#content_guass").append(content);
      $("#cal_gauss").click( () =>
      {
        let getValuesMatrixGauss = function(rows, columns)
        {
          let matrix1 = new Array(rows);
          let matrix2 = new Array(rows);
          for( i = 0 ; i < rows; i++ )
          {
            matrix1[i] = new Array(columns);
            for( j = 0; j < columns; j++ )
            {
              matrix1[i][j] = parseFloat($("#gauss"+i+"_"+j+"").val());
            }
            matrix2[i] = parseFloat($("#gauss"+i).val());
          }
          return { A: matrix1, B: matrix2 };
        }
        let values = getValuesMatrixGauss(size, size);
        let result = gauss(values.A, values.B);
        console.log(values.A);
        console.log(values.B);
        for( i = 0; i < size; i++ )
        {
          $("#gauss_result"+i+"").val(result[i]);
        }
      });

    });

    $("#cal_root").click( () =>
    {
      let a = $("#input_root_a").val();
      let b = $("#input_root_b").val();
      let f = $("input[name=function_select]:checked").val();
      let m = $("input[name=method_select]:checked").val();
      let mf, mm;
      let nIter = parseInt($("#input_root_iter").val());
      switch( f )
      {
        case "option0":
          mf = f0;
          break;
        case "option1":
          mf = f1;
          break;
        case "option2":
          mf = f2;
          break;
        case "option3":
          mf = f3;
          break;
        default:
          console.error("no function select");
      }
      switch( m )
      {
        case "option0":
          mm = bisection;
          break;
        case "option1":
          mm = secant;
          break;
        case "option2":
          mm= falsePosition;
          break;
        case "option3":
          mm = newton;
          break;
        default:
          console.error("no function select");
      }
      let result;
      //console.log(mm);
      //console.log(mf);
      if ( m == "option3" )
      {
        result = mm(parseFloat(a), mf, nIter);
      }
      else
      {
        result = mm(parseFloat(a), parseFloat(b), mf, nIter );
      }

      $("#answer_root").text(result);
    });
  }
);
