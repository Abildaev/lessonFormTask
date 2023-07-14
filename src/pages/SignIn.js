import {TextInput} from "../components/TextInput";
import {useRef, useState} from "react";

const signInInputs = [
    {
        id: 1,
        name: 'email',
        placeholder: "email или логин",
        type: 'email',
        label: 'email',
        required: true
    },
    {
        id: 2,
        name: 'password',
        placeholder: "пароль",
        type: 'password',
        label: 'пароль',
        required: true
    },
]


function SignIn({onSubmitLogin}) {

    const formRef = useRef(null)

    const [inputs, setInputs] = useState({
        email: "",
        password: ""
    })
    const onChange = (event) => {
        setInputs(prevState => ({
            ...prevState,
            [event.target.name]: event.target.value
        }))
    }

    const submitUserData = (e) => {
        e.preventDefault();
        onSubmitLogin(inputs);
        resetForm()
    }

    const resetForm = () => {
        formRef.current.reset()
        setInputs({email: "", password: ""})
    }

    return (
        <div>
            <form
                ref={formRef}
                onSubmit={submitUserData}
                onChange={onChange}
                className="form_wrapper"
            >
                {
                    signInInputs.map(el => <TextInput
                        key={el.id}
                        label={el.label}
                        type={el.type}
                        placeholder={el.placeholder}
                        name={el.name}
                        required={el.required}
                    />)
                }
                <button type="submit">Войти</button>
            </form>

        </div>

    );
}

export default SignIn;