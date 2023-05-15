const dropArea = document.querySelector(".drop-area");
const dragText = dropArea.querySelector("h3");
const button = dropArea.querySelector("button");
const input = dropArea.querySelector("#input-file");

button.addEventListener("click", (e) => {
    input.click();
});

input.addEventListener ("change", (e) => {
    files = this.files;

})
