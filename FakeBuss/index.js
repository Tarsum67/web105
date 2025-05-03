
//contact form
emailjs.init("oReJ6sX-h4G2hS1dM");

function sendMail() {
    var params = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      message: document.getElementById("message").value,
    };
  
    const serviceID = "service_rhf4mpo";
    const templateID = "template_v96y0nf";
  
    emailjs.send(serviceID, templateID, params)
      .then(res => {
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";
  
        const popup = document.getElementById("success-popup");
        popup.style.display = "block";
  
        setTimeout(() => {
          popup.style.display = "none";
        }, 3000);
      })
      .catch(err => {
        console.log("FAILED...", err);
        alert("Message failed to send. Try again.");
      });
  }

  // Product Modal
document.addEventListener("DOMContentLoaded", () => {
    const orderButtons = document.querySelectorAll(".btn-primary");
  
    orderButtons.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.preventDefault();
  
        const orderModal = new bootstrap.Modal(document.getElementById("orderModal"));
        orderModal.show();
      });
    });
  
 
    const addToCartBtn = document.getElementById("addToCartBtn");
    if (addToCartBtn) {
      addToCartBtn.addEventListener("click", () => {
        const toastEl = document.getElementById("thankYouToast");
        const toast = new bootstrap.Toast(toastEl);
        toast.show();
  
        const modal = bootstrap.Modal.getInstance(document.getElementById("orderModal"));
        modal.hide();
      });
    }
  });
  
  