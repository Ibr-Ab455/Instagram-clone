// eslint-disable-next-line no-unused-vars
import React, { useEffect, useRef, useState } from 'react'
import Navbar from '../components/Navbar'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { CiSettings } from "react-icons/ci";
import TopUser from './TopUser';
import { app } from '../firebase';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';


function Profile() {

  const { currentUser } = useSelector(state => state.user);
  const [imagefile, setImageFile] = useState(null);
  const [ imageUrl, setFileUrl] = useState(null);
  const [imageFileUploadProgress, setImageFileUploadProgress] = useState(null);
  const [imageFileUploadError, setImageFileUploadError] = useState(null);

  const filePickerRef = useRef();

  const handleImage = (e) => {
   const file = e.target.files[0]
   if(file){
    setImageFile(file)
    setFileUrl(URL.createObjectURL(file));
   }
  }

  useEffect(() => {
    if (imagefile){
     uploadImage();
    }
  }, [imagefile])

  const uploadImage = async () => {
    const storage = getStorage(app);
    const fileName = new Date().getTime() + imagefile.name;
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, imagefile);

    uploadTask.on(
      'state_changed',
      (snapshot) => {
        const progress = 
        (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setImageFileUploadProgress(progress.toFixed(0));
      },
      
      (error) => {
       setImageFileUploadError('Could not upload image (files must be less then 2MB');
      },

      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setFileUrl(downloadURL)
        })
      }
    );
  };

  return (
    <div>
      <Navbar/>
      <div className='max-w-4xl p-10 xl:mx-auto'>
        <div className='grid grid-cols-4 gap-4'>
          {/* left image */}
         
          <div>
            <input type='file' accept='image/*' onChange={handleImage} ref={filePickerRef} hidden/>
           
            <img src={ imageUrl || currentUser.profile}  alt='user'
             className="rounded-full object-cover w-36 h-36 cursor-pointer" onClick={() => filePickerRef.current.click()}/>
          </div>
       
           {/* right */}
           <div className="col-span-3">
          <div className="flex items-center space-x-7">
            <span className="text-gray-800 text-2xl mr-7 ">{currentUser.username}</span>
              
             
              <div className="cursor-pointer text-sm text-gray-700 font-semibold p-1 px-2 border border-gray-200 mr-4">
              Create post
              </div>
          
            
           
            <CiSettings className="cursor-pointer h-6 w-6" />
          </div>
          <div className="mt-4 flex items-center ">
            <div className="ml-4">
              <span className="font-semibold mr-2">6</span> posts
            </div>
            <div className="ml-4">
              <span className="font-semibold mr-2">208</span> following
            </div>

            <div className="ml-4">
              <span className="font-semibold mr-2">449</span> followers
            </div>
          </div>
          <div className="pt-5">
            <p className="text-base font-semibold mr-2 ">{currentUser.fullname}</p>
            <p className="text-base text-gray-400  font-normal mr-2 ">
              Web Devloper
            </p>
            <p className="text-base font-normal mr-2 ">
             ‎احرص على ماينفعك واستعن بالله
            </p>
            <Link to="https://www.youtube.com/channel/UCOup8YbqdqW2rB7j1uEQcOA" className="font-semibold">
              www.youtube.com/@helid5752
            </Link>
          </div>
        </div>
       </div>

       <div className="mt-10">
            <TopUser/>
          </div>
          <hr className="border-gray-500 mt-10" />
       
        <div className="flex mt-5 items-center w-full">
          <div className='w-[50%] bg-black'>
          <img src='https://lh3.googleusercontent.com/a/ACg8ocJRZxeNSjtgbMEksCurIUa1xzA6b1NVpXdRENyZ3xv-1g=s432-c-no' alt='post' className='w-60'/>
          </div>

          <div className='w-[50%] bg-black'>
          <img src='https://lh3.googleusercontent.com/a/ACg8ocJRZxeNSjtgbMEksCurIUa1xzA6b1NVpXdRENyZ3xv-1g=s432-c-no' alt='post' className='w-60'/>
          </div>

          <div className='w-[50%] bg-black'>
          <img src='https://lh3.googleusercontent.com/a/ACg8ocJRZxeNSjtgbMEksCurIUa1xzA6b1NVpXdRENyZ3xv-1g=s432-c-no' alt='post' className='w-60'/>
          </div>
          
         
        </div>
      </div>
    
    </div>
  )
}

export default Profile