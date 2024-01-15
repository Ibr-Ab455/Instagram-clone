// eslint-disable-next-line no-unused-vars
import React, { useState } from "react"
import {  Alert, Spinner } from "flowbite-react"
import { Link, useNavigate } from "react-router-dom"
import image1 from '../../src/assets/images/image-1.png'
import image2 from '../../src/assets/images/image-2.png'
import image8 from '../../src/assets/images/image_8.png'
import image9 from '../../src/assets/images/image_9.png'

function SignUp() {
  
  const navigate = useNavigate();

  const [formData, setFormData] = useState({});
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(false)
  
  const handlechange = (e) => {
     setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
  };

 const handleSubmit = async (e) => {
  e.preventDefault();

 if(!formData.username || !formData.email || !formData.password){
  return setErrorMessage('please fill out all fields');
 }

  try {
    setLoading(true);
    setErrorMessage(null)
    const res = await fetch('/api/auth/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify(formData)
    });
    const data = await res.json()
     
    if(data.success === false){
      return setErrorMessage(data.message)
    }
    setLoading(false);
    if(res.ok){
      navigate('/signin')
    }
  } catch(error) {
   setErrorMessage(error.message)
   setLoading(false)
  }
 };

  return (
    <div className="bg-white w-full relative">
      <div className="flex md:flex-row flex-col">
        {/* left */}
        <div className="w-[80%]">
         <img src={image8} alt="Instgram" className="w-full"/>
    
        </div>
        {/*right */}
          <div className="border-gray-100 p-4  w-[25%] absolute right-[21%] h-[90vh]   top-10 border-2 rounded">
          <div>
           <img src={image9} alt="logo" className="w-40 ml-12 cursor-pointer"/>
         
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
           
           <input type="text" placeholder="username" id="username" onChange={handlechange} className="rounded-sm text-[13px] py-2 outline-none"/>
           
           <input type="email" placeholder="name@Example.com" id="email" onChange={handlechange}/>
          
           <input type="password" placeholder="password" id="password" onChange={handlechange}/>
          
           <button className="w-full bg-[#405DE6] py-[6px] rounded text-white" type="submit"
           disabled={loading}>
            { loading ? (
                <>
                <Spinner size='sm'/>
                <span className="pl-3">loading...</span>
                </>
              ): (
                'Register'
               )}
           </button>
          </form>

          <div className="mt-8 border-[#fff] bg-white p-3 rounded">
            <Link to="/signin">
             Already have account?
             <span className="text-blue-500 pl-2">logg inn</span>
            </Link>
           </div>
          </div>
         
          {
            errorMessage && (
              <Alert className="mt-5" color='failure'>
                {errorMessage}
              </Alert>
            )
          }

          <div className="flex mt-[130px]   space-x-1">
          <img src={image1} alt="image1" className="w-[100px] h-10"/>
          <img src={image2} alt="image2" className="w-[100px] h-10"/>
         </div>
       
        </div>
      </div>
     
     
      <p className="text-[12px] text-gray-500 text-center mt-14">Meta About Blog Job Help API Privacy Cookie settings Conditions Places Instagram Lite </p>
      <h3 className="text-center text-gray-500 text-sm my-2">© 2024 Instagram from Meta</h3>
    
    </div>
  )
}

export default SignUp