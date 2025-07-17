
function toggleNav() {
  var navDiv = document.querySelector('#main-nav > div');
  navDiv.classList.toggle('hidden');
}

// Ambil semua tombol <a> di dalam #main-nav
document.querySelectorAll('#main-nav a').forEach(function (link) {
  const sectionss = document.querySelectorAll('.capture-section');
  const formEll = document.querySelectorAll('.form-ell');
  // console.log(formEll);
  link.addEventListener('click', function (event) {
    event.preventDefault();

    const idLink = link.id; // misal: "outfit"
    sectionss.forEach(function (ell) {
      const idSection = ell.id.replace('section-', ''); // misal: "outfit"
      
      if (idLink === idSection) {
        ell.classList.remove('hidden'); // tampilkan section yang sesuai
      } else {
        ell.classList.add('hidden'); // sembunyikan yang lain
      }
    });
    
    formEll.forEach(function (ella) {
      const idForm = ella.id.replace('form-', ''); // misal: "outfit"
      console.log(idLink === idForm);

      if (idLink === idForm) {
        ella.classList.remove('hidden'); // tampilkan section yang sesuai
      } else {
        ella.classList.add('hidden'); // sembunyikan yang lain
      }
    });

    
    document.querySelector('#main-nav > div').classList.add('hidden');
  });
});





// ... (script lain tetap sama) ...
$('#geser-gambar').on('input', function () {
  $('#begron').css('transform', `translate(${this.value}px)`)
})


// Ganti gambar
function updateImage(input, id) {
  if (input.files && input.files[0]) {
    var reader = new FileReader();
    reader.onload = function (e) {
      document.getElementById(id).src = e.target.result;
    };
    reader.readAsDataURL(input.files[0]);
  }
}

// Ganti harga
function updateHarga(inputId, labelId) {
  const value = document.getElementById(inputId).value;
  document.getElementById(labelId).textContent = value ? `RP ${parseInt(value).toLocaleString("id-ID")}` : '';
}

// Download gambar
document.getElementById('downloadBtn').addEventListener('click', function () {
  html2canvas(document.querySelector("#captureArea")).then(canvas => {
    const link = document.createElement("a");
    link.download = "outfit-gham.png";
    link.href = canvas.toDataURL("image/png");
    link.click();
  });
});

// Update kode produk
function updateKodeProduk(input, bio) {
  document.querySelectorAll(bio).forEach(el => {
    el.textContent = input ? `LINK BIO NO. \n ${input}` : "LINK NO.";
  });
}
function updateMerek(input, bio) {
  document.querySelectorAll(bio).forEach(el => {
    el.textContent = input ? `${input}` : "";
  });
}












  window.addEventListener("DOMContentLoaded", () => {
    const img = document.getElementById("gambar-lide");
    const target = document.getElementById("lide");

    // Buat canvas tersembunyi
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");

    // Render gambar ke canvas setelah gambar siap
    img.onload = () => {
      canvas.width = img.naturalWidth;
      canvas.height = img.naturalHeight;
      ctx.drawImage(img, 0, 0);
    };

    // Kalau gambar udah ke-load sebelum JS ini dijalankan
    if (img.complete) {
      canvas.width = img.naturalWidth;
      canvas.height = img.naturalHeight;
      ctx.drawImage(img, 0, 0);
    }

    // Ambil warna saat gambar diklik
    img.addEventListener("click", function (e) {
      const rect = img.getBoundingClientRect();
      const scaleX = img.naturalWidth / rect.width;
      const scaleY = img.naturalHeight / rect.height;
      const x = (e.clientX - rect.left) * scaleX;
      const y = (e.clientY - rect.top) * scaleY;

      const pixel = ctx.getImageData(x, y, 1, 1).data;
      const hex = "#" + [...pixel].slice(0, 3).map(v => v.toString(16).padStart(2, '0')).join('');

      // Tempel warna ke elemen dengan id=lide
      target.style.backgroundColor = hex;
    });
  });
