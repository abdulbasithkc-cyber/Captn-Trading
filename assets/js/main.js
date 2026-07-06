/* CAPTN TRADING - Futuristic Tech OS Interactivity Script */

document.addEventListener('DOMContentLoaded', () => {
  initBootLoader();
  initNavbar();
  initMouseGlow();
  initMatrixRain();
  initScrollAnimations();
  initStatsCounter();
  initTestimonials();
  initProductFilter();
  initGalleryLightbox();
  initFaqAccordion();
  initQuoteWizard();
  initContactForm();
  initBackToTop();
});

/* ==========================================================================
   1. Futuristic Boot Sequence Loader
   ========================================================================== */
function initBootLoader() {
  const loader = document.getElementById('boot-loader');
  const bootLog = document.getElementById('boot-log');
  const progressBar = document.querySelector('.boot-progress-bar');
  
  if (!loader || !bootLog) return;

  // Disable scrolling during boot
  document.body.style.overflow = 'hidden';

  const logLines = [
    { text: "CAPTN TRADE OS v2.0.4 - INITIATING BOOT SEQUENCE...", type: "system" },
    { text: "CHECKING LOCAL HARDWARE CORRIDORS... OK", type: "success" },
    { text: "CONNECTING KHALIFA PORT TELEMETRY API... PORT ACTIVE", type: "success" },
    { text: "LOADING AUTONOMOUS GENERAL TRADING KERNELS... LOADED", type: "success" },
    { text: "ESTABLISHING NEURAL SOURCE-LINK CHAINS... OK", type: "success" },
    { text: "MAPPING GCC ROAD AND CAUSEWAY LAND CHANNELS... CONNECTED", type: "success" },
    { text: "VERIFYING ENCRYPTED SMART CONTRACTS SECURITY... SECURE", type: "success" },
    { text: "CALIBRATING HUD OS DESIGN INTERFACE... 100%", type: "success" },
    { text: "SECURE LOGISTICS CONNECTION STABLISHED.", type: "warning" },
    { text: "BOOT COMPLETED. WELCOME TO CAPTN OS.", type: "system" }
  ];

  let lineIndex = 0;
  let progress = 0;

  // Add log lines sequentially
  const addLine = () => {
    if (lineIndex < logLines.length) {
      const lineData = logLines[lineIndex];
      const lineDiv = document.createElement('div');
      lineDiv.className = 'boot-line';
      if (lineData.type === 'success') lineDiv.classList.add('success');
      if (lineData.type === 'warning') lineDiv.classList.add('warning');
      lineDiv.textContent = `> ${lineData.text}`;
      bootLog.appendChild(lineDiv);
      
      // Auto scroll terminal to bottom
      bootLog.parentElement.scrollTop = bootLog.parentElement.scrollHeight;

      lineIndex++;
      
      // Dynamic delay for realism
      const nextDelay = Math.random() * 200 + 100; 
      setTimeout(addLine, nextDelay);
    }
  };

  // Progress bar animation loop
  const updateProgress = () => {
    if (progress < 100) {
      progress += Math.floor(Math.random() * 8) + 2;
      if (progress > 100) progress = 100;
      if (progressBar) progressBar.style.width = `${progress}%`;
      
      setTimeout(updateProgress, 60);
    } else {
      // Fade out boot loader
      setTimeout(() => {
        loader.style.transition = 'opacity 0.6s ease, visibility 0.6s ease';
        loader.style.opacity = '0';
        loader.style.visibility = 'hidden';
        document.body.style.overflow = 'auto'; // Re-enable scroll
      }, 500);
    }
  };

  // Begin sequence
  setTimeout(addLine, 200);
  setTimeout(updateProgress, 100);
}

/* ==========================================================================
   2. Sticky Header & Menu Toggles
   ========================================================================== */
function initNavbar() {
  const header = document.querySelector('header');
  const hamburger = document.querySelector('.hamburger');
  const navMenu = document.querySelector('.nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');

  // Change style on scroll
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // Toggle mobile menu drawer
  if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
      navMenu.classList.toggle('active');
      hamburger.classList.toggle('active');
      
      // Animate hamburger to X
      const spans = hamburger.querySelectorAll('span');
      if (hamburger.classList.contains('active')) {
        spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg) translate(7px, -8px)';
      } else {
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
      }
    });
  }

  // Close mobile menu on link click
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (navMenu && navMenu.classList.contains('active')) {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
        const spans = hamburger.querySelectorAll('span');
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
      }
    });
  });
}

/* ==========================================================================
   3. Mouse-Following Glow Effect
   ========================================================================== */
