import React from 'react'
import close from '../../assets/icons/close.svg'

const TermsConditions = ({setIsTerm}:any) => {
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 bg-black-rgba flex justify-end z-1">
            <div className= "w-[393px] bg-primary text-white px-[20px] pb-10 overflow-y-scroll">
              <img
                className="w-[50px] ml-auto my-4"
                src={close}
                alt="close"
                onClick={()=> setIsTerm(false)}
              />
              <h6 className="text-[26px] font-bold">Amala Terms & Conditions</h6>
              <p className="mt-4 text-justify text-base font-normal leading-[21.6px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit iure maiores, 
                harum corporis fugiat sed itaque. Possimus ab, quisquam animi maiores iure similique 
                pariatur in corrupti cumque suscipit? Quidem, expedita magnam. Possimus consequatur 
                dolorem recusandae saepe in consequuntur mollitia quo, omnis reprehenderit nemo. 
                Minima odio, repellendus debitis placeat maiores ipsa.
              </p>
              <p className="mt-4 text-justify text-base font-normal leading-[21.6px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit iure maiores, 
                harum corporis fugiat sed itaque. Possimus ab, quisquam animi maiores iure similique 
                pariatur in corrupti cumque suscipit? Quidem, expedita magnam. Possimus consequatur 
                dolorem recusandae saepe in consequuntur mollitia quo, omnis reprehenderit nemo. 
                Minima odio, repellendus debitis placeat maiores ipsa.
              </p>
              <p className="mt-4 text-justify text-base font-normal leading-[21.6px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit iure maiores, 
                harum corporis fugiat sed itaque. Possimus ab, quisquam animi maiores iure similique 
                pariatur in corrupti cumque suscipit? Quidem, expedita magnam. Possimus consequatur 
                dolorem recusandae saepe in consequuntur mollitia quo, omnis reprehenderit nemo. 
                Minima odio, repellendus debitis placeat maiores ipsa.
              </p>
            </div>
          </div>
  )
}

export default TermsConditions