import React, { useState } from 'react'
import { omit } from 'lodash'

const useForm = (callback) => {

    const [values, setValues] = useState({});
    const [errors, setErrors] = useState({});

    const validate = (event, name, value) => {
        switch (name) {
            case 'name':
                if (value.length <= 4) {
                    setErrors({
                        ...errors,
                        name: 'Debe contener al menos 5 letras'
                    })
                } else {
                    let newObj = omit(errors, "name");
                    setErrors(newObj);
                }
                break;

            case 'email':
                if (
                    !new RegExp(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/).test(value)
                ) {
                    setErrors({
                        ...errors,
                        email: 'Ingresa un correo valido'
                    })
                } else {
                    let newObj = omit(errors, "email");
                    setErrors(newObj);
                }
                break;

            case 'password':
                if (
                    !new RegExp(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/).test(value)
                ) {
                    setErrors({
                        ...errors,
                        password: 'La contraseña debe contener al menos una mayúscula, una minúscula, un numero y al menos 8 caracteres'
                    })
                } else {
                    let newObj = omit(errors, "password");
                    setErrors(newObj);
                }
                break;
            default:
                break;
        }
    }

    const handleChange = (event) => {
        event.persist();

        let name = event.target.name;
        let val = event.target.value;

        validate(event, name, val);

        setValues({
            ...values,
            [name]: val,
        })
    }


    const handleSubmit = (event) => {
        if (event) event.preventDefault();

        if (Object.keys(errors).length === 0 && Object.keys(values).length !== 0) {
            callback();

        } else {
            alert("Por favor, rellene los campos para continuar.");
        }
    }


    return {
        values,
        errors,
        handleChange,
        handleSubmit
    }
}

export default useForm
