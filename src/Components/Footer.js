 import { Link } from 'react-router-dom'

function Footer () {
  return ( 
    <div className='text-sm py-12 flex flex-col h-auto text-center bg-zinc-300 '>
       <h1 className='text-sm '> <span className='font-bold text-blue-700'>DEV Community 👩‍💻👨‍💻</span> — A constructive and inclusive social network for software developers. With you every step of your journey.</h1>
        
        <div className='flex flex-row flex-wrap w-3/4 ml-36 justify-center my-2 list-black text-blue-700'> 
            
            <Link to="/home">
               <li className='mr-2'> Home</li> 
            </Link>
            <li className='mr-2'> Listings</li>
            <li className='mr-2'> Podcasts</li>
            <li className='mr-2' > Videos</li>
            <li className='mr-2' > FAQ</li>
            <li className='mr-2' > Forem Shop</li>
            <li className='mr-2'> Sponsors</li>
            <li className='mr-2'> About</li>
            <li className='mr-2' > Contact</li>
            <li className='mr-2' > Guides</li>
            <li className='mr-2'> Software comparisons</li>
            <li className='mr-2' >   Code of Conduct</li>
            <li className='mr-2' > Privacy Policy</li>
            <li className='mr-2' > Terms of use</li>

        </div>
        <p>Built on Forem — the open source software that powers DEV and other inclusive communities.</p>
        <p>Made with love and Ruby on Rails. DEV Community 👩‍💻👨‍💻 © 2016 - 2023.</p>


    </div>
   
  )
}

export default Footer
