// Initialize Cloudinary Upload Widget
const cloudinaryWidget = cloudinary.createUploadWidget({
    cloudName: 'ddaeq2zfn',
    uploadPreset: 'tdayhujp',
    clientAllowedFormats: ['jpg', 'jpeg', 'png', 'pdf'],  // Allowed formats
    sources: ['local', 'url', 'camera'],  // Upload sources
    multiple: false,  // Single file upload
    maxFileSize: 5000000  // Max file size (5 MB)
}, (error, result) => { 
    if (!error && result && result.event === "success") { 
        console.log('Done! Here is the file info: ', result.info);
        document.getElementById('successMessage').style.display = 'block';
    }
});

// Function to handle file selection and button text change
function handleFileSelection(event) {
    const fileInput = event.target;
    const selectImageButton = document.querySelector(".upload-sketch-select-image");
    
    if (fileInput.files.length > 0) {
        selectImageButton.textContent = 'Upload';
        selectImageButton.onclick = function() {
            cloudinaryWidget.open();
        };
    }
}

// Attach event listener to file input
document.getElementById("fileUpload").addEventListener("change", handleFileSelection, false);

// Initialize widget open event for button
document.querySelector(".upload-sketch-select-image").addEventListener("click", function() {
    if (this.textContent === 'Upload') {
        cloudinaryWidget.open();
    }
}, false);
