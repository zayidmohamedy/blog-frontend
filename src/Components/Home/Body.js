import {RiHeart2Line ,RiChat1Line,RiBookmarkLine} from "react-icons/ri"
import {Link} from "react-router-dom"
import Blog from "../Profile/Blog"
import Blog2 from "../Profile/Blog2"
function Body() {
    return (
    <div className="mr-3  w-1/2 rounded-md">
        <div className="mt-5 mr-2 flex flex-row  list-none ">
            <li className=' mr-5 text-md text-xl font-bold '>Relevent</li>
            <li className=' mr-5 text-md text-xl   '>Latest</li>
            <li className=' mr-5 text-md  text-xl '>Top</li>
        </div>

        {/* Active Blog*/}
        <div className="border mt-5  bg-white rounded-md h-auto">
            <img className="rounded-t-lg h-64 w-full" src="https://th.bing.com/th/id/R.5219d9b3f4606ed553479e91b2b9b8d2?rik=0unuw4kUwn%2b7WA&pid=ImgRaw&r=0&sres=1&sresct=1" alt="blog image"/>
           
         <div className="flex flex-col mb-5  p-5 rounded-lg  h-48">
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
                <p  className="font-bold text-2xl text-start ml-5 mt-5">A Complete guide to Full-stuck developement </p>
                <div className='flex flex-row  list-none my-5 justify-between   '>
                    <div className="flex flex-row">
                    <button className='flex flex-row mt-3 ps-5 text-md mr-3'> <RiHeart2Line className="inline mr-2"  size={20}/>10 reaction</button>
                    <button className='flex flex-row mt-3 text-md mr-2'> <RiChat1Line className="inline mr-2" size={21}/> 5 comments</button>
                    </div>
                    <button className='flex flex-row mt-3 text-md mr-2'> 1 min read  <RiBookmarkLine className="inline ml-2" size={20}/></button> 
                </div>
            </div>

    
        </div>
             {/* profile 2 blogs  */}
          <div className="bg-white p-2">
            <Blog2/>
         </div>

           {/* profile 1 blogs  */}
           <div className="bg-white p-2">
            <Blog/>
         </div>
         

    </div>
    )
  }
  export default Body
  