function initMouseGlow() {
  const glowOverlay = document.querySelector('.mouse-glow');
  if (!glowOverlay) return;

  window.addEventListener('mousemove', (e) => {
    const x = e.clientX;
    const y = e.clientY;
    
    // Set custom CSS coordinates properties on document body
    document.documentElement.style.setProperty('--mouse-x', `${x}px`);
    document.documentElement.style.setProperty('--mouse-y', `${y}px`);
  });
}

/* ==========================================================================
   4. Canvas-Based Matrix Digital Rain
   ========================================================================== */
function initMatrixRain() {
  const canvas = document.getElementById('matrix-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  
  // Set dimensions
  const resizeCanvas = () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  };
  resizeCanvas();
  window.addEventListener('resize', resizeCanvas);

  // Digital characters (numbers and hexadecimal code)
  const chars = "0123456789ABCDEF<>[]{}//--++%%**";
  const charArray = chars.split("");

  const fontSize = 14;
  const columns = canvas.width / fontSize;
  const drops = Array(Math.floor(columns)).fill(1);

  // Drawing animation loop
  const draw = () => {
    // Subtle trailing clear
    ctx.fillStyle = 'rgba(3, 3, 3, 0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Set neon text properties
    ctx.fillStyle = 'rgba(0, 242, 254, 0.15)'; // Cyan color
    ctx.font = `${fontSize}px 'Fira Code'`;

    for (let i = 0; i < drops.length; i++) {
      // Pick random char
      const char = charArray[Math.floor(Math.random() * charArray.length)];
      
      // Draw char
      const x = i * fontSize;
      const y = drops[i] * fontSize;
      ctx.fillText(char, x, y);

      // Sending drop back to top randomly after crossing screen boundary
      if (y > canvas.height && Math.random() > 0.975) {
        drops[i] = 0;
      }
      drops[i]++;
    }
  };

  setInterval(draw, 33); // ~30 FPS
}

/* ==========================================================================
   5. Scroll Trigger Animations (Intersection Observer)
   ========================================================================== */
function initScrollAnimations() {
  const animatedElements = document.querySelectorAll('.animate-on-scroll');
  
  if ('IntersectionObserver' in window) {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.12
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    animatedElements.forEach(el => observer.observe(el));
  } else {
    animatedElements.forEach(el => el.classList.add('animate-fade-in'));
  }
}

/* ==========================================================================
   6. Dynamic Stats Counter
   ========================================================================== */
function initStatsCounter() {
  const statNumbers = document.querySelectorAll('.stat-number');
  
  if (statNumbers.length === 0) return;

  const countUp = (el) => {
    const target = parseInt(el.getAttribute('data-target'), 10);
    const duration = 2000;
    
    if (isNaN(target) || target <= 0) return;

    let current = 0;
    const increment = Math.ceil(target / 50);

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        el.querySelector('span:first-child').textContent = target;
        clearInterval(timer);
      } else {
        el.querySelector('span:first-child').textContent = current;
      }
    }, 35);
  };

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          countUp(entry.target);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    statNumbers.forEach(num => observer.observe(num));
  } else {
    statNumbers.forEach(num => countUp(num));
  }
}

/* ==========================================================================
   7. Testimonials Slider
   ========================================================================== */
function initTestimonials() {
  const slides = document.querySelectorAll('.testimonial-slide');
  const prevBtn = document.querySelector('.control-btn.prev');
  const nextBtn = document.querySelector('.control-btn.next');
  
  if (slides.length === 0) return;

  let currentSlide = 0;
  let slideInterval;

  const showSlide = (n) => {
    slides.forEach(slide => slide.classList.remove('active'));
    currentSlide = (n + slides.length) % slides.length;
    slides[currentSlide].classList.add('active');
  };

  const nextSlide = () => {
    showSlide(currentSlide + 1);
  };

  const prevSlide = () => {
    showSlide(currentSlide - 1);
  };

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      nextSlide();
      resetInterval();
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      prevSlide();
      resetInterval();
    });
  }

  const startInterval = () => {
    slideInterval = setInterval(nextSlide, 7000);
  };

  const resetInterval = () => {
    clearInterval(slideInterval);
    startInterval();
  };

  startInterval();
}

/* ==========================================================================
   8. Product Catalog Tab Filters
   ========================================================================== */
