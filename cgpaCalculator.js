document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('cgpaForm');
    const resultDiv = document.getElementById('result');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        // Fetch CGPA value from input
        const cgpa = parseFloat(document.getElementById('cgpaInput').value);

        // Perform CGPA to percentage conversion
        let percentage;

        if (cgpa >= 4.00 && cgpa < 4.75) {
            percentage = cgpa * 6.6 + 13.5;
        } else if (cgpa >= 4.75 && cgpa < 5.75) {
            percentage = cgpa * 10 - 2.5;
        } else if (cgpa >= 5.75 && cgpa < 6.75) {
            percentage = cgpa * 5 + 26.25;
        } else if (cgpa >= 6.75 && cgpa < 8.25) {
            percentage = cgpa * 10 - 7.5;
        } else if (cgpa >= 8.25 && cgpa < 9.50) {
            percentage = cgpa * 12 - 25;
        } else if (cgpa >= 9.50 && cgpa <= 10.00) {
            percentage = cgpa * 20 - 100;
        } else {
            resultDiv.innerHTML = '<p class="error">Invalid CGPA. Please enter a valid CGPA between 4.00 and 10.00.</p>';
            return;
        }

        // Display result
        resultDiv.innerHTML = `<p><b>Percentage: ${percentage.toFixed(2)}% </b></p>`;
    });
});
