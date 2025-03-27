// Skill Progress Bar Animation
document.addEventListener('DOMContentLoaded', function() {
  // Initialize skill progress bars with animation
  const skillBars = document.querySelectorAll('.skill-progress');
  skillBars.forEach(bar => {
    const width = bar.style.width;
    bar.style.width = '0';
    bar.style.setProperty('--width-value', width);
    
    // Add slight delay for each bar
    setTimeout(() => {
      bar.style.width = width;
    }, 100);
  });
  
  // Add scroll event for header
  window.addEventListener('scroll', function() {
    const header = document.querySelector('.masthead');
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
});
