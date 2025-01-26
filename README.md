# Valid Form Test React

This project is designed to test the `form-validation-lib-js` npm library in a React application using Vite.

## Purpose

The purpose of this codebase is to demonstrate and test the functionality of the `form-validation-lib-js` library for form validation in a React application. This includes validating various form fields such as text, email, phone, date, and password fields.

## Setup

To get started with this project, follow these steps:

1. Clone the repository:
    ```sh
    git clone https://github.com/anuragsingh6886/validation-test-react
    cd valid-form-test-react
    ```

2. Install the dependencies:
    ```sh
    npm install
    ```

3. Run the development server:
    ```sh
    npm run dev
    ```

## Libraries Used

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [form-validation-lib-js](https://www.npmjs.com/package/form-validation-lib-js)

## Form Validation

The form in this project validates the following fields:
- First Name: Required
- Email: Required, must be a valid email address
- Phone: Required, must be a valid phone number
- Date of Birth: Required, must be a valid date
- Password: Required, minimum 8 characters
- Confirm Password: Required, must match the password

## License

This project is licensed under the MIT License.