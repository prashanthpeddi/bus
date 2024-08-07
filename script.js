document.getElementById('login-form')?.addEventListener('submit', function(event) {
    event.preventDefault();
    window.location.href = 'home.html'; // Redirect to home page after login
});




// Home page functionality
// Simulate fetching data from cloud
function fetchData() {
    document.getElementById('num-buses').querySelector('p').innerText = '50';
    document.getElementById('buses-maintenance').querySelector('p').innerText = '10';
    document.getElementById('buses-operation').querySelector('p').innerText = '40';
}




function showSection(sectionId) {
    document.querySelectorAll('.hidden-section').forEach(section => {
        section.style.display = section.id === sectionId ? 'block' : 'none';
    });
}




document.getElementById('report-issue-btn').addEventListener('click', function() {
    showSection('report-issue-section');
});




document.getElementById('add-bus-btn').addEventListener('click', function() {
    showSection('add-bus-section');
});




document.getElementById('maintenance-schedule-btn').addEventListener('click', function() {
    showSection('maintenance-schedule-section');
    // Simulate fetching maintenance data
    const maintenanceList = document.getElementById('maintenance-list');
    maintenanceList.innerHTML = '<li>Bus 101 - Engine Issue</li><li>Bus 102 - Tire Replacement</li>';
});




document.getElementById('report-issue-form')?.addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Issue reported successfully.');
    document.getElementById('report-issue-form').reset();
    showSection(''); // Hide all sections and show buttons
});




document.getElementById('add-bus-form')?.addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Bus added successfully.');
    document.getElementById('add-bus-form').reset();
    showSection(''); // Hide all sections and show buttons
});
// Call fetchData on home page load
if (window.location.pathname.endsWith('home.html')) {
    fetchData();
}




// Analytics page functionality
function renderBarChart() {
    const ctx = document.getElementById('barChart').getContext('2d');
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Stop A', 'Stop B', 'Stop C', 'Stop D'],
            datasets: [{
                label: 'Passengers',
                data: [120, 150, 80, 100],
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}




// Call renderBarChart on analytics page load
if (window.location.pathname.endsWith('analytics.html')) {
    renderBarChart();
}




// Routes page functionality
let map;




function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: -34.397, lng: 150.644 },
        zoom: 8
    });




    // Simulate live bus location
    const busLocation = { lat: -34.397, lng: 150.644 };
    new google.maps.Marker({
        position: busLocation,
        map: map,
        title: 'Bus Location'
    });
}




// Call initMap on routes page load
if (window.location.pathname.endsWith('routes.html')) {
    initMap();
}




// Settings page functionality
document.getElementById('edit-profile-form')?.addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Profile updated successfully.');
});




document.getElementById('change-password-form')?.addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Password changed successfully.');
});
document.addEventListener('DOMContentLoaded', function() {
    // Dropdown menu
    const dropdown = document.querySelector('.dropdown');
    const dropdownContent = document.querySelector('.dropdown-content');
    dropdown.addEventListener('click', function() {
        dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';
    });




    // Show appropriate section based on option selected
    document.getElementById('edit-profile-option').addEventListener('click', function(event) {
        event.preventDefault();
        document.getElementById('edit-profile').style.display = 'block';
        document.getElementById('change-password').style.display = 'none';
    });




    document.getElementById('change-password-option').addEventListener('click', function(event) {
        event.preventDefault();
        document.getElementById('edit-profile').style.display = 'none';
        document.getElementById('change-password').style.display = 'block';
    });




    // Handle form submissions
    document.getElementById('edit-profile-form')?.addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Profile updated successfully.');
    });




    document.getElementById('change-password-form')?.addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Password changed successfully.');
    });
});
