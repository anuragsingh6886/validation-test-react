import React, { useState } from "react";
import { FormValidator } from "form-validation-lib-js";
import { toast } from 'react-toastify';

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const validator = new FormValidator();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationSchema = {
      email: [{ type: "email", message: "Invalid email" }],
      password: [{ type: "password", message: "Weak password" }],
    };

    const result = await validator.validateForm(formData, validationSchema);

    if (!result.isValid) {
      setErrors(result.errors.reduce((acc, error) => ({
        ...acc,
        [error.field]: error.message
      }), {}));
      toast.error('Form data is invalid');
      return;
    }

    console.log("Form data is valid:", formData);
    toast.success(`Logged in successfully with Email: ${formData.email}`);
    setErrors({});
    setFormData({ email: "", password: "" });
  };

  return (
    <div className="md:my-10">
      <div className="m-4 md:m-0 border border-gray-200 rounded-lg shadow-sm p-4 sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
        <div className="mb-8">
          <h2 class="text-4xl font-extrabold dark:text-white">
            Build faster with ready-to-use code snippets
          </h2>
          <p class="my-4 text-lg text-gray-500">
            Start developing with an open-source library that save time and build faster with ready-to-use APIs for React, Vue, Angular, and more.
          </p>
          <p class="mb-4 text-lg font-normal text-gray-500 dark:text-gray-400">
            Get started with the following code snippet:
          </p>
        </div>
        <div className="flex flex-col md:flex-row w-full md:p-4 bg-white md:border md:border-gray-200 md:rounded-lg md:shadow-sm dark:bg-gray-800 md:dark:border-gray-700">
          <div class="w-full pb-4 md:max-w-1/2">
            <div className="mb-2 flex justify-between items-center">
              <p className="text-sm font-medium text-gray-900 dark:text-white">
                Example code snippet for React:
              </p>
            </div>
            <div className="relative bg-gray-50 rounded-lg dark:bg-gray-700 h-96">
              <div className="overflow-scroll max-h-full">
                <pre>
                  <code
                    id="code-block"
                    className="text-sm text-gray-500 dark:text-gray-400 whitespace-pre"
                  >
  {`  import React, { useState } from 'react';
  import { FormValidator } from 'form-validation-lib-js';

  const SignInForm = () => {
    const [formData, setFormData] = useState({
      email: '',
      password: ''
    });
    const [errors, setErrors] = useState({});

    const validator = new FormValidator();

    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();

      const validationSchema = {
        email: [{ type: 'email', message: 'Invalid email' }],
        password: [{ type: 'password', message: 'Weak password' }]
      };

      const result = await validator.validateForm(formData, validationSchema);
      if (!result.isValid) {
        setErrors(result.errors.reduce((acc, error) => ({
          ...acc,
          [error.field]: error.message
        }), {}));
        return;
      }
      // Process form data
    };

    return (
      <form onSubmit={handleSubmit}>
        <div>
          <input type="email" value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
          {errors.email && <span>{errors.email}</span>}
        </div>
        <div>
          <input type="password" value={formData.password}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
          />
          {errors.password && <span>{errors.password}</span>}
        </div>
        <button type="submit">Sign In</button>
      </form>
    );
  };

  export default SignInForm;`}
                  </code>
                </pre>
              </div>
            </div>
          </div>
          <div class="w-full md:max-w-1/2 pl-2 md:pl-4">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <h5 className="text-xl font-medium text-gray-900 dark:text-white">
                Sign in to check out feature
              </h5>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  placeholder="name@company.com"
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  value={formData.email}
                  required
                />
                <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                  We'll never save your email in our databse.
                </p>
                <p className="mt-2 text-sm text-red-500 dark:text-red-400">
                  {errors.email}
                </p>
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  onChange={(e) =>
                    setFormData({ ...formData, password: e.target.value })
                  }
                  value={formData.password}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  required
                />
              </div>
              <div className="flex items-start">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="remember"
                      type="checkbox"
                      value=""
                      className="w-4 h-4 border border-gray-300 rounded-sm bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                    />
                  </div>
                  <label
                    htmlFor="remember"
                    className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Remember me
                  </label>
                </div>
                <a
                  href="#"
                  className="ms-auto text-sm text-blue-700 hover:underline dark:text-blue-500"
                >
                  Lost Password?
                </a>
              </div>
              <button
                type="submit"
                className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Login to your account
              </button>
              <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                Not registered?{" "}
                <a
                  href="#"
                  className="text-blue-700 hover:underline dark:text-blue-500"
                >
                  Create account
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
