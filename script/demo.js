$(document).ready(function() {
  //alert("Hi Jquery! I Love You!!");

  // add selected class in the fist clild of menu
$('#menu ul li:first').addClass('selected');

// add middle class to the middle articles in the s<section> text
$('.container article:odd').addClass('middle');

});
