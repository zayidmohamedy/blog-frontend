import {RiHeart2Line ,RiChat1Line,RiBookmarkLine} from "react-icons/ri"
import {Link} from "react-router-dom"
function Blog(){
    return(
     <div className="flex flex-col h-auto">

        {/* blog 1 */}
        <div className="flex flex-col mb-2 border p-5 rounded-lg  h-auto">
         {/* user */}
         <Link to="/profile">
             <div className="flex flex-row ">
            <img className="rounded-full h-10 w-10   " src="https://avatars.githubusercontent.com/u/65617964?v=4" alt="image"/>
            <div className="flex justify-start items-start flex-col ">
             <h1 className="text-sm font-medium ml-2 ">Zayidmohamedy</h1>
             <p className="text-sm ml-2">jan 1</p>
            </div>
         </div>
          </Link>
         {/* post */}
         <p  className="font-bold text-2xl text-start ml-5 mt-5">This is my first blog guys </p>
         <div className='flex flex-row  list-none my-5 justify-between   '>
             <div className="flex flex-row">
             <button className='flex flex-row mt-3 ps-5 text-md mr-3'> <RiHeart2Line className="inline mr-2"  size={20}/>2 reaction</button>
             <button className='flex flex-row mt-3 text-md mr-2'> <RiChat1Line className="inline mr-2" size={21}/> 0 comments</button>
             </div>
            <button className='flex flex-row mt-3 text-md mr-2'>2 min read <RiBookmarkLine className="inline ml-2" size={20}/>  </button> 
        </div>
     </div>

     {/* blog-2 */}
     <div className="flex flex-col  border p-5 rounded-lg  h-auto">
         {/* user */}
         <Link to="/profile">
               <Link to="/profile">
            
          </Link> <div className="flex flex-row ">
            <img className="rounded-full h-10 w-10   " src="https://avatars.githubusercontent.com/u/65617964?v=4" alt="image"/>
            <div className="flex justify-start items-start flex-col ">
             <h1 className="text-sm font-medium ml-2 ">Zayidmohamedy</h1>
             <p className="text-sm ml-2">jan 6</p>
            </div>
         </div>
            </Link>
         {/* post */}
         <p  className="font-bold text-2xl text-start ml-5 mt-5">This is my second blog </p>
         <div className='flex flex-row  list-none my-5 justify-between   '>
             <div className="flex flex-row">
             <button className='flex flex-row mt-3 ps-5 text-md mr-3'> <RiHeart2Line className="inline mr-2"  size={20}/>2 reaction</button>
             <button className='flex flex-row mt-3 text-md mr-2'> <RiChat1Line className="inline mr-2" size={21}/> 0 comments</button>
             </div>
            <button className='flex flex-row mt-3 text-md mr-2'> 9 min read <RiBookmarkLine className="inline ml-2" size={20}/> </button> 
        </div>
     </div>


     </div>
    );
    }
    export default Blog