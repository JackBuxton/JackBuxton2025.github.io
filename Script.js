// script.js
// Adds a confirmation message when a donation is submitted
document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      // Create popup confirmation box
      const name = document.querySelector("#name")?.value || "Supporter";
      const popup = document.createElement("div");
      popup.className = "popup-box";
      popup.innerHTML = `
        <h3>Thank you, ${name}!</h3>
        <p>Your $1 monthly donation has been successfully processed.</p>
        <button id="closePopup">Close</button>
      `;
      document.body.appendChild(popup);

      // Close popup
      document.getElementById("closePopup").addEventListener("click", () => {
        popup.remove();
      });
    });
  }
});
