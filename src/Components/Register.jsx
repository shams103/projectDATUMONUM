import { React, useEffect, useState } from 'react';
import regPic from "../Images/rt7.jpg";
import './register.css';
import $ from 'jquery'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CloseButton = ({ closeToast }) => (
  <i className="fa fa-times close" onClick={closeToast}></i>
);


const Register = () => {


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






  return (
    <>
      <div className="registerPage">
        <div className="regForm">
          <div className="part1">
            <img src={regPic} alt="" />
          </div>

          <div className="part2">
            <h2>Registration</h2>

            <div className="inpField">

              <div className="set">
                <label htmlFor="Name">Name</label>
                <input type="text" name="NameRg" id="" value={formValues.NameRg} onChange={registerHandleChange} />
              </div>

              <div className="set">
                <label htmlFor="Emai;">Email</label>
                <input type="email" name="EmailyRg" id="" value={formValues.EmailyRg} onChange={registerHandleChange} />
              </div>


              <div className="set">
                <label htmlFor="Phone">Phone</label>
                <input type="tel" name="PhoneRg" id="" minlength="10" maxlength="10" value={formValues.PhoneRg} onChange={registerHandleChange} />
              </div>

              <div className="set">
                <label htmlFor="Residence">Residence</label>
                <select name="Residence" id="" value={formValues.Residence} onChange={registerHandleChange}>
                  <option value="" selected disabled></option>
                  <option value="Varanasi">Varanasi</option>
                  <option value="Kanpur">Kanpur</option>
                  <option value="Ballia">Ballia</option>
                  <option value="Gorakhpur">Gorakhpur</option>
                  <option value="Mathura">Mathura</option>
                  <option value="Lucknow">Lucknow</option>
                  <option value="Jhansi">Jhansi</option>
                  <option value="Moaradabad">Moradabad</option>
                </select>
              </div>

              <div className="set">
                <label htmlFor="DOB">Date of Birth</label>
                <input type="date" id="date_picker" name="Date"  value={formValues.Date} onChange={registerHandleChange}/>
              
              </div>


              <div className="set">
                <label htmlFor="Password">Password</label>
                <input type="password" name="Password" id="" value={formValues.Password} onChange={registerHandleChange} />
              </div>

              <div className="set">
                <label htmlFor="Confirm Password">Confirm Password</label>
                <input type="password" name="CnfPassword" id="" value={formValues.CnfPassword} onChange={registerHandleChange} />
              </div>


              <div className="setZ">
                <input type="checkbox" name="terms" id="terms" />
                <label htmlFor="terms"> Accept terms & conditions</label>
              </div>
            </div>

            <div className="signup">
              <button onClick={registerUser}>Register Now <i class="fa-solid fa-arrow-right-long"></i></button>
            </div>

            <ToastContainer closeButton={CloseButton} />

          </div>
        </div>
      </div>

    </>
  )
}

export default Register
