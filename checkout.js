import { validatePage1, validatePage2, validatePage3, setShowErrors } from './validation.js';

document.addEventListener('DOMContentLoaded', function() {
    const colorPickers = document.querySelectorAll('.color-picker-container input[type="color"]');

    colorPickers.forEach(picker => {
        picker.addEventListener('input', (event) => {
            const colorId = event.target.id;
            const hiddenField = document.getElementById(`hidden${colorId.charAt(0).toUpperCase() + colorId.slice(1)}`);
            hiddenField.value = event.target.value;
        });
    });

    // Add the rest of your existing event listeners and code here
});

document.addEventListener('DOMContentLoaded', function() {
    const page1 = document.getElementById('page1');
    const page2 = document.getElementById('page2');
    const page3 = document.getElementById('page3');
    const firstTimeSection = document.getElementById('firstTimeSection');
    const returningCustomerSection = document.getElementById('returningCustomerSection');
    const popupYes = document.getElementById('popupYes');
    const popupNo = document.getElementById('popupNo');
    const proceedPage2 = document.getElementById('proceedPage2');
    const proceedPage3 = document.getElementById('proceedPage3');
    const submitForm = document.getElementById('submitForm');

    // Event listeners
    proceedPage2.addEventListener('click', () => {
        setShowErrors(true);
        if (validatePage1()) {
            page1.classList.remove('active');
            page2.classList.add('active');
        }
    });

    document.getElementById('backPage1').addEventListener('click', () => {
        page1.classList.add('active');
        page2.classList.remove('active');
    });

    document.getElementById('backPage2').addEventListener('click', () => {
        page2.classList.add('active');
        page3.classList.remove('active');
    });

    proceedPage3.addEventListener('click', () => {
        setShowErrors(true);
        if (validatePage2()) {
            page2.classList.remove('active');
            page3.classList.add('active');
        }
    });

    submitForm.addEventListener('click', () => {
        setShowErrors(true);
        if (validatePage1() && validatePage2() && validatePage3()) {
            alert('Submitted successfully!');
            window.location.href = 'services.html'; // Redirect or perform submission
        }
    });

    popupYes.addEventListener('click', () => {
        firstTimeSection.style.display = 'block';
        returningCustomerSection.style.display = 'none';
        popupYes.classList.add('active');
        popupNo.classList.remove('active');
    });

    popupNo.addEventListener('click', () => {
        firstTimeSection.style.display = 'none';
        returningCustomerSection.style.display = 'block';
        popupNo.classList.add('active');
        popupYes.classList.remove('active');
    });

    // Real-time validation
    document.querySelectorAll('#formPage1 input, #formPage1 textarea').forEach(input => {
        input.addEventListener('input', () => {
            setShowErrors(true);
            validatePage1();
        });
    });

    document.querySelectorAll('#formPage2 input, #formPage2 select').forEach(input => {
        input.addEventListener('input', () => {
            setShowErrors(true);
            validatePage2();
        });
    });

    document.querySelectorAll('#formPage3 select').forEach(input => {
        input.addEventListener('input', () => {
            setShowErrors(true);
            validatePage3();
        });
    });
});
