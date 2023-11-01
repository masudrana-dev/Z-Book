import { BsThreeDotsVertical } from "react-icons/bs"
import portfolio from '../../assets/Porfolio.png'


const MyGroups = () => {
    return (
        <div className=' mt-10 shadow-gray py-4 h-[420px]  px-3 w-full rounded-lg overflow-y-scroll'>
            <div className='flex justify-between items-center'>
                <h3 className="font-nunito font-semibold pl-[20px] text-[22px]">My Group </h3>
                <BsThreeDotsVertical className='  text-[20px]  text-primary ' />
            </div>
            {/* group name s  */}
            <div className="flex items-center px-5 mt-5 border-b-2 border-gray-400 pb-3">
                <div>
                    <img src={portfolio} alt="" />
                </div>
                <div className="ml-[14px]">
                    <h3 className="font-nunito font-bold text-[16px] w-full">Friend Reunion</h3>
                    <p className="font-nunito font-light ">Hi Guys !</p>
                </div>
                <div className="ml-[30px]">Today ,8:35PM</div>
            </div>   <div className="flex items-center px-5 mt-5 border-b-2 border-gray-400 pb-3">
                <div>
                    <img src={portfolio} alt="" />
                </div>
                <div className="ml-[14px]">
                    <h3 className="font-nunito font-bold text-[16px] w-full">Friend Reunion</h3>
                    <p className="font-nunito font-light ">Hi Guys !</p>
                </div>
                <div className="ml-[30px]">Today ,8:35PM</div>
            </div>   <div className="flex items-center px-5 mt-5 border-b-2 border-gray-400 pb-3">
                <div>
                    <img src={portfolio} alt="" />
                </div>
                <div className="ml-[14px]">
                    <h3 className="font-nunito font-bold text-[16px] w-full">Friend Reunion</h3>
                    <p className="font-nunito font-light ">Hi Guys !</p>
                </div>
                <div className="ml-[30px]">Today ,8:35PM</div>
            </div>
            <div className="flex items-center px-5 mt-5 border-b-2 border-gray-400 pb-3">
                <div>
                    <img src={portfolio} alt="" />
                </div>
                <div className="ml-[14px]">
                    <h3 className="font-nunito font-bold text-[16px] w-full">Friend Reunion</h3>
                    <p className="font-nunito font-light ">Hi Guys !</p>
                </div>
                <div className="ml-[30px]">Today ,8:35PM</div>
            </div>
        </div>
    )
}

export default MyGroups