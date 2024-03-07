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
  