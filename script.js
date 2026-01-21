document.getElementById("leadForm").addEventListener("submit", function (e) {
  e.preventDefault(); // stop reload

  // GTM can also listen to this event if needed
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: "form_submit_attempt"
  });

  // Redirect to thank you page
  window.location.href = "thank-you.html";
});


