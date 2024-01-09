import React, { useState } from "react"
import Insta from '../../src/assets/images/insta.png'
import { TextInput, Alert, Spinner } from "flowbite-react"
import { Link, useNavigate } from "react-router-dom"
import image1 from '../../src/assets/images/image-1.png'
import image2 from '../../src/assets/images/image-2.png'

function SignIn() {
  
  const navigate = useNavigate();

  const [formData, setFormData] = useState({});
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(false)
  
  const handlechange = (e) => {
     setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
  };

 const handleSubmit = async (e) => {
  e.preventDefault();

 if(!formData.email || !formData.password){
  return setErrorMessage('please fill out all fields');
 }

  try {
    setLoading(true);
    setErrorMessage(null)
    const res = await fetch('/api/auth/signin', {
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
      navigate('/dashborad')
    }
  } catch(error) {
   setErrorMessage(error.message)
   setLoading(false)
  }
 };

  return (
    <div className="min-h-screen  w-full  relative">
    <div className="fixed bg-gray-800 w-1 h-full top-0"></div>
      <div className="mx-auto max-w-3xl flex  flex-col md:flex-row md:items-center">
        {/* left */}
        <div className="w-[55%]">
         <img src={Insta} alt="Instgram" className="w-[60%]"/>
        </div>
        {/*right */}
        <div className="border-[#eee]   h-[90vh] px-3 w-[40%] border-2  rounded">
          <div>
          <h1 className="text-white mb-8 pt-4 text-2xl italic font-extrabold text-center">Instagram</h1>
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
           <TextInput type="email" placeholder="name@Example.com" id="email" onChange={handlechange}/>
           <TextInput type="********" placeholder="Password" id="password" onChange={handlechange}/>
           <button className="w-full bg-[#2B6AD0] p-2 rounded text-white" type="submit"
           disabled={loading}>
            { loading ? (
                <>
                <Spinner size='sm'/>
                <span className="pl-3">loading...</span>
                </>
              ): (
                'Log In'
               )}
           </button>
          </form>

            <div className="mt-8 border-[#eee] bg-white p-3 rounded">
            <Link to="/signup">
            Dont Have an account?
             <span className="text-blue-500 pl-2">Regsiter</span>
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
       
        </div>
      </div>

      <div className="flex my-10 mx-20 space-x-3">
        <img src={image1} alt="image1" className="w-26 h-14"/>
        <img src={image2} alt="image2" className="w-26 h-14"/>
      </div>
    </div>
  )
}

export default SignIn