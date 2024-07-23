import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import BookCards from '../components/BookCards';
const OtherBooks = () => {
    const[books,setBooks]=useState([]);
    const [error, setError] = useState(null); //new

    useEffect(()=>{
    fetch("http://localhost:5000/all-books").then(res=>res.json()).then(data=>setBooks(data.slice(0,10)))
    },[])
  return (
    <div>
      <BookCards books={books} headline="Other Books"/>
    </div>
  )
}

export default OtherBooks
