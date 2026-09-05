const container = document.getElementById('particles-container');

const particleCount = 100;

const colors = ['#ffffff', '#ffdddd', '#ddffdd', '#ddddff'];

for (let i = 0; i < particleCount; i++) {
  const particle = document.createElement('div');
  
  particle.className = 'particle';
  
  const posX = Math.random() * 100;
  const posY = Math.random() * 100;
  
  const size = Math.random() * 4;

  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  
  particle.style.position = 'absolute';
  particle.style.top = `${posY}%`;
  particle.style.left = `${posX}%`;
  particle.style.width = `${size}px`;
  particle.style.height = `${size}px`;
  particle.style.backgroundColor = randomColor;
  particle.style.borderRadius = '50%';
  particle.style.opacity = '0.8';
  
  container.appendChild(particle)
};