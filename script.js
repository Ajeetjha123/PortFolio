  let menuIcon = document.querySelector('#menu-icon');
  let navbar = document.querySelector('.navbar');

  menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
  };

  // scroll sections
  let sections = document.querySelectorAll('section');
  let navLinks = document.querySelectorAll('header nav a');
  window.onscroll = () => {
    sections.forEach(sec => {
      let top = window.scrollY;
      let offSet = sec.offsetTop - 100;
      let height = sec.offsetHeight;
      let id = sec.getAttribute('id');
      if (top >= offSet && top < offSet + height) {
        // active navlinks Link
        navLinks.forEach(links => {
          links.classList.remove('active');
          document.querySelector('header nav a[href*="' + id + '"]').classList.add('active');
        });
        //active sections for animation on scroll
        sec.classList.add('show-animate');
      }
      //if want to use animation that repeat on scroll use this
      else{
        sec.classList.remove('show-animate');
      }
    });
    // sticky header
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);
    // remove toggle icon and navbar when clicking navbar link (scroll)
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
    //animation footer on scroll
    let footer = document.querySelector('footer');
    footer.classList.toggle('show-animate', window.innerHeight + window.scrollY >= document.scrollingElement.scrollHeight);
  };

  function showPhoneNumber() {
    var phoneNumber = "+918340532799";
    alert("Phone Number: " + phoneNumber);
  }