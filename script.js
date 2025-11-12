// Кнопка "Наверх"
const scrollBtn = document.getElementById('scrollTopBtn');

window.addEventListener('scroll', () => {
  if (window.scrollY > 200) {
    scrollBtn.style.display = 'block';
  } else {
    scrollBtn.style.display = 'none';
  }
});

scrollBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Аккордеон
const accItems = document.querySelectorAll('.accordion-item');

accItems.forEach(item => {
  const title = item.querySelector('.accordion-title');
  title.addEventListener('click', () => {
    // Закрыть все остальные
    accItems.forEach(i => {
      if (i !== item) i.querySelector('.accordion-content').style.display = 'none';
    });
    // Переключить текущий
    const content = item.querySelector('.accordion-content');
    content.style.display = (content.style.display === 'block') ? 'none' : 'block';
  });
});
const filterBtns = document.querySelectorAll('.filters button');
const galleryItems = document.querySelectorAll('.gallery img');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const category = btn.getAttribute('data-category');
    galleryItems.forEach(img => {
      if(category === 'all' || img.dataset.category === category) {
        img.style.display = 'inline-block';
      } else {
        img.style.display = 'none';
      }
    });
  });
});
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modalImg');
const closeBtn = document.querySelector('.close');

galleryItems.forEach(img => {
  img.addEventListener('click', () => {
    modal.style.display = 'block';
    modalImg.src = img.src;
  });
});

closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

modal.addEventListener('click', (e) => {
  if(e.target === modal) modal.style.display = 'none';
});
