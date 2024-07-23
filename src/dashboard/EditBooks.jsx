import React, { useState } from 'react'
import { Button, Checkbox, Label, Select, Textarea, TextInput } from "flowbite-react";
import { useParams } from 'react-router-dom';
import { useLoaderData } from 'react-router-dom';

const EditBooks = () => {
  const {id}=useParams();
  const{ bookTitle, authorName,imageURL,category,bookDescription,bookPdfURL}=useLoaderData();

  console.log(id)
    const bookCategories=[
        "Mystery Thriller",
        "Horror",
        "Thriller",
        "Fiction",
        "Non-Fiction",
        "Sports",
        "Fantasy",
        "Science Fiction",
        "Programming",
        "History",
        "Romantic",
        "Business",
        "Comic",
        "Education",
        "Travel",
        "Religious"

    ]
    const[selectedBookCategory,setselectedBookCategory]=useState(bookCategories[0]);
    const handleChangeSelectedValue=(event)=>{
        setselectedBookCategory(event.target.value);

    }
   const handleUpdate=(event)=>{
    event.preventDefault();
    const form=event.target;

    const bookTitle=form.bookTitle.value;
    const authorName=form.authorName.value;
    const imageURL=form.imageURL.value;
    const category=form.categoryName.value;
    const bookDescription= form.bookDescription.value;
    const bookPdfURL = form.bookPdfURL.value;
    
    const updatedbookObj={
        bookTitle,
        authorName,
        imageURL,
        category,
        bookDescription,
        bookPdfURL
    }
    console.log(updatedbookObj)
    fetch(`http://localhost:5000/book/${id}`,{
      method:"PATCH",
      headers:{
          "Content-Type":"application/json"
      },
      body:JSON.stringify(updatedbookObj)
  }).then(res =>res.json()).then(data=>{
      alert("Book is updated successfully!!")
      form.reset();
  })

}
    
  return (
    <div className='px-4 my-12'>
        <h2 className='mb-8 text-3xl font-bold'>Update The Book Data</h2>

        <form onSubmit={handleUpdate} className="flex lg:w-[1180px] flex-col flex-wrap gap-4">
        <div className='flex gap-8'>
        <div className='lg:w-1/2'>
        <div className="mb-2 block">
          <Label
           htmlFor="bookTitle"
            value="Book Title" />
        </div>
        <TextInput
         id="bookTitle"
         name="bookTitle" 
         type="text"
        placeholder="Book name"
        defaultValue={bookTitle}
         required />
      </div>
      <div className='lg:w-1/2'>
        <div className="mb-2 block">
          <Label
           htmlFor="authorName"
            value="Author Name" />
        </div>
        <TextInput
         id="authorName"
         name="authorName" 
         type="text"
        placeholder="Author Name"
        defaultValue={authorName}
         required />
      </div>

        </div>
        <div className='flex gap-8'>
        <div className='lg:w-1/2'>
        <div className="mb-2 block">
          <Label
           htmlFor="imageURL"
            value="Book Image URL" />
        </div>
        <TextInput
         id="imageURL"
         name="imageURL" 
         type="text"
        placeholder="Book Image URL"
        defaultValue={imageURL}
         required />
      </div>
      <div className='lg:w-1/2'>
      <div className="mb-2 block">
          <Label
           htmlFor="inputstate"
            value="Book Category" />
        </div>
           <Select id="inputstate" name="categoryName" className='w-full rounded' value={selectedBookCategory} onChange={handleChangeSelectedValue}>
             {
                bookCategories.map((option)=><option key={option} value={option}>{option}</option>)
             }
           </Select>
        </div>
        </div>
        <div className="mb-2 block">
          <Label 
          htmlFor="bookDescription"
           value="Book Description" />
           <Textarea 
            id="bookDescription" 
            name="bookDescription"
            placeholder="write your book description...." 
            required
            className='w-full'
            defaultValue={bookDescription}
             rows={6} />
            </div>
            <div>
            <div className="mb-2 block">
          <Label
           htmlFor="bookPdfURL"
            value="Book Pdf URL" />
        </div>
        <TextInput 
        id="bookPdfURL"
        name="bookPdfURL"
         type="text"
          placeholder="book pdf url" 
          defaultValue={bookPdfURL}
          required />
      </div>
      <Button type="submit" className='mt-5 bg-gray-700 justify-center'>Update Book </Button>
    </form>
    </div>
  )
}

export default EditBooks
