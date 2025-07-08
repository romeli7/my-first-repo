document.addEventListener('DOMContentLoaded', function () {
  const button = document.getElementById('demoButton');
  const messageArea = document.getElementById('messageDisplay');

  button.addEventListener('click', function () {
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

    if (button.teleportInterval) {
      clearInterval(button.teleportInterval);
    }

    button.teleportInterval = setInterval(function () {
      index = (index + 1) % messages.length;
      messageArea.textContent = messages[index];
    }, 1500);
  });
});
