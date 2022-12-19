import React from 'react'
import { Link } from "react-router-dom";
import './alpha.css';



const Alpha = ({ Id, Cover, Name, Category, Stars, Location, Add }) => {



  return (
    <>
      <div className='Chefbox' >

        <div className="chefPic">
          <img src={Cover} alt='' />
          <span>{Stars}<i className="fa-solid fa-star"></i></span>
        </div>

        <div className="kera1">

          <div className="kera1inner">
              <h2>{Name}</h2>

            <div className="innerbox">

              <div className="first">
                <p><i class="fa-solid fa-book"></i>{Category}</p>     
                <p> <span><i className="fa-solid fa-calendar-days"></i></span><span>{Add}</span> </p>
              </div>

              <div className="second">
                <p> <span><i className='fa fa-location-dot'></i></span> <span> {Location}</span></p>
                <p> <span><i class="fa-sharp fa-solid fa-smog"></i></span> <span></span></p>
                
              </div>
            </div>

           <Link to={Id}>  <button className='chefBtn' > Explore Now </button> </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Alpha
