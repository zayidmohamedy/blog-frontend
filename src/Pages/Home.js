import Listing from '../Components/Home/Listing'
import Navbar from '../Components/Home/Navbar'
import Body from '../Components/Home/Body'
function Home () {
  return (
    <div className='flex flex-row bg-gray-100'>
      <Navbar />
      <Body />
      <Listing/>
    </div>
  )
}
export default Home
