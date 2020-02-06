jQuery(document).ready(function() {
  // sroll-top button begin
  var btn = $("#button");
  $(window).scroll(function() {
    if ($(window).scrollTop() > 300) {
      btn.addClass("show");
    } else {
      btn.removeClass("show");
    }
  });
  btn.on("click", function(e) {
    e.preventDefault();
    $("html, body").animate({ scrollTop: 0 }, "300");
  });
  // sroll-top button end

  //blink logo start
  $('[src = "images/hpluslogo.svg"]')
    .fadeTo("2000", 0.1)
    .fadeTo("2000", 1)
    .fadeTo("2000", 0.1)
    .fadeTo("2000", 1);
  //blink logo end

  //change product's background color
  $('[data-type = "mineralwater"]').css("background-color", "green");
  $('[data-type = "proteinbar"]').css("background-color", "blue");
  $('<a href = "javascript:window.print()">print</a>')
    .appendTo(".print")
    .css("font-size", "25px");

  //make first words of person-card bold
  $(".card-text").html(function() {
    var text = $(this)
      .text()
      .split(" ");
    var first = text.shift();
    return "<b>" + first + "</b> " + text.join(" ");
  });

  //move Michael Lewiston to first
  $(".person-card:contains(Michael Lewiston)").prependTo(".people-cards");

  //change nav bar and headline to Personnel
  $(".navbar li a:contains(people)").text("Personnel");
  $(".headline:contains(People)").text("Personnel");
});
