import React from "react";

export default function BookingForm() {
  return (
    <div className="pt-8 m-10">
    <div className="border border-gray-200 rounded-lg shadow-sm sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
        <div className="mb-8">
            <h2 class="text-4xl font-extrabold dark:text-white">Payments tool for companies</h2>
            <p class="my-4 text-lg text-gray-500">Start developing with an open-source library of over 450+ UI components, sections, and pages built with the utility classes from Tailwind CSS and designed in Figma.</p>
            <p class="mb-4 text-lg font-normal text-gray-500 dark:text-gray-400">Deliver great service experiences fast - without the complexity of traditional ITSM solutions. Accelerate critical development work, eliminate toil, and deploy changes with ease.</p>
        </div>
        <div className="flex flex-col justify-between md:flex-row">
            <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
            <div className="mb-2 flex justify-between items-center">
                <p className="text-sm font-medium text-gray-900 dark:text-white">
                Card example with CTA button:
                </p>
            </div>
            <div className="relative bg-gray-50 rounded-lg dark:bg-gray-700 p-4 h-64">
                <div className="overflow-scroll max-h-full">
                <pre>
                    <code id="code-block" className="text-sm text-gray-500 dark:text-gray-400 whitespace-pre">
                        // Your code here
                    </code>
                </pre>
                </div>
                <div className="absolute top-2 end-2 bg-gray-50 dark:bg-gray-700">
                <button
                    data-copy-to-clipboard-target="code-block"
                    data-copy-to-clipboard-content-type="innerHTML"
                    data-copy-to-clipboard-html-entities="true"
                    className="text-gray-900 dark:text-gray-400 m-0.5 hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-600 dark:hover:bg-gray-700 rounded-lg py-2 px-2.5 inline-flex items-center justify-center bg-white border-gray-200 border h-8"
                >
                    <span id="default-message">
                    <span className="inline-flex items-center">
                        <svg
                        className="w-3 h-3 me-1.5"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 18 20"
                        >
                        <path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2Zm-3 14H5a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Zm0-4H5a1 1 0 0 1 0-2h8a1 1 0 1 1 0 2Zm0-5H5a1 1 0 0 1 0-2h2V2h4v2h2a1 1 0 1 1 0 2Z" />
                        </svg>
                        <span className="text-xs font-semibold">Copy code</span>
                    </span>
                    </span>
                    <span id="success-message" className="hidden">
                    <span className="inline-flex items-center">
                        <svg
                        className="w-3 h-3 text-blue-700 dark:text-blue-500 me-1.5"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 16 12"
                        >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M1 5.917 5.724 10.5 15 1.5"
                        />
                        </svg>
                        <span className="text-xs font-semibold text-blue-700 dark:text-blue-500">
                        Copied
                        </span>
                    </span>
                    </span>
                </button>
                </div>
            </div>
            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                Configure Tailwind CSS and Flowbite before copying the code
            </p>
            </div>
            <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
            <form className="space-y-6" action="#">
                <h5 className="text-xl font-medium text-gray-900 dark:text-white">
                Sign in to our platform
                </h5>
                <div>
                <label
                    htmlFor="name"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                    Your Name
                </label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    placeholder="John Doe"
                    required
                />
                </div>
                <div>
                <label
                    htmlFor="date"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                    Date
                </label>
                <input
                    type="date"
                    name="date"
                    id="date"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    required
                />
                </div>
                <div>
                <label
                    htmlFor="time"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                    Time
                </label>
                <input
                    type="time"
                    name="time"
                    id="time"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    placeholder=""
                    required
                />
                </div>
                <div className="flex items-start">
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
}

// Used for appointments, hotels, or events:

// Name
// Date and Time pickers
// Number of Guests
// Special Requests text area
