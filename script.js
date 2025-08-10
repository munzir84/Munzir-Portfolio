// Navigation toggle
const navToggle = document.getElementById('nav-toggle');
const nav = document.getElementById('nav');
navToggle.addEventListener('click', () => {
  nav.classList.toggle('show');
  navToggle.classList.toggle('open');
});

// Close nav on link click (mobile)
document.querySelectorAll('#nav a').forEach(a=>{
  a.addEventListener('click', ()=>{
    nav.classList.remove('show');
    navToggle.classList.remove('open');
  });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// Basic client-side validation and friendly submit message
const form = document.getElementById('contact-form');
if(form){
  form.addEventListener('submit', (e)=>{
    // allow default submit to Formspree; show a quick toast instead
    const btn = form.querySelector('button[type="submit"]');
    btn.disabled = true;
    btn.textContent = 'Sending...';
    setTimeout(()=>{
      btn.disabled = false;
      btn.textContent = 'Send Message';
      alert('If you used Formspree, check your Formspree dashboard or email for the message. Replace the form action URL with your Formspree endpoint.');
    }, 1200);
  });
}
