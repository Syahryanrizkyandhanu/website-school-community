document.querySelector('.login-button').addEventListener('click', function(event) {
    event.preventDefault();
    
    // Ambil nilai dari input email dan password
    const email = document.querySelector('.input-email input').value;
    const password = document.querySelector('.input-password input').value;
    
    // Validasi sederhana: cek apakah email dan password sudah diisi
    if (email && password) {
      window.location.href = 'Home.html';
    } else {
      alert('Silakan isi email dan password');
    }
});
  