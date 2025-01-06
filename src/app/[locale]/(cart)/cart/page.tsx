'use client'

import React, { useState } from 'react'
import { Plus, Minus, Trash2, ChevronDown, X } from 'lucide-react'
import Image from 'next/image'

const initialCartItems = [
  { id: 1, name: 'Wireless Earbuds', price: 79.99, quantity: 2, image: '/placeholder.svg?height=80&width=80' },
  { id: 2, name: 'Smart Watch', price: 129.99, quantity: 1, image: '/placeholder.svg?height=80&width=80' },
  { id: 2, name: 'Smart Watch', price: 129.99, quantity: 1, image: '/placeholder.svg?height=80&width=80' },
  { id: 2, name: 'Smart Watch', price: 129.99, quantity: 1, image: '/placeholder.svg?height=80&width=80' },
  { id: 2, name: 'Smart Watch', price: 129.99, quantity: 1, image: '/placeholder.svg?height=80&width=80' },
  { id: 2, name: 'Smart Watch', price: 129.99, quantity: 1, image: '/placeholder.svg?height=80&width=80' },
  { id: 2, name: 'Smart Watch', price: 129.99, quantity: 1, image: '/placeholder.svg?height=80&width=80' },
  { id: 2, name: 'Smart Watch', price: 129.99, quantity: 1, image: '/placeholder.svg?height=80&width=80' },
  { id: 2, name: 'Smart Watch', price: 129.99, quantity: 1, image: '/placeholder.svg?height=80&width=80' },
  { id: 2, name: 'Smart Watch', price: 129.99, quantity: 1, image: '/placeholder.svg?height=80&width=80' },
  { id: 2, name: 'Smart Watch', price: 129.99, quantity: 1, image: '/placeholder.svg?height=80&width=80' },
  { id: 2, name: 'Smart Watch', price: 129.99, quantity: 1, image: '/placeholder.svg?height=80&width=80' },
  { id: 2, name: 'Smart Watch', price: 129.99, quantity: 1, image: '/placeholder.svg?height=80&width=80' },
  { id: 2, name: 'Smart Watch', price: 129.99, quantity: 1, image: '/placeholder.svg?height=80&width=80' },
  
  { id: 3, name: 'Portable Charger', price: 39.99, quantity: 3, image: '/placeholder.svg?height=80&width=80' },
]

const addresses = [
  { id: 1, name: 'Home', street: '123 Main St', city: 'Anytown', state: 'CA', zip: '12345' },
  { id: 2, name: 'Work', street: '456 Office Blvd', city: 'Workville', state: 'NY', zip: '67890' },
]

interface CartItem {
  id: number
  name: string
  price: number
  quantity: number
  image: string
}

interface Address {
  id: number
  name: string
  street: string
  city: string
  state: string
  zip: string
}

const CartItemComponent: React.FC<{
  item: CartItem
  onUpdateQuantity: (id: number, newQuantity: number) => void
  onRemove: (id: number) => void
}> = ({ item, onUpdateQuantity, onRemove }) => {
  return (
    <div className="flex items-center space-x-4 py-6 border-b border-gray-200 last:border-b-0">
      <div className="flex-shrink-0 w-20 h-20 bg-gray-200 rounded-lg overflow-hidden">
        <Image src={item.image} alt={item.name} width={80} height={80} className="object-cover" />
      </div>
      <div className="flex-grow">
        <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>
        <p className="text-gray-600">${item.price.toFixed(2)}</p>
      </div>
      <div className="flex items-center space-x-2">
        <button
          onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
          disabled={item.quantity <= 1}
          className="p-1 rounded-full bg-gray-200 hover:bg-gray-300 disabled:opacity-50 transition-colors duration-200"
          aria-label="Decrease quantity"
        >
          <Minus className="w-4 h-4 text-gray-600" />
        </button>
        <span className="font-semibold text-gray-800 w-8 text-center">{item.quantity}</span>
        <button
          onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
          className="p-1 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors duration-200"
          aria-label="Increase quantity"
        >
          <Plus className="w-4 h-4 text-gray-600" />
        </button>
      </div>
      <button
        onClick={() => onRemove(item.id)}
        className="p-2 rounded-full bg-red-100 hover:bg-red-200 transition-colors duration-200"
        aria-label="Remove item"
      >
        <Trash2 className="w-5 h-5 text-red-500" />
      </button>
    </div>
  )
}

const AddressSelector: React.FC<{
  addresses: Address[]
  selectedAddress: Address | null
  onSelectAddress: (address: Address) => void
}> = ({ addresses, selectedAddress, onSelectAddress }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-3 text-left bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        {selectedAddress ? (
          <div>
            <p className="font-semibold">{selectedAddress.name}</p>
            <p className="text-sm text-gray-600">{selectedAddress.street}</p>
            <p className="text-sm text-gray-600">{`${selectedAddress.city}, ${selectedAddress.state} ${selectedAddress.zip}`}</p>
          </div>
        ) : (
          <p className="text-gray-500">Select an address</p>
        )}
        <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2" />
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
  )
}

export default function ShoppingCart() {
  const [cartItems, setCartItems] = useState<CartItem[]>(initialCartItems)
  const [selectedAddress, setSelectedAddress] = useState<Address | null>(null)

  const updateQuantity = (id: number, newQuantity: number) => {
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === id ? { ...item, quantity: Math.max(newQuantity, 0) } : item
      )
    )
  }

  const removeItem = (id: number) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== id))
  }

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  )
  const tax = subtotal * 0.08 // Assuming 8% tax rate
  const shippingFee = 5.99
  const total = subtotal + tax + shippingFee

  return (
    <div className="w-full bg-gray-100 min-h-screen">
      <div className="max-w-7xl mx-auto p-6">
        {/* <h2 dir='rtl' className="text-3xl text-right font-bold mb-6 text-gray-800">
        <X size={34} />
        </h2> */}
        {cartItems.length === 0 ? (
          <div className="text-center py-12 bg-white rounded-xl shadow-lg">
            <p className="text-xl text-gray-500 mb-4">Your cart is empty.</p>
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200">
              Continue Shopping
            </button>
          </div>
        ) : (
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-2/3 bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Cart Items</h3>
              <div className="space-y-4">
                {cartItems.map(item => (
                  <CartItemComponent
                    key={item.id}
                    item={item}
                    onUpdateQuantity={updateQuantity}
                    onRemove={removeItem}
                  />
                ))}
              </div>
            </div>
            <div className="lg:w-1/3 space-y-6">
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-semibold mb-4">Delivery Address</h3>
                <AddressSelector
                  addresses={addresses}
                  selectedAddress={selectedAddress}
                  onSelectAddress={setSelectedAddress}
                />
              </div>
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-semibold mb-4">Order Summary</h3>
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Tax</span>
                    <span>${tax.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Shipping Fee</span>
                    <span>${shippingFee.toFixed(2)}</span>
                  </div>
                  <div className="border-t pt-2 mt-2">
                    <div className="flex justify-between font-semibold text-lg">
                      <span>Total</span>
                      <span>${total.toFixed(2)}</span>
                    </div>
                  </div>
                </div>
                <button 
                  className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-4 rounded-lg transition-colors duration-200"
                  disabled={!selectedAddress}
                >
                  Proceed to Checkout
                </button>
                {!selectedAddress && (
                  <p className="text-sm text-red-500 mt-2">Please select a delivery address to proceed.</p>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

