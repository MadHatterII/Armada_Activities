/*  
 * This is a banking app
 * Mikhael C. Gadiz
 */
function initializeBankApp() {
    // DOM Elements
    const balanceElement = document.getElementById('currentBalance');
    const amountInput = document.getElementById('amountInput');
    const messageElement = document.getElementById('message');
    const depositBtn = document.getElementById('depositBtn');
    const withdrawBtn = document.getElementById('withdrawBtn');

    // Validate required elements
    if (!balanceElement || !amountInput || !messageElement || !depositBtn || !withdrawBtn) {
        throw new Error('Critical DOM elements missing');
    }

    // Application state
    let currentBalance = 0;
    function updateBalanceDisplay() {
        balanceElement.textContent = `$${currentBalance.toFixed(2)}`;
    }

    /*  
    * This function is responsible for notification
    * 
    */
    function showMessage(text, isError = false) {
        messageElement.textContent = text;
        messageElement.className = 'alert ' + (isError ? 'alert-danger' : 'alert-success');
        messageElement.classList.add('show');

        setTimeout(function () {
            messageElement.classList.remove('show');
            setTimeout(function () {
                messageElement.textContent = '';
                messageElement.className = 'alert';
            }, 300);
        }, 3000);
    }

    /*  
     * This Function handles deposit transactions with validation
     */
    function handleDeposit() {
        const amount = parseFloat(amountInput.value);

        if (isNaN(amount) || amount <= 0) {
            showMessage('Please enter a valid positive amount', true);
            return;
        }

        currentBalance += amount;
        updateBalanceDisplay();
        showMessage(`Successfully deposited $${amount.toFixed(2)}`);
        amountInput.value = '';
    }

    /*  
     * This function handles withdrawal transactions with balance validation
     */
    function handleWithdraw() {
        const amount = parseFloat(amountInput.value);

        if (isNaN(amount) || amount <= 0) {
            showMessage('Please enter a valid positive amount', true);
            return;
        }

        if (amount > currentBalance) {
            showMessage('Insufficient funds for withdrawal', true);
            return;
        }

        currentBalance -= amount;
        updateBalanceDisplay();
        showMessage(`Successfully withdrew $${amount.toFixed(2)}`);
        amountInput.value = '';
    }

    // Event listeners
    depositBtn.addEventListener('click', handleDeposit);
    withdrawBtn.addEventListener('click', handleWithdraw);

    // Initial setup
    updateBalanceDisplay();
}

// Initialize application
initializeBankApp();