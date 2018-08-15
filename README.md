# WEB 150 Finale
The final exam/project for WEB 150 at Seattle Central College

## Context

Your team has been assigned to add JavaScript validation to a registration form for a popular e-commerce site.
The form can be found in `index.html` and you can preview it with Cloud9's "Live Preview" feature.

The company loses customers when they get frustrated with invalid form messages that show up only after the form is submitted.
Your team's mission is to add complete, client-side form validation using JavaScript. The validation errors should update 
as the user types (using the "keyup" event).

One of your teammates has already finished the NameValidator. Look at it for guidance.

## Instruction

1. Clone the [web-150-finale](https://ide.c9.io/halfnibble_1/web-150-finale) Cloud9 workspace. You need at least one clone per team.
2. Run `npm install` to make sure you have all the required dependencies.
3. Start Gulp with `gulp`.
4. Assign a validator function constructor to each member of your team. There are 5 validators total you may assign, 1 per team member
    - PhoneValidator
    - EmailValidator
    - PasswordValidator
    - PasswordConfirmValidator
    - AgreeTermsValidator
5. The instructions for each validator can be found in their corresping file in the `/js/validators` folder.
6. Make sure you update the file comments with your name and team name.
7. Once your validator is finished, uncomment the appropriate references in `/js/forms.js`
