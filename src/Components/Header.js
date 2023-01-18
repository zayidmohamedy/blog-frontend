import { MdSearch } from 'react-icons/md'
import { Link } from 'react-router-dom'

function Header () {
  return (
    <div className=' border-b-2 flex justify-between py-2 px-4 '>
      <div className='flex'>
       <Link to="/home">
       <img   className='h-11'  src='https://dev-to-uploads.s3.amazonaws.com/uploads/logos/resized_logo_UQww2soKuUsjaOGNB38o.png' alt='logo' />
       </Link>
        <div className=' flex items-center ml-4 px-2 border rounded-md hover:border-sky-700'>
          <input className='w-72 border-none   outline-none  p-1.5 h-8 border ' type='text' placeholder='Search'  />
          <MdSearch size={30} />
        </div>
      </div>

      <div>
        <Link to='/login'>
          <button className='mr-3 h-10 w-16 rounded-md hover:bg-blue-100 '>Login</button>
        </Link>
        <Link to='/signup'>
          <button className='h-10 border border-blue-700 p-1 rounded-md text-blue-700 hover:bg-blue-700 hover:text-white'>
            Create Account
          </button>
        </Link>
      </div>
    </div>
   
  )
}

export default Header
