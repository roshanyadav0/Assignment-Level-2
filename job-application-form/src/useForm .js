import { useState, useEffect } from 'react';

const useForm = (validate) => {
    const [values, setValues] = useState({});
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setValues({
        ...values,
        [name]: value,
        });
    };

    const handleCheckboxChange = (e) => {
        const { value, checked } = e.target;
        let updatedSkills = values.skills || [];
        if (checked) {
        updatedSkills.push(value);
        } else {
        updatedSkills = updatedSkills.filter(skill => skill !== value);
        }
        setValues({
        ...values,
        skills: updatedSkills,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors(validate(values));
        setIsSubmitting(true);
    };

    useEffect(() => {
        if (Object.keys(errors).length === 0 && isSubmitting) {
        setValues({ ...values, submitted: true });
        }
    }, [errors]);

    return {
        handleChange,
        values,
        handleSubmit,
        errors,
        handleCheckboxChange,
    };
};

export default useForm;
