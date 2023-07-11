/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from 'react'
import '../CSS/input.css'
import EnactOnLogo from '../Logo/enactOn.png'
import CartLogo from '../Logo/Cart.png'
import WalletLogo from '../Logo/Wallet.png'
import MoreLogo from '../Logo/More.png'
import SearchLogo from '../Logo/search.svg'
import StreakLogo from '../Logo/fi-rr-flame.svg'
import Shop from '../Logo/shop.png'
import AdidasLogo from '../Logo/Adidas.png'
import FrameLogo from '../Logo/Frame.png'
import ShoeLogo from '../Logo/Vector.png'
import MarketLogo from '../Logo/Market.png'
import FashionLogo from '../Logo/Fashion.png'
import ListLogo from '../Logo/fi-rr-list.svg'
import Rectangle from '../Logo/Rectangle 481.png'
import Adidas from '../Logo/shoe.png'
import Beach from '../Logo/Rectangle 482.png'
import Bond from '../Logo/bonds.png'
import Headphone from '../Logo/Rectangle 483.png'
import GroupOn from '../Logo/group.png'
import Shopping from '../Logo/Rectangle 484.png'
import Amazon from '../Logo/amazon.png'
import Desk from '../Logo/Rectangle 485.png'
import Dell from '../Logo/dell.png'
import ShopLogo from '../Logo/fi-rr-shop.svg'
import Setting from '../Logo/Group 2239.svg'
import VectorIcon from '../Logo/Vector.svg'
import AdidasLogo1 from '../Logo/Rectangle 4646.png'
import BondLogo from '../Logo/Rectangle 4647.png'
import DellLogo from '../Logo/Rectangle 4648.png'
import VectorUp from '../Logo/fi-rr-angle-small-down.svg'
import Percentage from '../Logo/Mask Group.svg'
import BulletIcon from '../Logo/bulletIcon.svg'
import { Tab } from '@headlessui/react'

function classNames (...classes) {
  return classes.filter(Boolean).join(' ')
}

