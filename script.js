document.getElementById("leadForm").addEventListener("submit", function () {
  // This console log helps GTM debug mode
  console.log("Lead form submitted");

  // GTM can listen to this event
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: "lead_submit"
  });
});
