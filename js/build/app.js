/*
 * Team: Instructors Anonymous
 * Author: Joshua Wedekind
 * Date Submitted: 2018-08-15
 */

var NameValidator = function NameValidator(fieldId) {
    this.id = fieldId;
    this.element = document.getElementById(fieldId);
    console.log(this.element.parentElement);
    this.errorElement = this.element.parentElement.getElementsByClassName('invalid-feedback')[0];
    console.log(this.errorElement);
    this.setup();
};

NameValidator.prototype.setup = function () {
    var _this = this;

    this.element.addEventListener('keyup', function (event) {
        if (_this.valid()) {
            _this.hideErrorMessage();
        } else {
            _this.showErrorMessage();
        }
    }, false);
};

NameValidator.prototype.valid = function () {
    var value = this.element.value;
    return (/^\D{2,}/.test(value)
    );
};

NameValidator.prototype.hideErrorMessage = function () {
    this.errorElement.style.display = 'none';
};

NameValidator.prototype.showErrorMessage = function () {
    this.errorElement.style.display = 'block';
    console.log(this.errorElement);
};

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// import { PhoneValidator } from './validators/phone';
// import { EmailValidator } from './validators/email';
// import { PasswordValidator } from './validators/password';
// import { PasswordConfirmValidator } from './validators/password_confirm';
// import { AgreeTermsValidator } from './validators/agree_terms';

var RegisterForm = function () {
    function RegisterForm(formId) {
        var _this = this;

        _classCallCheck(this, RegisterForm);

        this.formId = formId;
        this.form = document.getElementById(formId);
        this.fields = [];
        this.setupFields();

        var submitButton = document.getElementById('submitButton');
        submitButton.addEventListener('click', function (event) {
            event.preventDefault();
            if (_this.validForm()) {
                alert('Submited Successfully!');
            }
        });
    }

    _createClass(RegisterForm, [{
        key: 'setupFields',
        value: function setupFields() {
            // First Name
            var firstName = new NameValidator('firstName');
            this.fields.push(firstName);
            // Last Name
            var lastName = new NameValidator('lastName');
            this.fields.push(lastName);
            // ...
        }
    }, {
        key: 'validForm',
        value: function validForm() {
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = this.fields[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var field = _step.value;

                    if (!field.valid()) {
                        field.showErrorMessage();
                        field.element.focus();
                        return false;
                    }
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator.return) {
                        _iterator.return();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }

            return true;
        }
    }]);

    return RegisterForm;
}();

/* global $ */

$(document).ready(function () {
    var registerForm = new RegisterForm('registerForm');
});
