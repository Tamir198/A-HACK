import React,{useDebugValue, useState,useContext,useEffect} from 'react'
import {useForm} from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import {BsEyeFill,BsEyeSlashFill, BsReplyAll} from 'react-icons/bs'
import {AppWrap} from '../../wrapper/index'

const LoginForm = () => {
    const navigate = useNavigate();
   // const [userDetails, setUserDetails] = useContext(userDetailsContext);
    const [passwordShown, setPasswordShown] = useState(false);
    const [ShowErrorLogin, setShowErrorLogin] = useState(false)
    const {register,setValue,handleSubmit, formState:{errors}} = useForm({defaultValues:{
        Name: '',
        Password:''
    }})
    
    const [sentSuccess,setSentSuccess] = useState(false);

    /*const sendLoginPostRequest =async (sendingData) =>{
       await axios.post("http://localhost:5000/api/user/login",{sendingData})
        .then((res) => {;
            setUserDetails({
                ...userDetails,
                Name: res.data.Name,
                isAdmin: res.data.isAdmin
            });
            setShowErrorLogin(false);
            // when user successfully enter , redirect him to DashBoard page 
            setSentSuccess(true);
        }).catch((error) => {
            //show error message - your name/password is wrong
            setShowErrorLogin(true);
        })
    }
    */
    

useEffect(() => {
  //  console.log(userDetails)
  //  localStorage.setItem('NameUser', userDetails.Name);
  //  localStorage.setItem('isAdmin', userDetails.isAdmin);

    setTimeout(() => {
        if (sentSuccess) {
            navigate("/DashBoard")
           }
     }, 1)
})



  return (
    <>

    <form className='form-login' onSubmit={handleSubmit((data) => {
        console.log(data.Name)
        localStorage.setItem('Role', data.Name);
        navigate('/DashBoard')
        
        //sendLoginPostRequest(data)
        }
        )}>
        <div className='Form__section__login'>
            <h1>Login</h1>
            <div className='section-name'>
                <div className='LabelDiv'>
                    <label>שם משתמש</label>
                </div>
                <input {...register("Name",{required:'חובה להכניס שם משתמש'})} name="Name" placeholder="שם משתמש"/>
            </div>
            <div className='section-password'>
                <div className='LabelDiv'>
                    <label>סיסמה</label>
                </div>
                <input type={passwordShown ? "text" : "password"} {...register("Password",{required:'חובה להכניס סיסמה ' , minLength:{value:6, message:'הסיסמה חייבת להכיל מעל 6 אותיות'}})} name="Password" placeholder="סיסמה"/>                    
                 
            </div>    
        </div>
        <div className='errorSection'>
            <p className='errorMsg'>{errors.Name?.message}</p>
            <p className='errorMsg'>{errors.Password?.message}</p>

            {ShowErrorLogin ? <p>שם משתמש/הסיסמה שגוייה</p> : ""}
        </div>
        
        <input className="btnSubmit" type="submit" value="התחבר"/>

    </form>
    </>
  )
}

export default AppWrap(LoginForm,'login')