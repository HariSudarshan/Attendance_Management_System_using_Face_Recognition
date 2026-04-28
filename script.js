// Toggle between login and signup forms
function toggleForm() {
    document.getElementById("login-form").style.display = 
        document.getElementById("login-form").style.display === "none" ? "block" : "none";
    document.getElementById("signup-form").style.display = 
        document.getElementById("signup-form").style.display === "none" ? "block" : "none";
}

// Register a new user
function registerUser() {
    const email = document.getElementById("signup-email").value;
    const password = document.getElementById("signup-password").value;
    localStorage.setItem("userEmail", email);
    localStorage.setItem("userPassword", password);
    alert("Signup successful! Please login.");
    toggleForm();
}

// Login user and redirect to index.html
function loginUser() {
    const email = document.getElementById("login-email").value;
    const password = document.getElementById("login-password").value;
    const storedEmail = localStorage.getItem("userEmail");
    const storedPassword = localStorage.getItem("userPassword");
    if (email === storedEmail && password === storedPassword) {
        localStorage.setItem("isAuthenticated", "true");
        window.location.href = "index.html"; // Redirect to home page on success
    } else {
        alert("Invalid email or password");
    }
}

// Logout user and redirect to loginSignup.html
function logoutUser() {
    localStorage.removeItem("isAuthenticated");
    window.location.href = "loginSignup.html";
}

// Check authentication status on page load
function checkAuth() {
    const isAuthenticated = localStorage.getItem("isAuthenticated") === "true";
    const currentPage = window.location.pathname.split('/').pop() || 'index.html'; // Get current page name
    
    // If not authenticated and not on loginSignup.html, redirect to login
    if (!isAuthenticated && currentPage !== "loginSignup.html") {
        window.location.href = "loginSignup.html";
    }
    // If authenticated and on loginSignup.html, redirect to index.html
    else if (isAuthenticated && currentPage === "loginSignup.html") {
        window.location.href = "index.html";
    }
}

// Attendance records
let attendanceRecords = [];

// Facial Recognition Check-in (Placeholder)
function facialRecognition() {
    alert("Facial Recognition system will be integrated later.");
    
}

// Function to update the attendance table
function updateAttendanceTable(name, time) {
    const tableBody = document.querySelector("#attendanceTable tbody");
    const newRow = document.createElement("tr");
    newRow.innerHTML = `<td>${name}</td><td>${time}</td>`;
    tableBody.appendChild(newRow);
}

// Scheduling smart board usage
function scheduleResources() {
    const schedule = "Smart Board: Available from 2 PM to 4 PM today.";
    document.getElementById("resource-status").innerHTML = `<p>${schedule}</p>`;
}

// Viewing maintenance schedule
function viewMaintenance() {
    const maintenance = "Next classroom maintenance scheduled for 25th February 2025.";
    document.getElementById("resource-status").innerHTML = `<p>${maintenance}</p>`;
}

// Display on smart board (Placeholder)
function displayOnSmartBoard() {
    alert("Lesson plan displayed on smart board.");
}

// Collecting feedback from students
function collectFeedback() {
    const feedback = prompt("Enter your feedback for today's lesson:");
    if (feedback) {
        document.getElementById("feedback-data").innerHTML = `<p>Feedback received: ${feedback}</p>`;
    }
}

// Notes Upload Function
function uploadNotes() {
    const fileInput = document.getElementById('notesUpload');
    const file = fileInput.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            document.getElementById('notes-status').innerHTML = `Uploaded: ${file.name}`;
        };
        reader.readAsText(file);
    } else {
        document.getElementById('notes-status').innerHTML = 'No file selected.';
    }
}

// Sample Data for Attendance
const attendanceData = [
    { name: 'John Doe', checkinTime: '9:00 AM' },
    { name: 'Jane Smith', checkinTime: '9:05 AM' },
    { name: 'Michael Brown', checkinTime: '9:15 AM' }
];

// Chatbot Functionality
function sendQuery() {
    const chatbox = document.getElementById('chatbox');
    const userQuery = document.getElementById('chatInput').value;
    const botReply = document.createElement('p');
    
    botReply.innerHTML = `<strong>You:</strong> ${userQuery}`;
    chatbox.appendChild(botReply);
    
    const botResponse = document.createElement('p');
    if (userQuery.toLowerCase().includes('schedule')) {
        botResponse.innerHTML = `<strong>Chatbot:</strong> You can view the class schedule on your dashboard.`;
    } else if (userQuery.toLowerCase().includes('report')) {
        botResponse.innerHTML = `<strong>Chatbot:</strong> Student reports can be generated in the Reports section.`;
    } else {
        botResponse.innerHTML = `<strong>Chatbot:</strong> I'm here to help! Please ask about schedules, reports, or general queries.`;
    }
    chatbox.appendChild(botResponse);
    document.getElementById('chatInput').value = '';
}