import { BsThreeDotsVertical } from 'react-icons/bs'
import { BiSearch } from 'react-icons/bi'
const Search = () => {
    return (
        <div className='relative'>
            <input type="text" className=" shadow-gray py-4 px-[50px] w-full rounded-3xl focus:outline-none " placeholder="Search......" />
            <div className='flex'>
                <BiSearch className=' absolute text-[40px] left-0 top-[18%]   px-[10px]' />
                <BsThreeDotsVertical className=' absolute text-[40px] right-0 top-[18%] px-[10px] text-primary ' />
            </div>
        </div>
    )
}

export default Search