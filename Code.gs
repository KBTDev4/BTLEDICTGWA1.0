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
        document.getElementById('result').innerText = gwa;  // Removed "GWA:" from here

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

        // Replace the URL with the one you provided
  fetch('https://script.google.com/macros/s/AKfycbzm_cndE99YVQvJjlh7Rq8Q93bp_EUMolF8ty4tv1TxtKsFyHIq59VYRdcL4mDgTOUGuA/exec', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
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
    console.log('Success:', data);
})
.catch((error) => {
    console.error('Error:', error);
});
