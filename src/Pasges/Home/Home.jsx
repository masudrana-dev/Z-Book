import { useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux'
import { useEffect } from "react";
import Sidebar from "../../Component/Sidebar/Sidebar";

const Home = () => {
    const navigate = useNavigate()
    const data = useSelector(state => state.userLoginInfo.userInfo)
    console.log(data);
    useEffect(() => {
        if (!data) {
            console.log('no data');
            navigate('/login')
        }
    })
    return (
        <div className="flex gap-x-[100px] mt-[35px] overflow-hidden">
            <div className="w-[186px]">
                <Sidebar></Sidebar>
            </div>
            <div className="w-[427px]">hello world!</div>
            <div className="w-[344px]">hello world!</div>
            <div className="w-[344px]">hello world!</div>
            {/* <h1 className="font-nunito font-bold text-[60px] text-blue-500">Welcome to Chatting World !</h1>
            <div className="mt-10">
                <button className="border border-blue-500 px-10 py-4 rounded-xl bg-blue-500 text-white font-nunito font-bold text-xl mr-5"><Link to='/register'>Registration</Link></button>
                <button className="border border-blue-500 px-10 py-4 rounded-xl bg-blue-500 text-white font-nunito font-bold text-xl mr-5"><Link to='/login'>Login</Link></button>
            </div> */}
        </div>
    );
};

export default Home;