const openModal = document.querySelector("#open-modal");
const modal = document.querySelector("#modal");
const closeModal = document.querySelector("#close-modal");

const openImage = document.querySelector("#open-image");
const image = document.querySelector("#image-modal");
const closeImage = document.querySelector("#close-image");

openModal.addEventListener("click", () => {
    modal.classList.remove("hidden");
    modal.classList.add("grid");
});

closeModal.addEventListener("click", () => {
    modal.classList.remove("grid");
    modal.classList.add("hidden");
});

openImage.addEventListener("click", () => {
    image.classList.remove("hidden");
    image.classList.add("grid");
});

closeImage.addEventListener("click", () => {
    image.classList.remove("grid");
    image.classList.add("hidden");
});
