import React from 'react';
import { Button } from '@material-ui/core';
import firebaseApp from '../firebase/credenciales';
import { getAuth, GoogleAuthProvider, signInWithRedirect } from 'firebase/auth';

const auth = getAuth(firebaseApp);
const googleProvider = new GoogleAuthProvider()
const Login = () => {
    function loginWithGmail() {
        signInWithRedirect()
        signInWithRedirect(auth, googleProvider);
    }
    return (
        <div className='login'>
            <div className='Login__logo'>
                <img src="https://picsum.photos/420" alt="" />
            </div>
            <Button onClick={loginWithGmail}>Acceder con Google</Button>
        </div>
    )
}

export default Login
