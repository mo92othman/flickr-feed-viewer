import React from 'react'
import Image from 'next/image'
import Link from 'next/link';

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
    <Link href="/search"><button className="bg-white hover:bg-pink-600 text-blue-500 py-2 px-4 rounded">
      Search
    </button></Link>
    
  </header>
  )
}
