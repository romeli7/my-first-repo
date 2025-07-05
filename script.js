// script.js

document.addEventListener('DOMContentLoaded', function () {
    console.log('JavaScript is now running!');

    const button = document.getElementById('demoButton');
    const messageArea = document.getElementById('messageDisplay');

    button.addEventListener('click', function () {
        console.log('Teleport button was clicked!');

        // Create a looping, immersive "teleporting" effect
        const messages = [
            '🔮 Initiating teleportation...',
            '🔮 Entering amethyst currents...',
            '🔮 Floating through violet light...',
            '🔮 Still teleporting... hold still...',
            '🔮 Coordinates realigning...'
        ];

        let index = 0;
        messageArea.textContent = messages[index];
        button.textContent = 'Teleporting...';

        // Clear any previous interval
        if (button.teleportInterval) {
            clearInterval(button.teleportInterval);
        }

        // Start looping through messages every 1.5 seconds
        button.teleportInterval = setInterval(function () {
            index = (index + 1) % messages.length;
            messageArea.textContent = messages[index];
        }, 1500);
    });
});