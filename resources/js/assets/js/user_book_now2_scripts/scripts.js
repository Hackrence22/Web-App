document.getElementById('viewButton').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent form submission (if it's inside a form)
    window.location.href = 'user_room_review.html'; // Redirect to admin_panel.html
});

document.getElementById('view1Button').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent form submission (if it's inside a form)
    window.location.href = 'user_room_review2.html'; // Redirect to admin_panel.html
});
