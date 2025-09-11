
document.addEventListener("DOMContentLoaded", () => {
 
  const mobileNavToggleBtn = document.querySelector('.mobile-nav-toggle');

  function mobileNavToggle() {
    document.body.classList.toggle('mobile-nav-active');
    mobileNavToggleBtn.classList.toggle('bi-list');
    mobileNavToggleBtn.classList.toggle('bi-x');
  }

  if (mobileNavToggleBtn) {
    mobileNavToggleBtn.addEventListener('click', mobileNavToggle);
  }

  /**
   * Hide mobile nav on same-page/hash links
   */
  document.querySelectorAll('#navmenu a').forEach(link => {
    link.addEventListener('click', () => {
      if (document.body.classList.contains('mobile-nav-active')) {
        mobileNavToggle();
      }
    });
  });
});


document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contact-form");
  if (!form) return;
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    document.querySelector(".loading").style.display = "block";
    document.getElementById("thank-you-message").classList.add("d-none");
    document.getElementById("error-message").classList.add("d-none");
    document.getElementById("page-url").value = window.location.href;

    const formData = new FormData(form);

    fetch(form.action, {
      method: "POST",
      headers: { 'Accept': 'application/json' },
      body: formData
    }).then(response => {
      document.querySelector(".loading").style.display = "none";
      if (response.ok) {
        form.reset();
        const msg = document.getElementById("thank-you-message");
        msg.classList.remove("d-none");
        setTimeout(() => msg.classList.add("d-none"), 4000);
      } else {
        document.getElementById("error-message").classList.remove("d-none");
      }
    }).catch(() => {
      document.querySelector(".loading").style.display = "none";
      document.getElementById("error-message").classList.remove("d-none");
    });
  });
});

  /**
   * Preloader
   */
  const preloader = document.querySelector('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove();
    });
  }

  /**
   * Scroll top button
   */
  let scrollTop = document.querySelector('.scroll-top');

  function toggleScrollTop() {
    if (scrollTop) {
      window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
    }
  }
  scrollTop.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  window.addEventListener('load', toggleScrollTop);
  document.addEventListener('scroll', toggleScrollTop);

  
