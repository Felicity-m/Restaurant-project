$(document).ready(function(){
/*----STICKY NAV----*/
   $('.js--section-features').waypoint(function(direction){
       if(direction=="down"){
           $('nav').addClass('sticky');
       } else{
           $('nav').removeClass('sticky');
       }
       }, {
        offset: '60px'
    

});

/*------SCROLL ON BUTTON---*/
$('.js--scroll-to-plans').click(function(){
  $('html,body').animate({scrollTop: $('.js--section-plans')
  .offset().top}, 1000);
})


$('.js--scroll-to-start').click(function(){
  $('html,body').animate({scrollTop: $('.js--section-features')
.offset().top}, 1000);
})


/* Navigation scroll */
$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});



/*---ANIMATION ON SCROLL-fadeIn-*/
$('.js--wp-1').waypoint(
  (direction) => {
    $('.js--wp-1').addClass('animate__animated animate__fadeInUp');
  },
  {
    offset: '50%',
  }
);

/*---PHONE ANIMATION--*/
$('.js--wp-2').waypoint(
  (direction) => {
    $('.js--wp-2').addClass('animate__animated animate__fadeInUp');
  },
  {
    offset: '50%',
  }
);

/*-------CITIES ANIMATION---- */
$('.js--wp-3').waypoint(
  (direction) => {
    $('.js--wp-3').addClass('animate__animated animate__fadeInUp');
  },
  {
    offset: '50%',
  }
);


/*-----section meal plans animation-- */
$('.js--wp-4').waypoint(
  (direction) => {
    $('.js--wp-4').addClass('animate__animated animate__fadeInTopRight');
  },
  {
    offset: '50%',
  }
);



 /* ---Mobile navigation ---*/
 $('.js--nav-icon').click(function() {
  var nav = $('.js--main-nav');
  var icon = $('.js--nav-icon i');
  
  nav.slideToggle(200);
  
  if (icon.hasClass('ion-navicon-round')) {
      icon.addClass('ion-close-round');
      icon.removeClass('ion-navicon-round');
  } else {
      icon.addClass('ion-navicon-round');
      icon.removeClass('ion-close-round');
  }        
});















});

 /* var waypoints = $('#handler-first').waypoint(function(direction) {
        notify(this.element.id + ' hit 25% from top of window') 
      }, {
        offset: '25%'
      })*/