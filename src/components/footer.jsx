import React from 'react'
import Logo from '../img/logo.png'
import app from '../img/pay/app.jpg'
import play from '../img/pay/play.jpg'
import pay from '../img/pay/pay.png'

const footer = () => {
  return (
    <div className=' w-[100%] my-[30px] mx-[auto] '>
        <img src={Logo} className='w-[auto] mx-[auto] my-[5`0px]' alt="" />
        <div className='flex gap-[20px] w-[auto] my-[20px] mx-[auto] flex-wrap justify-evenly'>
            <div>
                <div className='font-bold text-[20px] mb-[20px] '>Contact</div>
                <div className='text-[15px] font-bold mb-[10px]'>Address: <span className='font-medium text-[#8a8787]'> No:166/50 Busroad Banglore</span> </div>
                <div className='text-[15px] font-bold mb-[10px]'>Phone: <span  className='font-medium text-[#8a8787]'> +91 9876543210</span> </div>
                <div className='text-[15px] font-bold mb-[10px]'>Hours: <span  className='font-medium text-[#8a8787]'> 10:00 - 18:00 Mon - Sat</span> </div>

                <div className='font-bold text-[20px] mb-[20px] '>Follow Us</div>
                <div className='flex gap-2 my-[20px] text-[#8a8787]'>
                    <svg className='w-[19px] h-[19px]'
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 320 512"><path
                            d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" />
                    </svg>
                    <svg className='w-[19px] h-[19px]'
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 576 512">
                            <path
                            d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z" />
                    </svg>
                    <svg className='w-[19px] h-[19px]'
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 512 512">
                            <path
                            d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
                    </svg>

                    <svg className='w-[19px] h-[19px]'
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 448 512">
                        <path
                        d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                    </svg>
                </div>
            </div>

            <div>
                <div  className='font-bold text-[20px] mb-[20px] '>About</div>
                <div  className='font-medium text-[#8a8787] mb-[10px] cursor-pointer'>About Us</div>
                <div className='font-medium text-[#8a8787] mb-[10px] cursor-pointer'>Delivery Information</div>
                <div className='font-medium text-[#8a8787] mb-[10px] cursor-pointer'>Privacy Policy</div>
                <div className='font-medium text-[#8a8787] mb-[10px] cursor-pointer'>Terms & Conditions</div>
                <div  className='font-medium text-[#8a8787] mb-[10px] cursor-pointer'>Contact Us</div>
            </div>

            <div>
                <div   className='font-bold text-[20px] mb-[20px] '>My account</div>
                <div  className='font-medium text-[#8a8787] mb-[10px] cursor-pointer'>Sign in</div>
                <div  className='font-medium text-[#8a8787] mb-[10px] cursor-pointer'>View Cart</div>
                <div  className='font-medium text-[#8a8787] mb-[10px] cursor-pointer'>My Wishlist</div>
                <div className='font-medium text-[#8a8787] mb-[10px] cursor-pointer'>Track my order</div>
                <div className='font-medium text-[#8a8787] mb-[10px] cursor-pointer'>Help</div>
            </div>

            <div >
                <div  className='font-bold text-[20px] mb-[20px] '>Install App</div>
                <div  className='font-medium text-[#8a8787] mb-[10px] cursor-pointer'>From App Store or Play Store</div>
                <div className='flex gap-[10px] my-[30px]'>
                    <img src={play} className='border border-solid border-[#088178] rounded-[12px] ' alt="" />
                    <img src={app} className='border border-solid border-[#088178] rounded-[12px] ' alt="" />
                </div>

                <div  className='font-medium text-[#8a8787] mb-[10px] cursor-pointer'>Secured Payment Gateway</div>
                <img src={pay} alt="" />
            </div>
        </div>
    </div>
  )
}

export default footer