document.addEventListener('DOMContentLoaded', () => {
    initializeNavigation();
    initializeForms();
    initializeDashboard();
    initializeIssueDetails();
    initializeAppointmentBooking();
});


// Initialize form submission handlers
function initializeForms() {
    document.querySelectorAll('form').forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            handleFormSubmission(this);
        });
    });
}

function handleFormSubmission(form) {
    const formData = new FormData(form);
    // Replace with actual form submission logic
    console.log('Form data:', Object.fromEntries(formData.entries()));
    alert('Form submitted!');
}

// Load and initialize dashboard content
function initializeDashboard() {
    const dashboardOverview = document.getElementById('overview');
    if (dashboardOverview) {
        loadDashboardContent();
    }
}

function loadDashboardContent() {
    const appointmentsSection = document.getElementById('appointments');
    const resourcesSection = document.getElementById('resources');

    // Simulate fetching data from server
    const appointments = [
        { date: '2024-08-01', time: '10:00 AM', doctor: 'Dr. Smith' },
        { date: '2024-08-05', time: '02:00 PM', doctor: 'Dr. Jones' }
    ];

    const resources = [
        { title: 'Understanding PMS', link: '#' },
        { title: 'Endometriosis Treatment Options', link: '#' }
    ];

    appointments.forEach(appointment => {
        const appointmentItem = document.createElement('div');
        appointmentItem.classList.add('appointment-item');
        appointmentItem.innerHTML = `<p>${appointment.date} at ${appointment.time} with ${appointment.doctor}</p>`;
        appointmentsSection.appendChild(appointmentItem);
    });

    resources.forEach(resource => {
        const resourceItem = document.createElement('div');
        resourceItem.classList.add('resource-item');
        resourceItem.innerHTML = `<a href="${resource.link}">${resource.title}</a>`;
        resourcesSection.appendChild(resourceItem);
    });
}

// Load and initialize issue details content
function initializeIssueDetails() {
    const issueDetails = document.getElementById('issue-details');
    if (issueDetails) {
        loadIssueDetails();
    }
}

function loadIssueDetails() {
    const issues = [
        { id: 'pms', title: 'Premenstrual Syndrome (PMS)', content: 'Details about PMS...' },
        { id: 'endometriosis', title: 'Endometriosis', content: 'Details about Endometriosis...' }
        // Add more issues here
    ];

    issues.forEach(issue => {
        const issueArticle = document.createElement('article');
        issueArticle.id = issue.id;
        issueArticle.innerHTML = `<h3>${issue.title}</h3><p>${issue.content}</p>`;
        document.getElementById('issue-details').appendChild(issueArticle);
    });
}

// Initialize appointment booking form
function initializeAppointmentBooking() {
    const bookAppointmentForm = document.querySelector('#book-appointment form');
    if (bookAppointmentForm) {
        bookAppointmentForm.addEventListener('submit', function(e) {
            e.preventDefault();
            bookAppointment();
        });
    }
}

function bookAppointment() {
    const doctor = document.getElementById('doctor').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;

    if (!doctor || !date || !time) {
        alert('Please fill in all fields.');
        return;
    }

    // Simulate booking appointment with server
    console.log(`Appointment booked with ${doctor} on ${date} at ${time}.`);
    alert(`Appointment booked with ${doctor} on ${date} at ${time}.`);
}
