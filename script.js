document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("registration-form");

  form.addEventListener("reset", function () {
    clearErrors();
  });

  form.addEventListener("submit", function (event) {
    clearErrors();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    let isValid = true;

    if (name === "") {
      showError("name-error", "Please enter your full name.");
      isValid = false;
      document.getElementById("name").focus();
    }

    if (email === "") {
      showError("email-error", "Please enter your email address.");
      isValid = false;
      document.getElementById("email").focus();
    } else if (!validateEmail(email)) {
      showError("email-error", "Please enter a valid email address.");
      isValid = false;
      document.getElementById("email").focus();
    }

    if (password === "") {
      showError("password-error", "Please create a password.");
      isValid = false;
      document.getElementById("password").focus();
    } else if (password.length < 8) {
      showError(
        "password-error",
        "Password must be at least 8 characters long."
      );
      isValid = false;
      document.getElementById("password").focus();
    }

    if (!isValid) {
      event.preventDefault();
    } else {
      event.preventDefault();
      alert(
        "You have registered successfully! Please check your email to confirm."
      );
      form.reset();
    }
  });

  function showError(id, message) {
    const errorElement = document.getElementById(id);
    errorElement.textContent = message;
    errorElement.style.color = "#ff3535";
  }

  function clearErrors() {
    const errorElements = document.querySelectorAll(".error-message");
    errorElements.forEach(function (element) {
      element.textContent = "";
    });
  }

  function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
});
