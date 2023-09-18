import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="text-center mt-60">
            <h1 className="font-nunito font-bold text-[60px] text-blue-500">Welcome to Chatting World !</h1>
            <div className="mt-10">
                <button className="border border-blue-500 px-10 py-4 rounded-xl bg-blue-500 text-white font-nunito font-bold text-xl mr-5"><Link to='/register'>Registration</Link></button>
                <button className="border border-blue-500 px-10 py-4 rounded-xl bg-blue-500 text-white font-nunito font-bold text-xl mr-5"><Link to='/login'>Login</Link></button>
            </div>
        </div>
    );
};

export default Home;