// DOM Elements: Input fields and profile elements reference
const nameInput = document.getElementById('nameInput');
const bioInput = document.getElementById('bioInput');
const imageInput = document.getElementById('imageInput');
const colorInput = document.getElementById('colorInput');

/*  
 * DOCU: This function validates input fields
 * @returns {boolean} - Returns true if all required fields are valid and returns false if theres blank
 * 
 * Mikhael C. Gadiz
 */
function validateForm() {
    var isValid = true;
    var inputs = [nameInput, bioInput, imageInput];

    for (var i = 0; i < inputs.length; i++) {
        if (!inputs[i] || !inputs[i].value.trim()) {
            if (inputs[i]) inputs[i].classList.add('is-invalid');
            isValid = false;
        } else {
            inputs[i].classList.remove('is-invalid');
        }
    }   

    return isValid;
}

/*  
 * This function updates profile elements with validated form values
 * returns a notification if theres missing input, otherwise proceed with the update
 */
function updateProfile() {
    if (!validateForm()) {
        alert('Please fill in all required fields!');
        return;
    }

    // Update profile elements with null checks
    const profileName = document.getElementById('profileName');
    const profileBio = document.getElementById('profileBio');
    const profileImg = document.getElementById('profileImg');
    const card = document.getElementById('card');

    if (!profileName || !profileBio || !profileImg || !card) {
        throw new Error('Profile display elements not found');
    }

    profileName.textContent = nameInput.value;
    profileBio.textContent = bioInput.value;
    profileImg.src = imageInput.value;
    card.style.backgroundColor = colorInput.value;
}

/**
 * This function handles the profile update 
 * 
 */
function handleProfileUpdate(event) {
    event.preventDefault();
    try {
        updateProfile();
    } catch (error) {
        console.error('Profile update failed:', error);
        alert('Error updating profile. Please check console for details.');
    }
}

// Event listener initialization with null check
const updateBtn = document.getElementById('updateProfileBtn');
if (updateBtn) {
    updateBtn.addEventListener('click', handleProfileUpdate);
} else {
    console.error('Update button not found in DOM');
}