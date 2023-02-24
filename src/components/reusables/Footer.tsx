import React from 'react'

const Footer = () => {
  return (
    <div className='bg-background text-white paddingX py-[100px] mt-[100px]'>
      <p className='text-[18px] font-medium'>Our user friendly platform makes it easy for you to have access to our services and carry out your verification in a timely manner.</p>
      <div className='flex justify-between gap-8 flex-wrap mt-[50px]'>
        <div className='mb-8 md:mb-0'>
          <h5 className='h5'>Features</h5>
          <ul>
            <li className='a'><a href="">- Government ID verification</a></li>
            <li className='a'><a href="">- Address verification</a></li>
            <li className='a'><a href="">- Postcode checker</a></li>
            <li className='a'><a href="">- Document authentication</a></li>
            <li className='a'><a href="">- Certificate authentication</a></li>
            <li className='a'><a href="">- Credit reporting</a></li>
          </ul>
        </div>
        <div className='mb-8 md:mb-0'>
          <h5 className='h5'>Use cases</h5>
          <ul >
            <li className='a'><a href="">- Financial services</a></li>
            <li className='a'><a href="">- Business verification</a></li>
            <li className='a'><a href="">- Onboarding & verification</a></li>
            <li className='a'><a href="">- Geolocation</a></li>
          </ul>
        </div>
        <div className='mb-8 md:mb-0'>
          <h5 className='h5'>Developers</h5>
          <ul>
            <li className='a'><a href="">- Documentation</a></li>
            <li className='a'><a href="">- API references</a></li>
            <li className='a'><a href="">- FAQs</a></li>
          </ul>
        </div>
        <div className='mb-8 md:mb-0'>
          <h5 className='h5'>Company</h5>
          <ul>
            <li className='a'><a href="">- About us</a></li>
            <li className='a'><a href="">- Terms of service</a></li>
            <li className='a'><a href="">- Privacy policy</a></li>
          </ul>
        </div>
      </div>
      <div className='flex justify-between gap-8 flex-wrap mt-[50px]'>
        <div className='mb-2'>© 2023 Amala. All rights reserved.</div>
        <div></div>
      </div>
    </div>
  )
}

export default Footer