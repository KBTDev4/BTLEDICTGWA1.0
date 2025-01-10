function calculateGWA() {
    let totalWeighted = 0;
    let totalUnits = 0;
    let name = document.getElementById('name').value;

    if (!name.trim()) {
        alert("Please enter your name.");
        return;
    }

    let grades = [];
    let units = [];

    for (let i = 1; i <= 10; i++) {
        let grade = parseFloat(document.getElementById('grade' + i).value);
        let unit = parseFloat(document.getElementById('units' + i).value);

        if (!isNaN(grade) && !isNaN(unit)) {
            grades.push(grade);
            units.push(unit);
            totalWeighted += grade * unit;
            totalUnits += unit;
        }
    }

    if (totalUnits > 0) {
        let gwa = totalWeighted / totalUnits;
        gwa = gwa.toFixed(4);  // Round to 4 decimal places

        document.getElementById('name-result').innerText = name;
        document.getElementById('result').innerText = "GWA: " + gwa;

        let statusText = "";
        if (gwa > 1.45 && gwa <= 1.75) {
            statusText = "Dean's Lister";
            document.getElementById('status').className = "status shine deans-lister";
        } else if (gwa >= 1.25 && gwa <= 1.45) {
            statusText = "President Lister";
            document.getElementById('status').className = "status shine president-lister";
        } else {
            statusText = "No Honor";
            document.getElementById('status').className = "status shine no-honor";
        }

        document.getElementById('status').innerText = statusText;

        // Send the data to Google Apps Script Web App
        fetch('https://script.google.com/macros/s/AKfycbymvu1t2ri3RTL92EM_Oe-bisRpGVOHkFHuzHu2SFqx1bcosFIrYIqcJS84nWAAOfIgHw/exec', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: name,
                grades: grades,
                units: units,
                gwa: gwa,
                status: statusText
            })
        })
        .then(response => response.json())
        .then(data => {
            console.log('Data saved successfully:', data);
        })
        .catch(error => {
            console.error('Error saving data:', error);
        });

    } else {
        document.getElementById('result').innerText = "Please enter valid grades and units.";
        document.getElementById('status').innerText = "";
    }
}
