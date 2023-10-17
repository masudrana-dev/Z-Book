import portfolio from '../../assets/Porfolio.png'
import { AiOutlineHome, AiOutlineMessage } from 'react-icons/ai'
import { MdNotificationsNone, MdOutlineLogout } from 'react-icons/md'
import { FiSettings } from 'react-icons/fi'
const Sidebar = () => {
    return (
        <div className='bg-primary h-screen rounded-lg ml-[32px] pt-[38px]'>
            <img src={portfolio} alt="User profile pic" className='mx-auto' />
            <div className=' mt-[78px] relative flex justify-center pt-[20px] pb-[24px] after:absolute
             after:content-[" "]  after:top-0 after:right-0 after:bg-white after:w-[140px] after:h-full after:z-[-1] z-[1] after:rounded-l-lg before:absolute before:content-[" "] before:h-full before:w-[8px] before:top-0 before:right-0 before:bg-primary before:rounded-l-lg '>
                <AiOutlineHome className='bg-white text-5xl text-primary'></AiOutlineHome>
            </div>
            <div className=' mt-[78px] relative flex justify-center '>
                <AiOutlineMessage className='text-[#BAD1FF] text-5xl' />
            </div>
            <div className=' mt-[78px] relative flex justify-center '>
                <MdNotificationsNone className='text-[#BAD1FF] text-5xl' />
            </div>
            <div className=' mt-[78px] relative flex justify-center '>
                <FiSettings className='text-[#BAD1FF] text-5xl' />
            </div>
            <div className=' mt-[78px] relative flex justify-center '>
                <MdOutlineLogout className='text-[#BAD1FF] text-5xl' />
            </div>

        </div>
    )
}

export default Sidebar