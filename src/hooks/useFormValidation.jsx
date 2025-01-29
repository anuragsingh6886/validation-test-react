import { useState } from 'react';
import { FormValidator } from 'form-validation-lib-js';

const useFormValidation = (initialState, validationSchema) => {
    const [formData, setFormData] = useState(initialState);
    const [errors, setErrors] = useState({});
    const validator = new FormValidator();

    const validate = async () => {
        const result = await validator.validateForm(formData, validationSchema);
        if (!result.isValid) {
            setErrors(result.errors.reduce((acc, error) => ({
                ...acc,
                [error.field]: error.message
            }), {}));
            return false;
        }
        return true;
    };

    return { formData, setFormData, errors, validate };
};

export default useFormValidation;