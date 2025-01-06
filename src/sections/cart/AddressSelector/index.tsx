import { useState } from "react"
import { Plus, Minus, Trash2, ChevronDown, X } from 'lucide-react'


interface Address {
  id: number
  name: string
  street: string
  city: string
  state: string
  zip: string
}
const AddressSelector: React.FC<{
  addresses: Address[]
  selectedAddress: Address | null
  onSelectAddress: (address: Address) => void
}> = ({ addresses, selectedAddress, onSelectAddress }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="flex flex-col justify-center">
      <div className="flex items-center align-middle self-end space-x-2 text-purple-800 cursor-pointer hover:text-blue-600 transition-colors duration-200">
      <span className="font-semibold text-xs"> آدرس جدید</span>
        <div className="w-5 h-5 bg-purple-800 rounded-full">
        <Plus color="white" className="w-5 h-5 p-[2px]" />
        </div>
      </div>


      <div dir="rtl" className="relative mt-3">
      
      <button
      dir="rtl"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-3 text-right bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        
        {selectedAddress ? (
          <div className="text-xs text-gray-600 leading-5">
            <p className="font-semibold text-sm text-gray-900 mb-1">{selectedAddress.name}</p>
            <p>{selectedAddress.city}</p>
            <p className="pl-4">{selectedAddress.street}</p>
            
            <p className="text-[10px] text-gray-400">{`کد پستی: ${selectedAddress.zip}`}</p>
          </div>
        ) : (
          <p className="text-gray-500">انتخاب آدرس</p>
        )}
        <ChevronDown className="absolute left-3 top-1/2 transform -translate-y-1/2" />
      </button>
      {isOpen && (
        <div className="absolute z-10 w-full mt-2 bg-white border border-gray-300 rounded-lg shadow-lg">
          {addresses.map((address) => (
            <button
              key={address.id}
              onClick={() => {
                onSelectAddress(address)
                setIsOpen(false)
              }}
              className="w-full p-3 text-left hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
            >
              <p className="font-semibold">{address.name}</p>
              <p className="text-sm text-gray-600">{address.street}</p>
              <p className="text-sm text-gray-600">{`${address.city}, ${address.state} ${address.zip}`}</p>
            </button>
          ))}
        </div>
      )}
    </div>
    </div>
    
  )
}

export default AddressSelector;