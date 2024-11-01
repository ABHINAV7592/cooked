// Function to preview uploaded image
function previewAvatar(event) {
    const avatarImage = document.getElementById('avatarImage');
    avatarImage.src = URL.createObjectURL(event.target.files[0]);
}

// Function to change the avatar's skin color
function changeSkinColor(event) {
    const avatarImage = document.getElementById('avatarImage');
    avatarImage.style.backgroundColor = event.target.value;
}

// Function to change the hair style (you'll need images for each style)
function changeHairStyle(event) {
    const avatarImage = document.getElementById('avatarImage');
    if (event.target.value === "style1") {
        avatarImage.src = "style1-avatar.png"; // Replace with your image path
    } else if (event.target.value === "style2") {
        avatarImage.src = "style2-avatar.png"; // Replace with your image path
    }
}

// Function to change hair color
function changeHairColor(event) {
    const avatarImage = document.getElementById('avatarImage');
    avatarImage.style.borderColor = event.target.value; // Example: applies color to border
}

// Function to save avatar (stub for actual save logic)
function saveAvatar() {
    alert("Avatar saved!");
}
