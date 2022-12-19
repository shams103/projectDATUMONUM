import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './user.css';
import { user } from "./data/Data";



import $ from 'jquery'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CloseButton = ({ closeToast }) => (
  <i className="fa fa-times close" onClick={closeToast}></i>
);

const User = () => {

  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const [formValues, setFormValues] = useState({
    NameRg: "",
    EmailyRg: "",
    PhoneRg: "",
    Password: "",
    CnfPassword: "",
    Date: "",
    Residence: ""
  });

  const registerHandleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };


  const registerUser = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));

    const { NameRg, EmailyRg, PhoneRg, Password, CnfPassword, Date, Residence } = formValues;
    if (NameRg && EmailyRg && PhoneRg && Password && CnfPassword && Date && Residence) {

      setFormValues({
        NameRg: "",
        EmailyRg: "",
        PhoneRg: "",
        Password: "",
        CnfPassword: "",
        Date: "",
        Residence: ""

      })


      toast.success('Registered Successfully !', {
        position: toast.POSITION.TOP_CENTER,
        className: 'toast-message'

      })
    }

  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);




  // =================Form Validation Register===============

  const validate = (values) => {
    const errors = {};
    const regex1 = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    const regex2 = /^[a-zA-Z][a-zA-Z ]+$/;
    const regex3 = /^[6789][0-9]{9}$/;
    const regexpwd = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&])(?=.{6,14})/;



    if ((!values.NameRg) || (!values.EmailyRg) || (!values.PhoneRg) || (!values.Password) || (!values.CnfPassword) || (!values.Residence) || (!values.Date)) 
    {
      alert('All fields are required');
    }
    else 
      {
          if( (!regex2.test(values.NameRg)) || (values.NameRg.length < 3) ) 
                 {
                    alert('Name must be proper !');
                    values.NameRg = ""
                 }

          if (!regex1.test(values.EmailyRg)) 
                {
                  alert('This is not a valid Email format !')
                  values.EmailyRg = ""
                }  

          if (!regex3.test(values.PhoneRg)) 
               {
                  alert('Enter valid Indian Mobile Number');
                  values.PhoneRg = ""
               }  
               
          if (!regexpwd.test(values.Password)) 
              {
                alert('Password must between 6 and 14 characters and at least 1 lowercase alphabetical character and at least 1 uppercase alphabetical character and at least 1 numeric character and at least one special character except (*) ');
                values.Password = ""
              }  
              
          if((values.CnfPassword) !== (values.Password))
              {
                alert('Oops! Password mismatched')
                values.CnfPassword =""
              }
  }


    

    return errors;
  };

  // ====================================



   
  // ----------Disable Past Date-----------

  $(function() 
  {
      $('#demo').datetimepicker( { minDate: 0 });
  }); 
  
