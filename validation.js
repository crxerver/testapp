let showErrors = false;

function validatePage1() {
    let isValid = true;
    const designDescription = document.getElementById('designDescription');

    // Clear previous error messages
    document.getElementById('uploadSketchError').style.display = 'none';
    document.getElementById('designDescriptionError').style.display = 'none';

    // Validate design description
    if (showErrors && !designDescription.value) {
        document.getElementById('designDescriptionError').innerText = 'Design description is required.';
        document.getElementById('designDescriptionError').style.display = 'block';
        isValid = false;
    }

    return isValid;
}

function validatePage2() {
    let isValid = true;

    const firstTimeFields = ['companyName', 'fullName', 'phone', 'email', 'province', 'town', 'physicalAddress', 'zipCode'];
    const returningFields = ['customerID'];
    const popupYes = document.getElementById('popupYes');
    const popupNo = document.getElementById('popupNo');

    // Clear previous error messages
    firstTimeFields.concat(returningFields).forEach(id => {
        const field = document.getElementById(id);
        const errorElement = document.getElementById(id + 'Error');
        if (errorElement) {
            errorElement.style.display = 'none';
        }
        if (field) {
            field.classList.remove('is-invalid');
        }
    });

    // Validate fields based on selection
    if (popupYes.classList.contains('active')) {
        firstTimeFields.forEach(id => {
            const field = document.getElementById(id);
            const errorElement = document.getElementById(id + 'Error');
            if (field && errorElement) {
                if (!field.value.trim()) {
                    field.classList.add('is-invalid');
                    errorElement.innerText = 'This field is required.';
                    errorElement.style.display = 'block';
                    isValid = false;
                } else if (id === 'phone' && !/^(\d{1,12})$/.test(field.value)) {
                    field.classList.add('is-invalid');
                    errorElement.innerText = 'Phone number must be up to 12 digits.';
                    errorElement.style.display = 'block';
                    isValid = false;
                } else if (id === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(field.value)) {
                    field.classList.add('is-invalid');
                    errorElement.innerText = 'Enter a valid email address.';
                    errorElement.style.display = 'block';
                    isValid = false;
                } else if (id === 'zipCode' && !/^\d{1,4}$/.test(field.value)) {
                    field.classList.add('is-invalid');
                    errorElement.innerText = 'Zip code must be up to 4 digits.';
                    errorElement.style.display = 'block';
                    isValid = false;
                }
            }
        });
    } else if (popupNo.classList.contains('active')) {
        returningFields.forEach(id => {
            const field = document.getElementById(id);
            const errorElement = document.getElementById(id + 'Error');
            if (field && errorElement) {
                if (!field.value.trim()) {
                    field.classList.add('is-invalid');
                    errorElement.innerText = 'This field is required.';
                    errorElement.style.display = 'block';
                    isValid = false;
                }
            }
        });
    }

    document.getElementById('proceedPage3').disabled = !isValid;
    return isValid;
}

document.querySelectorAll('#formPage2 input').forEach(input => {
    input.addEventListener('blur', () => {
        validatePage2();
    });
});

function validatePage3() {
    let isValid = true;
    const paymentType = document.getElementById('paymentType');

    // Clear previous error messages
    document.getElementById('paymentTypeError').style.display = 'none';

    // Validate payment type
    if (showErrors && !paymentType.value) {
        document.getElementById('paymentTypeError').innerText = 'Select payment type.';
        document.getElementById('paymentTypeError').style.display = 'block';
        isValid = false;
    }

    return isValid;
}

// Export validation functions to be used in the main script
export { validatePage1, validatePage2, validatePage3, setShowErrors };

function setShowErrors(value) {
    showErrors = value;
}
