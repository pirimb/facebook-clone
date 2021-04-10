import { Button } from '@material-ui/core'
import React from 'react'
import { auth, provider } from '../firebase'
import { setUser } from '../reducer'
import { useStateValue } from '../StateProvider'
import './Login.css'

function Login() {
    const [state, dispatch] = useStateValue()

    const signIn = () => {
        auth.signInWithPopup(provider)
        .then(result => {
            dispatch(setUser(result.user))            
        })
        .catch(error => alert(error.message))
    }

    return (
        <div className="login">
            <div className="login__logo">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1024px-Facebook_Logo_%282019%29.png" alt=""/>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Facebook_Logo_%282019%29.svg/1280px-Facebook_Logo_%282019%29.svg.png" alt=""/>
            </div>
            <div>
                <Button type="submit" onClick={signIn}>
                    Sign In
                </Button>
            </div>
        </div>
    )
}

export default Login
