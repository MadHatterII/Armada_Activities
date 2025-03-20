/* Notification using createElement()
* Mikhael C. Gadiz
* done in 2 hours
*/

/* Declares all the arrays of value needed in the notification */
const services = ["Spa Massage", "Hair Salon", "Facial Treatment", "Manicure", "Pedicure"];
const times = ["10:00 AM", "2:00 PM", "4:30 PM", "6:00 PM"];
const dates = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

document.getElementById('showNotification').addEventListener('click', createReservation);

/* This function is used to create the notification
 * I used reservation as a notification so that it will have life 
*/
function createReservation() {
    // Create card elements
    const card = document.createElement('div');
    card.className = 'card notification-card';
    
    const cardHeader = document.createElement('div');
    cardHeader.className = 'card-header d-flex justify-content-between align-items-center';
    
    const cardBody = document.createElement('div');
    cardBody.className = 'card-body';
    
    // Creates a random reservation details
    const service = services[Math.floor(Math.random() * services.length)];
    const time = times[Math.floor(Math.random() * times.length)];
    const date = dates[Math.floor(Math.random() * dates.length)];

    // Header content
    const title = document.createElement('h5');
    title.className = 'card-title mb-0';
    title.textContent = `${service} Booked!`;
    
    const closeBtn = document.createElement('button');
    closeBtn.className = 'btn-close';
    
    // Body content
    const details = document.createElement('p');
    details.className = 'card-text';
    details.innerHTML = `
        <strong>Date:</strong> ${date}<br>
        <strong>Time:</strong> ${time}<br>
        <strong>Status:</strong> <span class="text-success">Confirmed</span>
    `;

    //Assemble the content of the notification
    cardHeader.appendChild(title);
    cardHeader.appendChild(closeBtn);
    cardBody.appendChild(details);
    card.appendChild(cardHeader);
    card.appendChild(cardBody);

    // Add to container
    const container = document.getElementById('notificationContainer');
    if (container.firstChild) {
        container.insertBefore(card, container.firstChild);
    } else {
        container.appendChild(card);
    }


    closeBtn.addEventListener('click', () => {
        card.remove();
    });

}