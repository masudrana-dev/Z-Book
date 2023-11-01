import { useState } from "react";
import { useNavigate, Link } from 'react-router-dom'
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai'
import { createUserWithEmailAndPassword, sendEmailVerification, updateProfile } from "firebase/auth";
import auth from "../../firebase-config";
import { ToastContainer, toast } from 'react-toastify';
import { LineWave } from 'react-loader-spinner'

const Registration = () => {

    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [fullName, setFullname] = useState()
    const navigate = useNavigate(' ')

    const [emailError, setEmailError] = useState()
    const [passwordError, setPasswordError] = useState()
    const [fullnameError, setFullnameError] = useState()
    const [passwordShow, setPasswordShow] = useState(false)
    const [success, setSuccess] = useState()
    const [loadeing, setLoading] = useState(false)


    const handleEmail = (e) => {
        setEmail(e.target.value)
        setEmailError(' ')
    }
    const handlePassword = (e) => {
        setPassword(e.target.value)
        setPasswordError(' ')
    }
    const handleFullname = (e) => {
        setFullname(e.target.value)
        setFullnameError(' ')
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
        if (!password) {
            setPasswordError('Enter your password')
        }
        if (!fullName) {
            setFullnameError('Enter your full name')
        }

        if (email && fullName && password && emailValidation) {
            setLoading(true)
            createUserWithEmailAndPassword(auth, email, password)
                .then((user) => {
                    console.log('registration done')

                    updateProfile(auth.currentUser, {
                        displayName: fullName,
                        photoURL: "https://example.com/jane-q-user/profile.jpg"
                    }).then(() => {
                        toast.success('Registration done . Please Verify your email');
                        console.log(user, 'user')
                        setEmail(' ');
                        setFullname(' ');
                        setPassword(' ')
                        setLoading(true)
                        sendEmailVerification(auth.currentUser)

                        setTimeout(() => {
                            navigateLogin()
                        }, 3000)
                    })
                }).catch((error) => {
                    if (error.code.includes('auth/email-already-in-use')) {
                        setEmailError('This email has been used')
                    }
                })
        }
    }

    const navigateLogin = () => {
        navigate('/login')
    }

    return (
        <div className='flex'>
            <div className='w-1/2 flex justify-end mr-52 mt-40 '>
                <ToastContainer position="top-center" />
                <div>
                    <h1 className='font-nunito font-bold text-3xl text-secondary'>Get started with easily register</h1>
                    <h3 className="text-[#808080] font-nunito text-base mt-4">Free register and you can enjoy it</h3>

                    {
                        <h1 className=" font-nunito font-bold text-green-500 absolute top-[260px]  w-96 px-5"> {success}</h1>
                    }


                    {/* email function  */}
                    <div className="relative mt-8">
                        <input onChange={handleEmail} type="email" placeholder="Email" className="  px-14 py-6 w-96 mt-10 border border-[#EAEAF0] rounded-lg required " />
                        <p className="absolute top-[28px] left-[50px]  px-[6px] bg-white font-nunito text-secondary font-semibold tracking-[2px]">Email Address</p>
                        {
                            emailError &&
                            <p className=" font-nunito font-bold text-white  bg-red-400 w-96 absolute left-0 top-[115px]  px-5 ">{emailError}</p>
                        }

                    </div>
                    {/* full-name function  */}
                    <div className="relative mt-6">
                        <input onChange={handleFullname} type="text" placeholder="Name" className="  px-14 py-6 w-96 mt-10 border border-[#EAEAF0] rounded-lg" />
                        <p className="absolute top-[28px] left-[50px]  px-[6px] bg-white font-nunito text-secondary font-semibold tracking-[2px]">Full Name</p>
                        {
                            fullnameError &&
                            <p className=" font-nunito font-bold text-white  bg-red-400 w-96 absolute left-0 top-[115px]  px-5 ">{fullnameError}</p>
                        }
                    </div>

                    {/* password function  */}
                    <div className="relative mt-6">
                        <input onChange={handlePassword} type={passwordShow ? 'text' : 'password'} placeholder="password" className="  px-14 py-6 w-96 mt-10 border border-[#EAEAF0] rounded-lg" />
                        <p className="absolute top-[28px] left-[50px]  px-[6px] bg-white font-nunito text-secondary font-semibold tracking-[2px]">Password</p>
                        {
                            passwordShow ?
                                <AiFillEyeInvisible className="absolute top-[72px] right-20" onClick={() => setPasswordShow(!passwordShow)} />
                                :
                                <AiFillEye className="absolute top-[72px] right-20" onClick={() => setPasswordShow(!passwordShow)} />
                        }

                        {
                            passwordError &&
                            <p className=" font-nunito font-bold text-white  bg-red-400 w-96 absolute left-0 top-[115px]  px-5 ">{passwordError}</p>
                        }

                    </div>
                    {
                        loadeing ?

                            <LineWave
                                height="100"
                                width="100"
                                color="#4fa94d"
                                ariaLabel="line-wave"
                                wrapperStyle={{}}
                                wrapperClass=""
                                visible={true}
                                firstLineColor="#000"
                                middleLineColor=""
                                lastLineColor=""
                            />
                            :
                            <button type="submit" onClick={handleSubmit} className=" font-nunito font-bold text-white text-[20px] border border-blue-500 py-6 w-96 rounded-[50px] bg-primary mt-8  ">Sign Up</button>
                    }

                    <p className="font-nunito text-lg mt-8 text-center w-96 ">Already Have an Account ? <span className="font-bold text-orange-600">
                        <Link to='/login'> Login </Link>
                    </span></p>

                </div>
            </div>
            <div className='w-1/2'>
                <img className='w-full h-screen object-cover' src="../../../public/images/registration.png" alt="" />
            </div>
        </div>
    );
};

export default Registration
