 import Header from "./Components/Header"
 import Footer from "./Components/Footer";
 import {BrowserRouter,Routes, Route} from "react-router-dom"
 import Home from "./Pages/Home";
 import Login from "./Pages/Login";
 import Profile from "./Pages/Profile";
 import Profile2 from "./Pages/Pofile2";
 import Signup from "./Pages/Signup";
function App() {
  return (
    <div>
    

      <BrowserRouter>
          <Header/>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/home" element={<Home/>}/>
            <Route path="/profile" element={<Profile />}/>
            <Route path="/profile2" element={<Profile2 />}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/signup" element={<Signup/>}/>
         </Routes>
           <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