$(function() {

  var today = new Date();
  var dd = String(today.getDate() + 1).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0');
  var yyyy = today.getFullYear();

  today = yyyy + '-' + mm + '-' + dd;
  $('#date_picker').attr('max', '2004-11-12');
})

  // -------------------------------------------











    const [show, setShow] = useState(true);

    return (
        <>

            <div className="user">


                <div className="bar">
                    <div className="first">
                        <h2 className='a' onClick={() => setShow(!show)}>Explore Existing</h2>
                    </div>

                    <div className="second">
                        <h2 className='b' onClick={() => setShow(!show)}> + Add New</h2>
                    </div>
                </div>

                {show ? (
                    <React.Fragment>

                        <div className="existing">

                            <div className="del">
                                <div className="main-block">
                                    {user.map((items) =>
                                    (

                                        <div className="card-box">
                                            <div className="inner-card">
                                                <h2>{items.name}</h2>
                                                <p><i className='fa fa-location-dot'></i><span>{items.Location}</span></p>
                                                <p><i className="fa-solid fa-book"></i><span>{items.category}</span></p>
                                                <p><i className="fa-solid fa-calendar-days"></i><span>{items.add}</span> </p>
                                            </div>
                                        </div>

                                    ))};
                                </div>
                            </div>



                            <div className="contentBox">

                                <h2>Pineapple Masala Dosa</h2>

                                <div className="start">

                                    <div className="start-innerA">

                                        <div className="start-innerA-one">
                                            <p><i className="fa-solid fa-book"></i><span>Food</span></p>
                                            <p><i className="fa-solid fa-calendar-days"></i><span>25/11/2022</span> </p>
                                            <p><i className='fa fa-location-dot'></i><span>Azamgarh</span></p>
                                        </div>

                                        <div className="start-innerA-two">
                                            <p><i className="fa-sharp fa-solid fa-smog"></i><span>30 degree</span></p>
                                            <p><i className="fa-solid fa-train"></i><span>Basti Junction</span></p>
                                            <p><i className="fa-solid fa-wallet"></i><span>₹200 - ₹300</span></p>
                                        </div>

                                    </div>



                                    <div className="start-innerB">
                                        <img src="kt2.jpg" alt="" />
                                    </div>

                                </div>


                                <div className="description">
                                    <p>
                                        Cryptocurrency is a digital payment system that doesn't rely on banks to verify transactions.
                                        It’s a peer-to-peer system that can enable anyone anywhere to send and receive payments. Instead
                                        of being physical money carried around and exchanged in the real world, cryptocurrency payments
                                        exist purely as digital entries to an online database describing specific transactions. When you
                                        transfer cryptocurrency funds, the transactions are recorded in a public ledger. Cryptocurrency is
                                        stored in digital wallets.
                                    </p>
                                    <p>
                                        Cryptocurrency received its name because it uses encryption to verify transactions. This means advanced
                                        coding is involved in storing and transmitting cryptocurrency data between wallets and to public ledgers.
                                        The aim of encryption is to provide security and safety.
                                        The first cryptocurrency was Bitcoin, which was founded in 2009 and remains the best known today. Much of
                                        the interest in cryptocurrencies is to trade for profit, with speculators at times driving prices skyward.
                                        Cryptocurrencies run on a distributed public ledger called blockchain, a record of all transactions updated
                                        and held by currency holders.
                                    </p> <p>
                                        Units of cryptocurrency are created through a process called mining, which involves using computer power to solve
                                        complicated mathematical problems that generate coins. Users can also buy the currencies from brokers, then store
                                        and spend them using cryptographic wallets.
                                        If you own cryptocurrency, you don’t own anything tangible. What you own is a key that allows you to move a record
                                        or a unit of measure from one person to another without a trusted third party.
                                    </p>
                                </div>

                                <div className="review">

                                </div>


                            </div>

                        </div>

                    </React.Fragment>
                ) : (

                    <React.Fragment>

                        <div className="addNewTab">

                           <div className="aeroplane">
                               <h2>Login</h2>
                               <span></span>

                               <div className="login">
                                    <label htmlFor="Email">Email</label>
                                    <input type="email" name="EmailyRg" id="" value={formValues.NameRg} onChange={registerHandleChange} />
                                </div>

                                <div className="login">
                                    <label htmlFor="Password">Password</label>
                                    <input type="password" name="PasswordRg" id="" value={formValues.PasswordRg} onChange={registerHandleChange} />
                                </div>

                                <button className="btn">
                                    Login here
                                </button>

                                <p>Don't have an account ? <Link to="/register">Click here</Link></p>



                           </div>


                            <div className="apricot">
                                <h2>Instructions</h2>

                                <div className="inpField">

                                    <div className="set">
                                        <label htmlFor="Name">Name</label>
                                        <input type="text" name="NameRg" id="" value={formValues.NameRg} onChange={registerHandleChange} />
                                    </div>

                                    <div className="set">
                                        <label htmlFor="Place">Place</label>
                                        <input type="text" name="PlaceRg" id="" value={formValues.PlaceRg} onChange={registerHandleChange} />
                                    </div>


                                    <div className="set">
                                        <label htmlFor="Category">Category</label>
                                        <select name="Category" id="" value={formValues.Category} onChange={registerHandleChange}>
                                            <option value="" selected disabled></option>
                                            <option value="Food">Food</option>
                                            <option value="Sojourn">Sojourn</option>
                                            <option value="Tour Spot">Tour Spot</option>
                                        </select>    
                                    </div>

                
                                    <div className="set">
                                        <label htmlFor="Railway">Railway</label>
                                        <input type="text" id="" name="Railway" value={formValues.Railway} onChange={registerHandleChange} />
                                    </div>


                                    <div className="set">
                                        <label htmlFor="Budget">Budget</label>
                                        <select name="Budget" id="" value={formValues.Budget} onChange={registerHandleChange}>
                                            <option value="" selected disabled></option>
                                            <option value="upto ₹200">upto ₹200</option>
                                            <option value="₹200 - ₹300">₹200 - ₹300</option>
                                            <option value="₹300 - ₹500">₹300 - ₹500</option>
                                            <option value="₹500 - ₹1000">₹500 - ₹1000</option>
                                            <option value="₹1000 and above">₹1000 and above</option>
                                        </select>
                                    </div>

                                    <div className="set">
                                        <label htmlFor="Image">Image</label>
                                        <input type="file" name="image" id="" value={formValues.image} onChange={registerHandleChange} />
                                    </div>

                                    <div className="set">
                                         <label htmlFor="Description">Description</label>
                                         <textarea id="" name="Description" value={formValues.Description} onChange={registerHandleChange} cols="30" rows="10"></textarea>
                                    </div>


                                </div>

                                <div className="addNow">
                                    <button onClick={registerUser}>Add Now <i class="fa-solid fa-arrow-right-long"></i></button>
                                </div>

                                <ToastContainer closeButton={CloseButton} />



                            </div>


                        </div>


                    </React.Fragment>
                )}



            </div>

        </>
    )
}

export default User
