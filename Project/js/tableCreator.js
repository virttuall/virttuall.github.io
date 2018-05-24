$(window).load( () =>
{
    let content = "";
    for( i = 0; i < 33; i++ )
    {
      content += "<tr>"
      for( j = 0; j < 3; j++ )
      {
        content += "<td> F<sub>"+(i*3+j+1)+"</sub> = " + fibonacciNumbers[i*3+j]+"</td>";
      }
      content += "</tr>"
    }
    $("#fibonacci_table").append(content);


    content = "";
    for( i = 0; i < 5; i++ )
    {
      content += "<tr>"
      for( j = 0; j < 14; j++ )
      {
        if ( i == 0 && j == 0 ) content += "<th> m\\n </th>";
        else if ( i == 0 ) content += "<th>"+(j-1)+"</th>";
        else if ( j == 0 ) content += "<th>"+(i-1)+"</th>";
        else content += "<td> A<sub>"+(i-1)+","+(j-1)+"</sub> = " + ackermann(i-1, j-1)+"</td>";
      }
      content += "</tr>"
    }
    $("#ackermann_table").append(content);
});
