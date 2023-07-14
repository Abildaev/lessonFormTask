
import './App.css';
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

function App() {
    const onSubmitLogin = (userData) => {
        console.log('email: ' + userData.email)
        console.log('password: ' + userData.password)
    }

    const onSubmitRegister = (userData) => {
        console.log('name: ' + userData.name)
        console.log('username: ' + userData.username)
        console.log('email: ' + userData.email)
        console.log('gender: ' + userData.gender)
        console.log('password: ' + userData.password)
        console.log('passwordAgain: ' + userData.passwordAgain)
    }


    return (
        <div className="App">
            <SignIn onSubmitLogin={onSubmitLogin}/>
            <h1></h1>
            <SignUp onSubmitRegister={onSubmitRegister}/>
        </div>
    );
}

export default App;
