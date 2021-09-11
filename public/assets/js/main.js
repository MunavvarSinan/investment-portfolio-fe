$(function() {
    
    "use strict";
    
    

    $(window).on('load', function() {
        $(window).scrollTop(0);
    });
    // grab an element
    var myElement = document.querySelector(".headroom");
    // construct an instance of Headroom, passing the element
    var headroom  = new Headroom(myElement);
    // initialise
    headroom.init();


    window.onscroll = function () {
        var header_navbar = document.querySelector(".navbar-area");
        var sticky = header_navbar.offsetTop;

        if (window.pageYOffset > sticky) {
            header_navbar.classList.add("sticky");
        } else {
            header_navbar.classList.remove("sticky");
        }

        // show or hide the back-top-top button
        var backToTo = document.querySelector(".scroll-top");
        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
            backToTo.style.display = "flex";
        } else {
            backToTo.style.display = "none";
        }
    };
    
  
    
        
    //===== close navbar-collapse when a  clicked
    
    $(".navbar-nav a").on('click', function () {
        $(".navbar-collapse").removeClass("show");
    });
    
    
    //===== Mobile Menu
    
    $(".navbar-toggler").on('click', function(){
        $(this).toggleClass("active");
    });
    
    $(".navbar-nav a").on('click', function() {
        $(".navbar-toggler").removeClass('active');
    });
    
    var subMenu = $(".sub-menu-bar .navbar-nav .sub-menu");
    
    if(subMenu.length) {
        subMenu.parent('li').children('a').append(function () {
            return '<button class="sub-nav-toggler"> <span></span> </button>';
        });
        
        var subMenuToggler = $(".sub-menu-bar .navbar-nav .sub-nav-toggler");
        
        subMenuToggler.on('click', function() {
            $(this).parent().parent().children(".sub-menu").slideToggle();
            return false
        });
        
    }
    
    
    //===== Counter Up
    
    $('.counter').counterUp({
        delay: 10,
        time: 3000
    });
    
    
    //===== Back to top
    
    // Show or hide the sticky footer button
    $(window).on('scroll', function(event) {
        if($(this).scrollTop() > 600){
            $('.scroll-top').fadeIn(200)
        } else{
            $('.scroll-top').fadeOut(200)
        }
    });
    
    
    
    
    //=====  WOW active
    
    new WOW().init();
    
    
    
});