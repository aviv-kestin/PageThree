$("document").ready(function() {



    $(document).ready(function() {
        $(window).scroll(function() {
          scrollRotate();
        });
  
        function scrollRotate() {
          let scrollTop = $(window).scrollTop();
          $("#number").css("transform", "rotate(" + scrollTop / 2.1 + "deg)");
        }
      });
});






