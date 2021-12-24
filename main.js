$(".lock").click(function(){
  $(this).toggleClass("on");
});

$(".key").click(function(){
  var $text = $(".input").text();


  
  
  if ($(this).hasClass("lttr") || $(this).hasClass("space")) {
   
    if (!$(".lock").hasClass("on")) {
      $(".input").text($text+$(this).text()); 
    } else {
      $(".input").text($text+$(this).text().toUpperCase()); 
    }
    
  } else if ($(this).hasClass("double")) {
    
    $(".input").text($text+$(this).find(".dw").text()); 
    
  } else if ($(this).hasClass("del")) {
    $(".input").text($text.substr(0, $text.length-1));
  }
  
  if ($text.length > 0) {
    $(".input").addClass("fill");
    console.log($text.length);

  } else {
    $(".input").removeClass("fill");
    console.log($text.length +"ded");
  } 
});
