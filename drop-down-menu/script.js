const dropdownToggles = document.querySelectorAll('.dropdown-toggle');

dropdownToggles.forEach((element) => {
  element.addEventListener('click', () => {
    element.nextElementSibling.style.display === 'flex'
      ? (element.nextElementSibling.style.display = 'none')
      : (element.nextElementSibling.style.display = 'flex');
  });
});
