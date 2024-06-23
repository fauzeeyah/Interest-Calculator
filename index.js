function calculateInterest() {
    const principal = parseFloat(document.getElementById('principal').value);
    const rate = parseFloat(document.getElementById('rate').value);
    const years = parseInt(document.getElementById('years').value);

    if (isNaN(principal) || isNaN(rate) || isNaN(years)) {
        alert("Please enter valid numbers");
        return;
    }

    const interest = (principal * rate * years) / 100;
    const totalAmount = principal + interest;

    document.getElementById('interest-result').innerText = `Simple Interest: £${interest.toFixed(2)}`;
    document.getElementById('total-result').innerText = `Total Amount: £${totalAmount.toFixed(2)}`;

    const ctx = document.getElementById('myChart').getContext('2d');
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Principal', 'Interest', 'Total Amount'],
            datasets: [{
                label: 'Amount (£)',
                data: [principal, interest, totalAmount],
                backgroundColor: ['#4caf50', '#ff9800', '#2196f3'],
                borderColor: ['#388e3c', '#f57c00', '#1976d2'],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}
