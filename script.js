// DOM Elements
const modalBtn = document.querySelector(".content-btn-black");
const modalBg = document.querySelector(".bg-modal");
const closeModal = document.querySelector(".modal-rdv-close");

//Launch Modal
modalBtn.addEventListener("click", function(launchModal) {
	modalBg.style.display = "block";
});

//Close Modal
closeModal.addEventListener("click", function(closeModal) {
	modalBg.style.display = "none";
});