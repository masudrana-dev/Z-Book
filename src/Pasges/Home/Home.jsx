import { Link, useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux'
import { useEffect, useState } from "react";
import Sidebar from "../../Component/Sidebar/Sidebar";
import { onAuthStateChanged } from "firebase/auth";
import auth from "../../firebase-config";
import Search from "../../Component/Search/Search";
import GroupList from "../../Component/GroupList/GroupList";
import FriendRequest from "../../Component/FriendRequest/FriendRequest";
import Friends from "../../Component/Friends/Friends";
import MyGroups from "../../Component/MyGroups/MyGroups";
import UserList from "../../Component/UserLilst/UserList";
import BlockList from "../../Component/BlockList/BlockList";

const Home = () => {
    const [verify, setVerify] = useState(false)
    const navigate = useNavigate()
    const data = useSelector(state => state.userLoginInfo.userInfo)
    console.log(data);
    useEffect(() => {
        if (!data) {
            console.log('no data');
            navigate('/login')
        }
    })
    onAuthStateChanged(auth, (user) => {
        // console.log('Hurrah ', user)
        if (user.emailVerified) {
            setVerify(true)
            navigate('/')
        }
    })
    return (
        <div >
            {
                verify ?
                    <div className="flex gap-x-[100px] mt-[35px] overflow-hidden">
                        <div className="w-[186px]">
                            <Sidebar></Sidebar>
                        </div>
                        <div className="w-[427px]">
                            <Search />
                            <GroupList />
                            <FriendRequest />
                        </div>
                        <div className="w-[427px ]">
                            <Friends />
                            <MyGroups />
                        </div>
                        <div className="w-[427px]">
                            <UserList />
                            <BlockList></BlockList>
                        </div>
                    </div>
                    :
                    <div className=" font-nunito  bg-primary text-white h-screen  flex justify-center items-center">
                        <div>
                            <h1 className="font-semibold font-nunito text-[60px]">Plz verify your email </h1>
                            <div className=" flex  justify-center ">
                                <Link className="bg-white text-primary p-[20px]" to='/login'>Back to Login</Link>
                            </div>
                        </div>
                    </div>

            }

            {/* <div className="flex gap-x-[100px] mt-[35px] overflow-hidden">
                <div className="w-[186px]">
                    <Sidebar></Sidebar>
                </div>
                <div className="w-[427px]">
                    <Search />
                </div>
                <div className="w-[344px]">hello world!</div>
                <div className="w-[344px]">hello world!</div>
            </div> */}
        </div>
    );
};

export default Home;