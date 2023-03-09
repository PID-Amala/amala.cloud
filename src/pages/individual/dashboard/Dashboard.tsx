import React from 'react'
import CurrentDate from '../../../components/reusables/CurrentDate';
import welcome from '../../../assets/images/Welcome.png'

const Dashboard = () => {
  return (
    <div className='pl-[200px] flex flex-col items-center'>
      <h1 className='h1 mb-[100px]'>Dashboard</h1>
      <div>
        <h1 className='h1 text-primary'>Hello</h1>
        <p>Handle all your activities here</p>
        <CurrentDate/>
        <img src={welcome} alt="Hello" />
      </div>
      <div className='md:flex bg-[#D9D9D9] rounded-[25px]'>
        <div className='flex flex-col items-center text-white bg-[#0134F1] w-[115px] h-[115px] rounded-[50%]'> 
          <h1 className='h1'>4</h1>
          <p className='text-center'>Pending Requests</p>
        </div>
        <div>

        </div>
      </div>
    </div>
  )
}

export default Dashboard