document.getElementById("loginButton").addEventListener("click", function () {
  var email = document.getElementById("emailInput").value;
  var password = document.getElementById("passwordInput").value;
  // Perform email validation
  if (!email.includes("@")) {
    alert("Please enter a valid email address");
    return;
  }
  // Perform password validation
  if (password.length < 8 || !/[!@#$%^&*()_+]/.test(password)) {
    alert(
      "Please enter a valid password (minimum 8 characters with at least one special character)"
    );
    return;
  }
  // If validation passes, redirect to index.html
  window.location.href = "/FILL ATTENDANCE/index.html";
});

// window.location.href = '../FILL ATTENDANCE/index.html';
