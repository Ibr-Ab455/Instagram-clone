// eslint-disable-next-line no-unused-vars
import React from "react"
import Insta from '../../src/assets/images/insta.png'
import { TextInput } from "flowbite-react"
import { Link } from "react-router-dom"
import image1 from '../../src/assets/images/image-1.png'
import image2 from '../../src/assets/images/image-2.png'

function SignUp() {
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
          <form className="flex flex-col gap-4">
           <TextInput type="text" placeholder="Username" id="username" />
           <TextInput type="text" placeholder="name@Example.com" id="email" />
           <TextInput type="text" placeholder="Password" id="password" />
           <button className="w-full bg-[#2B6AD0] p-2 rounded text-white">Register</button>
          </form>

            <div className="mt-8 border-[#eee] bg-white p-3 rounded">
            <Link to="/signin">
            Already have account?
             <span className="text-blue-500 pl-2">logg inn</span>
            </Link>
           </div>
          </div>
       
        </div>
      </div>

      <div className="flex my-10 mx-20 space-x-3">
        <img src={image1} alt="image1" className="w-26 h-14"/>
        <img src={image2} alt="image2" className="w-26 h-14"/>
      </div>
    </div>
  )
}

export default SignUp