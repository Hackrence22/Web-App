document.getElementById('loginButton').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent form submission (if it's inside a form)
    window.location.href = 'landlord_panel.html'; // Redirect to admin_panel.html
});
