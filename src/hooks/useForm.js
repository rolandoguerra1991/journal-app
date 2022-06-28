import { useEffect, useMemo, useState } from 'react';

export const useForm = ( initialForm = {}, formValidations = {} ) => {
  
    const [ formState, setFormState ] = useState( initialForm );
    const [ formValidation, setFormValidation ] = useState({})

    useEffect(() => {
        createValidator();
    }, [formState]);

    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [ name ]: value
        });
    }

    const isFormValid = useMemo(() => {
        for (const formValue of Object.keys(formValidation)) {
            if (formValidation[formValue] !== null) return false;
        }
        return true;
    }, [formValidation])

    const onResetForm = () => {
        setFormState( initialForm );
    }

    const createValidator = () => {
        const checkValidations = {};
        for (const formInput of Object.keys(formValidations)) {
            const [fn, errorMessage] = formValidations[formInput];
            checkValidations[`${formInput}Valid`] = fn(formState[formInput]) ? null : errorMessage;
        }
        setFormValidation(checkValidations);
    }

    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm,
        ...formValidation,
        isFormValid,
    }
}