const pills = document.querySelectorAll('.pill');
const cards = document.querySelectorAll('.card');
const hearts = document.querySelectorAll('.heart');

pills.forEach(function (pill) {
  pill.addEventListener('click', function () {
    pills.forEach(function (p) {
      p.classList.remove('on');
    });
    pill.classList.add('on');

    const filter = pill.dataset.filter;

    cards.forEach(function (card) {
      if (filter === 'all' || card.dataset.type === filter) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  });
});

hearts.forEach(function (heart) {
  heart.addEventListener('click', function () {
    heart.classList.toggle('liked');
  });
});
const searchIcon = document.getElementById('search-icon');
const searchBox = document.getElementById('search-box');
const searchClose = document.getElementById('search-close');
const searchInput = document.querySelector('.search-input');

searchIcon.addEventListener('click', function () {
  searchBox.classList.add('open');
  searchInput.focus();
});

searchClose.addEventListener('click', function () {
  searchBox.classList.remove('open');
});