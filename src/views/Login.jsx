import React from 'react';
import { Button } from '@material-ui/core' 

const Login = () => {
    function loginWithGmail() {

    }
    return (
        <div className='login'>
            <div className='Login__logo'>
                <img src="https://picsum.photos/420" alt="" />
            </div>
            <Button onClik={loginWithGmail}>Acceder con Google</Button>
        </div>
    )
}

export default Login
