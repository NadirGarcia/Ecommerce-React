import './Form.css'
import { useForm } from '../../hooks/useForm'


const initialForm = {
    name: '',
    phone: '',
    email: '',
    emailConfirm: '',
}

const validateForm = (form) => {
    let errors = {};
    let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    let regexPhone = /^[0-9]+$/;
    let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
    
    if(!form.name.trim()){
        errors.name = '* Campo obligatorio';
    }else if(!regexName.test(form.name.trim())){
        errors.name = 'Este campo solo acepta letras y espacios'
    }

    if(!form.phone.trim()){
        errors.phone = '* Campo obligatorio';
    }else if(!regexPhone.test(form.phone.trim())){
        errors.phone = 'Este campo solo acepta numeros'
    }


    if(!form.email.trim()){
        errors.email = '* Campo obligatorio';
    }else if(!regexEmail.test(form.email.trim())){
        errors.email = 'Campo incorrecto'
    }


    if(!form.emailConfirm.trim()){
        errors.emailConfirm = '* Campo obligatorio';
    }else if(!regexEmail.test(form.emailConfirm.trim())){
        errors.emailConfirm = 'Campo incorrecto'
    }else if(form.email !== form.emailConfirm){
        errors.emailConfirm = 'Email incorrecto'
    }

    return errors;
}

export const Form = ({ confirmForm }) => {
    const{
        form,
        errors,
        formData,
        handleChange,
        handleBlur,
        handleSubmit
    } = useForm(initialForm, validateForm)

    return(
        <>
        <h2>Registrate!</h2>
            <form className="form" onSubmit={handleSubmit}>
                <label className='form__label'>
                    Nombre y Apellido
                    <input 
                        value={form.name} 
                        type="text" 
                        name="name"
                        onBlur={handleBlur}
                        onChange={handleChange} 
                        placeholder='Ingrese su Nombre y Apellido'
                        className='form__input'
                    />
                    {errors.name && <p className='errors'>{errors.name}</p>}
                </label>
                <label className='form__label'>
                    Telefono
                    <input 
                        value={form.phone} 
                        type="text" 
                        name="phone"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        placeholder='Ingrese su numero de telefono' 
                        className='form__input'
                    />
                    {errors.phone && <p className='errors'>{errors.phone}</p>}
                </label>
                <label className='form__label'>
                    Email
                    <input 
                        value={form.email}
                        type="email"
                        name="email"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        placeholder='Ingrese su email'
                        className='form__input'
                    />
                    {errors.email && <p className='errors'>{errors.email}</p>}
                </label>
                <label className='form__label'>
                    Confirme su Email
                    <input 
                        value={form.emailConfirm}
                        type="email"
                        name="emailConfirm"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        placeholder='Confirme su email'
                        className='form__input'
                    />
                    {errors.emailConfirm && <p className='errors'>{errors.emailConfirm}</p>}
                </label>
                <input type='submit' value='REGISTRARME' className='form__btn' onClick={() => confirmForm(formData)}/>
            </form>
        </>
    )
}