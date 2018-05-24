$(window).load( () =>
{
  $("#cal_interpolation").click( () =>
  {
    $("#input_divided_diferences").empty();
    let numberOfPoints = parseInt($("#input_number_of_points").val());
    let content = "<br><br>";
    for( let i = 0; i < numberOfPoints; i++ )
    {
      content += '<div class = "row">';
      content +=  '<div class = "col-md-6">'
      content +=    '<div class = "form-group">'
      content +=      '<label for="input_x_'+i+'">x value of point '+(i+1)+'</label>'
      content +=      '<input type = "text" id = "input_x_'+i+'" class = "form-control">'
      content +=    '</div>'
      content +=  '</div>'
      content +=  '<div class = "col-md-6">'
      content +=    '<div class = "form-group">'
      content +=      '<label for="input_y_'+i+'">y value of point '+(i+1)+'</label>'
      content +=      '<input type = "text" id = "input_y_'+i+'" class = "form-control">'
      content +=    '</div>'
      content +=  '</div>'
      content += '</div>'
    }
    content += '<button type = "button" id = "cal_do_interpolation" class = "btn btn-success">Interpolate</button>'
    $("#input_divided_diferences").append(content);
    $("#cal_do_interpolation").click(() =>
    {
        $("#result_interpolation").empty();
        let xValues = new Array();
        let yValues = new Array();
        for( let i = 0; i < numberOfPoints; i++ )
        {
          xValues.push(parseFloat($("#input_x_"+i+"").val()));
          yValues.push(parseFloat($("#input_y_"+i+"").val()));
        }
        result = dividesDiferences(xValues, yValues);
        console.log(result);
        content = "<br> The polynomial that interpolate the poitns is ";
        let flag = false;
        for( let i = 0; i < result.length; i++ )
        {
          if ( isNaN(result[i]) )
          {
            content = "<br>Error";
            break;
          }
          if ( result[i] == 0.0 ) continue;
          if ( flag ) content += " + ";
          if ( result[i] != 1.0 || i == result.length - 1 ) content += result[i];
          if ( result.length - i - 1 != 0 )
          {
              if ( result.length - i - 1 == 1 ) content += "x"
              else content += 'x<sup>'+(result.length-i-1)+'</sup>'
          }
          flag = true;
        }
        $("#result_interpolation").append(content);
    });
  });
});
