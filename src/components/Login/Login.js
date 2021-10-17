import React from 'react';
import './Login.css';
import logo from '../../images/logo.png'
import Header from '../Shared/Header/Header';
import useAuth from '../../hooks/useAuth';
import { Link, useLocation, useHistory } from 'react-router-dom';

const Login = () => {
    const path = window.location.pathname
    const { googleSignIn, setUser } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/';
    
    const handleSigniIn=()=>{
        googleSignIn()
        .then((result)=>{
            setUser(result.user)
            history.push(redirect_uri);
        })

    }
    return (
        <>
            <Header></Header>
            <div className="login-body p-5 mt-3">
                <div className="text-center">
                    <div>
                        <img className="login-logo mb-5" src={logo} alt="" />
                    </div>
                    <div className="text-center login-form d-flex flex-column align-items-center">
                        {path === '/signIn' && <input type="text" placeholder="Name" />}
                        <input type="Email" placeholder="Email" />
                        <input type="password" placeholder="Password" />
                        {path === '/signIn' && <input type="password" placeholder="Confirm password" />}
                        <button className="color-btn p-2 border-0 text-white">Sign In</button>
                        <div>
                           {path !== '/signIn' ? <small> Forget password? </small> : <Link to="/login" className="my-3" >Already have an account?</Link>} <small> <span onClick={handleSigniIn}>Google Sign in</span></small>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;