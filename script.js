document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
  
    form.addEventListener("submit", function (e) {
      e.preventDefault();
  
      const inputs = form.querySelectorAll("input, select, textarea");
      let isValid = true;
  
      inputs.forEach((input) => {
        if (!input.value.trim()) {
          isValid = false;
          input.style.borderColor = "red";
        } else {
          input.style.borderColor = "#ddd";
        }
      });
  
      if (isValid) {
        alert("Thanks for reaching out! We'll get back to you shortly.");
        form.reset();
      } else {
        alert("Please fill in all fields before submitting.");
      }
    });
  });
  