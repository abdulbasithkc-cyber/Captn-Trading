/* CAPTN TRADING - Master Futuristic JavaScript */

document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initMouseGlow();
  initBackgroundParticles();
  initScrollReveals();
  initCardTilts();
  initContactModal();
});

/* ==========================================================================
   1. Floating Header & Mobile Menu Control
   ========================================================================== */
function initNavbar() {
  const header = document.querySelector('header');
  const hamburger = document.querySelector('.hamburger');
  const navMenu = document.querySelector('.nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');

  // Change navbar padding on scroll
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // Mobile menu toggle
  if (hamburger && navMenu) {
    hamburger.addEventListener('click', (e) => {
      e.stopPropagation();
      navMenu.classList.toggle('active');
      hamburger.classList.toggle('active');

      // Hamburger animation spans to 'X'
      const spans = hamburger.querySelectorAll('span');
      if (hamburger.classList.contains('active')) {
        spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
      } else {
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
      }
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      if (navMenu.classList.contains('active') && !navMenu.contains(e.target) && e.target !== hamburger) {
        closeMobileMenu();
      }
    });
  }

  // Active state links smooth scroll
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      
      const targetId = link.getAttribute('href');
      if (targetId.startsWith('#')) {
        const targetSection = document.querySelector(targetId);
        if (targetSection) {
          closeMobileMenu();
          
          const offsetTop = targetSection.offsetTop - 100;
          window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
          });
        }
      }
    });
  });

  function closeMobileMenu() {
    if (navMenu && navMenu.classList.contains('active')) {
      navMenu.classList.remove('active');
      hamburger.classList.remove('active');
      const spans = hamburger.querySelectorAll('span');
      spans[0].style.transform = 'none';
      spans[1].style.opacity = '1';
      spans[2].style.transform = 'none';
    }
  }

  // Active link scroll sync
  const sections = document.querySelectorAll('section[id]');
  window.addEventListener('scroll', () => {
    let scrollPos = window.scrollY + 200;
    
    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      const id = section.getAttribute('id');
      
      if (scrollPos >= top && scrollPos < top + height) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          }
        });
      }
    });
  });
}

/* ==========================================================================
   2. Interactive Mouse Glow Tracker
   ========================================================================== */
function initMouseGlow() {
  const glow = document.querySelector('.mouse-glow');
  if (!glow) return;

  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;
  let currentX = mouseX;
  let currentY = mouseY;

  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY + window.scrollY; // Align with full document scroll height
  });

  // Smooth lerp (interpolation) loop for organic movement
  function updateGlowPosition() {
    const dx = mouseX - currentX;
    const dy = mouseY - currentY;
    
    currentX += dx * 0.08;
    currentY += dy * 0.08;
    
    glow.style.left = `${currentX}px`;
    glow.style.top = `${currentY}px`;
    
    requestAnimationFrame(updateGlowPosition);
  }

  updateGlowPosition();
}

/* ==========================================================================
   3. Canvas Particle Animation
   ========================================================================== */
function initBackgroundParticles() {
  const canvas = document.getElementById('particles-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let width = (canvas.width = canvas.offsetWidth);
  let height = (canvas.height = canvas.offsetHeight);

  const particles = [];
  const particleCount = 45;

  // Particle Class
  class Particle {
    constructor() {
      this.reset();
    }

    reset() {
      this.x = Math.random() * width;
      this.y = Math.random() * height + height; // Spawn below screen view
      this.radius = Math.random() * 1.5 + 0.5;
      this.speedY = Math.random() * 0.4 + 0.1;
      this.opacity = Math.random() * 0.3 + 0.08;
      this.fadeSpeed = Math.random() * 0.002 + 0.0005;
    }

    update() {
      this.y -= this.speedY;
      
      // Wrap around when top border is reached
      if (this.y < 0) {
        this.reset();
        this.y = height;
      }
    }

    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
      ctx.shadowBlur = 5;
      ctx.shadowColor = 'rgba(255, 255, 255, 0.2)';
      ctx.fill();
    }
  }

  // Populate particles
  for (let i = 0; i < particleCount; i++) {
    const p = new Particle();
    p.y = Math.random() * height; // Distribute initially across screen
    particles.push(p);
  }

  // Handle Resize
  window.addEventListener('resize', () => {
    width = canvas.width = canvas.offsetWidth;
    height = canvas.height = canvas.offsetHeight;
  });

  // Loop
  function animate() {
    ctx.clearRect(0, 0, width, height);
    
    // Draw grid background directly on canvas to save compositing steps
    ctx.shadowBlur = 0; // Reset shadow for efficiency
    
    particles.forEach(p => {
      p.update();
      p.draw();
    });
    
    requestAnimationFrame(animate);
  }

  animate();
}

