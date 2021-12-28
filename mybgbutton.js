$(document).ready(function(){
    $("#bg").click(function(){
      // $("body").toggleClass("active-btn")
      if ($("#bg").prop('checked')) {
          // alert('Change background color to light blue!');
         $("body").css({"background-color": "lightblue"});
      } else {
         $("body").css({"background-color": "white"});
      }
    });
});