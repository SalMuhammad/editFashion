/**
 * Script dinamis untuk menampilkan section dan form sesuai nav yang diklik.
 * - Menggunakan data-section pada link nav.
 * - Menyembunyikan semua section dan hanya menampilkan yang dipilih.
 * - Menampilkan form yang sesuai (form-kapel atau form).
 * - Tidak menggunakan jQuery, hanya vanilla JS.
 */

document.addEventListener('DOMContentLoaded', function () {
  // Fungsi untuk menyembunyikan semua section
  function hideAllSections() {
    document.querySelectorAll('.capture-section').forEach(function (el) {
      el.classList.add('hidden');
    });
  }

  // Fungsi untuk menyembunyikan semua form
  function hideAllForms() {
    var formKapel = document.getElementById('form-kapel');
    var formOutfit = document.getElementById('form');
    if (formKapel) formKapel.classList.add('hidden');
    if (formOutfit) formOutfit.classList.add('hidden');
  }

  // Event listener untuk semua link nav
  document.querySelectorAll('#main-nav a[data-section]').forEach(function (link) {
    link.addEventListener('click', function (event) {
      event.preventDefault();

      // Sembunyikan nav setelah klik
      var navDiv = document.querySelector('#main-nav > div');
      if (navDiv) navDiv.classList.add('hidden');

      // Sembunyikan semua section
      hideAllSections();

      // Sembunyikan semua form
      hideAllForms();

      // Tampilkan captureArea
      var captureArea = document.getElementById('captureArea');
      if (captureArea) captureArea.classList.remove('hidden');

      // Tampilkan section yang sesuai
      var sectionName = link.getAttribute('data-section');
      var section = document.getElementById('section-' + sectionName);
      if (section) section.classList.remove('hidden');

      // Tampilkan form yang sesuai
      if (sectionName === 'kapel') {
        var formKapel = document.getElementById('form-kapel');
        if (formKapel) formKapel.classList.remove('hidden');
      } else if (sectionName === 'outfit' || sectionName === 'side-samping') {
        var formOutfit = document.getElementById('form');
        if (formOutfit) formOutfit.classList.remove('hidden');
      }
    });
  });
});