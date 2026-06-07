// ============================================
// SHREE BALAJI CAR HELPLINE - MAIN JAVASCRIPT
// Premium Interactive Elements
// ============================================

document.addEventListener('DOMContentLoaded', function() {
  
  // ============================================
  // MOBILE MENU TOGGLE
  // ============================================
  const mobileToggle = document.querySelector('.mobile-toggle');
  const navLinks = document.querySelector('.nav-links');
  
  if (mobileToggle && navLinks) {
    mobileToggle.addEventListener('click', function() {
      navLinks.classList.toggle('mobile-active');
      mobileToggle.classList.toggle('active');
    });
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', function(e) {
      if (!e.target.closest('.nav-main')) {
        navLinks.classList.remove('mobile-active');
        mobileToggle.classList.remove('active');
      }
    });
  }
  
  // ============================================
  // FAQ ACCORDION
  // ============================================
  const faqQuestions = document.querySelectorAll('.faq-question');
  
  faqQuestions.forEach(question => {
    question.addEventListener('click', function() {
      const faqItem = this.closest('.faq-item');
      const wasActive = faqItem.classList.contains('active');
      
      // Close all FAQs
      document.querySelectorAll('.faq-item').forEach(item => {
        item.classList.remove('active');
      });
      
      // Toggle current FAQ
      if (!wasActive) {
        faqItem.classList.add('active');
      }
    });
  });
  
  // ============================================
  // SMOOTH SCROLL FOR ANCHOR LINKS
  // ============================================
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href !== '#' && href !== '') {
        const target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    });
  });
  
  // ============================================
  // HEADER SCROLL EFFECT
  // ============================================
  let lastScroll = 0;
  const header = document.querySelector('.header');
  
  if (header) {
    window.addEventListener('scroll', function() {
      const currentScroll = window.pageYOffset;
      
      if (currentScroll > 100) {
        header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.3)';
      } else {
        header.style.boxShadow = 'none';
      }
      
      lastScroll = currentScroll;
    });
  }
  
  // ============================================
  // PHONE NUMBER TRACKING (Analytics Ready)
  // ============================================
  const phoneLinks = document.querySelectorAll('a[href^="tel:"]');
  phoneLinks.forEach(link => {
    link.addEventListener('click', function() {
      // Ready for Google Analytics tracking
      console.log('Phone call initiated:', this.href);
      // gtag('event', 'phone_call', { 'number': this.href });
    });
  });
  
  // ============================================
  // WHATSAPP LINK TRACKING
  // ============================================
  const whatsappLinks = document.querySelectorAll('a[href^="https://wa.me"]');
  whatsappLinks.forEach(link => {
    link.addEventListener('click', function() {
      // Ready for Google Analytics tracking
      console.log('WhatsApp initiated:', this.href);
      // gtag('event', 'whatsapp_click', { 'number': this.href });
    });
  });
  
  // ============================================
  // LAZY LOADING IMAGES (if needed)
  // ============================================
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          if (img.dataset.src) {
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
          }
          imageObserver.unobserve(img);
        }
      });
    });
    
    document.querySelectorAll('img[data-src]').forEach(img => {
      imageObserver.observe(img);
    });
  }
  
  // ============================================
  // FORM VALIDATION (if contact forms added)
  // ============================================
  const forms = document.querySelectorAll('form');
  forms.forEach(form => {
    form.addEventListener('submit', function(e) {
      const requiredFields = form.querySelectorAll('[required]');
      let isValid = true;
      
      requiredFields.forEach(field => {
        if (!field.value.trim()) {
          isValid = false;
          field.style.borderColor = '#8b4513';
        } else {
          field.style.borderColor = '';
        }
      });
      
      if (!isValid) {
        e.preventDefault();
        alert('Please fill in all required fields');
      }
    });
  });
  
});

// ============================================
// WHATSAPP MESSAGE HELPER
// ============================================
function openWhatsApp(number, message) {
  const encodedMessage = encodeURIComponent(message);
  const url = `https://wa.me/${number}?text=${encodedMessage}`;
  window.open(url, '_blank');
}
