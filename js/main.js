//Navigation Code
jQuery(document).ready(function() {
jQuery('.toggle-nav').click(function(e) {
jQuery(this).toggleClass('active');
jQuery('.menu ul').toggleClass('active');
e.preventDefault();
});
});
//Tabs Code
jQuery(document).ready(function() {
jQuery('.tabs .tab-links a').on('click', function(e)  {
var currentAttrValue = jQuery(this).attr('href');
// Show/Hide Tabs
jQuery('.tabs ' + currentAttrValue).show().siblings().hide();
// Change/remove current tab to active
jQuery(this).parent('li').addClass('active').siblings().removeClass('active');
e.preventDefault();
});
});
//Drop-off
$(document).ready(function(){
	$(".form-different").hide();
    $("#same").click(function(){
        $(".form-same").show();
        $(".form-different").hide();
    });
    $("#different").click(function(){
        $(".form-different").show();
        $(".form-same").hide();
        
    });
});

//Get Modal Element
var modal = document.getElementById('simpleModal');
//Get open modal button
var modalBtn = document.getElementById('modalBtn');
//Get close modal button
var closeBtn = document.getElementsByClassName('closeBtn')[0];

// global variable for the player
var player;

// this function gets called when API is ready to use
function onYouTubePlayerAPIReady() {
  // create the global player from the specific iframe (#video)
  player = new YT.Player('video', {
    events: {
      // call this function when player is ready to use
      'onReady': onPlayerReady
    }
  });
}

function onPlayerReady(event) {

  // bind events
  var playButton = document.getElementById("modalBtn");
  playButton.addEventListener("click", function() {
    player.playVideo();
  });

  var pauseButton = document.getElementsByClassName("closeBtn")[0];
  pauseButton.addEventListener("click", function() {
    player.pauseVideo();
  });

}


// Inject YouTube API script
var tag = document.createElement('script');
tag.src = "//www.youtube.com/player_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

//Add event listener for open
modalBtn.addEventListener('click', openModal);
//Add event listener for close
closeBtn.addEventListener('click', closeModal);
//Add event listener for outside click
window.addEventListener('click', outsideClick);

//Modal opener function
function openModal(){
	modal.style.display = 'block';

}
//Modal close function
function closeModal(){
	modal.style.display = 'none';
}
//Modal close function outside
function outsideClick(e){
  if(e.target == modal){
    modal.style.display = 'none';
    player.pauseVideo();
  }
}
//Smooth Scroll
$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 800);
        return false;
      }
    }
  });
});
