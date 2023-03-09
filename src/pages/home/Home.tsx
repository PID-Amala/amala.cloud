import React from 'react'
import { Link } from 'react-router-dom';
import Header from '../../components/reusables/Header'
import { useCallback, useEffect, useState } from "react";
import { Button } from '../../components/reusables/Button'
import gif from '../../assets/images/amala.gif'
import ai from '../../assets/images/AI_cyber_security.png'
import fingerPrint from "../../assets/images/Fingerprint_verification.png"
import qrCode from '../../assets/images/QR_Code.png'
import Footer from '../../components/reusables/Footer'

const Home = () => {
  const [text, setText] = useState("Connected");

  const handleTextChange = useCallback(() => {
    text === "Connected" ? setText("Secured") : setText("Connected");
  }, [text]);

  useEffect(() => {
    const interval = setInterval(handleTextChange, 2000);
    return () => clearInterval(interval);
  }, [handleTextChange]);
  
  return (
    <div className=''>
      <Header/>
      <div className='text-white paddingX py-8 bg-background'>
        <h1 className='text-[25px] md:text-[60px] font-bold'>Your Identity <span className={text === "Connected" ? "text-secondary" : "text-primary"}>{text}</span></h1>
        <p className='text-[14px] md:text-[25px] max-w-[800px] mb-6'>Link your individual biometric data and personal identifiable information to create one identity for yourself.</p>
        <div className='flex flex-row gap-8'>
          <div className='btn'><Link to="/signup"><Button fullWidth>Sign Up</Button></Link></div>
          <div className='btn'><Link to="/login"><Button fullWidth variant ="outlined">Login</Button></Link></div>
        </div>
        <div>
          <img className='mx-auto w-[90%]' src={gif} alt="Users Verification" />
        </div>
      </div>
      <div className='md:flex justify-between items-center gap-8 bg-white paddingX pt-8'>
        <div className='md:w-[600px]'>
          <h1 className='h1 text-primary mb-3'>What We Do</h1>
          <p className='text'>At Amala, we provide verification and authentication services to individuals and business owners in Nigeria.
            Our focus is to help reduce the rate of fraud and identity theft by helping to safeguard sensitive information 
            and ensuring that only authorized individuals have access to these information.
          </p>
        </div>
        <div className='mt-30px'>
          <img src={ai} alt="AI Cyber Security" />
        </div>
      </div>
      <div className='mt-[50px] md:mt-0 md:flex flex-row-reverse justify-between items-center gap-8 bg-white paddingX mb-8'>
        <div className='md:w-[600px]'>
          <h1 className='h1 text-primary mb-3'>Customer Verification made Easy</h1>
          <p className='text mb-6 '>We understand the importance of protecting sensitive information and maintaining the integrity of our clients’ data. 
            This is why we take necessary precautions to ensure the security and confidentiality of our clients’ information.
          </p>
          <div className='btn'><a href="/provider/signup"><Button fullWidth>Get API</Button></a></div>
        </div>
        <div>
          <img src={fingerPrint} alt="Fingerprint Verification" className=''/>
        </div>
      </div>
      <div className='md:flex justify-between items-center gap-8 bg-white paddingX pt-8'>
        <div className='md:w-[600px]'>
          <h1 className='h1 text-primary mb-3'>Manage access to your personal data on our platform.</h1>
          <p className='text mb-6 '>As an individual, you can: Validate your identity, Control who has access to your 
            personal information & Grant permission or revoke access to these information.
          </p>
          <div className='btn'><a href="/individual/signup"><Button fullWidth>Get Started</Button></a></div>
        </div>
        <div>
          <img src={qrCode} alt="Woman Scan a QR cose with phone"  className=''/>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Home