"use client"


import useCustomForm from "@/hooks/useCustomForm";
import style from "./page.module.css"


const ReactHookFormPage = () => {
    const { Form, Input, Button } = useCustomForm()

    /**
     * Validation 적용 방식
     * 사이트  : https://www.react-hook-form.com/get-started#Applyvalidation
     * 타이틀  : Apply validation
     * 종류   : required( 기본 적용 ), min, max, minLength, maxLength, pattern, validate
     * 예제   : minLength: { value: 10, message: '최소 10글자이상 입력해주세요' } // value, message 형태로 진행
     */
    const validation = {
        minLength: { value: 10, message: '최소 10글자이상 입력해주세요' }
    }


    /**
     * Form 전송 처리 함수
     * 파라미터 : data
     * 설명    : Param data 는 Form 에 데이터를 담고 있으며, name 이 키가 됩니다.
     */
    const handleSubmit = ( data: Object ) => {
        console.log(data)
    }


    return (
        <div className={ style.formWrap }>
            <Form onSubmit={ handleSubmit }>
                <Input name={ "id" } label={ "아이디" } />
                <Input name={ "password" } label={ "패스워드" } type={ "password" } isRequired validation={ validation } />
                <Button text={ "로그인" } />
            </Form>
        </div>
    )
}


export default ReactHookFormPage