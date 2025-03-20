/**
 * Mikhael C. Gadiz
 * Character Builder
 * done in almost 3 hours
 */

const options = document.querySelectorAll('.option');
const armorSlots = document.querySelectorAll('.armor-slot');
const saveButton = document.getElementById('save-button');
const confirmationMessage = document.getElementById('confirmation-message');

/**
 * Adds a click event listener to each 'option' element.
 * When an option is clicked, it updates the corresponding armor slot in the character preview.
 */
function handleOptionClick() {
    options.forEach(option => {
        option.addEventListener('click', () => {
 
            const part = option.parentElement.dataset.part;
            const src = option.dataset.src;

            // Selects the armor slot element corresponding to the clicked option's 'part'.
            const slot = document.querySelector(`.armor-slot[data-part="${part}"]`);

            // Removes any existing child elements (images) from the armor slot.
            while (slot.firstChild) {
                slot.removeChild(slot.firstChild);
            }

            if (src) {
                const img = document.createElement('img');
                img.src = src;
                slot.appendChild(img);
            }

            // Removes the 'selected' class from all sibling options and adds it to the clicked option.
            const siblings = option.parentElement.querySelectorAll('.option');
            siblings.forEach(sibling => sibling.classList.remove('selected'));
            option.classList.add('selected');
        });
    });
}

/**
 * This function adds event listener to the save button
 * Displays a confirmation message and hides it after 3 seconds.
 */
function handleSaveButtonClick() {
    saveButton.addEventListener('click', () => {
        // Displays the confirmation message.
        confirmationMessage.style.display = 'block';

        // Hides the confirmation message after 3 seconds.
        setTimeout(() => {
            confirmationMessage.style.display = 'none';
        }, 3000);
    });
}

handleOptionClick();
handleSaveButtonClick();