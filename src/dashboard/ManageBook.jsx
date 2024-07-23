import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
const ManageBook = () => {
  const [allBooks, setAllBooks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/all-books")
      .then(res => res.json())
      .then(data => setAllBooks(data));
  }, []);

  const handleDelete=(id) =>{
    console.log(id);
    fetch(`http://localhost:5000/book/${id}`,{
      method:"DELETE",
    }).then(res=>res.json()).then(data=> {
      alert("Book is deleted successfully!")
      //setAllBooks(data);
    })
  }

  return (
    <div className='px-4 my-12'>
      <h2 className='mb-8 text-3xl font-bold'>Manage Your Books</h2>

      <div className='overflow-x-auto'>
        <table className='min-w-full divide-y divide-gray-200 dark:divide-gray-700 table-auto'>
          <thead className='bg-gray-50 dark:bg-gray-800'>
            <tr>
              <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                No.
              </th>
              <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                Book Name
              </th>
              <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                Author Name
              </th>
              <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                Category
              </th>
              <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                Price
              </th>
              <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                <span>Edit or Manage</span>
              </th>
            </tr>
          </thead>
          <tbody className='bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700'>
            {allBooks.map((book, index) => (
              <tr className='hover:bg-gray-100 dark:hover:bg-gray-700' key={book._id}>
                <td className='px-6 py-4 whitespace-nowrap text-gray-900 dark:text-white'>
                  {index + 1}
                </td>
                <td className='px-6 py-4 whitespace-nowrap text-gray-900 dark:text-white'>
                  {book.bookTitle}
                </td>
                <td className='px-6 py-4 whitespace-nowrap text-gray-500 dark:text-gray-400'>
                  {book.authorName}
                </td>
                <td className='px-6 py-4 whitespace-nowrap text-gray-500 dark:text-gray-400'>
                  {book.category}
                </td>
                <td className='px-6 py-4 whitespace-nowrap text-gray-500 dark:text-gray-400'>
                  $10.00
                </td>
                <td className='px-6 py-4 text-right'>
                  <Link href="#" className="font-medium text-cyan-600 hover:underline dark:text-cyan-500 mr-5"
                  to={`/admin/dashboard/edit-books/${book._id}`}>
                    Edit
                  </Link>
                  <button onClick={()=> handleDelete(book._id)} className='bg-red-600 px-4 py-1 font-semibold text-white rounded-sm hover:bg-sky-600'>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ManageBook;
