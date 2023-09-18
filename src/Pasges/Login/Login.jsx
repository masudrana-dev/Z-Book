import { useState } from "react";
import { FcGoogle } from 'react-icons/fc'
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai'
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import auth from "../../firebase-config";
import { ToastContainer, toast } from 'react-toastify';


const Login = () => {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const navigate = useNavigate(' ')

    const [emailError, setEmailError] = useState(" ")
    const [passwordError, setPasswordError] = useState()
    const [passwordShow, setPasswordShow] = useState(false)

    const handleEmail = (e) => {
        setEmail(e.target.value)
        setEmailError(' ')

    }
    const handlePassword = (e) => {
        setPassword(e.target.value)
        setPasswordError(' ')
    }

    const emailValidation = (email) => {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@(gmail\.com|yahoo\.com|hotmail\.com)$/i;
        return emailRegex.test(email);
    }

    const handleSubmit = () => {
        if (!email) {
            setEmailError('Enter Your Email')
        }
        else if (!emailValidation(email)) {
            setEmailError('invalid email')
        }
        else {
            setEmailError('valid email')
        }
        if (!password) {
            setPasswordError('Enter your password')
        }
        if (email && password && emailValidation) {
            signInWithEmailAndPassword(auth, email, password)
                .then(() => {
                    toast.success('Login Successfully!')
                })
                .catch((error) => {
                    if (error.code.includes('auth/invalid-login-credentials')) {
                        toast.error('Invalid email or pass ')
                    }
                });

        }
    }
    const navigateRegister = () => {
        navigate('/register')
    }
    return (
        <div className='flex'>
            <div className='w-1/2 flex justify-end mr-52 mt-40 '>
                <ToastContainer position="top-center" />
                <div>
                    <h1 className='font-nunito font-bold text-[40px] text-secondary'>Login to your account!    </h1>
                    <h3 className=" font-nunito text-base mt-6 flex border border-[#EAEAF0] rounded-lg w-52 p-5 cursor-pointer">
                        <FcGoogle className="text-[25px] mr-2" />
                        Login with Google
                    </h3>

                    <div className="relative mt-4">
                        <input onChange={handleEmail} type="email" placeholder="Email" className="py-6 w-96 mt-10 border-b border-[#EAEAF0]  focus:outline-none " />
                        <p className="absolute top-[28px] bg-white font-nunito text-secondary font-semibold tracking-[2px]">Email Address</p>
                        {
                            emailError ?
                                <p className=" font-nunito font-bold text-white  bg-red-400 w-96 absolute left-0 top-[115px]  px-5 ">{emailError}</p>
                                :
                                <p className=" font-nunito font-bold text-white  bg-green-400 w-96 absolute left-0 top-[115px]  px-5 ">{emailError}</p>
                        }

                    </div>

                    <div className="relative mt-6">
                        <input onChange={handlePassword} type={passwordShow ? 'text' : 'password'} placeholder="Name" className=" py-6 w-96 mt-10 border-b border-[#EAEAF0 focus:outline-none" />
                        <p className="absolute top-[28px]  bg-white font-nunito text-secondary font-semibold tracking-[2px] ">Password</p>
                        {
                            passwordShow ?
                                <AiFillEyeInvisible className="absolute top-[72px] right-16 text-[20px]" onClick={() => setPasswordShow(!passwordShow)} />
                                :
                                <AiFillEye className="absolute top-[72px] right-16 text-[20px]" onClick={() => setPasswordShow(!passwordShow)} />
                        }

                        {
                            passwordError &&
                            <p className=" font-nunito font-bold text-white  bg-red-400 w-96 absolute left-0 top-[115px]  px-5 ">{passwordError}</p>
                        }
                    </div>

                    {/* <div className="relative mt-6">
                        <input onChange={handleFullname} type="password" placeholder="password" className="  px-14 py-6 w-96 mt-10 border border-[#EAEAF0] rounded-lg" />
                        <p className="absolute top-[28px] left-[50px]  px-[6px] bg-white font-nunito text-secondary font-semibold tracking-[2px]">Password</p>
                        {
                            fullnameError &&
                            <p className=" font-nunito font-bold text-white  bg-red-400 w-96 absolute left-0 top-[115px]  px-5 ">{fullnameError}</p>
                        }

                    </div> */}

                    <button type="submit" onClick={handleSubmit} className=" font-nunito font-bold text-white text-[20px] border border-blue-500 py-6 w-96 rounded-[50px] bg-primary mt-8  ">Login</button>

                    <p className="font-nunito text-lg mt-8 text-center w-96 ">Don't Have an Account ? <span className="font-bold text-orange-600"> <Link onClick={navigateRegister} to='/register'></Link>Sign Up</span></p>

                </div>
            </div>
            <div className='w-1/2'>
                <img className='w-full h-screen object-cover' src="../../../public/images/Login.png" alt="" />
            </div>
        </div>
    );
};

export default Login
