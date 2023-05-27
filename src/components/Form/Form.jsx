import './Form.css'
import { useState } from "react"



/* const validations= () => {
    const emailValidation = email.target.value === 
}
*/

export const Form = ({ handleOnSubmit }) => {
    const [formValues, setFormValues] = useState({
        name: "",
        phone: "",
        email: "",
        emailConfirm: "",
    })
    

    const handleChange = (ev) => {
        setFormValues(prev => ({
            ...prev,
			[ev.target.name]: ev.target.value,
		}))
    }
    
    console.log(formValues.email)
    console.log(formValues.emailConfirm)
    console.log(formValues.email === formValues.emailConfirm);


    return(
        <>
        <h2>Registrate!</h2>
            <form className="form">
                <label className='form__label'>
                    Nombre y Apellido
                    <input 
                        value={formValues.name} 
                        type="text" 
                        name="name"
                        onChange={handleChange} 
                        placeholder='Ingrese su Nombre y Apellido'
                        className='form__input'
                    />
                </label>
                <label className='form__label'>
                    Telefono
                    <input 
                        value={formValues.phone} 
                        type="text" 
                        name="phone"
                        onChange={handleChange}
                        placeholder='Ingrese su numero de telefono' 
                        className='form__input'
                    />
                </label>
                <label className='form__label'>
                    Email
                    <input 
                        value={formValues.email}
                        type="email"
                        name="email"
                        onChange={handleChange}
                        placeholder='Ingrese su email'
                        className='form__input'
                    />
                </label>
                <label className='form__label'>
                    Confirme su Email
                    <input 
                        value={formValues.emailConfirm}
                        type="email"
                        name="emailConfirm"
                        onChange={handleChange}
                        placeholder='Confirme su email'
                        className='form__input'
                    />
                </label>
            </form>
            <button className='form__btn' onClick={() => {handleOnSubmit(formValues)}}>REGISTRARME</button>
        </>
    )
}