import React, {useRef} from 'react'
import { Link } from "react-router-dom";
import './home.css';
// import img5 from '../Images/homePic1.jpg';
import img6 from '../Images/homePic2.jpg';
import img7 from '../Images/homePic3.jpg';
// import Heading from './common/Heading'
import pic1 from '../Images/spcll-2.jpg';
import pic3 from '../Images/spcll-3.jpg';
import pic2 from '../Images/spcll-4.jpg';
import { newAdd, spots, hosts } from "./data/Data";
import Alpha from './Alpha';

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from 'swiper';



import { useSwiper } from 'swiper/react';

// Import Swiper styles
import "swiper/css";
import 'swiper/css/autoplay';





const Home = () => {


  // For next Slide
  // const swiper = useSwiper();

  const swiperRef = useRef();




  return (
    <>
      <div className="home-image" >
        {/* <img src={img5} alt='' className='img5' /> */}
        <img src={img6} alt='' className='img6' />
        <img src={img7} alt='' className='img7' />
      </div>
      <div className="home-text">
        <h1>Explore your Way</h1>
        <p>Support their way</p>

        <div className="inner-text">
            <p>Discover locally-curated explore experiences that make a positive impact.</p>
        </div>
      </div>

    <div className="good">
      <div className="search">

        <div className="one go">
             <h2>LOCATION</h2>
             <input type="text" minLength={5} maxLength={17} placeholder='Enter a location'/>
        </div>

        <div className="two go">
             <h2>CATEGORY</h2>
             <select name="" id="">
                <option value="Categories" disabled>Categories</option>
                <option value="Food">Food</option>
                <option value="Tourspot">Tourist spot</option>
                <option value="Sojourn">Sojourn</option>
             </select>
        </div>

        <div className="three go">
            <Link to="/explore">
                 <h1><i className="fa-solid fa-search"></i> EXPLORE</h1>
            </Link>
        </div>

      </div>
    </div>

  <section className="mission">

    {/* <Heading title='Our Mission' subtitle=' Inspire positive change for our planet by connecting travelers with local communities that provide immersive travel experiences that foster economic and social inclusiveness. ' /> */}

    <div className='heading'>
        <h1>Our <span>Mission</span> </h1>
        <p>Inspire positive change for our planet by connecting travelers with local communities that provide immersive travel experiences that foster economic and social inclusiveness.</p>
     </div>



       <div className="cardBox">
        <div className="card">
           <div className="picture">
            <img src={pic1} alt="" />
           </div>
           <div className="textCon">
              <h2>Connect</h2>
              <p>We strive to bridge the gap between cultures by bringing people together through immersive travel experiences that create meaningful connections and lifelong memories.</p>
           </div>
        </div>

        <div className="card">
           <div className="picture">
            <img src={pic2} alt="" />
           </div>
           <div className="textCon">
              <h2>Engage</h2>
              <p>We believe in the transformational power of travel. Immersing yourself in local life promotes cross-cultural understanding and teaches travelers and hosts new global perspectives.</p>
           </div>
        </div>

        <div className="card">
           <div className="picture">
            <img src={pic3} alt="" />
           </div>
           <div className="textCon">
              <h2>Empower</h2>
              <p>Travel can transform economies and improve the quality of life in communities worldwide, which is why we aim to empower local people by connecting them with free access to the global travel market.</p>
           </div>
        </div>
          
       </div>

  </section>







  <section className="explored">

    <div className='heading'>
        <h1><span>Latest</span> Addition</h1>
        <p>Inspire positive change for our planet by connecting travelers with local communities that provide immersive travel experiences that foster economic and social inclusiveness.</p>
     </div>

    <div className="expBox">

      {newAdd.map((items) =>
       (
          <Alpha Id={items.id} Cover={items.cover} Price={items.price} Name={items.name} Category={items.category} Stars={items.stars} Location={items.Location} Add={items.add} key={items.id}/>
              
        ))};
    </div>
  </section>


  <section className="impact">
     <div className='heading'>
        <h1>Top <span>Spots</span></h1>
        <p>Inspire positive change for our planet by connecting travelers with local communities that provide immersive travel experiences that foster economic and social inclusiveness.</p>
     </div>

        <Swiper slidesPerView={1}  modules={[Autoplay]} autoplay={{ delay: 4000 }} className="mySwiper">
          {spots.map((items, index) => (
            <SwiperSlide>
              <div className='box' key={index}>
                <img src={items.cover} alt='' className='alpha' />
                <div className=" container">
                  
                  <div className="oppo grid2">
                    
                    <div className="newsText">
                      <p>{items.date}</p>
                      <h2>{items.titleName}</h2>
                      <h3>{items.about}</h3>
                      <button className='impactBtn'>
                        Read More
                      </button>
                    </div>

                    <div className="innerPic">
                      <img src={items.cover} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))};
        </Swiper>
  

  </section>



  <section className="hosts">
     <div className='heading'>
        <h1><span>Meet </span>Hosts</h1>
        <p>Inspire positive change for our planet by connecting travelers with local communities that provide immersive travel experiences that foster economic and social inclusiveness.</p>
     </div>

     <Swiper slidesPerView={1}  onBeforeInit={(swiper) => {swiperRef.current = swiper; }} loop={true}  className="mySwiper">
          {hosts.map((items, index) => (
            <SwiperSlide>
               <div className='box' key={index}>

                  <div className="hostPic">
                    <img src={items.photo} alt="" />
                  </div>

                  <div className="innerTexttest">
                     <span><i className="fa fa-quote-left"></i> </span>
                     <p>{items.feedback}</p>
                     <h2>{items.hostName}, {items.District}</h2>
                  </div>

               </div>   

            </SwiperSlide>
          ))}
              <div className="der">
                  <button onClick={() => swiperRef.current?.slidePrev()}><i className="fa-solid fa-circle-chevron-left"></i></button>
                  <button onClick={() => swiperRef.current?.slideNext()}><i className="fa-solid fa-circle-chevron-right"></i></button>
              </div>
                  
          </Swiper>


  </section>


  <section className="footer">
        <div className="footer-container">

            <div className="box-container">
                <div className="box">
                    <h3>Quick Links</h3>
                    <a href="#"><i className="fas fa-chevron-right"></i>Home</a>
                    <a href="#"><i className="fas fa-chevron-right"></i>Services</a>
                  
                </div>

                <div className="box">
                    <h3>our services</h3>
                    <a href="#"><i className="fas fa-chevron-right"></i>User Experience</a>
                    <a href="#"><i className="fas fa-chevron-right"></i>Offer Service</a>
                 
                </div>

                <div className="box info">
                    <h3>contact info</h3>
                    <a href="#"><i className="fas fa-phone"></i>+987 245 3252</a>
                    <a href="#"><i className="fas fa-phone"></i>+949 695 0362</a>
                    <a href="#"><i className="fas fa-envelope"></i>ariana16@gmail.com</a>
                </div>

                <div className="box">
                    <h3>Follow Us</h3>
                    <a href="#"><i className="fab fa-facebook-f"></i>Facebook</a>
                    <a href="#"><i className="fab fa-twitter"></i>Twitter</a>
                    <a href="#"><i className="fab fa-instagram"></i>Instagram</a>
                    <a href="#"><i className="fab fa-linkedin"></i>LinkedIn</a>
                </div>
            </div>

            <div className="credit">Created by <span>Team Datum Onum</span> 2022 </div>
        </div>
    </section>

  
      
    </>
  )
}

export default Home
