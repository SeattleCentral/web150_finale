/*
 * Team: Instructors Anonymous
 * Author: Joshua Wedekind
 * Date Submitted: 2018-08-15
 */

var NameValidator = function(fieldId) {
    this.id = fieldId;
    this.element = document.getElementById(fieldId);
    console.log(this.element.parentElement);
    this.errorElement = this.element.parentElement
                            .getElementsByClassName('invalid-feedback')[0];
    console.log(this.errorElement);
    this.setup();
}

NameValidator.prototype.setup = function() {
    this.element.addEventListener('keyup', (event) => {
        if (this.valid()) {
            this.hideErrorMessage();
        } else {
            this.showErrorMessage();
        }
    }, false);
}

NameValidator.prototype.valid = function() {
    let value = this.element.value;
    return /^\D{2,}/.test(value);
}

NameValidator.prototype.hideErrorMessage = function() {
    this.errorElement.style.display = 'none';
}

NameValidator.prototype.showErrorMessage = function() {
    this.errorElement.style.display = 'block';
    console.log(this.errorElement); 
}

export { NameValidator }