function toggleSearch() {
  const bar = document.getElementById('searchBar');
  bar.classList.toggle('open');
  if (bar.classList.contains('open')) {
    document.getElementById('searchInput').focus();
  }
}

function toggleMenu() {
  const menu = document.getElementById('mobileMenu');
  menu.classList.toggle('open');
}

function doSearch() {
  const q = document.getElementById('searchInput').value.trim();
  if (q) window.location = `arama.html?q=${encodeURIComponent(q)}`;
}

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    document.getElementById('searchBar').classList.remove('open');
    document.getElementById('mobileMenu').classList.remove('open');
  }
});
