import {ButtonType, InputType, UseCustomFormType} from "@/model/hooksType";
import {useForm} from "react-hook-form";
import style from "./useCustomForm.module.css"


const useCustomForm = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm()


    const Form = ({ children, onSubmit }: UseCustomFormType) => {
        return (
            <form className={ style.form } onSubmit={ handleSubmit( onSubmit ) }>
                { children }
            </form>
        )
    }

    const Input = ({ name, label, type = "text", isRequired = false, validation = {} }: InputType) => {
        return (
            <div className={ style.input }>
                { label && <label htmlFor={ name }>{ label }</label> }
                <input type={ type } { ...register( name, { required: { value: isRequired, message: `${ label }은(는) 필수값 입니다.`}, ...validation } ) } />
                { errors[ name ] && <span>{ `${ errors[ name ]?.message }` }</span> }
            </div>
        )
    }

    const Button = ({ text }: ButtonType) => {
        return (
            <div className={ style.button }>
                <input type="submit" value={ text } />
            </div>
        )
    }


    return { register, watch, errors, Form, Input, Button }
}


export default useCustomForm