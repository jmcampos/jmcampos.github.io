
// ********* permitir que os valores se ajustem à dimensão do ecrã *******
$(window).on('load resize scroll',function(){

  //scroll value of first quote
  var quote_scroll = $("#first-quote").offset().top;


  //altura da intro section
  var intro_height = $("#intro-section").height();
  //altura da why section
  var why_height = $("#why-section").height();
  //valor de scroll da soil section
  var soil_scroll = $("#soil-section").offset().top;
  //height da soil section
  var soil_height = $("#soil-section").height();
  //guardar o valor actual do scroll
  var scroll_actual = $(this).scrollTop();
  //guardar o valor de scroll da composting section
  var compost_scroll = $("#composting").offset().top;
  //guardar o valor da altura da composting section
  var compost_height = $("#composting").height();

  //show and hide first quote
  if(scroll_actual >= quote_scroll - why_height/2) {//intro_height + why_height/3) {
    $(".quote").css({"top": "0"});
  } else if(scroll_actual < why_height){
    $(".quote").css({"top": "100%"});
  }

  //change menu icon color
  if(scroll_actual > intro_height) {
    $(".menu").css("color", "black");
  } else {
    $(".menu").css("color", "white");
  }

  //fadein second quote
  if(scroll_actual > soil_scroll + soil_height/3 ) {
    $(".special-quote").css({"opacity": 1});
  } else {
    $(".special-quote").css({"opacity": 0});
  }

  // show back to top button
  if(scroll_actual > compost_scroll + compost_height/2) {
      $(".top").fadeIn(200);
  } else {
    $(".top").fadeOut(200);
  }

//end of load resize scroll
});


// ****************** click event menu icon **********************
$(".menu i").click(function() {
  $(".dropdown").slideToggle();
});


// ********************* click event read more ****************
$(".read-more").click(function() {
  $(this).fadeOut();
  $(".soil-examples").css("opacity", 1);
});


// ******************** click event slides button ******************
$(".button").click(function() {
  //save index of active button
  var current_button = $(".active-button").index();
  //save index of clicked button
  var clicked_button = $(this).index();
  //remove class active-button from current_button
  $(".active-button").removeClass("active-button");
  //add class to clicked button
  $(this).addClass("active-button");
  //show topic with same index as clicked button
  $(".actions").eq(clicked_button).animate({"left": "0"});
  //hide topic with current button index
  $(".actions").eq(current_button).css({"left": "100%"});
});


// *************** click event back to top button ***********************
$(".top").click(function() {
  $("html, body").animate({scrollTop:0}, 900);
});
