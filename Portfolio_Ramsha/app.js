const navLinks = document.querySelectorAll('nav ul li a');

function changeColorOnHover(event) {
  event.target.style.color = '#FF5733'; 
}

function resetColor(event) {
  event.target.style.color = '#fff';
}

navLinks.forEach(link => {
  link.addEventListener('mouseover', changeColorOnHover);
  link.addEventListener('mouseout', resetColor);
});

document.querySelectorAll('section').forEach(section => {
    section.classList.add('animate__animated', 'animate__fadeInUp');
  });
  