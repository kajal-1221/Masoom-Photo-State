const year = document.getElementById("year");
year.textContent = new Date().getFullYear();

const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobileMenu");

hamburger.addEventListener("click", () => {
  mobileMenu.style.display =
    mobileMenu.style.display === "flex" ? "none" : "flex";

});

function sendToWhatsApp() {
  const fileInput = document.getElementById("fileInput");

  if (!fileInput.files.length) {
    alert("Please select a file first");
    return;
  }

  const message = encodeURIComponent(
    "Hello Masoom Photo State, I want print service. File attached.\n" +
    "Pages: __\n" +
    "Copies: __\n" +
    "Color/BW: __"
  );

  const whatsappURL =
    "https://wa.me/919525054775?text=" + message;

  window.open(whatsappURL, "_blank");
}

