
  window.addEventListener('load', () => {
    // === AUTO-SCROLLING SLIDESHOW ===
    const track = document.getElementById('slidesTrack');
    const slides = document.querySelectorAll('.slide');

    if (track && slides.length > 0) {
      let currentSlide = 0;

      function showSlide(index) {
        const slideWidth = slides[0].offsetWidth;
        track.style.transform = `translateX(-${index * slideWidth}px)`;
      }

      function autoScrollSlides() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
      }

      showSlide(currentSlide); // Set initial position
      setInterval(autoScrollSlides, 3000); // Change every 3s
    }

    // === HIGHLIGHT ACTIVE NAV LINK BASED ON CURRENT PAGE ===
    const currentPage = window.location.pathname.split("/").pop() || "index.html";
    const navLinks = document.querySelectorAll("nav a");

    navLinks.forEach(link => {
      const linkHref = link.getAttribute("href");
      if (linkHref === currentPage) {
        link.classList.add("active");
      }
    });
  });

  // === STICKY HEADER ON SCROLL ===
  window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (!header) return; // ✅ Avoid error if header is missing

    if (window.scrollY > 50) {
      header.classList.add('sticky');
    } else {
      header.classList.remove('sticky');
    }
  });

