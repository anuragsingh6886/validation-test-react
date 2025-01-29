import React from "react";

const DetailCard = () => {

    return (
        <div className="pb-26 md:pb-16 md:my-10">
            <div class="pt-16 w-full p-4 flex flex-col items-center text-center bg-white border border-gray-200 shadow-sm sm:p-8 dark:bg-gray-800 dark:border-gray-700">
                <h5 class="mb-2 text-3xl font-bold text-gray-900 dark:text-white">
                Form Validation Library - TS
                </h5>
                <p class="mb-5 mt-5 text-base text-center font-normal w-3/4 text-gray-500 sm:text-lg dark:text-gray-400">
                Start developing with an open-source comprehensive JavaScript form validation library for <b>React</b>, Vue, Angular, and more.
                Trusted by thousands of developers worldwide, Free for personal and commercial use.
                </p>
                <div class="items-center justify-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4 rtl:space-x-reverse">
                    <a href="https://www.npmjs.com/package/form-validation-lib-js" target="_blank" class="w-50">
                        <button class="w-full px-6 py-3 text-lg font-semibold text-white transition-colors duration-200 transform bg-blue-600 rounded-lg hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                        Get Started
                        <span class="ml-2" aria-hidden="true">→</span>
                        </button>
                    </a>
                </div>
            </div>
        </div>
    );

}

export default DetailCard;