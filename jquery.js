// // Initializes Posts Contents
$(".expand-button").click(function () {
    var target = $(this).data("target");
    $(target).slideToggle('fast');
    $(this).toggleClass("expand-button collapsed video expand-button expanded video");
});

//  Initializes nav-bar DropDown
$(document).ready(function () {
     $("li").on({
         click: function () {
             $('li').removeClass('nav-select');
             $(this).addClass('nav-select');
         }
     });
 });

 // Initializes 
 $(document).on("click", ".votes", function () {
     alert("Please Log in or sign up first.");
 });

 $(document).on("click", ".share", function () {
     alert("Please Log in or sign up first.");
 });

 $(document).on("click", ".save", function () {
     alert("Please Log in or sign up first.");
 });

 $(document).on("click", ".hide", function () {
     alert("Please Log in or sign up first.");
 });

 $(document).on("click", ".report", function () {
     alert("Please Log in or sign up first.");
 });

 $(document).ready(function () {
     $(".srdropdown").click(function () {
         $(".srdropdownmenu").toggle();
     });
 });
 
