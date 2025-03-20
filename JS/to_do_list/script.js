
    /*  Mikhael C. gadiz
     * DOCU: Initializes the todo list application 
     * done in almost 3 hours
     */
document.addEventListener('DOMContentLoaded', function() {
    function initializeApp() {
        const form = document.querySelector('form');
        const input = document.querySelector('input[type="text"]');
        const taskList = document.querySelector('ul');
        const notifications = document.getElementById('notifications');

        /*  
         * This function initializes the list and adds delete button
         */
        function initializeListItem(li) {
            const span = document.createElement('span');
            span.textContent = li.textContent;
            li.textContent = '';
            li.appendChild(span);
            
            const deleteBtn = document.createElement('button');
            deleteBtn.className = 'delete-btn';
            deleteBtn.innerHTML = '&times;';
            li.appendChild(deleteBtn);
        }

        /**
         * loads the existing list
         */
        Array.prototype.forEach.call(document.querySelectorAll('li'), initializeListItem);

        /**
         * This function handles the form submission
         * added a check that prevents submission of empty text
         */
        function handleFormSubmit(event) {
            event.preventDefault();
            const taskText = input.value.trim();
            if (!taskText) return;

            const li = document.createElement('li');
            const span = document.createElement('span');
            span.textContent = taskText;
            
            const deleteBtn = document.createElement('button');
            deleteBtn.className = 'delete-btn';
            deleteBtn.innerHTML = '&times;';

            li.appendChild(span);
            li.appendChild(deleteBtn);
            taskList.appendChild(li);
            
            input.value = '';
            showNotification('Task added: ' + taskText);
        }

        form.addEventListener('submit', handleFormSubmit);

   
        /**
         * this function handles the closing of the elements in the list
         */
        function handleTaskListClick(event) {
            var target = event.target;
            
            if (target.classList.contains('delete-btn')) {
                var li = target.closest('li');
                var taskText = li.querySelector('span').textContent;
                li.parentNode.removeChild(li);
                showNotification('Task removed: ' + taskText);
            }
            else if (target.closest('li')) {
                target.closest('li').classList.toggle('assignment');
            }
        }

        taskList.addEventListener('click', handleTaskListClick);

        /**
         * this function handles the notification whenever an element from the list is removed
         */
        function showNotification(message) {
            if (!notifications) throw new Error('Notification container not found');

            var notification = document.createElement('div');
            notification.className = 'notification';
            
            var text = document.createElement('span');
            text.textContent = message;
            
            var closeBtn = document.createElement('button');
            closeBtn.className = 'close-btn';
            closeBtn.innerHTML = '&times;';
            
            notification.appendChild(text);
            notification.appendChild(closeBtn);
            notifications.appendChild(notification);

            closeBtn.addEventListener('click', function() {
                notification.parentNode.removeChild(notification);
            });
            //added a 5 second timer for the removal of notification
            setTimeout(function() {
                if (notification.parentNode) {
                    notification.parentNode.removeChild(notification);
                }
            }, 5000);
        }
    }

    
    initializeApp();
});