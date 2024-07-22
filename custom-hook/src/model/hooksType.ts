import {ReactNode} from "react";
import {FieldValues, SubmitHandler} from "react-hook-form";


export type UseCustomFormType = {
    children?: ReactNode
    onSubmit: SubmitHandler<FieldValues>
}

export type InputType = {
    name: string,
    label?: string,
    type?: string,
    isRequired?: boolean,
    validation?: Object
}

export type ButtonType = {
    text: string,
}