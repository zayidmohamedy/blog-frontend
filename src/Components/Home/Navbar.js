import { Link } from 'react-router-dom'
import {FcHome ,FcBookmark,FcCustomerSupport, FcElectronics,FcPaid,FcRules, FcVideoProjector,FcBusinessContact,FcIdea,FcLikePlaceholder ,FcReading ,FcManager, FcSpeaker} from "react-icons/fc"
import {BsBookHalf ,BsEyeglasses ,BsTwitter,BsTwitch} from "react-icons/bs"
import {SlLike} from "react-icons/sl"
import {GrFacebook} from "react-icons/gr"
import {FaGithub} from "react-icons/fa" 
import {AiFillInstagram} from "react-icons/ai" 
function Navbar () {
    return (
    <div className=" flex flex-col h-auto w-64 p-5 ">

       <div className="h-80 p-2 border rounded-md bg-white " >
        <h1 className="text-xl font-bold mt-2">DEV Community 👩‍💻👨‍💻 is a community of 990,649 amazing developers</h1>
        <p className="text-sm py-2"> We're a place where coders share, stay up-to-date and grow their careers.</p>
      
          <div className='flex flex-col'>
          <Link to='/signup'>
            <button className=' w-full h-10 border hover:bg-blue-700 hover:text-white border-blue-700 p-1 rounded-md text-blue-700'>
               Create Account
             </button>
          </Link>
           <Link to='/login'>
             <button className='w-full h-10 py-3 hover:bg-blue-100  mt-2 rounded-md'>Login</button>
           </Link>
              
          </div>

       </div> 

       {/* Navbar Links */}

       <div className='flex flex-col list-none  mt-5 w-auto '>

          <Link to='/home'>
              <li className='flex flex-row mt-3 text-md'> <FcHome className="inline mr-2" size={25}/> Home</li>
          </Link>
          <li className='flex flex-row mt-3 ps-5 text-md'> <FcReading className="inline mr-2"  size={25}/> Reading list</li>
          <li className='flex flex-row mt-3 text-md'> <FcRules className="inline mr-2"/> listings</li>
          <li className='flex flex-row mt-3 text-md'> <FcSpeaker className="inline mr-2" size={25}/> Podcasts</li>
          <li className='flex flex-row mt-3 text-md'> <FcVideoProjector className="inline mr-2"  size={25}/> Videos</li>
          <li className='flex flex-row mt-3 text-md'> <FcBookmark className="inline mr-2" size={20}/> Tags</li>
          <li className='flex flex-row mt-3 text-md'> <FcIdea className="inline mr-2" size={20}/> FAQ</li>
          <li className='flex flex-row mt-3 text-md' > <FcPaid className="inline mr-2" size={24}/> Forem Shop</li>
          <li className='flex flex-row mt-3 text-md'> <FcLikePlaceholder className="inline mr-2" size={20}/> Sponsers</li>
          <li className='flex flex-row mt-3 text-md'> <FcManager className="inline mr-2" size={25}/> About</li>
          <li className='flex flex-row mt-3 text-md'> <FcBusinessContact className="inline mr-2" size={25} /> Contact</li>
          <li className='flex flex-row mt-3 text-md' > <BsBookHalf className="inline mr-2" size={20} /> Guides</li>
          <li className='flex flex-row mt-3 text-md'> <FcElectronics className="inline mr-2" size={25}/> Software comparisons</li>

          </div>

          <h1 className='mt-5  text-md font-bold '>Others</h1>
         
              <div className='flex flex-col list-none  mt-2 w-auto '> 
                  <li className='flex flex-row mt-3 text-md' > <SlLike className="inline mr-2" size={20} /> Code Of Conduct</li>
                  <li className='flex flex-row mt-3 text-md'> <FcCustomerSupport className="inline mr-2" size={25}/> Privacy Policy</li>
                  <li className='flex flex-row mt-3 text-md'> <BsEyeglasses className="inline mr-2" size={25}/> Terms of use</li>
               </div>

               <div className='flex flex-row justify-evenly list-none  my-7 w-auto '> 
                  <li> <BsTwitter className="inline mr-2" size={20} /> </li>
                  <li> <GrFacebook className="inline mr-2" size={19}/> </li>
                  <li > <FaGithub className="inline mr-2" size={20}/> </li>
                  <li > <AiFillInstagram className="inline mr-2" size={20}/> </li>
                  <li > <BsTwitch className="inline mr-2" size={20}/> </li>
               </div>







    </div>
    );
  }
  export default Navbar
  