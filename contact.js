// Get the form and elements
const form = document.querySelector('form');
const nameField = document.getElementById('name');
const emailField = document.getElementById('email');
const subjectField = document.getElementById('subject');
const messageField = document.getElementById('message');

// Form submit event listener
form.addEventListener('submit', function(event) {
    // Prevent form from submitting
    event.preventDefault();

    // Simple validation
    if (nameField.value.trim() === '') {
        alert('Please enter your full name');
        return;
    }

    if (emailField.value.trim() === '') {
        alert('Please enter your email address');
        return;
    }

    if (messageField.value.trim() === '') {
        alert('Please enter your message');
        return;
    }

    // Show success alert if all validations pass
    alert('Thank you for your message! We will get back to you soon.');
    
    // Optionally, clear the form after submission
    form.reset();
});
