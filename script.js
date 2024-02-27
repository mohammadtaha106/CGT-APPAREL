// JavaScript to change the background color when mouse goes over navbar
document.getElementById("navbar").addEventListener("mouseover", function() {
    this.style.backgroundColor = "black";
  });
  
  document.getElementById("navbar").addEventListener("mouseout", function() {
    this.style.backgroundColor = "transparent";
  });
  window.addEventListener('scroll', function() {
    var navbar = document.getElementById('navbar');
    if (window.scrollY > 0) {
      navbar.style.backgroundColor = 'black'; // Change background color to black
    } else {
      navbar.style.backgroundColor = 'transparent'; // Change background color back to transparent
    }
  });