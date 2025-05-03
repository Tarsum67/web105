// Product Modal
document.addEventListener("DOMContentLoaded", () => {
  const orderButtons = document.querySelectorAll(".btn-primary");

  orderButtons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();

      const orderModal = new bootstrap.Modal(
        document.getElementById("orderModal")
      );
      orderModal.show();
    });
  });

  const addToCartBtn = document.getElementById("addToCartBtn");
  if (addToCartBtn) {
    addToCartBtn.addEventListener("click", () => {
      const toastEl = document.getElementById("thankYouToast");
      const toast = new bootstrap.Toast(toastEl);
      toast.show();

      const modal = bootstrap.Modal.getInstance(
        document.getElementById("orderModal")
      );
      modal.hide();
    });
  }
  const toast = new bootstrap.Toast(toastEl, { delay: 3000 });
  toast.show();
});
