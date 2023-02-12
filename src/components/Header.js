import { useState } from "react";
import { Link } from "react-router-dom";


const Header = () => {
   const [loggedIn , setLoggedIn] = useState(true)
   return (
      <>
      <div className="header">
         <div className="Logo">
            <img src="https://www.pngegg.com/en/png-ntodr" alt="Logo"/>
         </div>
         <div className="navbar-items">
            <ul>
              <Link to="/">Home</Link>
              <Link to="/about">About Us</Link>
              <Link to="/contact">Contact</Link>
              <li>Cart</li>
            </ul>
         </div>
         <button onClick={()=>{
             setLoggedIn(!loggedIn)
         }}>{loggedIn===true? "Login" :"Logout"}</button>
      </div>
      </>
   )
}

export default Header;