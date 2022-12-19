import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./header.css";
import logo from '../../Images/logo.png'





const Header = () => {

  const [navList, setNavList] = useState(false)
  const [navbar, setNavbar] = useState(false)

// const [register, setRegister] = useState(false);

// const toggleDropdown = event => {
      
  
//   setRegister((current) => !current);
// }

  const changeBackground = () => {
      if(window.scrollY > 66)
          {setNavbar(true)}
       else
          {setNavbar(false) }  
         
  }

  useEffect(() => {
    changeBackground()
    window.addEventListener("scroll", changeBackground)
  })

  return (
    <>
    
      <nav className={navbar ? "navbar active" : "navbar"}>

        <div className="navbar-logo">
         <img src={logo} alt="" />
        </div>

        <div className='toggle'>
            <button onClick={() => setNavList(!navList)}>{navList ? <i className='fa fa-times'></i> : <i className='fa fa-bars'></i>}</button>
        </div>

     <div className="Navv">
        <ul className={navList ? "small" : "nav-items"}>
           <Link to="/">Home</Link>
          
               <Link to="/user">
                   <i class="fa-solid fa-add"></i> User experience
               </Link>

           <Link to="/register" className="reg" >Register <i class="fa-solid fa-arrow-right-long"></i> </Link>
           
         </ul>
    </div>

         
</nav>
         
    </>
  );
}


export default Header;


