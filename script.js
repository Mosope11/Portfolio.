document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contact-form");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("fullName").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name === "" || email === "" || message === "") {
      alert("Please fill in all fields.");
      return;
    }

    emailjs.send("service_baaq9lu", "template-mjmvgs6", {
      from_name: name,
      from_email: email,
      message: message
    })
    .then(function () {
      alert("Thank you! Your message has been sent.");
      form.reset();
    }, function (error) {
      alert("Oops! Something went wrong: " + error.text);
    });
  });
});
