fetch('https://script.google.com/macros/s/AKfycbwznzPcopti0ERojtfMPs2i7KcUdgXo7autpS30kdrq-UfD5lh8AYU9DzWsK2wGFz3gOQ/exec', {
    method: 'POST',
    mode: 'cors',  // Enable CORS
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        name: "John Doe",
        grades: [1.0, 1.25, 1.5, 2.0, 1.75, 1.0, 2.0, 2.25, 1.0, 1.5],  // Example grades
        units: [3, 3, 2, 2, 1, 3, 3, 2, 2, 1],  // Example units
        gwa: 1.5,
        status: "Passed"
    })
})
.then(response => response.json())
.then(data => {
    console.log('Success:', data);
})
.catch((error) => {
    console.error('Error:', error);
});
