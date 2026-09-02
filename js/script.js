/**
 * WHIZZ MOULDS - INDUSTRIAL WEBSITE SCRIPT
 * Handles mobile menu toggle, lightbox modal, enquiry form feedback & active nav state.
 */

document.addEventListener('DOMContentLoaded', () => {
  initMobileNavigation();
  initActivePageLinks();
  initLightboxModal();
  initEnquiryForm();
});

/**
 * Mobile Navigation Menu Toggle
 */
function initMobileNavigation() {
  const menuBtn = document.getElementById('mobile-menu-btn');
  const navLinks = document.getElementById('nav-links');

  if (menuBtn && navLinks) {
    menuBtn.addEventListener('click', () => {
      const isExpanded = navLinks.classList.toggle('active');
      menuBtn.setAttribute('aria-expanded', isExpanded ? 'true' : 'false');
      menuBtn.innerHTML = isExpanded ? '✕ CLOSE' : '☰ MENU';
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      if (!menuBtn.contains(e.target) && !navLinks.contains(e.target)) {
        navLinks.classList.remove('active');
        menuBtn.setAttribute('aria-expanded', 'false');
        menuBtn.innerHTML = '☰ MENU';
      }
    });
  }
}

/**
 * Highlight active link in header based on current URL path
 */
function initActivePageLinks() {
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  const navAnchors = document.querySelectorAll('.nav-links a');

  navAnchors.forEach((anchor) => {
    const href = anchor.getAttribute('href');
    if (href === currentPath || (currentPath === '' && href === 'index.html')) {
      anchor.classList.add('active');
      anchor.setAttribute('aria-current', 'page');
    } else {
      anchor.classList.remove('active');
      anchor.removeAttribute('aria-current');
    }
  });
}

/**
 * Lightbox Modal for Gallery Page
 */
function initLightboxModal() {
  const galleryItems = document.querySelectorAll('.gallery-item');
  const modal = document.getElementById('lightbox-modal');
  const modalImg = document.getElementById('lightbox-img');
  const modalCaption = document.getElementById('lightbox-caption');
  const closeBtn = document.getElementById('lightbox-close');

  if (modal && galleryItems.length > 0) {
    galleryItems.forEach((item) => {
      item.addEventListener('click', () => {
        const img = item.querySelector('img');
        const caption = item.querySelector('.gallery-caption');
        
        if (img && modalImg) {
          modalImg.src = img.src;
          modalImg.alt = img.alt || 'Whizz Moulds Facility Photo';
        }
        
        if (caption && modalCaption) {
          modalCaption.textContent = caption.textContent;
        }

        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
      });
    });

    const closeModal = () => {
      modal.classList.remove('active');
      document.body.style.overflow = '';
    };

    if (closeBtn) closeBtn.addEventListener('click', closeModal);

    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeModal();
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && modal.classList.contains('active')) {
        closeModal();
      }
    });
  }
}

/**
 * Contact Enquiry Form Submission Confirmation
 */
function initEnquiryForm() {
  const enquiryForm = document.getElementById('enquiry-form');
  const successMsg = document.getElementById('form-success-msg');

  if (enquiryForm) {
    enquiryForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      // Client-side confirmation feedback
      if (successMsg) {
        successMsg.style.display = 'block';
        successMsg.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }

      enquiryForm.reset();
    });
  }
}
