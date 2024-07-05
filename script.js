var darkModeToggle = document.getElementById('darkModeToggle');
var body = document.body;

darkModeToggle.addEventListener('change', () => {
  body.classList.toggle('dark-mode', darkModeToggle.checked);
});
