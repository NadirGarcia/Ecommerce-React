import { useState } from "react"
import swal from 'sweetalert';

export const useForm = (initialForm, validateForm) => {
    const [form, setForm] = useState(initialForm)
    const [errors, setErrors] = useState({})
    const [formData, setFormData] = useState({})

    const handleChange = (ev) => {
        setForm(prev => ({
            ...prev,
			[ev.target.name]: ev.target.value,
		}))
    }

    const handleBlur = (ev) => {
        handleChange(ev);
        setErrors(validateForm(form))
    }

    const handleSubmit = (ev) => {
        ev.preventDefault(ev);
        setErrors(validateForm(form));

        if(Object.keys(errors).length === 0){
            setFormData({
                name: form.name,
                phone: form.phone,
                email: form.email
            })
            swal({
                title: "Bienvenido!",
                text: "Finaliza con tu compra",
                icon: "success",
            });
        }else{
            swal({
                title: "Formulario incorrecto",
                icon: "error",
            });
        }
    }

    return{
        form,
        errors,
        formData,
        handleChange,
        handleBlur,
        handleSubmit
    }
}