function initProductFilter() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const productCards = document.querySelectorAll('.product-card');

  if (filterBtns.length === 0 || productCards.length === 0) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      productCards.forEach(card => {
        const category = card.getAttribute('data-category');
        
        if (filterValue === 'all' || category === filterValue) {
          card.style.display = 'flex';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0) scale(1)';
          }, 50);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(15px) scale(0.95)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 300);
        }
      });
    });
  });
}

/* ==========================================================================
   9. Gallery Filter & Lightbox Viewer
   ========================================================================== */
function initGalleryLightbox() {
  const galleryItems = document.querySelectorAll('.gallery-item');
  const filterBtns = document.querySelectorAll('.gallery-filter-btn');

  // 1. Gallery Filtering
  if (filterBtns.length > 0 && galleryItems.length > 0) {
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filterValue = btn.getAttribute('data-filter');

        galleryItems.forEach(item => {
          const category = item.getAttribute('data-category');
          
          if (filterValue === 'all' || category === filterValue) {
            item.style.display = 'block';
            setTimeout(() => {
              item.style.opacity = '1';
              item.style.transform = 'scale(1)';
            }, 50);
          } else {
            item.style.opacity = '0';
            item.style.transform = 'scale(0.9)';
            setTimeout(() => {
              item.style.display = 'none';
            }, 300);
          }
        });
      });
    });
  }

  // 2. Lightbox functionality
  const lightbox = document.getElementById('lightbox');
  if (!lightbox) return;

  const lightboxImg = lightbox.querySelector('img');
  const lightboxCaption = lightbox.querySelector('.lightbox-caption');
  const lightboxClose = lightbox.querySelector('.lightbox-close');

  galleryItems.forEach(item => {
    item.addEventListener('click', () => {
      const img = item.querySelector('img');
      const title = item.querySelector('h3').textContent;
      const category = item.getAttribute('data-category').toUpperCase();

      if (img && lightboxImg) {
        lightboxImg.src = img.src;
        if (lightboxCaption) {
          lightboxCaption.textContent = `${title} [${category}_MODULE_LOG]`;
        }
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
      }
    });
  });

  if (lightboxClose) {
    lightboxClose.addEventListener('click', closeLightbox);
  }

  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
      closeLightbox();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && lightbox.classList.contains('active')) {
      closeLightbox();
    }
  });

  function closeLightbox() {
    lightbox.classList.remove('active');
    document.body.style.overflow = 'auto';
  }
}

/* ==========================================================================
   10. FAQ Accordions
   ========================================================================== */
function initFaqAccordion() {
  const faqItems = document.querySelectorAll('.faq-item');
  
  if (faqItems.length === 0) return;

  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');

    question.addEventListener('click', () => {
      const isActive = item.classList.contains('active');
      
      // Close other open tabs
      faqItems.forEach(i => {
        i.classList.remove('active');
        i.querySelector('.faq-answer').style.maxHeight = '0px';
      });

      if (!isActive) {
        item.classList.add('active');
        answer.style.maxHeight = `${answer.scrollHeight}px`;
      }
    });
  });
}

/* ==========================================================================
   11. Lead Forms validations
   ========================================================================== */
function initContactForm() {
  const contactForm = document.getElementById('contact-form');
  const formSuccess = document.getElementById('contact-success');
  
  if (!contactForm) return;

  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    let isValid = true;
    const inputs = contactForm.querySelectorAll('[required]');
    
    inputs.forEach(input => {
      if (!input.value.trim()) {
        isValid = false;
        input.style.borderColor = 'rgba(242, 27, 127, 0.4)'; // Pink glow warning
      } else {
        input.style.borderColor = 'rgba(255, 255, 255, 0.06)';
      }
    });

    if (!isValid) return;

    const submitBtn = contactForm.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;
    
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Processing Request...';

    setTimeout(() => {
      contactForm.reset();
      contactForm.style.display = 'none';
      if (formSuccess) {
        formSuccess.style.display = 'block';
      }
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalText;
    }, 1500);
  });
}

/* ==========================================================================
   12. Multi-Step Quote Wizard
   ========================================================================== */
