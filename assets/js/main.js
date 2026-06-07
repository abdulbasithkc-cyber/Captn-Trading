/* CAPTN TRADING - Master Interactivity Script */

document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initScrollAnimations();
  initStatsCounter();
  initTestimonials();
  initProductFilter();
  initGalleryLightbox();
  initContactForm();
  initQuoteWizard();
  initBackToTop();
});

/* ==========================================================================
   1. Navbar & Mobile Menu Control
   ========================================================================== */
function initNavbar() {
  const header = document.querySelector('header');
  const hamburger = document.querySelector('.hamburger');
  const navMenu = document.querySelector('.nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');

  // Change style on scroll
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // Toggle mobile menu
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

  // Close mobile menu when a link is clicked
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
   2. Scroll Animations (Intersection Observer)
   ========================================================================== */
function initScrollAnimations() {
  const animatedElements = document.querySelectorAll('.animate-on-scroll');
  
  if ('IntersectionObserver' in window) {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.15
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
          observer.unobserve(entry.target); // Trigger only once
        }
      });
    }, observerOptions);

    animatedElements.forEach(el => observer.observe(el));
  } else {
    // Fallback for older browsers
    animatedElements.forEach(el => el.classList.add('animate-fade-in'));
  }
}

/* ==========================================================================
   3. Dynamic Stats Counter
   ========================================================================== */
function initStatsCounter() {
  const statNumbers = document.querySelectorAll('.stat-number');
  
  if (statNumbers.length === 0) return;

  const countUp = (el) => {
    const target = parseInt(el.getAttribute('data-target'), 10);
    const duration = 2000; // 2 seconds
    const stepTime = Math.abs(Math.floor(duration / target));
    let current = 0;
    
    // Safety check to avoid division by zero or infinite loop
    if (isNaN(target) || target <= 0) return;

    const timer = setInterval(() => {
      current += Math.ceil(target / 50); // Increment speed
      if (current >= target) {
        el.querySelector('span:first-child').textContent = target;
        clearInterval(timer);
      } else {
        el.querySelector('span:first-child').textContent = current;
      }
    }, 30);
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
    // Fallback
    statNumbers.forEach(num => countUp(num));
  }
}

/* ==========================================================================
   4. Testimonials Slider
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

  // Event Listeners
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

  // Auto Rotation
  const startInterval = () => {
    slideInterval = setInterval(nextSlide, 6000); // Rotate every 6s
  };

  const resetInterval = () => {
    clearInterval(slideInterval);
    startInterval();
  };

  startInterval();
}

/* ==========================================================================
   5. Products Catalog Filtering
   ========================================================================== */
function initProductFilter() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const productCards = document.querySelectorAll('.product-card');

  if (filterBtns.length === 0 || productCards.length === 0) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Set active button
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      // Filter product cards
      productCards.forEach(card => {
        const category = card.getAttribute('data-category');
        
        if (filterValue === 'all' || category === filterValue) {
          card.style.display = 'flex';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 50);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(20px)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 300);
        }
      });
    });
  });
}

/* ==========================================================================
   6. Gallery Filter & Lightbox Viewer
   ========================================================================== */
function initGalleryLightbox() {
  const galleryItems = document.querySelectorAll('.gallery-item');
  const filterBtns = document.querySelectorAll('.gallery-filter-btn');

  // 1. Gallery Filtering (if filters exist)
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
            item.style.transform = 'scale(0.8)';
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
          lightboxCaption.textContent = `${title} (${category})`;
        }
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden'; // Disable scroll
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

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && lightbox.classList.contains('active')) {
      closeLightbox();
    }
  });

  function closeLightbox() {
    lightbox.classList.remove('active');
    document.body.style.overflow = 'auto'; // Re-enable scroll
  }
}

/* ==========================================================================
   7. Contact Form Handling
   ========================================================================== */
function initContactForm() {
  const contactForm = document.getElementById('contact-form');
  const formSuccess = document.getElementById('contact-success');
  
  if (!contactForm) return;

  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Client-side validation
    let isValid = true;
    const inputs = contactForm.querySelectorAll('[required]');
    
    inputs.forEach(input => {
      if (!input.value.trim()) {
        isValid = false;
        input.style.borderColor = 'var(--color-primary-light)';
      } else {
        input.style.borderColor = 'var(--color-border)';
      }
    });

    if (!isValid) return;

    // Simulate submission
    const submitBtn = contactForm.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;
    
    submitBtn.disabled = true;
    submitBtn.innerHTML = 'Sending Inquiries...';

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
   8. Multi-Step Quote Request Wizard
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

  // Step 1: Handle Category Card Selection
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
    // Show/Hide steps
    steps.forEach((step, idx) => {
      if (idx === currentStepIndex) {
        step.classList.add('active');
      } else {
        step.classList.remove('active');
      }
    });

    // Update progress steps active/completed styles
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

    // Update progress indicator bar width
    const percentage = (currentStepIndex / (progressItems.length - 1)) * 100;
    if (progressLineFill) {
      progressLineFill.style.width = `${percentage}%`;
    }

    // Toggle nav buttons
    if (currentStepIndex === 0) {
      prevBtn.style.display = 'none';
    } else {
      prevBtn.style.display = 'inline-flex';
    }

    if (currentStepIndex === steps.length - 1) {
      nextBtn.innerHTML = 'Submit Quote Request <i class="fas fa-check"></i>';
    } else {
      nextBtn.innerHTML = 'Continue Step <i class="fas fa-arrow-right"></i>';
    }
  };

  const validateStep = (stepIdx) => {
    if (stepIdx === 0) {
      // Category selected?
      if (selectedCategoryInput && !selectedCategoryInput.value) {
        alert('Please choose a product category to proceed.');
        return false;
      }
      return true;
    }
    
    if (stepIdx === 1) {
      // Product Spec fields
      const productName = document.getElementById('product-name');
      const quantity = document.getElementById('quantity');
      
      let stepValid = true;
      if (productName && !productName.value.trim()) {
        productName.style.borderColor = 'var(--color-primary-light)';
        stepValid = false;
      } else if (productName) {
        productName.style.borderColor = 'var(--color-border)';
      }
      
      if (quantity && !quantity.value.trim()) {
        quantity.style.borderColor = 'var(--color-primary-light)';
        stepValid = false;
      } else if (quantity) {
        quantity.style.borderColor = 'var(--color-border)';
      }
      
      return stepValid;
    }

    if (stepIdx === 2) {
      // Contact Info
      const name = document.getElementById('client-name');
      const email = document.getElementById('client-email');
      const phone = document.getElementById('client-phone');
      
      let stepValid = true;
      [name, email, phone].forEach(el => {
        if (el && !el.value.trim()) {
          el.style.borderColor = 'var(--color-primary-light)';
          stepValid = false;
        } else if (el) {
          el.style.borderColor = 'var(--color-border)';
        }
      });
      return stepValid;
    }
    
    return true;
  };

  // Nav buttons click handlers
  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      // Validate current step
      if (!validateStep(currentStepIndex)) return;

      if (currentStepIndex < steps.length - 1) {
        currentStepIndex++;
        updateWizardUI();
        window.scrollTo({ top: 300, behavior: 'smooth' });
      } else {
        // Submit Form
        const wizardSuccess = document.getElementById('wizard-success');
        const nextBtnText = nextBtn.innerHTML;
        nextBtn.disabled = true;
        nextBtn.innerHTML = 'Processing request...';

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

  // Pre-fill selection if coming from product card enquiry button
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
   9. Scroll Back-to-Top Button
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
