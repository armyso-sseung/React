import RegisterComponent from "../components/RegisterComponent";
import BaseLayout from "../layout/BaseLayout";

const RegisterPage = () => {
    return (
        <BaseLayout>
            <div className={"register-page"}>
                <RegisterComponent />
            </div>
        </BaseLayout>
    )
}


export default RegisterPage;