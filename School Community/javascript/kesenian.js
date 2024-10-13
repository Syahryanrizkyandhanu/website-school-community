document.querySelectorAll('nav ul li').forEach(item => {
    item.addEventListener('click', () => {
      const sectionId = item.textContent.toLowerCase();
      const section = document.querySelector(`.${sectionId}`);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
  
  // logo
  const logo = document.querySelector('.logo');
  logo.addEventListener('mouseover', () => {
    logo.style.color = '#1abc9c';
    logo.style.transition = 'color 0.3s ease';
  });
  logo.addEventListener('mouseleave', () => {
    logo.style.color = '';
  });
  
  // deskripsi acara
  const deskripsi = document.querySelectorAll('.deskripsi p');
  deskripsi.forEach((paragraph, index) => {
    paragraph.style.opacity = '0';
    paragraph.style.transform = 'translateY(20px)';
    paragraph.style.transition = `opacity 0.6s ease ${index * 0.2}s, transform 0.6s ease ${index * 0.2}s`;
  });
  
  window.addEventListener('load', () => {
    deskripsi.forEach(paragraph => {
      paragraph.style.opacity = '1';
      paragraph.style.transform = 'translateY(0)';
    });
  });
  
  // Efek animasi pada bagian judul utama
  const mainJudul = document.querySelector('.main-judul h1');
  mainJudul.style.opacity = '0';
  mainJudul.style.transform = 'translateY(-20px)';
  mainJudul.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
  
  const subJudul = document.querySelector('.sub-judul h3');
  subJudul.style.opacity = '0';
  subJudul.style.transform = 'translateY(-20px)';
  subJudul.style.transition = 'opacity 0.8s ease 0.3s, transform 0.8s ease 0.3s';
  
  window.addEventListener('load', () => {
    mainJudul.style.opacity = '1';
    mainJudul.style.transform = 'translateY(0)';
    subJudul.style.opacity = '1';
    subJudul.style.transform = 'translateY(0)';
  });
  
  // login button
  const loginButton = document.querySelector('.login-button');
  loginButton.addEventListener('click', () => {
    alert('Login feature is under development. Stay tuned!');
  });
  
  loginButton.addEventListener('mouseover', () => {
    loginButton.style.backgroundColor = '#16a085';
    loginButton.style.transition = 'background-color 0.3s ease';
  });
  loginButton.addEventListener('mouseleave', () => {
    loginButton.style.backgroundColor = '';
  });
  
  // media sosial
  document.querySelectorAll('.sosmed a').forEach(icon => {
    icon.addEventListener('mouseover', () => {
      icon.style.transform = 'scale(1.2)';
      icon.style.transition = 'transform 0.3s ease';
    });
  
    icon.addEventListener('mouseleave', () => {
      icon.style.transform = 'scale(1)';
    });
  });

const qrcode = new QRCode("qrcode", {
    text: "https://www.paypal.me/yourlink",
    width: 128,
    height: 128,
    colorDark : "#000000",
    colorLight : "#ffffff",
    correctLevel : QRCode.CorrectLevel.H
  });
  
  // QR Code donasi
  const generateQRButton = document.getElementById("generate-qr");
  generateQRButton.addEventListener("click", () => {
    const donationAmount = prompt("Enter your donation amount in USD:");
    
    if (donationAmount && !isNaN(donationAmount)) {
      const donationLink = `https://www.paypal.me/yourlink/${donationAmount}`;
      
      document.getElementById("qrcode").innerHTML = "";
      qrcode.makeCode(donationLink);
      
    //jumlah donasi
      document.getElementById("donation-amount").textContent = `Suggested Donation: $${donationAmount}`;
    } else {
      alert("Please enter a valid donation amount.");
    } 
  });

  
