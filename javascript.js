// otwieranie modala po kliknięciu na obrazek
document.querySelector(".certyfikat1").addEventListener("click", function() {
  document.getElementById("cert_modal").style.display = "block";
});

document.querySelector(".overlay").addEventListener("click", function() {
  document.getElementById("cert_modal").style.display = "block";
});
// zamykanie po kliknięciu w tło
window.addEventListener("click", function(e) {
  const modal = document.getElementById("cert_modal");
  if (e.target === modal) {
    modal.style.display = "none";
  }
});
