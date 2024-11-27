import { useState } from 'react'
import { Search } from 'lucide-react';


interface SearchComponentProps {
  onSearch: (searchTerm: string) => void
}

export default function SearchComponent({ onSearch }: SearchComponentProps) {
  const [searchTerm, setSearchTerm] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSearch(searchTerm)
  }

  return (
    <form onSubmit={handleSubmit} className="flex space-x-2">
      <button className='bg-purple-800 hover:bg-blue-600 px-3 py-1 rounded'>
      <Search size={18} />
      </button>
      <input
        type="text"
        placeholder="جستجو کنید "
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="flex-grow bg-gray-700 text-white px-4 py-2 rounded focus:outline-none text-xs text-right"
      />
    </form>
  )
}

