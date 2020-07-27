$(function() {
    $("button.bt_1").click(function() {
        $("div").hide();
   });
   $("button.bt_2").click(function() {
       $("div").fadeIn(2000);
   });
   $("button.bt_4").click(function() {
       $("div").fadeOut();
   });
   $("button.bt_5").click(function() {
       $("div").slideUp(1000);
   });
   $("button.bt_3").click(function() {
       $("div").show(1000);
   });
});