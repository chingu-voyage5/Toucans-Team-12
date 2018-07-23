 $(document).ready(function () {
     $("li").on({
         click: function () {
             $('li').removeClass('nav-select');
             $(this).addClass('nav-select');
         }
     });
 });

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
 
