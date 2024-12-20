const menuToggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');

menuToggle.addEventListener('click', () => {
    menu.classList.toggle('hidden');
});

// Placeholder for storing user data
let userData = {};

// Handle Google Login
function handleLogin(response) {
    // Get user details from the response if needed
    const userInfo = jwt_decode(response.credential); // Optional: Decode JWT to get user info
    console.log(userInfo);

    // Hide login container
    document.getElementById("login-container").classList.add("hidden");

    // Show carousel container
    document.getElementById("carousel-container").classList.remove("hidden");
}


// Handle Puzzle Answer Submission
ddocument.getElementById("puzzle-form").addEventListener("submit", function (event) {
    event.preventDefault();

    const userAnswer = document.getElementById("answer").value.trim();
    const correctAnswer = "42"; // Example correct answer

    // Display feedback
    const feedback = document.getElementById("feedback");
    if (userAnswer === correctAnswer) {
        feedback.textContent = "Correct! Well done.";
        feedback.classList.add("text-green-500");
    } else {
        feedback.textContent = "Wrong answer. Try again.";
        feedback.classList.add("text-red-500");
    }

    // Move to the feedback slide
    const carousel = new bootstrap.Carousel(document.getElementById("carouselExample"));
    carousel.next();
});


const { OAuth2Client } = require('google-auth-library');
const client = new OAuth2Client('652027832174-7bifdli2ipr0nv98o2uvns3b9q4jie7j.apps.googleusercontent.com');

app.post('/auth/callback', async (req, res) => {
    const token = req.body.credential; // Get the token from the client
    try {
        const ticket = await client.verifyIdToken({
            idToken: token,
            audience: '652027832174-7bifdli2ipr0nv98o2uvns3b9q4jie7j.apps.googleusercontent.com',
        });
        const payload = ticket.getPayload();
        const userId = payload['sub']; // Unique Google user ID
        const email = payload['email'];
        const name = payload['name'];

        // Store or process user information
        res.status(200).send({ userId, email, name });
    } catch (error) {
        res.status(400).send('Invalid Token');
    }
});
