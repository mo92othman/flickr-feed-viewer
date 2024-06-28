import React from 'react'
import Image from 'next/image'
import SearchBar from './SearchBar';
import ThemeSwitch from './ThemeSwitch';

export default function Header() {
  return (
    <header className="bg-sky-500 text-white p-4  flex-col lg:flex-row flex justify-between items-center px-8 dark:bg-gray-900 border-b-2">
    <div className="flex items-center pb-8 lg:pb-0"> 
      <Image
        src="/assets/logo.svg"
        width={50}
        height={50}
        alt="logo"
      />
      <h1 className="text-2xl ml-2">Flickr Feed Viewer</h1> 
    </div>
    <div className="flex justify-between items-center">
    <ThemeSwitch />
    <SearchBar />
    </div>
  </header>
  )
}
