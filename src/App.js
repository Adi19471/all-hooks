import React from "react";
import { Userefhook } from "./Components/Hooks/Userefhook";
import Userefhook2 from "./Components/Hooks/Userefhook2";
import { Userrefhook3 } from "./Components/Hooks/Userrefhook3";
import Usestateobject from "./Components/Usestateobject/Usestateobject";
import Home from "./Components/CustomHooks/Home";
import Userefooktraking from "./Components/Useref/Userefooktraking";



import {BrowserRouter,Routes,Route,Link} from "react-router-dom"

import Homepage from "./Components/pages/Homepage/Homepage";
import Dasshboarpage from "./Components/pages/Dashboarpages/Dashboar"
// D:\Full stack works\REACTJS\XI. React Hooks\hooks-all\all-hooks\src\Components\pages\Dashboarpages\Dashboar.jsx
import Contactpage from "./Components/pages/Contactpage/Contact";



const App = () => {
  return (
    <>
      <center>
        {/* <Userefhook /> */}

        {/* <Userefhook2 /> */}

        {/* <Userrefhook3 /> */}


        {/* <Usestateobject /> */}
{/* <Home /> */}

{/* <Userefooktraking /> */}



<BrowserRouter>


<Link to="/" >Homepage</Link>
<Link to="/Dashbord" >Dashbord page</Link>
<Link to="/Contact" >Contact page</Link>
  <Routes>
    <Route path="/" element={<Homepage />}></Route>
    <Route path="/Dashbord" element={<Dasshboarpage />}></Route>
    <Route path="/Contact" element={<Contactpage />}></Route>
  </Routes>
</BrowserRouter>

      </center>
    </>
  );
};

export default App;
