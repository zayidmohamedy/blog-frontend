function Listing() {
    return (
    <div className="border bg-gray-50 w-96 rounded-md h-auto mr-7 mt-3 p-4">
        <div className="hover:bg-white mr-2 flex flex-row justify-between border-b-1 ">
            <h1 className=' mr-5 text-md text-xl font-bold  '>Listings</h1>
            <h1 className="text-sm text-blue-700 ">See all</h1>
        </div>

        {/* listings */}
        <div className=" my-3 flex flex-col">
            <div className=" border-y p-4 hover:bg-white" > 
                <p className="text-md">🧬 DocArray: The ultimate open source library for nested, unstructured, multimodal data.</p>
                <h1 className="text-sm my-2">Products</h1>
            </div>
            <div className=" border-y p-4 hover:bg-white" > 
                <p className="text-md">Hiring Technical Writers / Developer Evangelist to help promote (and build) an API!</p>
                <h1 className="text-sm my-2">jobs</h1>
            </div>
           
            <div className=" border-y p-4 hover:bg-white" > 
                <p className="text-md">Community of Practice for Tech Leaders </p>
                <h1 className="text-sm my-2">Events</h1>
            </div>
           
            <div className=" border-y p-4 hover:bg-white" > 
                <p className="text-md">Revolutionize DNA Analysis with DNAnalyzer: Star Our Open-Source Project Today! </p>
                <h1 className="text-sm my-2">collabs</h1>
            </div>
            <div className=" border-y p-4 hover:bg-white" > 
                <p className="text-md"> Refactor Like a Superhero: Free Online Book! 🧑‍💻➡️🦸 </p>
                <h1 className="text-sm my-2">education</h1>
            </div>
           
        </div>
        {/* create listings */}
        <div className="text-sm font-bold my-3 text-center hover:bg-white">
            <button type="">Create a listing</button>
        </div>
        
    </div>
    )
  }
  export default Listing
  