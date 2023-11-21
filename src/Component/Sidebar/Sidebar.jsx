// import portfolio from '../../assets/Porfolio.png'
import { AiOutlineHome, AiOutlineMessage } from 'react-icons/ai'
import { MdNotificationsNone, MdOutlineLogout } from 'react-icons/md'
import { BiSolidCloudUpload } from 'react-icons/bi'
import { FiSettings } from 'react-icons/fi'
import { signOut, updateProfile } from 'firebase/auth'
import auth from '../../firebase-config'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { userLoginInfo } from '../../Pasges/Slice/userSlice'
import { createRef, useState } from 'react'
import Cropper from "react-cropper";
import "cropperjs/dist/cropper.css";
import { getDownloadURL, getStorage, ref, uploadString } from "firebase/storage";


const Sidebar = () => {
  const storage = getStorage();
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const data = useSelector(state => state.userLoginInfo.userInfo)
  const [profileImageUploadModal, setProfilImageUploadModal] = useState(false)

  const [image, setImage] = useState(' ');
  const [cropData, setCropData] = useState("");
  const cropperRef = createRef();

  const handleLogout = () => {
    signOut(auth).then(() => {
      navigate('/login')
      dispatch(userLoginInfo(null))
      localStorage.removeItem('userLoginInfo')
    }).catch((error) => {
      console.log(error)
    });
  }

  const handleUploadImage = () => {
    setProfilImageUploadModal(true)
    setImage(" ")
    setCropData(" ")
  }
  const profileImageUploadModalCancel = () => {
    setProfilImageUploadModal(false)
  }
  const handleUploadChange = (e) => {
    e.preventDefault();
    let files;
    if (e.dataTransfer) {
      files = e.dataTransfer.files;
    } else if (e.target) {
      files = e.target.files;
    }
    const reader = new FileReader();
    reader.onload = () => {
      setImage(reader.result);
    };
    reader.readAsDataURL(files[0]);
  };
  const getCropData = () => {
    if (typeof cropperRef.current?.cropper !== "undefined") {
      setCropData(cropperRef.current?.cropper.getCroppedCanvas().toDataURL());

      const storageRef = ref(storage, auth.currentUser.uid);

      const message4 = cropperRef.current?.cropper.getCroppedCanvas().toDataURL();
      uploadString(storageRef, message4, 'data_url').then((snapshot) => {
        getDownloadURL(storageRef).then((downloadURL) => {
          updateProfile(auth.currentUser, {
            photoURL: downloadURL
          })
            .then(() => {
              setProfilImageUploadModal(false)
            })
        });

      });
    }
  };

  return (
    <div className='group bg-primary h-screen rounded-lg ml-[32px] pt-[38px]'>
      <div className='relative w-28 h-28 mx-auto'>
        <img src={data.photoURL} alt="User profile pic" className='mx-auto w-full h-full rounded-full' />
        <h1 className='text-white font-bold text-center text-[19px]' >{data.displayName}</h1>
        <div className=" transition absolute w-full h-full opacity-0 group-hover:opacity-100  group-hover:bg-overlay top-0 left-0 rounded-full flex justify-center items-center cursor-pointer">
          <BiSolidCloudUpload onClick={handleUploadImage} className=' text-white text-[40px]' />
        </div>
      </div>

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
        <MdOutlineLogout onClick={handleLogout} className='text-[#BAD1FF] text-5xl' />
      </div>
      {
        profileImageUploadModal &&

        <div className='absolute top-0 left-0 w-full z-50 h-screen bg-slate-400 flex justify-center items-center'>
          <div className='bg-white w-2/4  p-10 rounded'>
            <h2 className='font-nunito text-[30px] pb-10 font-semibold'>Upload Your Profile pic</h2>
            <div className="group relative w-28 h-28 mx-auto overflow-hidden rounded-full">
              {
                image ?

                  <div
                    className="img-preview rounded-full"
                    style={{ width: "100%", float: "left", height: "300px" }}
                  />
                  :
                  <div className=' w-28 h-28 mx-auto'>
                    <img src={data.photoURL} alt="User profile pic" />
                  </div>
              }
            </div>

            <input onChange={handleUploadChange} type="file" />
            {
              image &&

              <Cropper
                className="bg-center"
                ref={cropperRef}
                style={{ height: 200, width: "50%" }}
                zoomTo={0.5}
                initialAspectRatio={1} // Set the aspect ratio as needed
                aspectRatio={1} // Set the same aspect ratio as initialAspectRatio
                preview=".img-preview"
                src={image}
                viewMode={1}
                minCropBoxHeight={10}
                minCropBoxWidth={10}
                background={false}
                responsive={true}
                autoCropArea={1}
                checkOrientation={false}
                guides={true}
              />
            }

            <div className='mt-8'>
              <button onClick={getCropData} type="submit" className=" font-nunito font-bold text-white text-[20px] border border-blue-500 p-3  rounded bg-primary ">Upload</button>
              <button onClick={profileImageUploadModalCancel} type="submit" className=" font-nunito font-bold text-white text-[20px] border  p-3  rounded bg-red-500 ml-5 ">Cancel</button>
            </div>
          </div>
        </div>
      }
    </div>
  )
}

export default Sidebar