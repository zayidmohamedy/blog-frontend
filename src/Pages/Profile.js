import {HiLocationMarker} from "react-icons/hi"
import {FaBirthdayCake} from "react-icons/fa"
import {AiFillGithub} from "react-icons/ai" 
import {BsThreeDots} from "react-icons/bs" 
import {RiChat1Line ,RiFileList3Line}  from"react-icons/ri"
import { BiHash} from "react-icons/bi"
import Blog from "../Components/Profile/Blog"

function Profile(){
    return(
      <div className="min-h-200  bg-gray-100" >

        {/* cover */}
         <div className=" justify-center static z-0  w-full h-36 bg-black "> 
         </div>
         {/* profile */}
           <div className="bg-white border  -mt-16 z-10  mx-auto rounded-lg h-auto w-3/4  ">
               <div className="absolute top-40 right-48">
                  <button className="text-white font-medium hover:bg-blue-900 bg-blue-600 rounded-md border h-10 w-20">follow</button>
                  <BsThreeDots className="inline ml-5" size={20}/>
               </div>
                  <img className="rounded-full h-32 w-32 border-8 z-20 absolute left-96 ml-48 top-16 mb-7 border-black  " src="https://avatars.githubusercontent.com/u/65617964?v=4" alt="image"/>
                  <h1 className="text-4xl font-bold text-center mt-24 mb-4">Mohamed Abdullahi Hassan</h1>
                 <p className="text-lg text-center py-4 mx-20">Software engineer | junior Full-stack web developer | Tech & AWS lover | studying CSE at Dhaka International University</p>
                
                <div className='flex flex-row list-none my-4 justify-center   '>
                    <li className='flex flex-row mt-3 ps-5 text-md mr-3'> <HiLocationMarker className="inline mr-2"  size={25}/>Dhaka ,Bangladesh</li>
                    <li className='flex flex-row mt-3 text-md mr-2'> <FaBirthdayCake className="inline mr-2" size={20}/> Joined on Oct 19, 2022</li>
                    <li className='flex flex-row mt-3 text-md mr-2'> <AiFillGithub className="inline mr-2" size={25}/> </li> 
                </div>


                {/*  body */}
                <div  className="flex flex-row h-auto">
                    <div className=" pl-5 m-2 h-auto flex flex-col border rounded-lg w-1/3">
                      <div className='flex flex-col list-none my-3 justify-center   '>
                          <li className='flex flex-row mt-3 ps-5 text-md mr-3'> <RiFileList3Line className="inline mr-2"  size={25}/>2 posts published</li>
                          <li className='flex flex-row mt-3 text-md mr-2'> <RiChat1Line className="inline mr-2" size={20}/>0 comments written</li>
                          <li className='flex flex-row mt-3 text-md mr-2'> <BiHash className="inline mr-2" size={25}/>5 tags followed </li> 
                      </div>
                    </div>
                    <div className=" m-2 p-3  w-2/3">
                       <Blog />
                    </div>
                </div>


           </div>
       
      </div>
    );
    }
    
    export default Profile