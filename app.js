const navSlide = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-links');
  const navLinks = document.querySelectorAll('.nav-links li');

  burger.addEventListener('click', () => {
    //   Toggle Now
    nav.classList.toggle('nav-active');

    // Animation links
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 +0.3 }s`;
        console.log(index / 7);
      }
    });

    // Burger Animation 
    burger.classList.toggle('togger');


  });
}

navSlide();
