
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
















// bagian eyedroper contek warna
const kotakWarna= document.querySelector('.elemen-warna')
// kotakWarna.style.background = 'red'
async function pickColor() {
  if (!window.EyeDropper) {
    alert("Browser kamu belum mendukung EyeDropper API.");
    return;
  }
  try {
    const picker = new EyeDropper();
    const result = await picker.open();
    kotakWarna.style.background = result.sRGBHex;
  } catch (err) {
    console.log("Eyedropper dibatalkan");
  }
}