const imageInput = document.getElementById("image");
const uploadBtn = document.getElementById("uploadBtn");
const status = document.getElementById("status");
const preview = document.getElementById("preview");

uploadBtn.addEventListener("click", async () => {

    const file = imageInput.files[0];

    if (!file) {
        status.innerText = "Please Select Image";
        return;
    }

    const formData = new FormData();

    formData.append("image", file);

    status.innerText = "Uploading...";

    try {

        const response = await fetch("/api/upload", {

            method: "POST",

            body: formData

        });

        const data = await response.json();

        if (data.success) {

            status.innerText = "Upload Successful";

            preview.src = data.imageUrl;

            preview.style.display = "block";

        } else {

            status.innerText = data.message;

        }

    } catch (error) {

        status.innerText = error.message;

    }

});