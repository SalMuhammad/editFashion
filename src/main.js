// import * as htmlToImage from 'html-to-image';

// document.getElementById('btn').addEventListener('click', () => {
//   const node = document.getElementById('my-node');

//   htmlToImage.toPng(node)
//     .then((dataUrl) => {
//       const link = document.createElement('a');
//       link.download = 'hasil-gambar.png';
//       link.href = dataUrl;
//       link.click();
//     })
//     .catch((error) => {
//       console.error('Gagal mengonversi ke gambar:', error);
//     });
// });

import * as htmlToImage from 'html-to-image';

document.getElementById('download-btn').addEventListener('click', () => {
  const node = document.getElementById('my-node');

  htmlToImage.toPng(node)
    .then((dataUrl) => {
      const link = document.createElement('a');
      link.download = 'hasil-render.png';
      link.href = dataUrl;
      link.click();
    })
    .catch((err) => {
      console.error('Gagal render:', err);
    });
});

