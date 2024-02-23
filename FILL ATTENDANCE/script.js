document.querySelectorAll('.timeButton').forEach(function(button) {
  button.addEventListener('click', function() {
    var currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    button.textContent = currentTime;
    button.style.color = 'black';
    button.style.fontWeight = 'bold';
    button.disabled = true; // Optional: Disable the button after showing the time
  });
});