import React from 'react'
import BannerCard from '../home/BannerCard'

const Banner = () => {
  return (
    <div className='px-4 lg:px-24 bg-teal-100 flex items-center'>
        <div className='flex w-full flex-col md:flex-row justify-between iteams-center gap-12 py-40'>
            <div className="md:w-1/2 space-y-8 h-full">
                <h2 className="text-5xl font-Bold leading-snug text-black">Buy and Sell Your Books <span className='text-blue-700'>for the Best Prices</span></h2>
                <p className="md:w-4/5">Welcome to our online marketplace where buying and selling books has never been easier. Whether you're looking to find a new home for your pre-loved books or discover your next great read, our platform is designed to make the process seamless and enjoyable. Simply list your books for sale or browse through our extensive collection to find exactly what you need. Our user-friendly interface, secure transactions, and dedicated customer support ensure a smooth experience from start to finish. Join our community 
                    of book enthusiasts today and start buying and selling with confidence!</p>
                    <div>
                        <input type="search" name="search" id="search" placeholder="Search a Book" className='py-2
                        px-2 rounded-s-sm outline-none'/>
                        <button className='bg-blue-700 px-6 py-2 text-white font-medium hover:bg-black transition-all
                        ease-in duration-200'>Search</button>
                    </div>
            </div>

            <div>
                <BannerCard></BannerCard>
            </div>
        </div>
    </div>
  )
}

export default Banner