/* ==========================================================================
   4. Scroll Reveal Animations (Intersection Observer)
   ========================================================================== */
function initScrollReveals() {
  const animatedElements = document.querySelectorAll('.fade-in-trigger');
  
  if ('IntersectionObserver' in window) {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    animatedElements.forEach(el => observer.observe(el));
  } else {
    // Fallback
    animatedElements.forEach(el => el.classList.add('active'));
  }
}

/* ==========================================================================
   5. Magnetic Card Tilt Animations
   ========================================================================== */
function initCardTilts() {
  const cards = document.querySelectorAll('.cat-card, .why-card');
  
  cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left; // x coordinate inside element
      const y = e.clientY - rect.top;  // y coordinate inside element
      
      const width = rect.width;
      const height = rect.height;
      
      // Calculate rotation angles (-6 to +6 degrees)
      const rotateX = ((y / height) - 0.5) * -12;
      const rotateY = ((x / width) - 0.5) * 12;
      
      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-5px)`;
      
      // Set variables directly on the card to drive CSS custom properties (no querySelector error)
      card.style.setProperty('--x', `${x}px`);
      card.style.setProperty('--y', `${y}px`);
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0)';
    });
  });
}

/* ==========================================================================
   6. Contact Modal Overlay Control
   ========================================================================== */
function initContactModal() {
  const touchBtns = document.querySelectorAll('.btn-touch, .btn-contact-trigger');
  const modal = document.getElementById('contact-modal');
  if (!modal) return;

  const closeBtn = modal.querySelector('.modal-close-btn');
  const modalForm = document.getElementById('modal-contact-form');
  const formFields = modal.querySelector('.modal-form-fields');
  const successCard = modal.querySelector('.modal-success-card');
  const submitBtn = modal.querySelector('button[type="submit"]');

  // Open modal
  touchBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      modal.classList.add('active');
      document.body.style.overflow = 'hidden'; // Lock scrolling
    });
  });

  // Close modal
  const closeModal = () => {
    modal.classList.remove('active');
    document.body.style.overflow = 'auto'; // Restore scroll
    
    // Reset success cards if they submitted
    setTimeout(() => {
      if (formFields && successCard) {
        formFields.style.display = 'block';
        successCard.style.display = 'none';
      }
    }, 400);
  };

  if (closeBtn) {
    closeBtn.addEventListener('click', closeModal);
  }

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });

  // Esc key close
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeModal();
    }
  });

  // Form submission
  if (modalForm) {
    modalForm.addEventListener('submit', (e) => {
      e.preventDefault();

      // Check validation
      let isValid = true;
      const inputs = modalForm.querySelectorAll('[required]');
      
      inputs.forEach(input => {
        if (!input.value.trim()) {
          isValid = false;
          input.style.borderColor = 'rgba(239, 68, 68, 0.4)'; // Red border on error
        } else {
          input.style.borderColor = 'rgba(255, 255, 255, 0.06)';
        }
      });

      if (!isValid) return;

      const originalBtnText = submitBtn.innerHTML;
      submitBtn.disabled = true;
      submitBtn.innerHTML = 'Connecting with network...';

      // Simulation
      setTimeout(() => {
        modalForm.reset();
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalBtnText;
        
        if (formFields && successCard) {
          formFields.style.display = 'none';
          successCard.style.display = 'flex';
        }
      }, 1500);
    });
  }
}


