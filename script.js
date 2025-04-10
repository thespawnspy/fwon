document.getElementById("predictionForm").addEventListener("submit", function(event) {
  event.preventDefault();

  const form = event.target;
  const formData = new FormData(form);

  fetch("https://script.google.com/macros/s/AKfycbx4YDBovcPP5rtj4UcdMQitWAP9llvaiFSIICT1lPoL6hKGo0jYSuIA1T6MjQ6VHa/exec", {
    method: "POST",
    body: new URLSearchParams(formData)
  })
  .then(() => {
    alert("Prediction submitted!");
    form.reset();
  })
  .catch(error => {
    alert("Error submitting prediction. Check console.");
    console.error("Submission error:", error);
  });
});
