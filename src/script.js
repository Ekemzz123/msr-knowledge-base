// Switch between tabs: show the clicked tab's section and hide the others
document.querySelectorAll('.tab-btn').forEach(function (btn) {
  btn.addEventListener('click', function () {
    document.querySelectorAll('.tab-btn').forEach(function (b) {
      b.classList.remove('active');
    });
    document.querySelectorAll('.tab-content').forEach(function (section) {
      section.classList.remove('active');
    });
    btn.classList.add('active');
    document.getElementById(btn.dataset.tab).classList.add('active');
  });
});