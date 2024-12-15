// Smooth Scrolling for Navigation Links
document.querySelectorAll('header nav ul li a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').slice(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 70,
                behavior: 'smooth'
            });
        }
    });
});

// Toggle Login Button Background on Hover
const loginButton = document.querySelector('.login-btn');
loginButton.addEventListener('mouseover', () => {
    loginButton.style.backgroundColor = '#FFC107';
    loginButton.style.color = '#000';
});
loginButton.addEventListener('mouseout', () => {
    loginButton.style.backgroundColor = '#FF4081';
    loginButton.style.color = '#fff';
});

// Dynamic Footer Year
const footer = document.querySelector('footer p');
const currentYear = new Date().getFullYear();
footer.textContent = `© ${currentYear} Flamingo. All rights reserved.`;

// Gamification - Random Encouraging Messages
const messages = [
    "Great job! Keep going!",
    "You're doing amazing!",
    "Keep it up! You're learning fast!",
    "Fantastic effort!"
];
const randomMessageButton = document.createElement('button');
randomMessageButton.textContent = 'Get Motivation';
randomMessageButton.style = `
    background: #5A2A82; 
    color: #fff; 
    padding: 10px 20px; 
    margin: 20px auto; 
    display: block; 
    border: none; 
    border-radius: 5px; 
    cursor: pointer;
`;
randomMessageButton.addEventListener('click', () => {
    alert(messages[Math.floor(Math.random() * messages.length)]);
});
document.body.appendChild(randomMessageButton);

// Persistent Data Storage Example
function saveUserProgress(progress) {
    localStorage.setItem('flamingoProgress', JSON.stringify(progress));
}

function loadUserProgress() {
    const progress = localStorage.getItem('flamingoProgress');
    if (progress) {
        alert(`Welcome back! Your last progress: ${JSON.parse(progress)}`);
    }
}

window.addEventListener('load', () => {
    loadUserProgress();
    setTimeout(() => {
        saveUserProgress({ lessonsCompleted: 3, points: 150 });
        alert('Your progress has been saved!');
    }, 5000);
});
