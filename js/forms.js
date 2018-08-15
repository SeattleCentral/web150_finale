import { NameValidator } from './validators/name';
// import { PhoneValidator } from './validators/phone';
// import { EmailValidator } from './validators/email';
// import { PasswordValidator } from './validators/password';
// import { PasswordConfirmValidator } from './validators/password_confirm';
// import { AgreeTermsValidator } from './validators/agree_terms';

class RegisterForm {
    constructor(formId) {
        this.formId = formId;
        this.form = document.getElementById(formId);
        this.fields = [];
        this.setupFields();
        
        let submitButton = document.getElementById('submitButton');
        submitButton.addEventListener('click', (event) => {
            event.preventDefault();
            if (this.validForm()) {
                alert('Submited Successfully!');
            }
        });
    }
    
    setupFields() {
        // First Name
        let firstName = new NameValidator('firstName');
        this.fields.push(firstName);
        // Last Name
        let lastName = new NameValidator('lastName');
        this.fields.push(lastName);
        // // Phone
        // let phone = new PhoneValidator('phone');
        // this.fields.push(phone);
        // // Email
        // let email = new EmailValidator('email');
        // this.fields.push(email);
        // // Password
        // let password = new PasswordValidator('password');
        // this.fields.push(password);
        // // Password Confirm
        // let password2 = new PasswordConfirmValidator('password', 'password2');
        // this.fields.push(password2);
        // // Agree Terms
        // let agreeTerms = new AgreeTermsValidator('agreeTerms');
        // this.fields.push(agreeTerms);
    }
    
    validForm() {
        for (let field of this.fields) {
            if (!field.valid()) {
                field.showErrorMessage();
                field.element.focus();
                return false;
            }
        }
        return true;
    }
}

export { RegisterForm }

