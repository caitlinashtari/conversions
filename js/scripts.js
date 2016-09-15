// Business (or back-end) logic:
var po = function(number1) {
  return number1 * 16;
}

var op = function(number1) {
  return number1 / 16;
}

var cup = function(number1){
  return number1 * 2
}

var ou = function(number1) {
  return number1 * 0.035274;
}

// Everything below this line is user interface (or front-end) logic:

$(document).ready(function() {
  $("form#poundsOunces").submit(function(event) {
    event.preventDefault();
    var number1 = parseInt($("#po1").val());
    var result = po(number1);
    $("#output1").text(result + " ounces").fadeIn(1000);
  });

  $("form#ouncesPints").submit(function(event) {
    event.preventDefault();
    var number1 = parseInt($("#op1").val());
    var result = op(number1);
    $("#output2").text(result + " pints").fadeOut(1000);
  });

  $("form#poundCup").submit(function(event) {
    event.preventDefault();
    var number1 = parseInt($("#cup1").val());
    var result = cup(number1);
    $("#output3").text(result + " cup").fadeIn(1000);
  });

  $("form#gramsOunces").submit(function(event) {
    event.preventDefault();
    var number1 = parseInt($("#ounces1").val());
    var result = ou(number1);
    $("#output4").text(result + " ounces").fadeIn(1000);
  });

});
