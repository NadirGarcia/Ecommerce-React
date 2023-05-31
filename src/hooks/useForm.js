import { useState } from "react"
import swal from 'sweetalert';

export const useForm = (initialForm, validateForm) => {
    const [form, setForm] = useState(initialForm)
    const [errors, setErrors] = useState({})

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
        setErrors(validateForm(form));
        
        if(Object.keys(errors).length === 0){
            swal({
                title: "Bienvenido!",
                text: "Finaliza tu compra",
                icon: "success",
            });
            setForm(initialForm)
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
        handleChange,
        handleBlur,
        handleSubmit
    }
}

