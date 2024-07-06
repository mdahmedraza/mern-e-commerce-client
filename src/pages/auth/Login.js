import React, {useState, useEffect} from 'react';
import styles from './auth.module.scss';
import loginImg from '../../assets/login-img.png';
import Card from '../../components/card/Card';
import {Link, useNavigate} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {toast} from 'react-toastify';
import {validateEmail} from '../../utils/index';
import Loader from '../../components/loader/Loader';
import {login, RESET_AUTH} from '../../redux/features/auth/authSlice'

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {isLoading, isLoggedIn, isSuccess} = useSelector((state) => state.auth)
    const loginUser = async (e) => {
        e.preventDefault();
        if(!email || !password){
            return toast.error("all fields are required");
        }
        if(!validateEmail(email)){
            return toast.error("Please enter a valid email")
        }
        const userData = {
            email, password
        };
        console.log(userData);
        await dispatch(login(userData));
    }
    useEffect(() => {
        if(isSuccess && isLoggedIn){
            navigate("/");
        }
        dispatch(RESET_AUTH());
    }, [isSuccess, isLoggedIn, dispatch, navigate]);
    return(
        <>
        {isLoading && <Loader />}
        <section className={`container ${styles.auth}`}>
            <div className={styles.img}>
                <img src={loginImg} alt="login" width="400" />
            </div>
            <Card>
                <div className={styles.form}>
                    <form onSubmit={loginUser}>
                        <h2>Login</h2>
                        <input type="text" placeholder="Email" required value={email} onChange={(e)=>setEmail(e.target.value)} />
                        <input type="password" placeholder="Password" required value={password} onChange={(e)=>setPassword(e.target.value)} />
                        <button type="submit" className="--btn --btn-primary --btn-black">Login</button>
                    </form>
                    <span className={styles.register}>
                        <p>Don't have an account?</p>
                        <Link to='/register'>Register</Link>
                    </span>
                </div>
            </Card>
        </section>
        </>
    )
}

export default Login;