document.getElementById('userForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const address = document.getElementById('address').value;
    const pincode = document.getElementById('pincode').value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    
    const foodChoices = Array.from(document.querySelectorAll('input[name="food"]:checked'))
        .map(el => el.value).join(', ');
    
    const state = document.getElementById('state').value;
    const country = document.getElementById('country').value;

    const table = document.getElementById('dataTable').getElementsByTagName('tbody')[0];
    const newRow = table.insertRow();

    newRow.insertCell().textContent = firstName;
    newRow.insertCell().textContent = lastName;
    newRow.insertCell().textContent = email;
    newRow.insertCell().textContent = address;
    newRow.insertCell().textContent = pincode;
    newRow.insertCell().textContent = gender;
    newRow.insertCell().textContent = foodChoices;
    newRow.insertCell().textContent = state;
    newRow.insertCell().textContent = country;

    document.getElementById('userForm').reset();
});
