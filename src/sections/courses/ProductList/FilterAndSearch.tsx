import { useState } from 'react'
import SearchComponent from './SearchComponent'
import TagSelector from './TagSelector'
import PriceRangeSlider from './PriceRangeSlider'
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/Collapsible"
import { ChevronDown } from 'lucide-react'

interface FilterAndSearchProps {
  onFilter: (searchTerm: string, selectedTags: string[], priceRange: [number, number]) => void
}

export default function FilterAndSearch({ onFilter }: FilterAndSearchProps) {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedTags, setSelectedTags] = useState<string[]>([])
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 100])

  const handleSearch = (term: string) => {
    setSearchTerm(term)
    onFilter(term, selectedTags, priceRange)
  }

  const handleTagSelect = (tags: string[]) => {
    setSelectedTags(tags)
    onFilter(searchTerm, tags, priceRange)
  }

  const handlePriceRangeChange = (range: [number, number]) => {
    setPriceRange(range)
    onFilter(searchTerm, selectedTags, range)
  }

  return (
    <div className="w-full card">
      <div className="p-4 space-y-4 card_content">
        <SearchComponent onSearch={handleSearch} />
        
        <Collapsible>
          <CollapsibleTrigger className="flex items-center justify-between w-full p-2 font-medium text-left border rounded-md hover:bg-gray-100">
            Product Categories
            <ChevronDown className="w-4 h-4" />
          </CollapsibleTrigger>
          <CollapsibleContent className="mt-2">
            <TagSelector onSelectTags={handleTagSelect} />
          </CollapsibleContent>
        </Collapsible>

        <Collapsible>
          <CollapsibleTrigger className="flex items-center justify-between w-full p-2 font-medium text-left border rounded-md hover:bg-gray-100">
            Price Range
            <ChevronDown className="w-4 h-4" />
          </CollapsibleTrigger>
          <CollapsibleContent className="mt-2">
            <PriceRangeSlider onRangeChange={handlePriceRangeChange} />
          </CollapsibleContent>
        </Collapsible>
      </div>
    </div>
  )
}

