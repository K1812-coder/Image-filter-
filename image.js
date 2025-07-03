const filterButtons = document.querySelectorAll('.filter-btn');
const galleryItems = document.querySelectorAll('.gallery-item');

filterButtons.forEach(btn => {
  btn.addEventListener('click', function() {
    // Remove active class from all buttons
    filterButtons.forEach(b => b.classList.remove('active'));
    this.classList.add('active');

    const filter = this.getAttribute('data-filter');
    galleryItems.forEach(item => {
      if (filter === 'all' || item.getAttribute('data-category') === filter) {
        item.style.display = 'block';
        item.style.opacity = 1;
        item.style.transform = 'scale(1)';
      } else {
        item.style.display = 'none';
        item.style.opacity = 0;
        item.style.transform = 'scale(0.95)';
      }
    });
  });
});
