$(function() {
  // jQuery goes here...

  // Uncomment this line to fade out the red box on page load
  // 1) 

  //  $(".red-box").fadeOut(2000);
  //  $(".green-box").fadeOut(2000);
  //  $(".green-box").fadeTo(2000, 0.5);
  //  $(".blue-box").fadeOut(2000);
  //  $(".red-box").fadeIn(20000);
  //  $(".green-box").fadeIn(2000);
  //  $(".blue-box").fadeIn(2000);
  //  $(".red-box").fadeTo(3000, 0.2);
  //  $(".green-box").fadeTo(2000, 0.5);
  //  $(".blue-box").fadeTo(1000, 0.8);
  //  $(".red-box").fadeTo(1000, 0);
  //  $(".blue-box").fadeToggle();
  //  $(".blue-box").fadeToggle();
  
   //2)

  //  $(".green-box").fadeIn(2000);
  //  $(".red-box").fadeIn(1000);
  //  $(".red-box").fadeTo(1000, 0.5);

  //  $(".blue-box").hide(1000);
  // $(".blue-box").show(1000);
  // $(".blue-box").toggle();

  //3)

  //  $(".blue-box").slideUp(2000);
  //  $(".blue-box").show(1000);
  //  $(".blue-box").slideDown(2000);

  //4)

  //  $(".red-box").slideUp(2000);
  //  $(".green-box").slideUp(2000);   
  //  $(".blue-box").slideUp(2000);
  //  $(".red-box").slideDown(2000);
  //  $(".green-box").slideDown(2000);   
  //  $(".blue-box").slideDown(2000);

  //  $("p").hide();
  //  $("p").slideDown(1000);

  //5)
  // $(".blue-box").slideToggle(2000);
  // $("p").hide();
  //  $("p").slideDown(1000);

  //6)

  // $(".blue-box").animate({
    
  //   "margin-left": "+=200px"
  // }, 1000, "linear");

  // $(".red-box").animate({
    
  //   "margin-left": "+=200px"
  // }, 1000);

  // $(".green-box").animate({
    
  //   "margin-left": "+=200px"
  // }, 1000);

//7)

// $(".blue-box").animate({

//   marginLeft: "200px", 
//   "opacity":"0",
//   "height": "50px",
//   "width": "50px", 
//   marginTop: "25px"

// }, 1000);

// $("p").animate({
// fontSize: "25px"
// }, 1000);

// 8

// $(".red-box").fadeTo(1000, 0.2);
// $(".green-box").delay(1000).fadeTo(1000, 0.5);
// $(".blue-box").delay(2000).fadeTo(1000, 0.8).fadeOut().delay(500).fadeIn();

//9)

// $(".red-box").fadeTo(1000, 0,  function() {  //call back function
//   // alert("This is a call back: Animation finished");
//   $(".green-box").fadeTo(1000, 0, function() {
//     $(".blue-box").fadeTo(1000, 0);
//   });
// });

//10) Creating Sign-Up Lightbox

// $(".lightbox").delay(500).fadeIn(1000);

//11) jQuery Selectors

// $("p").css("background-color", "rgba(180, 180, 30, 0.8)");
// $(".red-box").css("background-color", "rgba(180, 180, 30, 0.8)");
// $("#list").css("background-color", "rgba(180, 180, 30, 0.8)");
// $("input[type='text").css("background-color", "rgba(180, 180, 30, 0.8)");
// $("h2, p, input").css("background-color", "rgba(180, 180, 30, 0.8)");
// $("p:first").css("background-color", "rgba(180, 180, 30, 0.8)");
// $("li:last").css("background-color", "rgba(180, 180, 30, 0.8)");
// $("li:even").css("background-color", "rgba(180, 180, 30, 0.8)");
// $("li:odd").css("background-color", "rgba(180, 180, 30, 0.8)");
// $("input:text").css("background-color", "rgba(180, 180, 30, 0.8)");
// $("input:email").css("background-color", "rgba(180, 180, 30, 0.8)");
// $("input:radio").css("background-color", "rgba(180, 180, 30, 0.8)");
// $("input:checked").css("background-color", "rgba(180, 180, 30, 0.8)");
// $("input:delected").css("background-color", "rgba(180, 180, 30, 0.8)");

//12) jQuery Methods for Traversal

// $("#list").find("li").css("background-color", "rgba(180, 180, 30, 0.8");
// $("#list").children("li").css("background-color", "rgba(180, 180, 30, 0.8");
// $("#list").parents("body").css("background-color", "rgba(180, 180, 30, 0.8");
// $("#list").parent().css("background-color", "rgba(180, 180, 30, 0.8");
// $("#list").siblings(":header").css("background-color", "rgba(180, 180, 30, 0.8");
// $("#list").prev().css("background-color", "rgba(180, 180, 30, 0.8");
// 
//13) jQuery Methods for Filtering

// $("li").filter(function(index){
//   return index%3 ===2;

// }).css("background-color", "rgba(180, 180, 30, 0.8");

// $("li").first().css("background-color", "rgba(180, 180, 30, 0.8");
// $("li").last().css("background-color", "rgba(180, 180, 30, 0.8");

// $("li").eq(1).css("background-color", "rgba(180, 180, 30, 0.8");
// $("li").eq(2).css("background-color", "rgba(180, 180, 30, 0.8");
// $("li").eq(3).css("background-color", "rgba(180, 180, 30, 0.8");
// $("li").eq(-2).css("background-color", "rgba(180, 180, 30, 0.8");
// $("li").not(":first").css("background-color", "rgba(180, 180, 30, 0.8");
// $("li").not("#list ul li").css("background-color", "rgba(180, 180, 30, 0.8");
// $("li").not(function(index){
//   return index%3===2;
// }).css("background-color", "rgba(180, 180, 30, 0.8");

//14) DOM


//   $("ul ul:first").append("<li>I'm gonna be the last sub-item</li>")
// });

// $("<li>I'm gonna be the last item</li>").appendTo($("ul ul:first"));
// });

// $("ul ul:first").prepend("<li>I'm gonna be the first sub-item</li>")
// });
// $("ul ul").prepend("<li>I'm gonna be the last sub-item</li>")
// });
// $("<li>I'm gonna be the last item</li>").prependTo($("ul ul:first"));
//  });
// $("<li>I'm gonna be the last item</li>").prependTo("ul ul");
//  });
// $("<h4>Peter Sommerhoff</h4>").prependTo("#content");
// $(".red-box").after("<div class='red-box'>Another Red</div>");
// $(".blue-box").before("<div class='blue-box'>Blue Friend</div>");
// $(".blue-box").before(function(){
//   return "<div class='blue-box'>Blue 2</div>";
// });
// $(".blue-box").before($(".red-box"));
// $("p").after($("#list"));

//15) Replacing Eleents

// $("li").replaceWith("<li>Replaced.</li>");

// $("li").replaceWith(function(){
//   return "<li> Replaced with function.</li>"
//  var firstListItem = $("li:first");
//   $("p:first").replaceWith(firstListItem);

// $(".blue-box, .red-box").replaceWith("<div class= 'green-box'> More green Box</div>");

// $("<div class='green-box'> More Green</div>").replaceAll(".red-box, .blue-box");

// 16) Remove Elements

// $("li").remove();

// $("form").children().not("input:text, textarea, br").remove();

var detachedLestItem = $("li").detach();
$("#content").append(detachedLestItem);

});




