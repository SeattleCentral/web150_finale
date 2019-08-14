/*
 * Team: Instructors Anonymous
 * Author: Joshua Wedekind
 * Date Submitted: 2018-08-15
 */

class NameValidator {

    constructor(fieldId) {
        this.id = fieldId;
        this.element = document.getElementById(fieldId);
        this.errorElement = this.element.parentElement
                                .getElementsByClassName('invalid-feedback')[0];
        this.setup();
    }

    setup() {
        this.element.addEventListener('keyup', (event) => {
            if (this.valid()) {
                this.hideErrorMessage();
            } else {
                this.showErrorMessage();
            }
        }, false);
    }

    valid() {
        let value = this.element.value;
        return /^\D{2,}/.test(value);
    }

    hideErrorMessage() {
        this.errorElement.style.display = 'none';
    }

    showErrorMessage() {
        this.errorElement.style.display = 'block';
    }
}

export { NameValidator }