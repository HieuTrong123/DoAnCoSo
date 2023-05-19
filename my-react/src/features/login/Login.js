import React from 'react'
import './login.css'
import Footer from '../../Components/Footer/Footer'
import FormVLD from '../../Components/Form/FormVLD'

function Login() {
    return (
        <div className='login__box'>

            <div className='login'>
                <i className="fa-solid fa-lock"></i>
                <p className='login__title'>Đăng nhập</p>
                <FormVLD name='Usename *' type='text' />
                <FormVLD name='Password *' type='password' icon='fa-sharp fa-solid fa-eye-slash' />
                <button className='login__btn'>Login</button>
                <Footer />
            </div>

        </div>
    )
}



export default Login
