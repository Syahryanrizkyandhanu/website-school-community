// event.js

// Menambahkan smooth scrolling pada navigasi menu
document.querySelectorAll('nav ul li').forEach(item => {
    item.addEventListener('click', () => {
      const section = document.querySelector(`#${item.textContent.toLowerCase()}`);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
  
  // Menambahkan animasi hover pada setiap event card
  document.querySelectorAll('.list-events').forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.style.transform = 'scale(1.05)';
      card.style.transition = 'transform 0.3s ease';
    });
  
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'scale(1)';
    });
  });
  
  // Menambahkan filter sederhana pada event list berdasarkan kata kunci
  const eventList = document.querySelectorAll('.list-events');
  const searchInput = document.createElement('input');
  searchInput.setAttribute('placeholder', 'Search Event...');
  searchInput.setAttribute('style', 'margin-bottom: 20px; padding: 10px; width: 100%; border-radius: 5px; border: 1px solid #ddd;');
  document.querySelector('.main-container').insertBefore(searchInput, document.querySelector('.grid-3'));
  
  searchInput.addEventListener('keyup', () => {
    const searchValue = searchInput.value.toLowerCase();
    eventList.forEach(event => {
      const title = event.querySelector('.event-title h4').textContent.toLowerCase();
      if (title.includes(searchValue)) {
        event.style.display = 'block';
      } else {
        event.style.display = 'none';
      }
    });
  });
  
  // Menambahkan animasi fade-in saat halaman pertama kali dimuat
  document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.list-events');
    elements.forEach((el, index) => {
      setTimeout(() => {
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
      }, index * 200);
    });
  });
  
  document.querySelectorAll('.list-events').forEach(event => {
    event.style.opacity = '0';
    event.style.transform = 'translateY(20px)';
    event.style.transition = 'all 0.5s ease-in-out';
  });
  
  // Menambahkan efek animasi untuk header
  const headerTitle = document.querySelector('.judul-main');
  headerTitle.style.opacity = '0';
  headerTitle.style.transform = 'translateY(-20px)';
  headerTitle.style.transition = 'all 0.6s ease-in-out';
  
  const headerSubtitle = document.querySelector('.judul-sub');
  headerSubtitle.style.opacity = '0';
  headerSubtitle.style.transform = 'translateY(-20px)';
  headerSubtitle.style.transition = 'all 0.8s ease-in-out';
  
  window.addEventListener('load', () => {
    headerTitle.style.opacity = '1';
    headerTitle.style.transform = 'translateY(0)';
    headerSubtitle.style.opacity = '1';
    headerSubtitle.style.transform = 'translateY(0)';
  });
  
  // Menambahkan efek hover pada tombol Get to know
  document.querySelectorAll('.event-title a').forEach(link => {
    link.addEventListener('mouseover', () => {
      link.style.color = '#1abc9c';
      link.style.transition = 'color 0.3s ease';
    });
  
    link.addEventListener('mouseleave', () => {
      link.style.color = '';
    });
  });
  
  // Menambahkan efek hover pada icon social media
  document.querySelectorAll('.sosmed a').forEach(icon => {
    icon.addEventListener('mouseover', () => {
      icon.style.transform = 'scale(1.2)';
      icon.style.transition = 'transform 0.3s ease';
    });
  
    icon.addEventListener('mouseleave', () => {
      icon.style.transform = 'scale(1)';
    });
  });
  