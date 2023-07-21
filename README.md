# form_app
This project is a simple form application built using React that demonstrates how to implement form validation and use custom hooks for better code organization and reusability.

## Objective
The main objective of this project is to showcase how to validate form inputs in React and how to leverage custom hooks to manage form state and validation logic. The project includes two forms - a Simple Form and a Basic Form. Both forms have different input fields with specific validation rules.

## Features
- Simple Form: The Simple Form includes a name input field that must not be empty. It demonstrates how to use the useInput custom hook to validate and manage form inputs.

- Basic Form: The Basic Form showcases the usage of the useValidate custom hook. It consists of two input fields for first name and last name, both of which should not be empty, and an email field that requires a valid email address.

- Custom Hooks: Both forms make use of custom hooks (useInput and useValidate) to encapsulate the form validation logic, leading to cleaner and more maintainable code.

## Form Validation and Custom Hooks
The validation logic for each form input is encapsulated within custom hooks (useInput and useValidate). These custom hooks allow us to keep the validation logic separate from the components, making the code cleaner and more maintainable.

## useInput Hook
The useInput hook is used in the SimpleForm component. It takes a validation function as an argument, which ensures that the input value is not empty. The hook returns the current value of the input, its validity status, and methods to handle input changes and lost focus.

## useValidate Hook
The useValidate hook is used in the BasicForm component. It also takes a validation function as an argument to validate each input field. The hook returns the current value of the input, its validity status, and methods to handle input changes and lost focus. Additionally, it provides a dynamic CSS class based on the input's validity, allowing for easy styling.

## Conclusion
This project demonstrates the power of custom hooks in React to create reusable and modular validation logic for form inputs. It serves as a foundation for understanding form validation techniques and how to improve code organization in React applications. Feel free to explore the code and experiment with the forms to enhance your understanding of form validation and custom hooks in React. 