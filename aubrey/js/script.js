/* global $*/

$(document).ready(function () {
  $(".fa-facebook").hover(function () {
    $("#talk-box").text("Let's be friends.");
  });
  $(".fa-twitter").hover(function () {
    $("#talk-box").text("Tweet at me.");
  });
  $(".fa-instagram").hover(function () {
    $("#talk-box").text("Pictures from my travels.");
  });
  $(".fa-tumblr").hover(function () {
    $("#talk-box").text("This is where I write things.");
  });
  $(".fa-wrench").hover(function () {
    $("#talk-box").text("Current and past projects.");
  });
  $(".fa-linkedin").hover(function () {
    $("#talk-box").text("Link up with me.");
  });
  $(".fa-youtube").hover(function () {
    $("#talk-box").text("Subscribe!");
  });
  $(".fa-github").hover(function () {
    $("#talk-box").text("Let's git dangerous.");
  });
  $(".fa-codepen").hover(function () {
    $("#talk-box").text("Come see what I'm working on.");
  });
  $(".fa-fire").hover(function () {
    $("#talk-box").text("And one time, at code camp...");
  });
  $(".fa-facebook").hover(function () {
    $("#talk-box").text("Let's be friends.");
  });
  $(".fa-envelope").hover(function () {
    $("#talk-box").text("The old fashioned way.");
  });
  $(".fa").mouseleave(function () {
    $("#talk-box").html("&nbsp;");
  });





  
});