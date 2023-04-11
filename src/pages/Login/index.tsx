import {useState} from 'react';
import { LoginUX } from "./LoginUx";

const Login = () =>{
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const onClickHandler = (event: React.ChangeEvent<HTMLInputElement>) =>{
        //const {name, value} = event.
    }
    return(
        <LoginUX/>
    )
}

export default Login;