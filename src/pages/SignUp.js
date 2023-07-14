import {TextInput} from "../components/TextInput";
import {useRef, useState} from "react";
import {RadioInput} from "../components/RadioInput";


const signUpInputs = [
    {
        id: 1,
        name: 'name',
        placeholder: "имя",
        type: 'text',
        label: 'имя',
        required: true
    },
    {
        id: 2,
        name: 'username',
        placeholder: "ник",
        type: 'text',
        label: "ник",
        required: true
    },
    {
        id: 3,
        name: 'email',
        placeholder: "email",
        type: 'email',
        label: "email",
        required: true
    },
    {
        id: 4,
        name: 'gender',
        placeholder: "муж",
        type: 'radio',
        label: 'муж',
        required: true
    },
    {
        id: 5,
        name: 'gender',
        placeholder: "жен",
        type: 'radio',
        label: 'жен',
        required: true
    },
    {
        id: 6,
        name: 'password',
        placeholder: "пароль",
        type: 'password',
        label: "пароль",
        required: true
    },
    {
        id: 7,
        name: 'passwordAgain',
        placeholder: "повторите пароль",
        type: 'password',
        label: "повторите пароль",
        required: true
    },

]


function SignUp({onSubmitRegister}) {

    const formUserRef = useRef(null)

    const [registerInputs, setRegisterInputs] = useState({
        name: '',
        username: '',
        email: '',
        gender: '',
        password: '',
        passwordAgain: ''

    })

    const onChange = (event) => {
        if (event.target.name === "username") {
            setRegisterInputs(prevState => ({
                ...prevState,
                [event.target.name]: '@' + event.target.value
            }))
            return
        }
        setRegisterInputs(prevState => ({
            ...prevState,
            [event.target.name]: event.target.value
        }))

    }

    const resetForm = () => {
        formUserRef.current.reset()
        setRegisterInputs({
            name: '',
            username: '',
            email: '',
            gender: '',
            password: '',
            passwordAgain: ''

        })
    }

    const onSubmit = (e) => {
        e.preventDefault();
        onSubmitRegister(registerInputs)
        resetForm()

    }


    return (
        <form
            ref={formUserRef}
            onSubmit={onSubmit}
            onChange={onChange}
            className="form_wrapper"
        >
            {
                signUpInputs.map(el =>
                    el.type === "radio"
                        ?
                        <RadioInput
                            key={el.id}
                            label={el.label}
                            type={el.type}
                            value={el.placeholder}
                            name={el.name}
                            required={el.required}
                        />
                        :
                        <TextInput
                            key={el.id}
                            label={el.label}
                            type={el.type}
                            placeholder={el.placeholder}
                            name={el.name}
                            required={el.required}
                        />)
            }
            <button type="submit">Зарегестрироваться</button>

        </form>

    );
}

export default SignUp;