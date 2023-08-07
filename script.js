document.getElementById('menu-toggle').addEventListener('click', function() {
  const navList = document.getElementById('nav-list');
  if (navList.style.display === 'none' || navList.style.display === '') {
      navList.style.display = 'block';
  } else {
      navList.style.display = 'none';
  }
});
