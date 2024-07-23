import React from 'react'
import FavBookImg from "../assets/banner-books/FavBook.png"
import { Link } from 'react-router-dom'
const FavBook = () => {
  return (
    <div className='px-4 lg:px-24 my-20 flex flex-col md:flex-row justify-between items-center gap-12'>
        <div className='md:w-1/2'>
        <img src={FavBookImg} alt="" className='rounded md:w-10/12 h-96'/>
     </div>
     <div className='md:w-1/2 space-y-6'>
     <h2 className='text-5xl font-bold my-5 md:3/4 leading:snug'>Find Your Favourite <span className='text-blue-700'>Book Here!</span></h2>
     <p className='mb-10 text-lg md:w-5/6'>At our bookstore, we believe that the right book can ignite your imagination, 
        spark your creativity, and take you on incredible journeys without ever leaving your seat. With an extensive collection
         spanning every genre and interest, we make it easy for you to discover your next great read. Whether you're into thrilling
          mysteries, heartwarming romances, inspiring non-fiction, or timeless classics, our curated selection ensures there's something
           for every kind of reader. Dive into our diverse array of books and find the stories that speak to you, captivate your mind, 
           and stay with you long after you've turned the last page. Start your literary adventure
         with us today and uncover your favorite book in our carefully curated collection. Happy reading!</p>
         <div className='flex flex-col sm:flex-row justify-between gap-6 md:w-3/4 my-14'>
            <div>
                <h3 className='teext-3xl font-bold'>800+</h3>
                <p className='text-base'>Book Listing</p>
            </div>
            <div>
                <h3 className='teext-3xl font-bold'>550+</h3>
                <p className='text-base'>Register Users</p>
            </div>
            <div>
                <h3 className='teext-3xl font-bold'>1200+</h3>
                <p className='text-base'>PDF Downloads</p>
            </div>
         </div>
           <Link to="/shop" className='mt-12 block'><button className='bg-blue-700 text-white font-semibold px-5 py-2 rounded hover:bg-black
           transition-all duration-300'>Explore More</button></Link>
     </div>
    </div>
  )
}

export default FavBook
