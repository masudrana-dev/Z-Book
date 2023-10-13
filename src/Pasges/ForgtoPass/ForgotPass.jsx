import { sendPasswordResetEmail } from "firebase/auth"
import auth from "../../firebase-config";
import { useState } from "react";
import { Link } from "react-router-dom";

const ForgotPass = () => {
    const [email, setEmail] = useState(' ')
    const handlePassword = () => {
        sendPasswordResetEmail(auth, email)
            .then(() => {
                console.log('ok');
            })
            .catch((error) => {
                console.log(error.code);
            });
    }
    return (
        <div className="bg-primary w-full h-screen flex items-center justify-center">
            <div className="bg-white px-16 py-16 rounded-lg">
                <h1 className='font-nunito font-bold text-[30px] text-secondary'>Reset Your Password </h1>
                <div >
                    <p className="  font-nunito text-secondary font-semibold mt-5 ">Email Address</p>
                    <input onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email" className="py-6 w-96  border-b border-[#EAEAF0]  focus:outline-none " />
                </div>
                <button onClick={handlePassword} type="submit" className=" font-nunito  text-white text-[15px] border border-blue-500 py-2 px-5 mx-4  bg-primary mt-8  ">Reset</button>
                <button type="submit" className=" font-nunito text-white text-[15px] border border-blue-500 py-2 px-5  bg-primary mt-8  "><Link to='/login'>Back to Login</Link></button>
            </div>
        </div>
    )
}

export default ForgotPass