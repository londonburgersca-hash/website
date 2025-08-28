document.addEventListener("DOMContentLoaded", function () {
  // Select all sections that should animate on scroll
  const animatedSections = document.querySelectorAll(
    ".menu-category, .order-online, .contact, .info"
  );

  // Function to reveal sections when they enter the viewport
  function revealOnScroll() {
    const windowHeight = window.innerHeight;
    animatedSections.forEach((el) => {
      const elementTop = el.getBoundingClientRect().top;
      // If the element is within 60px of the viewport bottom, add the 'in-view' class
      if (elementTop < windowHeight - 60) {
        el.classList.add("in-view");
      }
    });
  }

  // Listen for scroll events and run the reveal function
  window.addEventListener("scroll", revealOnScroll);

  // Run once on page load in case some sections are already in view
  revealOnScroll();

  // Reveal Uber Eats button on scroll (if not already handled by section logic)
  const uberBtn = document.querySelector('.order-btn.uber-eats');
  if (uberBtn) {
    function revealUberBtn() {
      const rect = uberBtn.getBoundingClientRect();
      if (rect.top < window.innerHeight - 50) {
        uberBtn.classList.add('in-view');
        window.removeEventListener('scroll', revealUberBtn);
      }
    }
    window.addEventListener('scroll', revealUberBtn);
    revealUberBtn();
  }

  // Reveal all order buttons on scroll (if not already handled by section logic)
  const orderSection = document.getElementById('order-online');
  if (orderSection) {
    function revealOrderSection() {
      const rect = orderSection.getBoundingClientRect();
      if (rect.top < window.innerHeight - 50) {
        orderSection.classList.add('in-view');
        window.removeEventListener('scroll', revealOrderSection);
      }
    }
    window.addEventListener('scroll', revealOrderSection);
    revealOrderSection();
  }

  // Scroll-in animation for sections and SVG icons
  function revealOnScrollIcons() {
    const elements = document.querySelectorAll('.in-view, .order-online a.order-btn');
    const windowHeight = window.innerHeight;
    elements.forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top < windowHeight - 50) {
        el.classList.add('in-view');
      }
    });
  }
  window.addEventListener('scroll', revealOnScrollIcons);
  revealOnScrollIcons();

  // Dynamic smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href').slice(1);
      const target = document.getElementById(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // Show delivery charges modal on "Call to Order" click in Order Online section
  const orderOnlineSection = document.getElementById('order-online');
  if (orderOnlineSection) {
    const callBtn = orderOnlineSection.querySelector('a.order-btn.call');
    if (callBtn) {
      callBtn.addEventListener('click', function(e) {
        e.preventDefault();
        document.getElementById('delivery-modal').style.display = 'flex';
      });
    }
  }
  const modalOkBtn = document.getElementById('modal-ok-btn');
  if (modalOkBtn) {
    modalOkBtn.onclick = function() {
      document.getElementById('delivery-modal').style.display = 'none';
    };
  }
});