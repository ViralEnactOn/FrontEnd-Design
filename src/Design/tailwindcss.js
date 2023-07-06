import React from 'react'
import '../CSS/input.css'
import EnactOnLogo from '../Logo/enactOn.png'
import CartLogo from '../Logo/Cart.png'
import WalletLogo from '../Logo/Wallet.png'
import MoreLogo from '../Logo/More.png'
import SearchLogo from '../Logo/search.svg'
import StreakLogo from '../Logo/fi-rr-flame.svg'
import Shop from '../Logo/shop.png'
import BulletIcon from '../Logo/bulletIcon.svg'

function tailwindcss () {
  return (
    <>
      <div className='Parent bg-#F2F7FB h-screen font-qs'>
        <div className='flex flex-row '>
          {/* Side bar */}
          <div className='flex flex-col basis-1/6 bg-#FFF h-screen pt-20'>
            {/* Logo */}
            <div className='flex justify-center'>
              <img src={EnactOnLogo} className='h-9 w-64' />
            </div>

            {/* Sidebar bullets */}
            <div className='inline-flex flex-col justify-end items-start mt-40 ml'>
              {/* <div className='self-center '>
                <img src={BulletIcon} alt='' className='h-1.5 w-1.5' />
              </div> */}
              <div className='self-center'>
                <div className='flex items-center gap-6 '>
                  <div className='self-center'>
                    <img src={CartLogo} className='w-5 h-5' />
                  </div>
                  <p className='text-BLUE font-bold text-lg'>Shop</p>
                </div>
                <div className='flex items-center mt-10 gap-6'>
                  <div className='self-center'>
                    <img src={WalletLogo} className='w-5 h-5' />
                  </div>
                  <p className='text-GRAY font-bold text-lg'>Wallet</p>
                </div>
                <div className='flex items-center mt-10 gap-6'>
                  <div className='self-center'>
                    <img src={MoreLogo} className='w-5 h-5' />
                  </div>
                  <p className='text-GRAY font-bold text-lg'>More</p>
                </div>
              </div>
            </div>
          </div>

          {/* Main Component */}
          <div
            className='basis-5/6 flex-shrink-0 bg-slate-500'
            // className='basis-5/6 flex-shrink-0 rounded-full'
            // style={{
            //   background:
            //     'linear-gradient(0deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.15) 100%), linear-gradient(67deg, #63E1F2 0%, #49C8EB 11.25%, #3C98D8 22.19%, #7270D0 35.21%, #7C76CC 48.23%, #DF55A1 71.64%, #EE7370 85.70%, #EDA052 100%)'
            // }}
          >
            <div className='p-20'>
              {/* First Block */}
              <div className='flex justify-between'>
                <div>
                  <div className='relative block'>
                    <div className='absolute inset-y-0 left-0 flex items-center pl-3'>
                      <img src={SearchLogo} className='h-4 w-4 absolute' />
                    </div>
                    <input
                      type='text'
                      className='w-80 h-10 rounded-3xl px-7 placeholder-black opacity-40 flex-shrink-0'
                      placeholder='Search online stores'
                    />
                  </div>
                </div>
                <div className='w-10 h-10 bg-gray-500 rounded-md relative'>
                  <div className='flex items-center justify-center w-full h-full opacity-10'>
                    <img src={StreakLogo} className='h-5 w-5' />
                  </div>
                </div>
              </div>

              {/* Second Block */}
              <div className='mt-20 h-56 bg-white rounded-lg'>
                <div className='flex justify-between'>
                  <div className='w-1/2 pl-20 pt-10'>
                    <div className='flex text-SUBBLUE text-2xl font-semibold tracking-widest'>
                      12% cashbask
                    </div>
                    <div className='pt-3 text-lg font-semibold opacity-50 tracking-widest w-2/4'>
                      Shop for the latest shoes for all your sports fun.
                    </div>
                    <div
                      className='mt-3 w-32 h-12 bg-red-500 rounded-full relative'
                      style={{
                        background:
                          'linear-gradient(54deg, #63E1F2 0%, #45C3E5 100%)'
                      }}
                    >
                      <button className='flex text-white items-center justify-center w-full h-full'>
                        SHOP NOW
                      </button>
                    </div>
                  </div>
                  <div className=''>
                    <img src={Shop} className='rounded-s-full' />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default tailwindcss
