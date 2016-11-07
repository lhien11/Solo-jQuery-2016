var red = 0, yellow = 0, green = 0, blue = 0;

$(document).ready(function(){
  $(".color-button").on('click', function(){
    var color = $(this).data('color');
    switch (color) {
      case 'red':
        redColor();
      break;

      case 'yellow':
        yellowColor();
      break;

      case 'green':
        greenColor();
      break;

      case 'blue':
        blueColor();
      break;
      default:
      console.log("no color is picked");

    }
  });


});

var redColor = function(){
  red++;
  $('#red').html("Total red: " + red);
  $('.container').append("<div class='color-cube red' id='redCube'></div>");
}

var yellowColor = function(){
  yellow++;
  $('#yellow').html("Total yellow: " + yellow);
  $('.container').append("<div class='color-cube yellow' id='yellowCube'></div>");
}
var greenColor = function(){
  green++;
  $('#green').html("Total green: " + green);
  $('.container').append("<div class='color-cube green' id='greenCube'></div>");
}
var blueColor = function(){
  blue++;
  $('#blue').html("Total blue: " + blue);
  $('.container').append("<div class='color-cube blue' id='blueCube'></div>");
}
