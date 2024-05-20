import React from 'react'
import Navbar from '../components/Navbar'
import book_list from "../../public/list.json"

import Book from '../components/Book'
import Footer from '../components/Footer'

const Books = () => {
  return (
    <>
    <Navbar />
      <Book/>
      <Footer/>
    </>
  )
}

export default Books
