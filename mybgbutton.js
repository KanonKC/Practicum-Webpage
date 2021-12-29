$(document).ready(function(){
    $("#bg").click(function(){
      // $("body").toggleClass("active-btn")
      $("body").removeClass("space")
      if ($("#bg").prop('checked')) {
          // alert('Change background color to light blue!');
         $("body").css({"background-color": "lightblue"});
      } else {
         $("body").css({"background-color": "#d6ffd4"});
      }
    });
});