function initQuoteWizard() {
  const wizardForm = document.getElementById('quote-wizard-form');
  if (!wizardForm) return;

  const steps = wizardForm.querySelectorAll('.wizard-step');
  const progressItems = document.querySelectorAll('.progress-step-item');
  const progressLineFill = document.querySelector('.progress-line-fill');
  const prevBtn = document.getElementById('prev-step');
  const nextBtn = document.getElementById('next-step');
  const categoryCards = document.querySelectorAll('.category-select-card');
  const selectedCategoryInput = document.getElementById('selected-category');
  
  let currentStepIndex = 0;

  // Category select cards
  categoryCards.forEach(card => {
    card.addEventListener('click', () => {
      categoryCards.forEach(c => c.classList.remove('selected'));
      card.classList.add('selected');
      const val = card.getAttribute('data-value');
      if (selectedCategoryInput) {
        selectedCategoryInput.value = val;
      }
    });
  });

  const updateWizardUI = () => {
    steps.forEach((step, idx) => {
      if (idx === currentStepIndex) {
        step.classList.add('active');
      } else {
        step.classList.remove('active');
      }
    });

    progressItems.forEach((item, idx) => {
      if (idx < currentStepIndex) {
        item.classList.add('completed');
        item.classList.remove('active');
      } else if (idx === currentStepIndex) {
        item.classList.add('active');
        item.classList.remove('completed');
      } else {
        item.classList.remove('active', 'completed');
      }
    });

    const percentage = (currentStepIndex / (progressItems.length - 1)) * 100;
    if (progressLineFill) {
      progressLineFill.style.width = `${percentage}%`;
    }

    if (currentStepIndex === 0) {
      prevBtn.style.display = 'none';
    } else {
      prevBtn.style.display = 'inline-flex';
    }

    if (currentStepIndex === steps.length - 1) {
      nextBtn.innerHTML = 'Complete OS Request <i class="fas fa-check"></i>';
    } else {
      nextBtn.innerHTML = 'Continue Parameters <i class="fas fa-arrow-right"></i>';
    }
  };

  const validateStep = (stepIdx) => {
    if (stepIdx === 0) {
      if (selectedCategoryInput && !selectedCategoryInput.value) {
        alert('Please choose a service module to proceed.');
        return false;
      }
      return true;
    }
    
    if (stepIdx === 1) {
      const productName = document.getElementById('product-name');
      const quantity = document.getElementById('quantity');
      
      let stepValid = true;
      if (productName && !productName.value.trim()) {
        productName.style.borderColor = 'rgba(242, 27, 127, 0.4)';
        stepValid = false;
      } else if (productName) {
        productName.style.borderColor = 'rgba(255, 255, 255, 0.06)';
      }
      
      if (quantity && !quantity.value.trim()) {
        quantity.style.borderColor = 'rgba(242, 27, 127, 0.4)';
        stepValid = false;
      } else if (quantity) {
        quantity.style.borderColor = 'rgba(255, 255, 255, 0.06)';
      }
      
      return stepValid;
    }

    if (stepIdx === 2) {
      const name = document.getElementById('client-name');
      const email = document.getElementById('client-email');
      const phone = document.getElementById('client-phone');
      
      let stepValid = true;
      [name, email, phone].forEach(el => {
        if (el && !el.value.trim()) {
          el.style.borderColor = 'rgba(242, 27, 127, 0.4)';
          stepValid = false;
        } else if (el) {
          el.style.borderColor = 'rgba(255, 255, 255, 0.06)';
        }
      });
      return stepValid;
    }
    
    return true;
  };

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      if (!validateStep(currentStepIndex)) return;

      if (currentStepIndex < steps.length - 1) {
        currentStepIndex++;
        updateWizardUI();
        window.scrollTo({ top: 300, behavior: 'smooth' });
      } else {
        const wizardSuccess = document.getElementById('wizard-success');
        nextBtn.disabled = true;
        nextBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Compiling logs...';

        setTimeout(() => {
          wizardForm.reset();
          wizardForm.style.display = 'none';
          document.querySelector('.quote-progress').style.display = 'none';
          if (wizardSuccess) {
            wizardSuccess.style.display = 'block';
          }
          window.scrollTo({ top: 300, behavior: 'smooth' });
        }, 1500);
      }
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      if (currentStepIndex > 0) {
        currentStepIndex--;
        updateWizardUI();
        window.scrollTo({ top: 300, behavior: 'smooth' });
      }
    });
  }

  // Pre-fill selection from URL query parameters
  const urlParams = new URLSearchParams(window.location.search);
  const categoryParam = urlParams.get('category');
  if (categoryParam) {
    const matchingCard = document.querySelector(`.category-select-card[data-value="${categoryParam}"]`);
    if (matchingCard) {
      matchingCard.click();
    }
  }

  updateWizardUI();
}

/* ==========================================================================
   13. Scroll Back-to-Top HUD Badge
   ========================================================================== */
function initBackToTop() {
  const backToTopBtn = document.querySelector('.back-to-top');
  if (!backToTopBtn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      backToTopBtn.classList.add('active');
    } else {
      backToTopBtn.classList.remove('active');
    }
  });

  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}
