// profil.js

const memberCards = document.querySelectorAll('.member-card');
const profileContainer = document.querySelector('.profile-container');
const profileName = document.getElementById('profile-name');
const profileRole = document.getElementById('profile-role');
const profileBio = document.getElementById('profile-bio');
const profileJoinDate = document.getElementById('profile-join-date');
const profileLocation = document.getElementById('profile-location');
const profileAchievements = document.getElementById('profile-achievements');
const profileCover = document.getElementById('profile-cover');

memberCards.forEach(card => {
    card.addEventListener('click', () => {
        const memberId = card.dataset.memberId;

        // Fetch profile data
        const profileData = getProfileData(memberId);

        if (profileData) {
            profileName.textContent = profileData.name;
            profileRole.textContent = profileData.role;
            profileBio.value = profileData.bio; // Changed to 'value' for textarea
            profileJoinDate.textContent = profileData.joinDate;
            profileLocation.textContent = profileData.location;
            profileAchievements.value = profileData.achievements.join(', '); // Set value for input

            profileCover.style.backgroundImage = `linear-gradient(to right, ${profileData.coverColors.start}, ${profileData.coverColors.end})`;

            profileContainer.style.display = 'flex';
        }
    });
});

// Data fetching logic
function getProfileData(memberId) {
    // Placeholder for data fetching
    const profiles = {
        '1': {
            name: '096_Syahryan Rizky Andhanu',
            role: 'Admin',
            bio: 'Headline or a short description',
            joinDate: '2023-10-26',
            location: 'No response received yet',
            achievements: ['Achievement 1', 'Achievement 2', 'Achievement 3'],
            coverColors: {
                start: '#1E201E',
                end: '#697565'
            }
        },
        '2': {
            name: 'Member Name 1',
            role: 'Member',
            bio: 'This is the member bio.',
            joinDate: '2024-01-15',
            location: 'No response received yet',
            achievements: ['Member Achievement 1', 'Member Achievement 2'],
            coverColors: {
                start: '#1E201E',
                end: '#697565'
            }
        },
        '3': {
            name: 'Member Name 2',
            role: 'Member',
            bio: 'This is the member bio.',
            joinDate: '2024-01-15',
            location: 'No response received yet',
            achievements: ['Member Achievement 1', 'Member Achievement 2'],
            coverColors: {
                start: '#1E201E',
                end: '#697565'
            }
        },
        // Tambahkan lebih banyak anggota di sini
    };


    return profiles[memberId] || null;
}

// Search functionality
document.getElementById('search-input').addEventListener('input', function () {
    const filter = this.value.toLowerCase();
    memberCards.forEach(card => {
        const name = card.querySelector('h3').textContent.toLowerCase();
        card.style.display = name.includes(filter) ? '' : 'none';
    });
});

// Close profile function
function closeProfile() {
    profileContainer.style.display = 'none';
    document.querySelector('.member-list').style.display = 'flex'; // Show member list again
}

// Add event listeners to member cards
memberCards.forEach(card => {
    card.addEventListener('click', function () {
        const memberId = this.getAttribute('data-member-id');
        const profileData = getProfileData(memberId);
        showProfile(profileData);
    });
});

// Show profile based on member data
function showProfile(profileData) {
    profileName.textContent = profileData.name;
    profileRole.textContent = profileData.role;
    profileBio.value = profileData.bio; // Changed to 'value' for textarea
    profileJoinDate.textContent = profileData.joinDate;
    profileLocation.textContent = profileData.location;
    profileAchievements.value = profileData.achievements.join(', ');

    profileContainer.style.display = 'flex';
}
const numberOfSnowflakes = 100; // Jumlah snowflake yang akan dibuat

function createSnowflake() {
    const snowflake = document.createElement('i');
    snowflake.classList.add('snowflake');

    // Set random posisi horizontal dan durasi animasi yang acak
    snowflake.style.left = `${Math.random() * window.innerWidth}px`;
    snowflake.style.animationDuration = `${Math.random() * 3 + 2}s`; // 2s to 5s random duration
    snowflake.style.opacity = Math.random();
    snowflake.style.fontSize = `${Math.random() * 10 + 10}px`; // Ukuran random antara 10px - 20px

    snowflake.textContent = '❄'; // Karakter salju

    document.body.appendChild(snowflake);

    // Hapus snowflake setelah animasi selesai
    setTimeout(() => {
        snowflake.remove();
    }, (Math.random() * 3 + 2) * 1000); // Waktu yang sama dengan durasi animasi
}

// Buat snowflake secara terus menerus
setInterval(createSnowflake, 200);

const text = "Connect with students across the community. Discover talents, achievements, and interests."; // Teks yang akan ditampilkan
const speed = 100; // Kecepatan mengetik dalam milidetik
let index = 0;

function ketik() {
    if (index < text.length) {
        document.getElementById("ketik").innerHTML += text.charAt(index);
        index++;
        setTimeout(ketik, speed); // Panggil fungsi ini lagi untuk karakter berikutnya
    }
}

window.onload = function () {
    ketik();
};

