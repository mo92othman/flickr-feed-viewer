"use client"
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image'

export default function SearchBar() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <div className="flex items-center border border-gray-300 rounded-full overflow-hidden px-2 ml-6">
    <form onSubmit={handleSubmit} className="flex items-center pl-4">
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search..."
        className="border-none bg-transparent p-2 focus:outline-none placeholder-white"
      />
    </form>
    <div className="relative pr-4">
      <Image
        src="/assets/search-icon.svg"
        width={20}
        height={20}
        alt="Search Icon"
        onClick={handleSubmit}
        className="cursor-pointer transition-transform duration-200 ease-in-out transform hover:scale-110"
      />
    </div>
  </div>
  );
}
