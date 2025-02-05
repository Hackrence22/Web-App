document.getElementById('roomsLink').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default action of the anchor
    const roomsDropdown = document.getElementById('roomsDropdown');
    
    // Toggle between block and none to show/hide the dropdown
    roomsDropdown.style.display = (roomsDropdown.style.display === 'block') ? 'none' : 'block';
});

document.addEventListener('click', function(event) {
    const roomsItem = document.querySelector('.rooms-item');
    const roomsDropdown = document.getElementById('roomsDropdown');

    if (!roomsItem.contains(event.target)) {
        roomsDropdown.style.display = 'none'; // Close dropdown if clicked outside
    }
});

