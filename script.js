
document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    if (form) {
      form.addEventListener("submit", function (event) {
        event.preventDefault(); // Ακύρωση κανονικής υποβολής
        if (validateForm(form)) {
          showNotification("Η καταχώρηση υποβλήθηκε επιτυχώς!", "success");
          form.reset();
        } else {
          showNotification("Παρακαλώ συμπληρώστε όλα τα απαιτούμενα πεδία.", "error");
        }
      });
    }
  
    // Highlight του active link
    const links = document.querySelectorAll("nav a");
    links.forEach(link => {
      if (link.href === window.location.href) {
        link.classList.add("active-link");
      }
    });
  });
  
  // notification banner
  function showNotification(message, type) {
    const notification = document.createElement("div");
    notification.className = `notification ${type}`;
    notification.innerText = message;
    
    document.body.appendChild(notification);
  
    setTimeout(() => {
      notification.classList.add("show");
    }, 100); // μικρή καθυστέρηση για animation
  
    setTimeout(() => {
      notification.classList.remove("show");
      setTimeout(() => notification.remove(), 500); // remove μετά το animation
    }, 3000); // φεύγει μετά από 3 δευτερόλεπτα
  }
  
  // Έλεγχος για κενά πεδία
  function validateForm(form) {
    let valid = true;
    const inputs = form.querySelectorAll("input[required], textarea[required]");
    inputs.forEach(input => {
      if (!input.value.trim()) {
        valid = false;
        input.style.border = "2px solid red";
        input.classList.add("shake");
        setTimeout(() => input.classList.remove("shake"), 500);
      } else {
        input.style.border = "1px solid #ccc";
      }
    });
    return valid;
  }
  