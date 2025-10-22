function login() {
      const user = document.getElementById("username").value;
      const pass = document.getElementById("password").value;
      const msg = document.getElementById("message");

      // Simple validation
      if (user === "admin" && pass === "1234") {
        msg.style.color = "green";
        msg.textContent = "Login Successful!";
        setTimeout(() => {
          window.location.href = "dashboard.html"; // redirect
        }, 1000);
      } else {
        msg.style.color = "red";
        msg.textContent = "Invalid username or password!";
      }
    }