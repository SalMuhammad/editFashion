import ghpages from 'gh-pages';

ghpages.publish('dist', {
  branch: 'gh-pages',
  repo: 'https://github.com/SalMuhammad/editFashion.git',
  message: 'deploy',
}, (err) => {
  if (err) {
    console.error('❌ Gagal deploy:', err);
  } else {
    console.log('✅ Sukses deploy ke GitHub Pages!');
  }
});
