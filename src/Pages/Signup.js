function Signup(){
    return(
        <div className="flex flex-col p-10  h-auto w-1/2 mx-80 border-2 rounded-md my-5" >
        <h1 className="text-2xl text-center font-bold mt-5">Welcome to DEV Community 👩‍💻👨‍💻</h1>
        <p className="text-center mt-2">DEV Community 👩‍💻👨‍💻 is a community of 990,649 amazing developers</p>
      
        <h1 className="text-center text-blue-700 text-xl font-bold mt-7  ">Create your Account</h1>
        {/* signup form form */}
        <div className="flex flex-col h-auto">
        <label className="center-none text-md font-bold  mt-5">FirstName</label>
           <input className="h-11 px-3 border-2 hover:border-blue-700 rounded-md mt-2" />
        <label className="center-none text-md font-bold  mt-5">LastName</label>
           <input className="h-11 px-3 border-2 hover:border-blue-700 rounded-md mt-2" />
           <label className="center-none text-md font-bold  mt-5">Email</label>
           <input className="h-11 px-3 border-2 hover:border-blue-700 rounded-md mt-2" />
           <label className="text-md font-bold  mt-5" >Password</label>
           <input className="h-11 px-3 border-2 hover:border-blue-700 rounded-md mt-2"  />
           <button className="h-11 bg-blue-700 rounded-md mt-5 text-white hover:bg-blue-900"> Save and Continue</button>
        </div>
     </div>
    );
    }
    
    export default Signup