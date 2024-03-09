window.addEventListener('scroll', function() {
    var navbar = document.getElementById('navbar');
    var logo = document.getElementById('logo');

    var scrollY = window.scrollY || window.pageYOffset; 
    
    if (scrollY > 100) { 
      navbar.style.paddingTop = '6px';
      navbar.style.paddingBottom = '6px'; 
      logo.classList.add('toggle_size'); 
    } else {
      navbar.style.paddingTop = '15px'; 
      navbar.style.paddingBottom = '15px'; 
      logo.classList.remove('toggle_size'); 
    }
  });
  
  window.addEventListener('resize', function() {
    var container1 = document.querySelector('.responsive_change1');
    var container2 = document.querySelector('.responsive_change2');
    var container3 = document.querySelector('.responsive_change3');
    var container4 = document.querySelector('.responsive_change4');
    var container5 = document.querySelector('.responsive_change5');
    var container6 = document.querySelector('.responsive_change6');
    var container7 = document.querySelector('.responsive_change7');

    if (window.innerWidth <= 1400) {
      container1.classList.remove('col-sm-10');
      container1.classList.add('col-sm-12');
      container2.classList.remove('col-sm-10');
      container2.classList.add('col-sm-12');
      container3.classList.remove('col-sm-10');
      container3.classList.add('col-sm-12');
      container4.classList.remove('col-sm-10');
      container4.classList.add('col-sm-12');
      container5.classList.remove('col-sm-10');
      container5.classList.add('col-sm-12');
      container6.classList.remove('col-sm-10');
      container6.classList.add('col-sm-12');
      container7.classList.remove('col-sm-10');
      container7.classList.add('col-sm-12');
    } else {
      container1.classList.remove('col-sm-12');
      container1.classList.add('col-sm-10');
      container2.classList.remove('col-sm-12');
      container2.classList.add('col-sm-10');
      container3.classList.remove('col-sm-12');
      container3.classList.add('col-sm-10');
      container4.classList.remove('col-sm-12');
      container4.classList.add('col-sm-10');
      container5.classList.remove('col-sm-12');
      container5.classList.add('col-sm-10');
      container6.classList.remove('col-sm-12');
      container6.classList.add('col-sm-10');
      container7.classList.remove('col-sm-12');
      container7.classList.add('col-sm-10');
    }
  });

  window.dispatchEvent(new Event('resize'));


  
  document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("hamburger").addEventListener("click", function() {
        var hamburger = document.getElementById("hamburger");
        var close = document.getElementById("close");
        
        hamburger.style.display = "none";
        close.style.display = "inline";
    });

    document.getElementById("close").addEventListener("click", function() {
        var hamburger = document.getElementById("hamburger");
        var close = document.getElementById("close");
        
        close.style.display = "none";
        hamburger.style.display = "inline";
    });
});
