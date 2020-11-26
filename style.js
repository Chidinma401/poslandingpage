// gotop 
function openPage(pageName,elmnt,color) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.backgroundColor = "";
  }
  document.getElementById(pageName).style.display = "block";
  elmnt.style.backgroundColor = color;
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();

// back to top
var goToTop = function() {

  $('.js-gotop').on('click', function(event){
      
      event.preventDefault();

      $('html, body').animate({
          scrollTop: $('html').offset().top
      }, 500, 'easeInOutExpo');
      
      return false;
  });

  $(window).scroll(function(){

      var $win = $(window);
      if ($win.scrollTop() > 200) {
          $('.js-top').addClass('active');
      } else {
          $('.js-top').removeClass('active');
      }

  });

};

goToTop();
