const dropdownToggles = document.querySelectorAll('.dropdown-toggle');

dropdownToggles.forEach((btn) => {
  btn.addEventListener('click', () => {
    if (btn.nextElementSibling.classList.contains('show')) {
      closeOpenItems();
    } else {
      closeOpenItems();
      btn.nextElementSibling.classList.toggle('show');
    }
  });
});

function closeOpenItems() {
  const openMenus = document.querySelectorAll('.dropdown-menu');
  openMenus.forEach(function (menus) {
    menus.classList.remove('show');
  });
}

document.addEventListener('click', (e) => {
  if (!e.target.matches('.dropdown-toggle')) {
    closeOpenItems();
  }
});
