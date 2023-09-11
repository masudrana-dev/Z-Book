import { useState } from "react";

const Registration = () => {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [fullName, setFullname] = useState()

    const [emailError, setEmailError] = useState()
    const [passwordError, setPasswordError] = useState()
    const [fullnameError, setFullnameError] = useState()

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
        else {
            setEmailError('valid email')
        }
        if (!password) {
            setPasswordError('Enter your password')
        }
        if (!fullName) {
            setFullnameError('Enter your full name')
        }

        // else if () {
        //     setEmailError("invalid Email.");
        // }

    }

    return (
        <div className='flex'>
            <div className='w-1/2 flex justify-end mr-52 mt-40 '>
                <div>
                    <h1 className='font-nunito font-bold text-3xl text-secondary'>Get started with easily register</h1>
                    <h3 className="text-[#808080] font-nunito text-base mt-4">Free register and you can enjoy it</h3>

                    <div className="relative mt-12">
                        <input onChange={handleEmail} type="email" placeholder="Email" className="  px-14 py-6 w-96 mt-10 border border-[#EAEAF0] rounded-lg required " />
                        <p className="absolute top-[28px] left-[50px]  px-[6px] bg-white font-nunito text-secondary font-semibold tracking-[2px]">Email Address</p>
                        {/* {
                            emailError &&
                            <p className="text-white  bg-red-500 w-96 h-auto">{emailError}</p>
                        } */}

                        {
                            !emailValidation ?
                                <p className="text-white  bg-green-500 w-96 h-auto">{emailError}</p>
                                :
                                <p className="text-white  bg-red-500 w-96 h-auto">{emailError}</p>
                        }

                    </div>

                    <div className="relative mt-4">
                        <input onChange={handlePassword} type="text" placeholder="Name" className="  px-14 py-6 w-96 mt-10 border border-[#EAEAF0] rounded-lg" />
                        <p className="absolute top-[28px] left-[50px]  px-[6px] bg-white font-nunito text-secondary font-semibold tracking-[2px]">Full Name</p>
                        {
                            passwordError &&
                            <p className="text-white  bg-red-500 w-96 h-auto  ">{passwordError}</p>
                        }
                    </div>

                    <div className="relative mt-4">
                        <input onChange={handleFullname} type="password" placeholder="password" className="  px-14 py-6 w-96 mt-10 border border-[#EAEAF0] rounded-lg" />
                        <p className="absolute top-[28px] left-[50px]  px-[6px] bg-white font-nunito text-secondary font-semibold tracking-[2px]">Password</p>
                        {
                            fullnameError &&
                            <p className="text-white  bg-red-500 w-96 h-autox ">{fullnameError}</p>
                        }

                    </div>

                    <button type="submit" onClick={handleSubmit} className=" font-nunito font-bold text-white text-[20px] border border-blue-500 py-6 w-96 rounded-[50px] bg-primary mt-8  ">Sign Up</button>

                    <p className="font-nunito text-lg mt-8 text-center w-96 ">Already Have an Account ? <span className="font-bold text-orange-600">Sign In  </span></p>

                </div>
            </div>
            <div className='w-1/2'>
                <img className='w-full h-screen object-cover' src="../../../public/images/registration.png" alt="" />
            </div>
        </div>
    );
};

export default Registration;