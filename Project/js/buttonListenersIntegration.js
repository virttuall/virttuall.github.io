$(window).load( () =>
{
    $("#cal_integration").click( () =>
    {
      let a = $("#input_integration_a").val();
      let b = $("#input_integration_b").val();
      let f = $("input[name=function_select]:checked").val();
      let m = $("input[name=method_select]:checked").val();
      let mf, mm;
      let nDiv = parseInt($("#input_integration_div").val());
      switch( f )
      {
        case "option0":
          mf = f5;
          break;
        case "option1":
          mf = f6;
          break;
        case "option2":
          mf = f7;
          break;
        case "option3":
          mf = f8;
          break;
        default:
          console.error("no function select");
      }
      switch( m )
      {
        case "option0":
          mm = simpson;
          break;
        case "option1":
          mm = trapeze;
          break;
        default:
          console.error("no function select");
      }
      let result;
      //console.log(mm);
      //console.log(mf);
      result = mm(mf, parseFloat(a), parseFloat(b), nDiv );
      $("#answer_integration").text(result);
    });
  }
);
