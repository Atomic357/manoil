function sendMail(event) {
  // Prevent form reload
  if (event) event.preventDefault();

  // Collect form data
  let params = {
    name: document.getElementById('name').value,
    email: document.getElementById('email').value,
    subject: document.getElementById('subject').value,
    message: document.getElementById('message').value,
  };

  // Send the email via EmailJS
  emailjs
    .send("service_9h3tqs5", "template_8t9yugu", params)
    .then(function(response) {
      alert("✅ Email sent successfully!");
      console.log("SUCCESS", response);
      document.getElementById('contact-form').reset();
    })
    .catch(function(error) {
      alert("❌ Failed to send email. Please try again.");
      console.error("FAILED", error);
    });
}

// Attach listener safely (instead of inline onclick)
document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById("contact-form");
  if (form) {
    form.addEventListener("submit", sendMail);
  }
});