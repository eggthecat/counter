$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();

    var num1Input = parseFloat($("input#num1").val());
    var num2Input = parseFloat($("input#num2").val());

    for(var i = 0; i <= num1Input; i += num2Input){
      console.log(i);
      $("ol.count").append("<li>" + i + "</li>");
    };

    // var total = 0;
    // var numbers = [5,10,15,20,25,30]
    // for (var number = 0; numbers <= 30; number+=5){
    // }
    // alert (total);

  });
});



// var total = 0;
// var numbers = [5,10,15,20,25,30]
// numbers.forEach(var currentNumber = 0; currentNumber <= 30; currentNumber += 5) {
//   total += currentNumber;
// }
// alert("Total is: " + total);
//
// });
// });
