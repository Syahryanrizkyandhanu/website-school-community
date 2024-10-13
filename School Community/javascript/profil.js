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

        // Fetch profile data (you would typically get this from an API or database)
        const profileData = getProfileData(memberId); // Replace with your data fetching logic

        if (profileData) {
            profileName.textContent = profileData.name;
            profileRole.textContent = profileData.role;
            profileBio.textContent = profileData.bio;
            profileJoinDate.textContent = profileData.joinDate; // Update to use joinDate
            profileLocation.textContent = profileData.location;
            profileAchievements.value = profileData.achievements.join(', '); // Set value for input

            profileCover.style.backgroundImage = `linear-gradient(to right, ${profileData.coverColors.start}, ${profileData.coverColors.end})`;

            profileContainer.style.display = 'flex';
        }
    });
});

function getProfileData(memberId) {
    // Placeholder for data fetching. You'll need to replace this with your actual logic.
    if (memberId === '1') {
        return {
            name: '096_Syahryan Rizky Andhanu',
            role: 'Admin',
            bio: 'Headline or a short description',
            joinDate: '2023-10-26', // Example join date
            location: 'No response received yet',
            achievements: ['Achievement 1', 'Achievement 2', 'Achievement 3'],
            coverColors: {
                start: '#0052cc',
                end: '#d8315a'
            }
        };
    } else if (memberId === '2') {
        return {
            name: 'Member Name',
            role: 'Member',
            bio: 'This is the member bio.',
            joinDate: '2024-01-15', // Example join date
            location: 'No response received yet',
            achievements: ['Member Achievement 1', 'Member Achievement 2'],
            coverColors: {
                start: '#2980b9',
                end: '#e74c3c'
            }
        };
    }

    return null;
}

function closeProfile() {
    profileContainer.style.display = 'none';
}

function openProfile(name, role, joinDate, location) {
    // Set the profile information
    document.getElementById("profile-name").innerText = name;
    document.getElementById("profile-role").innerText = role;
    document.getElementById("profile-join-date").innerText = joinDate;
    document.getElementById("profile-location").innerText = location;

    // Hide the member list and show the profile
    document.querySelector(".member-list").style.display = "none";
    document.querySelector(".profile-container").style.display = "block";
}

function closeProfile() {
    // Hide the profile and show the member list again
    document.querySelector(".profile-container").style.display = "none";
    document.querySelector(".member-list").style.display = "block";
}
document.getElementById('search-input').addEventListener('input', function () {
    const filter = this.value.toLowerCase();
    const memberCards = document.querySelectorAll('.member-card');

    memberCards.forEach(card => {
        const name = card.querySelector('h3').textContent.toLowerCase();
        if (name.includes(filter)) {
            card.style.display = '';
        } else {
            card.style.display = 'none';
        }
    });
});