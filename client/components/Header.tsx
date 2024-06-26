import React from 'react'
import Image from 'next/image'
import SearchBar from './SearchBar';

export default function Header() {
  return (
    <header className="bg-blue-500 text-white p-4 flex justify-between items-center">
    <div className="flex items-center"> 
      <Image
        src="/assets/logo.png"
        width={50}
        height={50}
        alt="logo"
      />
      <h1 className="text-2xl ml-2">Flickr Feed Viewer</h1> 
    </div>
    <SearchBar />
  </header>
  )
}
