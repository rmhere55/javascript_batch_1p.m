

const form = document.getElementById('userForm');


const dataList = document.getElementById('dataList');

// Load data from local storage on page load
function loadStoredData() {
    const storedData = JSON.parse(localStorage.getItem('formData')) || [];
    storedData.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `Name: ${item.name}, Email: ${item.email}, Age: ${item.age}`;
        dataList.appendChild(li);
    });
}

// Save form data to local storage
form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const age = document.getElementById('age').value;

    const formData = {
        name,
        email,
        age
    };

    // Get existing data from local storage
    const storedData = JSON.parse(localStorage.getItem('formData')) || [];

    // Add new data to the array
    storedData.push(formData);

    // Save the updated array back to local storage
    localStorage.setItem('formData', JSON.stringify(storedData));

    // Update the displayed list
    const li = document.createElement('li');
    li.textContent = `Name: ${formData.name}, Email: ${formData.email}, Age: ${formData.age}`;
    dataList.appendChild(li);

    // Clear the form fields
    form.reset();
});

// Load stored data on page load
window.onload = loadStoredData;
