document.getElementById('profile-pic-upload').addEventListener('change', function (e) {
    const file = e.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            document.getElementById('profile-pic').src = e.target.result;
        }
        reader.readAsDataURL(file);
    }
});

function copyAccountLink() {
    const linkInput = document.getElementById('profile-link');
    linkInput.select();
    document.execCommand('copy');
    alert('Account link copied!');
}

function saveProfile() {
    const name = document.getElementById('profile-name').value;
    const bio = document.getElementById('profile-bio').value;
    const achievements = document.getElementById('profile-achievements').value;

    alert(`Profile saved: \nName: ${name}\nBio: ${bio}\nAchievements: ${achievements}`);
}

document.getElementById('profile-pic-upload').addEventListener('change', function (e) {
    const file = e.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            document.getElementById('profile-pic').src = e.target.result;
        }
        reader.readAsDataURL(file);
    }
});

function copyAccountLink() {
    const linkInput = document.getElementById('profile-link');
    linkInput.select();
    document.execCommand('copy');
    alert('Account link copied!');
}

function saveProfile() {
    const name = document.getElementById('profile-name').value;
    const bio = document.getElementById('profile-bio').value;
    const achievements = document.getElementById('profile-achievements').value;

    alert(`Profile saved: \nName: ${name}\nBio: ${bio}\nAchievements: ${achievements}`);
}