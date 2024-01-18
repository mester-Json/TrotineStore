document.addEventListener('DOMContentLoaded', function () {
    const contactForm = document.getElementById('container');

    if (!contactForm) {
        console.error("The form element with id 'contactForm' is missing.");
        return;
    }

    contactForm.addEventListener('submit', async function (event) {
        event.preventDefault();

        const NameInput = document.getElementById("nom");
        const FirstNameInput = document.getElementById("prenom");
        const MailInput = document.getElementById("mail");
        const PhoneInput = document.getElementById("telephone");
        const AdresseInput = document.getElementById("adresse");
        const RueInput = document.getElementById("rue");
        const CodePostalInput = document.getElementById("codepostal");
        const VilleInput = document.getElementById("ville");
        const PasswordInput = document.getElementById("motdepasse");
        const ConfirmPasswordInput = document.getElementById("confirme");

        if (!NameInput || !FirstNameInput || !MailInput || !PhoneInput || !AdresseInput || !RueInput || !CodePostalInput || !VilleInput || !PasswordInput || !ConfirmPasswordInput) {
            console.error("One or more required DOM elements are missing.");
            return;
        }

        const formData = {
            Name: NameInput.value,
            FirstName: FirstNameInput.value,
            Mail: MailInput.value,
            Phone: PhoneInput.value,
            Adresse: AdresseInput.value,
            Rue: RueInput.value,
            CodePostal: CodePostalInput.value,
            Ville: VilleInput.value,
            Password: PasswordInput.value,
            ConfirmPassword: ConfirmPasswordInput.value
        }

        const errors = {
            Name: false,
            FirstName: false,
            Mail: false,
            Phone: false,
            Adresse: false,
            Rue: false,
            CodePostal: false,
            Ville: false,
            Password: false,
            ConfirmPassword: false
        }

        const NameError = document.getElementById('NameError');
        const FirstNameError = document.getElementById('FirstNameError');
        const PhoneError = document.getElementById('PhoneError');
        const MailError = document.getElementById('EmailError');
        const AdresseError = document.getElementById('AdressError');
        const RueError = document.getElementById('RueError');
        const CodePostalError = document.getElementById('PostalCodeError');
        const VilleError = document.getElementById('CityError');
        const PasswordError = document.getElementById('PasswordError');
        const ConfirmPasswordError = document.getElementById('ConfirmPasswordError');

        NameError.style.visibility = 'hidden';
        FirstNameError.style.visibility = 'hidden';
        PhoneError.style.visibility = 'hidden';
        MailError.style.visibility = 'hidden';
        AdresseError.style.visibility = 'hidden';
        RueError.style.visibility = 'hidden';
        CodePostalError.style.visibility = 'hidden';
        VilleError.style.visibility = 'hidden';
        PasswordError.style.visibility = 'hidden';
        ConfirmPasswordError.style.visibility = 'hidden';

        const nameRegex = /^[a-zA-Z-áàâäãåçéèêëíìîïñóòôöõúùûüýÿæœÁÀÂÄÃÅÇÉÈÊËÍÌÎÏÑÓÒÔÖÕÚÙÛÜÝŸÆŒ._-\s]{5,10}$/;
        const phoneRegex = /^0[1-9]([-. ]?[0-9]{2}){4}$/;
        const mailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]{2,}\.[a-z]{2,4}$/;
        const adresseRegex = /^[a-zA-Z0-9._-]{10,}$/;
        const rueRegex = /^[a-zA-Z0-9._-]{10,}$/;
        const codepostalRegex = /^[0-9]{5}$/;
        const villeRegex = /^[a-zA-Z0-9._-]{5,}$/;
        const passwordRegex = /^[a-zA-Z0-9._-]{5,}$/;
        const confirmPasswordRegex = /^[a-zA-Z0-9._-]{5,}$/;

        if (!nameRegex.test(formData.Name)) {
            errors.Name = true;
            NameError.style.visibility = 'visible';
        }
        if (!nameRegex.test(formData.FirstName)) {
            errors.FirstName = true;
            FirstNameError.style.visibility = 'visible';
        }
        if (!phoneRegex.test(formData.Phone)) {
            errors.Phone = true;
            PhoneError.style.visibility = 'visible';
        }
        if (!mailRegex.test(formData.Mail)) {
            errors.Mail = true;
            MailError.style.visibility = 'visible';
        }
        if (!adresseRegex.test(formData.Adresse)) {
            errors.Adresse = true;
            AdresseError.style.visibility = 'visible';
        }
        if (!rueRegex.test(formData.Rue)) {
            errors.Rue = true;
            RueError.style.visibility = 'visible';
        }
        if (!codepostalRegex.test(formData.CodePostal)) {
            errors.CodePostal = true;
            CodePostalError.style.visibility = 'visible';
        }
        if (!villeRegex.test(formData.Ville)) {
            errors.Ville = true;
            VilleError.style.visibility = 'visible';
        }
        if (!passwordRegex.test(formData.Password)) {
            errors.Password = true;
            PasswordError.style.visibility = 'visible';
        }
        if (!confirmPasswordRegex.test(formData.ConfirmPassword)) {
            errors.ConfirmPassword = true;
            ConfirmPasswordError.style.visibility = 'visible';
        }
    })

    const passwordToggle = document.getElementById('Test1');
    const passwordInput = document.getElementById('motdepasse');

    passwordToggle.addEventListener('click', function () {
        if (passwordInput.type === 'password') {
            passwordInput.type = 'text';
        } else {
            passwordInput.type = 'password';
        }
    });
})