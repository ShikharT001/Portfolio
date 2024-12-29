// Toggle Light/Dark Mode
const toggleBtn = document.querySelector('.toggle-btn');
toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  document.body.classList.toggle('light-mode');
  toggleBtn.classList.toggle('btn-outline-dark');
  toggleBtn.classList.toggle('btn-outline-light');
});

// Initialize shapes with random positions
const shapes = document.querySelectorAll('.shape');
shapes.forEach(shape => {
  const randomX = Math.floor(Math.random() * window.innerWidth);
  const randomY = Math.floor(Math.random() * window.innerHeight);
  shape.style.top = `${randomY}px`;
  shape.style.left = `${randomX}px`;
});

// Moving Shapes Effect
document.addEventListener('mousemove', (e) => {
  shapes.forEach((shape, index) => {
    const speed = (index + 1) * 0.5;
    const x = (window.innerWidth - e.pageX * speed) / 100;
    const y = (window.innerHeight - e.pageY * speed) / 100;
    shape.style.transform = `translate(${x}px, ${y}px)`;
  });
});

// Show Contact Form Overlay
const contactButton = document.querySelector('.contact-button');
const contactOverlay = document.getElementById('contactOverlay');
const closeButton = document.querySelector('.close-button');

contactButton.addEventListener('click', () => {
  contactOverlay.style.display = 'flex';
});

// Hide Contact Form Overlay
closeButton.addEventListener('click', () => {
  contactOverlay.style.display = 'none';
});

// Show/Hide Skills Overlay with Arrow Button
const skillsArrow = document.querySelector('.skills-arrow');
const skillsOverlay = document.getElementById('skillsOverlay');
const skillsHoverText = document.getElementById('skillsHoverText');

skillsArrow.addEventListener('click', () => {
  skillsOverlay.classList.toggle('show');
});

// Update Hover Text on Skill Card Hover
const skillCards = document.querySelectorAll('.skill-card');
skillCards.forEach(card => {
  card.addEventListener('mouseenter', () => {
    const skillName = card.getAttribute('data-skill');
    skillsHoverText.textContent = skillName;
    skillsHoverText.style.display = 'block';
    skillsHoverText.style.opacity = '1';
  });

  card.addEventListener('mouseleave', () => {
    skillsHoverText.style.display = 'none';
    skillsHoverText.style.opacity = '0';
  });
});


// Sparkle backgorund 



const sparkleCount = 50; // Number of sparkles

for (let i = 0; i < sparkleCount; i++) {
  const sparkle = document.createElement('div');
  sparkle.classList.add('sparkle');

  // Random initial positions
  sparkle.style.left = `${Math.random() * 100}vw`;
  sparkle.style.top = `${Math.random() * 100}vh`;

  // Random animation duration and delay
  const duration = Math.random() * 5 + 2; // 2s to 7s
  const delay = Math.random() * 2; // 0s to 2s
  sparkle.style.animationDuration = `${duration}s`;
  sparkle.style.animationDelay = `${delay}s`;

  document.body.appendChild(sparkle);
}