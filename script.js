const menubar = document.getElementById("menubar");
const cover = document.getElementById("cover");
const closeCover = document.getElementById("x");

menubar.addEventListener("click", showMenu)
closeCover.addEventListener("click", closeMenu)

function showMenu() {
    cover.style.visibility = "visible"
    cover.style.opacity = "1"
    cover.style.transition = "opacity 1.5s ease-in-out";
}

function closeMenu(){
    cover.style.opacity = "0";
    setTimeout(() => {
        cover.style.visibility = "hidden";
    }, 500);
}

document.addEventListener('DOMContentLoaded', () => {
    // Add click effect to all article cards
    document.querySelectorAll('.article-card').forEach(card => {
      card.addEventListener('click', function(e) {
        // Add effect class
        this.classList.add('click-effect');
        
        // Remove effect class after animation
        setTimeout(() => {
          this.classList.remove('click-effect');
        }, 400);
  
        // Add temporary scale effect
        this.style.transform = 'scale(0.98)';
        setTimeout(() => {
          this.style.transform = 'scale(1)';
        }, 200);
      });
    });
  });

  document.addEventListener('DOMContentLoaded', () => {
    const socialMedia = document.querySelector('.social-media');
    const popup = document.querySelector('.social-popup');
    
    // Click toggle for mobile
    socialMedia.addEventListener('click', (e) => {
        e.stopPropagation();
        popup.style.opacity = popup.style.opacity === '1' ? '0' : '1';
        popup.style.transform = popup.style.transform === 'translateY(0px)' ? 'translateY(20px)' : 'translateY(0)';
        popup.style.pointerEvents = popup.style.pointerEvents === 'auto' ? 'none' : 'auto';
    });
    
    // Close when clicking outside
    document.addEventListener('click', () => {
        popup.style.opacity = '0';
        popup.style.transform = 'translateY(20px)';
        popup.style.pointerEvents = 'none';
    });
});

document.querySelectorAll('.content-card').forEach(card => {
  card.addEventListener('mouseenter', () => {
    const sound = new Audio('https://assets.mixkit.co/sfx/preview/mixkit-arcade-game-jump-coin-216.mp3');
    sound.volume = 0.3;
    sound.play();
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const scrollContainer = document.querySelector('section');
  const scrollLeft = document.querySelector('.scroll-left');
  const scrollRight = document.querySelector('.scroll-right');
  
  scrollLeft.addEventListener('click', () => {
    scrollContainer.scrollBy({ left: -300, behavior: 'smooth' });
  });
  
  scrollRight.addEventListener('click', () => {
    scrollContainer.scrollBy({ left: 300, behavior: 'smooth' });
  });
});