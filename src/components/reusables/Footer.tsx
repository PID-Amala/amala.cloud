import React from 'react'

const Footer = () => {
  return (
    <div className='bg-background text-white paddingX py-[100px] mt-[100px]'>
      <p className='text-[18px] font-medium'>Our user-friendly platform makes it easy for you to have access to our services and carry out your verification in a timely manner.</p>
      <div className='flex justify-between gap-8 flex-wrap mt-[50px]'>
        <div className='mb-8 md:mb-0'>
          <h5 className='h5'>Products</h5>
          <ul>
            <li className='a'><a href="">- Government ID Verification</a></li>
            <li className='a'><a href="">- Address Verification</a></li>
            <li className='a'><a href="">- Postcode Checker</a></li>
            <li className='a'><a href="">- Document Authentication</a></li>
            <li className='a'><a href="">- Certificate Authentication</a></li>
            <li className='a'><a href="">- Credit Reporting & Analytics</a></li>
            <li className='a'><a href="">- Identity Access Management </a></li>
            <li className='a'><a href="">- Asset Authentication </a></li>
            <li className='a'><a href="">- Customer Data Management</a></li>
          </ul>
        </div>
        <div className='mb-8 md:mb-0'>
          <h5 className='h5'>Use cases</h5>
          <ul >
            <li className='a'><a href="">- Financial Services</a></li>
            <li className='a'><a href="">- E-commerce </a></li>
            <li className='a'><a href="">- Logistics</a></li>
            <li className='a'><a href="">- Health Care </a></li>
            <li className='a'><a href="">- Onboarding & Verification</a></li>
            <li className='a'><a href="">- Geolocation</a></li>
          </ul>
        </div>
        <div className='mb-8 md:mb-0'>
          <h5 className='h5'>Company</h5>
          <ul>
            <li className='a'><a href="">- About Us</a></li>
            <li className='a'><a href="">- Pricing</a></li>
            <li className='a'><a href="">- Careers</a></li>
            <li className='a'><a href="">- Terms of Service</a></li>
            <li className='a'><a href="">- Privacy Policy</a></li>
            <li className='a'><a href="">- Brand Kit</a></li>
          </ul>
        </div>
        <div className='mb-8 md:mb-0'>
          <h5 className='h5'>Developers</h5>
          <ul>
            <li className='a'><a href="">- Documentation</a></li>
          <li className='a'><a href="">- API References</a></li>
            <li className='a'><a href="">- FAQs</a></li>
          </ul>
        </div>
      </div>
      <div className='md:flex flex-row-reverse justify-between gap-8 flex-wrap mt-[50px]'>
        <div className='flex gap-6'>
          <a href="https://twitter.com/amala_cloud" target='_blank' className='a'>Twitter</a>
          <a href="https://www.instagram.com/amala.cloud/" target='_blank' className='a'>Instagram</a>
          <a href="https://www.linkedin.com/company/amala-cloud/about/" target='_blank' className='a'>Linkedin</a>
        </div>
        <div>© 2023 Amala. All rights reserved.</div>
        
      </div>
    </div>
  )
}

export default Footer