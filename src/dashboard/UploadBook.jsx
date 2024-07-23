import React from 'react'
import { useLoaderData, useParams } from 'react-router-dom'
import { useState  } from 'react';
import { Label } from 'flowbite-react';
import { Button,TextInput,Select,Textarea } from 'flowbite-react';


const UploadBook = () => {
  const {id}= useParams();
//   const{ bookTitle, authorName,imageURL,category,bookDescription,bookPdfURL}=useLoaderData();
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
const handleBookSubmit=(event)=>{
event.preventDefault();
const form=event.target;

const bookTitle=form.bookTitle.value;
const authorName=form.authorName.value;
const imageURL=form.imageURL.value;
const category=form.categoryName.value;
const bookDescription= form.bookDescription.value;
const bookPdfURL = form.bookPdfURL.value;

const bookObj={
    bookTitle,
    authorName,
    imageURL,
    category,
    bookDescription,
    bookPdfURL
}
console.log(bookObj)

fetch("http://localhost:5000/upload-book",{
    method:"POST",
    headers:{
        "Content-type":"application/json",
    },
    body:JSON.stringify(bookObj)
}).then(res => res.json()).then(data =>{
    alert("Book Uploaded Successfully!!!")
    form.reset();
})
}


return (
<div className='px-4 my-12'>
    <h2 className='mb-8 text-3xl font-bold'>Upload A Book</h2>

    <form onSubmit={handleBookSubmit} className="flex lg:w-[1180px] flex-col flex-wrap gap-4">
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
      required />
  </div>
  <Button type="submit" className='mt-5 bg-gray-700 justify-center'>Upload Book</Button>
</form>
</div>
)
}

export default UploadBook