function tailwindcss () {
  const [isOpen, setIsOpen] = useState(true)
  const [isOpen1, setIsOpen1] = useState(false)
  const [isOpen2, setIsOpen2] = useState(false)
  const [isOpen3, setIsOpen3] = useState(false)
  const [isOpen4, setIsOpen4] = useState(false)
  const [isOpen5, setIsOpen5] = useState(false)
  const [divHeight, setDivHeight] = useState(357)

  const increaseHeight = () => {
    setDivHeight(divHeight * 2) // Increase the height by double
  }

  const decreaseHeight = () => {
    setDivHeight(divHeight / 2) // Decrease the height by half
  }

  let [categories] = useState({
    Recent: [
      {
        id: 1,
        title: '5.15%',
        description: 'on kid shoes.'
      },
      {
        id: 2,
        title: '4.2%',
        description: 'on women shoes'
      },
      {
        id: 3,
        title: '3%',
        description: 'on men shoes'
      },
      {
        id: 4,
        title: '2.5%',
        description: 'on cloths'
      }
    ],
    Popular: [
      {
        id: 1,
        title: '5.15%',
        description: 'on men shoes.'
      },
      {
        id: 2,
        title: '4.2%',
        description: 'on women shoes'
      },
      {
        id: 3,
        title: '3%',
        description: 'on kid shoes'
      },
      {
        id: 4,
        title: '2.5%',
        description: 'on cloths'
      }
    ],
    Trending: [
      {
        id: 1,
        title: '5.15%',
        description: 'on women shoes.'
      },
      {
        id: 2,
        title: '4.2%',
        description: 'on kid shoes'
      },
      {
        id: 3,
        title: '3%',
        description: 'on men shoes'
      },
      {
        id: 4,
        title: '2.5%',
        description: 'on all cloths'
      }
    ]
  })

  const first = () => {
    setIsOpen(false)
    setIsOpen1(!isOpen1)
    setIsOpen2(false)
    setIsOpen3(false)
    setIsOpen4(false)
    setIsOpen5(false)
  }

  const second = () => {
    setIsOpen2(!isOpen2)
    setIsOpen(false)
    setIsOpen1(false)
    setIsOpen3(false)
    setIsOpen4(false)
    setIsOpen5(false)
  }

  const third = () => {
    setIsOpen3(!isOpen3)
    setIsOpen(false)
    setIsOpen1(false)
    setIsOpen2(false)
    setIsOpen4(false)
    setIsOpen5(false)
  }

  const four = () => {
    console.log('four')
    setIsOpen4(!isOpen4)
    setIsOpen(false)
    setIsOpen1(false)
    setIsOpen2(false)
    setIsOpen3(false)
    setIsOpen5(false)
  }

  const five = () => {
    setIsOpen(!isOpen)
    setIsOpen1(false)
    setIsOpen2(false)
    setIsOpen3(false)
    setIsOpen4(false)
    setIsOpen5(false)
  }

  const six = () => {
    setIsOpen5(!isOpen5)
    setIsOpen(false)
    setIsOpen1(false)
    setIsOpen2(false)
    setIsOpen3(false)
    setIsOpen4(false)
  }

  return (
    <>
      <div
        className='absolute inset-0'
        style={{
          background:
            'linear-gradient(0deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.15) 100%), linear-gradient(67deg, #63E1F2 0%, #49C8EB 11.25%, #3C98D8 22.19%, #7270D0 35.21%, #7C76CC 48.23%, #DF55A1 71.64%, #EE7370 85.70%, #EDA052 100%)',
          clipPath: 'ellipse(57% 40% at 60% 0%)'
        }}
      ></div>
      <div className='bg-background font-quickSand w-screen'>
        <div className='flex flex-row w-screen'>
          {/* Side bar */}
          <div className='relative flex flex-col basis-1/6 bg-white h-screen pt-20'>
            {/* Logo */}
            <div className='flex justify-center absolute self-center'>
              <img src={EnactOnLogo} className='h-9 w-64' alt='EnactOn Logo' />
            </div>

            {/* Sidebar bullets */}
            <div className='inline-flex flex-col justify-end items-start mt-40 ml'>
              {/* <div className='self-center '>
                <img src={BulletIcon} alt='' className='h-1.5 w-1.5' />
              </div> */}
              <div className='self-center'>
                <div className='flex items-center gap-6 '>
                  <div className='self-center'>
                    <img src={CartLogo} className='w-5 h-5' alt='Cart Logo' />
                  </div>
                  <p className='text-blue font-bold text-lg'>Shop</p>
                </div>
                <div className='flex items-center mt-10 gap-6'>
                  <div className='self-center'>
                    <img
                      src={WalletLogo}
                      className='w-5 h-5'
                      alt='Wallet Logo'
                    />
                  </div>
                  <p className='text-gray font-bold text-lg'>Wallet</p>
                </div>
                <div className='flex items-center mt-10 gap-6'>
                  <div className='self-center'>
                    <img src={MoreLogo} className='w-5 h-5' alt='More Logo' />
                  </div>
                  <p className='text-gray font-bold text-lg'>More</p>
                </div>
              </div>
            </div>
          </div>

          {/* Main Component */}

          <div className='p-20 '>
            {/* First Block */}
            <div className='flex justify-between '>
              <div>
                <div className='relative block'>
                  <div className='absolute inset-y-0 left-0 flex items-center pl-3'>
                    <img
                      src={SearchLogo}
                      className='h-4 w-4 absolute'
                      alt='Search Logo'
                    />
                  </div>
                  <input
                    type='text'
                    className='w-80 h-10 rounded-3xl px-8  opacity-10'
                    placeholder='Search online stores'
                  />
                </div>
              </div>

              <div className='w-10 h-10 rounded-lg bg-slate-500 opacity-30'>
                <div className='flex flex-col items-center justify-center w-full h-full '>
                  <img
                    src={StreakLogo}
                    className='h-5 w-5 '
                    alt='Streak Logo'
                  />
                </div>
              </div>
            </div>

            {/* Second Block */}
            <div className='relative block mt-20 bg-white rounded-lg drop-shadow-2xl shadow-#BECAD9'>
              <div className='flex justify-between'>
                <div className='w-1/2 pl-20 self-center'>
                  <div className='flex text-blue text-2xl font-semibold tracking-widest'>
                    12% cashback
                  </div>
                  <div className='pt-5 text-lg font-semibold opacity-50 tracking-widest w-2/4'>
                    Shop for the latest shoes for all your sports fun.
                  </div>
                  <div
                    className='mt-5 w-32 h-12 rounded-full relative'
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
                <div className='flex justify-center self-center mb-28'>
                  <div className='h-28 w-28 bg-#FFFFFF absolute rounded-full'>
                    <div className='flex justify-center p-2'>
                      <img
                        src={AdidasLogo}
                        className='w-24 h-24 rounded-full'
                        alt='Adidas Logo'
                      />
                    </div>
                  </div>
                </div>
                <div className='w-1/2 self-center'>
                  <img
                    src={Shop}
                    className='rounded-r-lg rounded-l-full h-96 w-full'
                    alt='Shop Logo'
                  />
                </div>
              </div>
            </div>

            {/* Third Block */}
            <div className='flex flex-wrap mt-20 rounded-lg '>
              <div className='ml-5 font-bold text-3xl text-lightgray tracking-widest absolute'>
                Categories
              </div>
              <div className='flex mt-7 gap-20 absolute'>
                {/* Travel */}
                <div
                  className='h-16 w-24 rounded-lg'
                  style={{
                    background:
                      'var(--gradient-light-blue, linear-gradient(0deg, rgba(255, 255, 255, 0.30) 0%, rgba(255, 255, 255, 0.30) 100%), linear-gradient(215deg, #63D0F2 0%, #49C2E8 27.76%, #149FDA 100%))'
                  }}
                >
                  <div className='flex flex-col items-center justify-center w-full h-full'>
                    <img
                      src={FrameLogo}
                      className='h-5 w-5'
                      alt='Travel Logo'
                    />
                    <div className='text-white text-opacity-80 text-xs mt-1'>
                      travel
                    </div>
                  </div>
                </div>
                {/* Alcohol */}
                <div
                  className='h-16 w-24 rounded-lg'
                  style={{
                    background:
                      'var(--gradient-on-bg, linear-gradient(0deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.15) 100%), linear-gradient(217deg, #838DF0 0%, #808BF0 19.51%, #626FE7 100%))'
                  }}
                >
                  <div className='flex flex-col items-center justify-center w-full h-full'>
                    <img src={ShoeLogo} className='h-4 w-7' alt='Travel Logo' />
                    <div className='text-white text-opacity-80 text-xs mt-1'>
                      alcohol
                    </div>
                  </div>
                </div>
                {/* Markets */}
                <div
                  className='h-16 w-24 rounded-lg'
                  style={{
                    background:
                      'var(--gradient-dark-pink, linear-gradient(0deg, rgba(255, 255, 255, 0.20) 0%, rgba(255, 255, 255, 0.20) 100%), linear-gradient(220deg, #F08EB1 0%, #D64EAC 49.67%, #9352C6 100%))'
                  }}
                >
                  <div className='flex flex-col items-center justify-center w-full h-full'>
                    <img
                      src={MarketLogo}
                      className='h-5 w-5'
                      alt='Market Logo'
                    />
                    <div className='text-white text-opacity-80 text-xs mt-1'>
                      markets
                    </div>
                  </div>
                </div>
                {/*  Fashion  */}
                <div
                  className='h-16 w-24 rounded-lg'
                  style={{
                    background:
                      'var(--gradient-red-pink, linear-gradient(0deg, rgba(255, 255, 255, 0.20) 0%, rgba(255, 255, 255, 0.20) 100%), linear-gradient(211deg, #ED8678 0%, #EC6E79 35.94%, #D64E7F 100%))'
                  }}
                >
                  <div className='flex flex-col items-center justify-center w-full h-full'>
                    <img src={FashionLogo} className='h-5 w-5' alt='v Logo' />
                    <div className='text-white text-opacity-80 text-xs mt-1'>
                      markets
                    </div>
                  </div>
                </div>
                {/* Technology */}
                <div
                  className='h-16 w-24 rounded-lg'
                  style={{
                    background:
                      'var(--gradient-orange, linear-gradient(0deg, rgba(255, 255, 255, 0.20) 0%, rgba(255, 255, 255, 0.20) 100%), linear-gradient(199deg, #EDA052 0%, #EA9343 37.50%, #E36467 100%))'
                  }}
                >
                  <div className='flex flex-col items-center justify-center w-full h-full'>
                    <img
                      src={FrameLogo}
                      className='h-5 w-5'
                      alt='Travel Logo'
                    />
                    <div className='text-white text-opacity-80 text-xs mt-1'>
                      technology
                    </div>
                  </div>
                </div>
                {/* Food */}
                <div
                  className='h-16 w-24 rounded-lg'
                  style={{
                    background:
                      'var(--gradient-on-bg, linear-gradient(0deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.15) 100%), linear-gradient(217deg, #838DF0 0%, #808BF0 19.51%, #626FE7 100%))'
                  }}
                >
                  <div className='flex flex-col items-center justify-center w-full h-full'>
                    <img src={ShoeLogo} className='h-4 w-7' alt='Travel Logo' />
                    <div className='text-white text-opacity-80 text-xs mt-1'>
                      food
                    </div>
                  </div>
                </div>
                {/* Fitness */}
                <div
                  className='h-16 w-24 rounded-lg'
                  style={{
                    background:
                      'var(--gradient-dark-pink, linear-gradient(0deg, rgba(255, 255, 255, 0.20) 0%, rgba(255, 255, 255, 0.20) 100%), linear-gradient(220deg, #F08EB1 0%, #D64EAC 49.67%, #9352C6 100%))'
                  }}
                >
                  <div className='flex flex-col items-center justify-center w-full h-full'>
                    <img
                      src={MarketLogo}
                      className='h-5 w-5'
                      alt='Market Logo'
                    />
                    <div className='text-white text-opacity-80 text-xs mt-1'>
                      fitness
                    </div>
                  </div>
                </div>
                {/*  Baby  */}
                <div
                  className='h-16 w-24 rounded-lg'
                  style={{
                    background:
                      'var(--gradient-red-pink, linear-gradient(0deg, rgba(255, 255, 255, 0.20) 0%, rgba(255, 255, 255, 0.20) 100%), linear-gradient(211deg, #ED8678 0%, #EC6E79 35.94%, #D64E7F 100%))'
                  }}
                >
                  <div className='flex flex-col items-center justify-center w-full h-full'>
                    <img src={FashionLogo} className='h-5 w-5' alt='v Logo' />
                    <div className='text-white text-opacity-80 text-xs mt-1'>
                      baby
                    </div>
                  </div>
                </div>
                {/*  categories  */}
                <div
                  className='h-16 w-24 rounded-lg'
                  style={{
                    background: 'var(--main-white, #FFF)'
                  }}
                >
                  <div className='flex flex-col items-center justify-center w-full h-full'>
                    <img src={ListLogo} className='h-5 w-5' alt='v Logo' />
                    <div className='text-gray1 text-opacity-80 text-xs mt-1'>
                      categories
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Four Block */}
            <div className='flex flex-wrap mt-40 rounded-lg'>
              <div className='ml-5 font-bold text-3xl text-lightgray tracking-widest absolute'>
                Featured offers
              </div>
              <div className='flex mt-7 gap-25 '>
                {/* Adidas */}
                <div
                  className='h-44 w-44 rounded-3xl shadow-#BECAD9 justify-between drop-shadow-2xl '
                  style={{
                    background: 'var(--main-white, #FFF)'
                  }}
                >
                  <div className='flex flex-col absolute'>
                    <div className='self-center '>
                      <img
                        src={Rectangle}
                        className='h-24 w-44'
                        alt='Travel Logo'
                      />
                    </div>
                    <div className='absolute mt-1 items-center self-center'>
                      <img src={Adidas} className='h-20 w-32' alt='Adidas' />
                    </div>
                    <div className='pt-3 pl-3 pr-3 flex items-center'>
                      <span className='text-gray tracking-widest text-xs font-semibold'>
                        Up to
                      </span>
                      <div className='w-10 h-10 bg-gray-100 rounded-md ml-1'>
                        <div className='flex items-center justify-center w-full h-full'>
                          <div className='text-blue font-bold tracking-widest'>
                            8%
                          </div>
                        </div>
                      </div>
                      <span className='text-gray tracking-widest text-xs font-semibold ml-1'>
                        cashback
                      </span>
                    </div>
                    <div className='pl-3 pt-1 flex items-center'>
                      <span
                        className='tracking-widest text-xs font-semibold'
                        style={{ color: 'var(--main-60, #B7BBC4)' }}
                      >
                        was 4%
                      </span>
                    </div>
                  </div>
                </div>

                {/* Bond */}
                <div
                  className='h-44 w-44 rounded-3xl shadow-#BECAD9 justify-between drop-shadow-2xl'
                  style={{
                    background: 'var(--main-white, #FFF)'
                  }}
                >
                  <div className='flex flex-col absolute'>
                    <div className='self-center'>
                      <img
                        src={Beach}
                        className='h-24 w-44'
                        alt='Travel Logo'
                      />
                    </div>
                    <div className='absolute mt-10 items-center self-center'>
                      <img src={Bond} className='h-5 20' alt='Bond' />
                    </div>
                    <div className='pt-3 pl-3 pr-3 flex items-center'>
                      <span className='text-gray tracking-widest text-xs font-semibold'>
                        Up to
                      </span>
                      <div className='w-10 h-10 bg-gray-100 rounded-md ml-1'>
                        <div className='flex items-center justify-center w-full h-full'>
                          <div className='text-blue font-bold tracking-widest'>
                            8%
                          </div>
                        </div>
                      </div>
                      <span className='text-gray tracking-widest text-xs font-semibold ml-1'>
                        cashback
                      </span>
                    </div>
                    <div className='pl-3 pt-1 flex items-center'>
                      <span
                        className='tracking-widest text-xs font-semibold'
                        style={{ color: 'var(--main-60, #B7BBC4)' }}
                      >
                        was 4%
                      </span>
                    </div>
                  </div>
                </div>

                {/* Groupon */}
                <div
                  className='h-44 w-44 rounded-3xl shadow-#BECAD9 justify-between drop-shadow-2xl'
                  style={{
                    background: 'var(--main-white, #FFF)'
                  }}
                >
                  <div className='flex flex-col absolute'>
                    <div className='self-center'>
                      <img
                        src={Headphone}
                        className='h-24 w-44'
                        alt='Travel Logo'
                      />
                    </div>
                    <div className='absolute mt-10 items-center self-center'>
                      <img src={GroupOn} className='h-5 20' alt='GroupOn' />
                    </div>
                    <div className='pt-3 pl-3 pr-3 flex items-center'>
                      <span className='text-gray tracking-widest text-xs font-semibold'>
                        Up to
                      </span>
                      <div className='w-10 h-10 bg-gray-100 rounded-md ml-1'>
                        <div className='flex items-center justify-center w-full h-full'>
                          <div className='text-blue font-bold tracking-widest'>
                            8%
                          </div>
                        </div>
                      </div>
                      <span className='text-gray tracking-widest text-xs font-semibold ml-1'>
                        cashback
                      </span>
                    </div>
                    <div className='pl-3 pt-1 flex items-center'>
                      <span
                        className='tracking-widest text-xs font-semibold'
                        style={{ color: 'var(--main-60, #B7BBC4)' }}
                      >
                        was 4%
                      </span>
                    </div>
                  </div>
                </div>

                {/* Amazon */}
                <div
                  className='h-44 w-44 rounded-3xl shadow-#BECAD9 justify-between drop-shadow-2xl'
                  style={{
                    background: 'var(--main-white, #FFF)'
                  }}
                >
                  <div className='flex flex-col absolute'>
                    <div className='self-center'>
                      <img
                        src={Shopping}
                        className='h-24 w-44'
                        alt='Shopping Logo'
                      />
                    </div>
                    <div className='absolute mt-10 items-center self-center'>
                      <img src={Amazon} className='h-5 20' alt='Amazon' />
                    </div>
                    <div className='pt-3 pl-3 pr-3 flex items-center'>
                      <span className='text-gray tracking-widest text-xs font-semibold'>
                        Up to
                      </span>
                      <div className='w-10 h-10 bg-gray-100 rounded-md ml-1'>
                        <div className='flex items-center justify-center w-full h-full'>
                          <div className='text-blue font-bold tracking-widest'>
                            8%
                          </div>
                        </div>
                      </div>
                      <span className='text-gray tracking-widest text-xs font-semibold ml-1'>
                        cashback
                      </span>
                    </div>
                    <div className='pl-3 pt-1 flex items-center'>
                      <span
                        className='tracking-widest text-xs font-semibold'
                        style={{ color: 'var(--main-60, #B7BBC4)' }}
                      >
                        was 4%
                      </span>
                    </div>
                  </div>
                </div>

                {/* Dell */}
                <div
                  className='h-44 w-44 rounded-3xl shadow-#BECAD9 justify-between drop-shadow-2xl'
                  style={{
                    background: 'var(--main-white, #FFF)'
                  }}
                >
                  <div className='flex flex-col absolute'>
                    <div className='self-center'>
                      <img src={Desk} className='h-24 w-44' alt='Desk Logo' />
                    </div>
                    <div className='absolute mt-10 items-center self-center'>
                      <img src={Dell} className='h-5 20' alt='Dell' />
                    </div>
                    <div className='pt-3 pl-3 pr-3 flex items-center'>
                      <span className='text-gray tracking-widest text-xs font-semibold'>
                        Up to
                      </span>
                      <div className='w-10 h-10 bg-gray-100 rounded-md ml-1'>
                        <div className='flex items-center justify-center w-full h-full'>
                          <div className='text-blue font-bold tracking-widest'>
                            8%
                          </div>
                        </div>
                      </div>
                      <span className='text-gray tracking-widest text-xs font-semibold ml-1'>
                        cashback
                      </span>
                    </div>
                    <div className='pl-3 pt-1 flex items-center'>
                      <span
                        className='tracking-widest text-xs font-semibold'
                        style={{ color: 'var(--main-60, #B7BBC4)' }}
                      >
                        was 4%
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Fifth Block */}
            <div className='mt-20 rounded-lg'>
              <div className='ml-5 font-bold text-3xl text-lightgray tracking-widest absolute'>
                Store rates
              </div>
              <div className='flex flex-row justify-between pt-7 relative'>
                <div className='w-464 h-208 bg-white rounded-lg drop-shadow-2xl shadow-#BECAD9'>
                  <Tab.Group>
                    <Tab.List className='flex rounded-full bg-background m-2 '>
                      {Object.keys(categories).map(category => (
                        <Tab
                          key={category}
                          className={({ selected }) =>
                            classNames(
                              'w-full rounded-full py-2.5 text-sm font-medium leading-5  ',
                              selected
                                ? 'bg-tabs shadow text-white'
                                : 'text-nonSelected'
                            )
                          }
                        >
                          {category}
                        </Tab>
                      ))}
                    </Tab.List>
                    <Tab.Panels className='mt-2'>
                      {Object.values(categories).map((posts, idx) => (
                        <Tab.Panel
                          key={idx}
                          className={classNames(
                            'rounded-xl bg-white',
                            'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2'
                          )}
                        >
                          <ul className='relative hover:bg-gray-100 '>
                            <div class='absolute right-0 top-1/2 self-center'>
                              <img
                                src={Percentage}
                                alt='Percentage'
                                className='w-22 h-16'
                              />
                            </div>
                            {posts.map(post => (
                              <li
                                key={post.id}
                                className=' rounded-md p-1 pl-8'
                              >
                                <ul className='mt-1 space-x-1 text-xs leading-4 text-gray-500 self-center inline-flex flex-col'>
                                  <div className='inline-flex flex-col justify-end items-start'>
                                    <div className='self-center'>
                                      <div className='flex items-center gap-6 '>
                                        <div className='self-center text-sm leading-5 font-bold text-fontgray w-10'>
                                          {post.title}
                                        </div>
                                        <p className='text-gray text-sm'>
                                          {post.description}
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                </ul>
                              </li>
                            ))}
                          </ul>
                        </Tab.Panel>
                      ))}
                    </Tab.Panels>
                  </Tab.Group>
                </div>
                <div
                  className={`w-466 h-${divHeight} bg-white rounded-lg drop-shadow-2xl shadow-#BECAD9`}
                >
                  {/* First Block */}
                  <div className='flex flex-col  mt-3'>
                    <div className='flex justify-between'>
                      <div className='flex w-1/2  p-4'>
                        <div className='w-10 h-10 rounded-lg bg-slate-500 opacity-30 flex items-center justify-center '>
                          <img
                            src={ShopLogo}
                            className='h-5 w-5'
                            alt='Shop Logo'
                          />
                        </div>
                        <div className='self-center '>
                          <div className='text-xs font-font font-semibold ml-3'>
                            Orders
                          </div>
                          <div className='ml-3 font-gray text-xs opacity-50 '>
                            Purchases
                          </div>
                        </div>
                      </div>
                      <div className='flex w-1/2 ml-10 justify-between self-center'>
                        <div className=''>
                          <img
                            src={Setting}
                            className='h-5 w-5'
                            alt='Shop Logo'
                          />
                        </div>
                        <div className='flex justify-between'>
                          <div className='text-textviolet text-xs self-center mr-5'>
                            Feb
                          </div>
                          <div className='self-center mr-10'>
                            <img src={VectorIcon} alt='Vector Logo' />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Border */}
                  <div className='flex rounded-3xl justify-center '>
                    <div className='bg-violetbg w-423 h-2 '></div>
                  </div>
                  {/* Second Block */}
                  <div className='flex flex-col '>
                    <div className='flex justify-between'>
                      <div className='flex w-1/2  p-4'>
                        <div className='h-10 w-10 rounded-lg flex items-center justify-center self-center'>
                          <img
                            src={AdidasLogo1}
                            className='self-center items-center mt-5'
                            alt='AdidasLogo1 Logo'
                          />
                        </div>
                        <div className='self-center '>
                          <div className='text-xs font-font font-semibold ml-3'>
                            Adidas
                          </div>
                          <div className='ml-3 font-gray text-xs opacity-50 '>
                            9th April $1,282
                          </div>
                        </div>
                      </div>
                      <div className=' w-1/2 justify-end self-center text-textviolet'>
                        <div className=' text-xs self-center mr-10 flex justify-end '>
                          + $ 37.5
                        </div>
                        <div className=' text-xs self-center mr-10 flex justify-end mt-1'>
                          + oodlx 5.18
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Third Block */}
                  <div className='flex flex-col'>
                    <div className='flex justify-between'>
                      <div className='flex w-1/2  p-4'>
                        <div className='h-10 w-10 rounded-lg flex items-center justify-center self-center'>
                          <img
                            src={BondLogo}
                            className='self-center items-center mt-5'
                            alt='BondLogo Logo'
                          />
                        </div>
                        <div className='self-center '>
                          <div className='text-xs font-font font-semibold ml-3'>
                            Bonds
                          </div>
                          <div className='ml-3 font-gray text-xs opacity-50 '>
                            9th April $282
                          </div>
                        </div>
                      </div>
                      <div className=' w-1/2 justify-end self-center text-textviolet'>
                        <div className=' text-xs self-center mr-10 flex justify-end '>
                          + $ 37.5
                        </div>
                        <div className=' text-xs self-center mr-10 flex justify-end mt-1'>
                          + oodlx 5.18
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Fourth Block */}
                  <div className='flex flex-col'>
                    <div className='flex justify-between'>
                      <div className='flex w-1/2  p-4'>
                        <div className='h-10 w-10 rounded-lg flex items-center justify-center self-center'>
                          <img
                            src={DellLogo}
                            className='self-center items-center mt-5'
                            alt='DellLogo Logo'
                          />
                        </div>
                        <div className='self-center '>
                          <div className='text-xs font-font font-semibold ml-3 flex'>
                            Dell
                            <span className='w-14 h-4 ml-2 rounded-lg bg-slate-500 opacity-30 flex items-center justify-center '>
                              Pending
                            </span>
                          </div>
                          <div className='ml-3 font-gray text-xs opacity-50 '>
                            9th April
                          </div>
                        </div>
                      </div>
                      <div className=' w-1/2 justify-end self-center text-gray'>
                        <div className=' text-xs self-center mr-10 flex justify-end '>
                          + $ 37.5
                        </div>
                        <div className=' text-xs self-center mr-10 flex justify-end mt-1'>
                          + oodlx 5.18
                        </div>
                      </div>
                    </div>
                  </div>
                  {divHeight > 357 && (
                    <>
                      {/* Second Block */}
                      <div className='flex flex-col '>
                        <div className='flex justify-between'>
                          <div className='flex w-1/2  p-4'>
                            <div className='h-10 w-10 rounded-lg flex items-center justify-center self-center'>
                              <img
                                src={AdidasLogo1}
                                className='self-center items-center mt-5'
                                alt='AdidasLogo1 Logo'
                              />
                            </div>
                            <div className='self-center '>
                              <div className='text-xs font-font font-semibold ml-3'>
                                Adidas
                              </div>
                              <div className='ml-3 font-gray text-xs opacity-50 '>
                                9th April $1,282
                              </div>
                            </div>
                          </div>
                          <div className=' w-1/2 justify-end self-center text-textviolet'>
                            <div className=' text-xs self-center mr-10 flex justify-end '>
                              + $ 37.5
                            </div>
                            <div className=' text-xs self-center mr-10 flex justify-end mt-1'>
                              + oodlx 5.18
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Third Block */}
                      <div className='flex flex-col'>
                        <div className='flex justify-between'>
                          <div className='flex w-1/2  p-4'>
                            <div className='h-10 w-10 rounded-lg flex items-center justify-center self-center'>
                              <img
                                src={BondLogo}
                                className='self-center items-center mt-5'
                                alt='BondLogo Logo'
                              />
                            </div>
                            <div className='self-center '>
                              <div className='text-xs font-font font-semibold ml-3'>
                                Bonds
                              </div>
                              <div className='ml-3 font-gray text-xs opacity-50 '>
                                9th April $282
                              </div>
                            </div>
                          </div>
                          <div className=' w-1/2 justify-end self-center text-textviolet'>
                            <div className=' text-xs self-center mr-10 flex justify-end '>
                              + $ 37.5
                            </div>
                            <div className=' text-xs self-center mr-10 flex justify-end mt-1'>
                              + oodlx 5.18
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Fourth Block */}
                      <div className='flex flex-col'>
                        <div className='flex justify-between'>
                          <div className='flex w-1/2  p-4'>
                            <div className='h-10 w-10 rounded-lg flex items-center justify-center self-center'>
                              <img
                                src={DellLogo}
                                className='self-center items-center mt-5'
                                alt='DellLogo Logo'
                              />
                            </div>
                            <div className='self-center '>
                              <div className='text-xs font-font font-semibold ml-3 flex'>
                                Dell
                                <span className='w-14 h-4 ml-2 rounded-lg bg-slate-500 opacity-30 flex items-center justify-center '>
                                  Pending
                                </span>
                              </div>
                              <div className='ml-3 font-gray text-xs opacity-50 '>
                                9th April
                              </div>
                            </div>
                          </div>
                          <div className=' w-1/2 justify-end self-center text-gray'>
                            <div className=' text-xs self-center mr-10 flex justify-end '>
                              + $ 37.5
                            </div>
                            <div className=' text-xs self-center mr-10 flex justify-end mt-1'>
                              + oodlx 5.18
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  )}
                  <div className='flex w-full h-10 justify-center'>
                    {divHeight === 357 ? (
                      <>
                        <button
                          className='self-center '
                          onClick={increaseHeight}
                        >
                          <img src={VectorIcon} alt='Vector Logo' />
                        </button>
                      </>
                    ) : (
                      <>
                        <button
                          className='self-center'
                          onClick={decreaseHeight}
                        >
                          <img src={VectorUp} alt='Vector Logo' />
                        </button>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Six Block */}
            <div className='flex flex-wrap mt-20 rounded-lg'>
              <div className='ml-5 font-bold text-3xl text-lightgray tracking-widest absolute'>
                Other Adidas offers
              </div>
              <div className='flex mt-7 w-full justify-between relative'>
                {/* First Offer */}
                <div
                  className='h-94 w-290 rounded-3xl shadow-#BECAD9 justify-between drop-shadow-2xl'
                  style={{
                    background: 'var(--main-white, #FFF)'
                  }}
                >
                  <div className='flex flex-row justify-between rounded-lg'>
                    <div
                      className='flex rounded-3xl w-1/2 h-94 bg-violetbg '
                      style={{ clipPath: 'ellipse(93% 100% at 7% 49%)' }}
                    >
                      <div className='flex flex-col justify-center ml-5'>
                        <span className='  text-white text-xs self-start tracking-widest w-2/3 '>
                          Up to 20% cashback
                        </span>
                        <span className=' text-white opacity-70 text-xs self-start mt-2'>
                          Ends in 3 days
                        </span>
                      </div>
                    </div>
                    <div className='flex flex-col w-1/2 justify-center'>
                      <div className=' w-96 h-32 rounded-full relative bg-violetbg  self-center'>
                        <button className=' text-xs flex text-white items-center justify-center w-full h-full'>
                          SHOP OFFER
                        </button>
                      </div>
                      <div className='flex self-center mt-2'>
                        <button
                          className='text-textviolet text-xs self-center '
                          onClick={() => {
                            first()
                          }}
                        >
                          {isOpen1 === true ? 'less' : 'more'}
                        </button>
                        <button
                          className='self-center ml-1'
                          onClick={() => {
                            first()
                          }}
                        >
                          {isOpen1 === true ? (
                            <img src={VectorUp} alt='Vector Logo' />
                          ) : (
                            <img src={VectorIcon} alt='Vector Logo' />
                          )}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Second Offer */}
                <div
                  className='h-94 w-290 rounded-3xl shadow-#BECAD9 justify-between drop-shadow-2xl'
                  style={{
                    background: 'var(--main-white, #FFF)'
                  }}
                >
                  <div className='flex flex-row justify-between rounded-lg'>
                    <div
                      className='flex rounded-3xl w-1/2 h-94 bg-violetbg '
                      style={{ clipPath: 'ellipse(93% 100% at 7% 49%)' }}
                    >
                      <div className='flex flex-col justify-center ml-5'>
                        <span className='  text-white text-xs self-start tracking-widest  '>
                          Buy 2 get 1 free
                        </span>
                        <span className=' text-white opacity-70 text-xs self-start mt-4'>
                          Ends in 3 days
                        </span>
                      </div>
                    </div>
                    <div className='flex flex-col w-1/2 justify-center'>
                      <div className=' w-96 h-32 rounded-full relative bg-violetbg  self-center'>
                        <button className=' text-xs flex text-white items-center justify-center w-full h-full'>
                          SHOP OFFER
                        </button>
                      </div>
                      <div className='flex self-center mt-2'>
                        <button
                          className='text-textviolet text-xs self-center '
                          onClick={() => {
                            second()
                          }}
                        >
                          {isOpen2 === true ? 'less' : 'more'}
                        </button>
                        <button
                          className='self-center ml-1'
                          onClick={() => {
                            second()
                          }}
                        >
                          {isOpen2 === true ? (
                            <img src={VectorUp} alt='Vector Logo' />
                          ) : (
                            <img src={VectorIcon} alt='Vector Logo' />
                          )}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Third Offer */}
                <div
                  className='h-94 w-290 rounded-3xl shadow-#BECAD9 justify-between drop-shadow-2xl'
                  style={{
                    background: 'var(--main-white, #FFF)'
                  }}
                >
                  <div className='flex flex-row justify-between rounded-lg'>
                    <div
                      className='flex rounded-3xl w-1/2 h-94 bg-violetbg '
                      style={{ clipPath: 'ellipse(93% 100% at 7% 49%)' }}
                    >
                      <div className='flex flex-col justify-center ml-5'>
                        <span className='  text-white text-xs self-start tracking-widest w-2/3 '>
                          Up to 20% cashback
                        </span>
                        <span className=' text-white opacity-70 text-xs self-start mt-2'>
                          Ends in 3 days
                        </span>
                      </div>
                    </div>
                    <div className='flex flex-col w-1/2 justify-center'>
                      <div className=' w-96 h-32 rounded-full relative bg-violetbg  self-center'>
                        <button className=' text-xs flex text-white items-center justify-center w-full h-full'>
                          SHOP OFFER
                        </button>
                      </div>
                      <div className='flex self-center mt-2'>
                        <button
                          className='text-textviolet text-xs self-center '
                          onClick={() => third()}
                        >
                          {isOpen3 === true ? 'less' : 'more'}
                        </button>
                        <button
                          className='self-center ml-1'
                          onClick={() => third()}
                        >
                          {isOpen3 === true ? (
                            <img src={VectorUp} alt='Vector Logo' />
                          ) : (
                            <img src={VectorIcon} alt='Vector Logo' />
                          )}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {isOpen1 === true && (
              <>
                <div className='rounded-lg absolute'>
                  <div className='mt-1'>
                    <div
                      className='flex h-61 w-286 rounded-3xl shadow-#BECAD9  '
                      style={{
                        background: 'var(--main-white, #FFF)'
                      }}
                    >
                      <div className='text-center  text-nonSelected text-xs self-center p-2'>
                        Promo code is required. Excludes mobile phone and
                        horses.
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}

            {isOpen2 === true && (
              <>
                <div className='rounded-lg absolute left-1/2'>
                  <div className=' mt-1 ml-6'>
                    <div
                      className='flex h-61 w-286 rounded-3xl shadow-#BECAD9  '
                      style={{
                        background: 'var(--main-white, #FFF)'
                      }}
                    >
                      <div className='text-center  text-nonSelected text-xs self-center p-2'>
                        Promo code is required. Excludes mobile phone and
                        horses.
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}

            {isOpen3 === true && (
              <>
                <div className=' rounded-lg absolute right-16'>
                  <div className=' mt-1'>
                    <div
                      className='flex h-61 w-286 rounded-3xl shadow-#BECAD9  '
                      style={{
                        background: 'var(--main-white, #FFF)'
                      }}
                    >
                      <div className='text-center  text-nonSelected text-xs self-center p-2'>
                        Promo code is required. Excludes mobile phone and
                        horses.
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}

            {/* Seven Block */}
            <div className='flex flex-wrap mt-20 rounded-lg '>
              <div className='flex mt-6 w-full justify-between col-3'>
                {/* First Offer */}
                <div
                  className='h-94 w-290 rounded-3xl shadow-#BECAD9 justify-between drop-shadow-2xl'
                  style={{
                    background: 'var(--main-white, #FFF)'
                  }}
                >
                  <div className='flex flex-row justify-between rounded-lg'>
                    <div
                      className='flex rounded-3xl w-1/2 h-94 bg-violetbg '
                      style={{ clipPath: 'ellipse(93% 100% at 7% 49%)' }}
                    >
                      <div className='flex flex-col justify-center ml-5'>
                        <span className='  text-white text-xs self-start tracking-widest w-2/3 '>
                          Spend $100 get 15% off
                        </span>
                        <span className=' text-white opacity-70 text-xs self-start mt-2'>
                          Ends in 3 days
                        </span>
                      </div>
                    </div>
                    <div className='flex flex-col w-1/2 justify-center'>
                      <div className=' w-96 h-32 rounded-full relative bg-violetbg  self-center'>
                        <button className=' text-xs flex text-white items-center justify-center w-full h-full'>
                          SHOP OFFER
                        </button>
                      </div>
                      <div className='flex self-center mt-2'>
                        <dbutton
                          className='text-textviolet text-xs self-center '
                          onClick={() => four()}
                        >
                          {isOpen4 === true ? 'less' : 'more'}
                        </dbutton>
                        <button
                          className='self-center ml-1'
                          onClick={() => four()}
                        >
                          {isOpen4 === true ? (
                            <img src={VectorUp} alt='Vector Logo' />
                          ) : (
                            <img src={VectorIcon} alt='Vector Logo' />
                          )}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Second Offer */}
                <div
                  className='h-94 w-290 rounded-3xl shadow-#BECAD9 justify-between drop-shadow-2xl'
                  style={{
                    background: 'var(--main-white, #FFF)'
                  }}
                >
                  <div className='flex flex-row justify-between rounded-lg'>
                    <div
                      className='flex rounded-3xl w-1/2 h-94 bg-violetbg '
                      style={{ clipPath: 'ellipse(93% 100% at 7% 49%)' }}
                    >
                      <div className='flex flex-col justify-center ml-5'>
                        <span className='  text-white text-xs self-start tracking-widest   '>
                          Free shipping on all orders
                        </span>
                        <span className=' text-white opacity-70 text-xs self-start mt-2'>
                          Ends in 3 days
                        </span>
                      </div>
                    </div>
                    <div className='flex flex-col w-1/2 justify-center'>
                      <div className='flex self-center justify-between w-96 h-32 bg-violetbg rounded-full relative'>
                        <div className='flex w-3/5 self-center bg-violetbg rounded-full  justify-center'>
                          <button className=' text-xs flex text-white items-center  justify-center w-full h-full'>
                            CODE
                          </button>
                        </div>
                        <div className='flex w-2/5 bg-lightviolet rounded-r-full justify-center'>
                          <button className=' text-xs flex text-violetbg items-center justify-center '>
                            52TU
                          </button>
                        </div>
                      </div>

                      <div className='flex self-center mt-2'>
                        <button
                          className='text-textviolet text-xs self-center '
                          onClick={() => {
                            five()
                          }}
                        >
                          {isOpen === false ? 'more' : 'less'}
                        </button>
                        <button
                          className='self-center ml-1'
                          onClick={() => {
                            five()
                          }}
                        >
                          {isOpen === false ? (
                            <img src={VectorIcon} alt='Vector Logo' />
                          ) : (
                            <img src={VectorUp} alt='Vector Logo' />
                          )}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Third Offer */}
                <div
                  className='h-94 w-290 rounded-3xl shadow-#BECAD9 justify-between drop-shadow-2xl'
                  style={{
                    background: 'var(--main-white, #FFF)'
                  }}
                >
                  <div className='flex flex-row justify-between rounded-lg'>
                    <div
                      className='flex rounded-3xl w-1/2 h-94 bg-violetbg '
                      style={{ clipPath: 'ellipse(93% 100% at 7% 49%)' }}
                    >
                      <div className='flex flex-col justify-center ml-5'>
                        <span className='  text-white text-xs self-start tracking-widest w-2/3 '>
                          Spend $100 get 15% off
                        </span>
                        <span className=' text-white opacity-70 text-xs self-start mt-2'>
                          Ends in 3 days
                        </span>
                      </div>
                    </div>
                    <div className='flex flex-col w-1/2 justify-center'>
                      <div className=' w-96 h-32 rounded-full relative bg-violetbg  self-center'>
                        <button className=' text-xs flex text-white items-center justify-center w-full h-full'>
                          SHOP OFFER
                        </button>
                      </div>
                      <div className='flex self-center mt-2'>
                        <button
                          className='text-textviolet text-xs self-center '
                          onClick={() => {
                            six()
                          }}
                        >
                          {isOpen5 === true ? 'less' : 'more'}
                        </button>
                        <button
                          className='self-center ml-1'
                          onClick={() => {
                            six()
                          }}
                        >
                          {isOpen5 === true ? (
                            <img src={VectorUp} alt='Vector Logo' />
                          ) : (
                            <img src={VectorIcon} alt='Vector Logo' />
                          )}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {isOpen === true && (
              <>
                {/* Eight Block */}
                <div className='rounded-lg absolute left-1/2'>
                  <div className=' mt-1 ml-6'>
                    <div
                      className='flex h-61 w-286 rounded-3xl shadow-#BECAD9  '
                      style={{
                        background: 'var(--main-white, #FFF)'
                      }}
                    >
                      <div className='text-center  text-nonSelected text-xs self-center p-2'>
                        Promo code is required. Excludes mobile phone and
                        horses.
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}

            {isOpen4 === true && (
              <>
                <div className='rounded-lg absolute'>
                  <div className='mt-1'>
                    <div
                      className='flex h-61 w-286 rounded-3xl shadow-#BECAD9  '
                      style={{
                        background: 'var(--main-white, #FFF)'
                      }}
                    >
                      <div className='text-center  text-nonSelected text-xs self-center p-2'>
                        Promo code is required. Excludes mobile phone and
                        horses.
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}

            {isOpen5 === true && (
              <>
                <div className=' rounded-lg absolute right-16'>
                  <div className=' mt-1'>
                    <div
                      className='flex h-61 w-286 rounded-3xl shadow-#BECAD9  '
                      style={{
                        background: 'var(--main-white, #FFF)'
                      }}
                    >
                      <div className='text-center  text-nonSelected text-xs self-center p-2'>
                        Promo code is required. Excludes mobile phone and
                        horses.
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default tailwindcss
