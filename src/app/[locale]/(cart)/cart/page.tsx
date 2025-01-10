'use client'

import React, { useEffect, useState } from 'react'
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import Image from 'next/image'
import { Plus, Minus, Trash2, ChevronDown, X } from 'lucide-react'
import AddressSelector from '@/sections/cart/AddressSelector';
// utils

// components
import LoadingSpinner from '@/components/LoadingSpiner';
import CustomImage from "@/components/CustomImage";

import { filterPriceNumber } from '@/utils/Helpers';
import useResponsiveEvent from '@/hooks/useResponsiveEvent';
import clsx from 'clsx';

// assets
import emptyCartSvg from '@/public/assets/svg/empty_cart.svg';


// API
import { getUserCartRequest, updateUserCartRequest, deleteProductInCartRequest } from '@/API/cart';
import Link from 'next/link';


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
  { id: 1, name: 'خانه', street: 'پردیسان, استقلال ۲ - بلوک حضرت الخدیجه - واحد ۲ پلاک ۶ منزل آقای نیکونیا ی عزیز', city: 'قم', state: '', zip: '12345' },
  { id: 2, name: 'Work', street: '456 Office Blvd', city: 'Workville', state: 'NY', zip: '67890' },
]

interface CartItem {
  _id: string;
  name: string
  price: number
  quantity: number
  image: string
}

interface Address {
  _id: number
  name: string
  street: string
  city: string
  state: string
  zip: string
}

const CartItemComponent: React.FC<{
  item: CartItem,
  quantityLoading?: boolean;
  incrementButtonLoading?: boolean,
  decrementButtonLoading?: boolean,
  onUpdateQuantity: (_id: string, newQuantity: number) => void
  onRemove: (id: string) => void
}> = ({ item, onUpdateQuantity, onRemove, incrementButtonLoading, decrementButtonLoading, quantityLoading }) => {
  
  return (
    <div className="flex items-center space-x-4 py-6 border-b border-gray-200 last:border-b-0">
      <div className="flex-shrink-0 w-20 h-20 bg-gray-200 rounded-lg overflow-hidden">
        <CustomImage fileName={item?.thumbnail?.file_name} className="object-cover" src={''} alt={''} />
      </div>
      <div className="flex-grow leading-10">
        <h3 className="text-sm font-semibold text-gray-800">{item.title}</h3>
        <div className="text-gray-600">
          <span>
            <div dir='rtl' className="flex items-center justify-end text-left">
              {filterPriceNumber(item.price)}<span className="text-sm mr-1">تومان</span>
            </div>
          </span>
        </div>
      </div>

      {!!item.productId && (
        <>
          <div className="flex items-center space-x-2">
            <button
              onClick={() => onUpdateQuantity(item?.productId._id, item.quantity - 1)}
              disabled={(item.quantity <= 1 || quantityLoading)}
              className="p-1 rounded-full bg-gray-200 hover:bg-gray-300 disabled:opacity-50 transition-colors duration-200"
              aria-label="Decrease quantity"
            >
            {(decrementButtonLoading || quantityLoading) ? (<div className="animate-spin rounded-full h-4 w-4 border-b-2 border-gray-900"></div>) : (
              <Minus className="w-4 h-4 text-gray-600" />
            )}
            </button>
            <span className="font-semibold text-gray-800 w-8 text-center">{item.quantity}</span>
            <button
              onClick={() => onUpdateQuantity(item?.productId._id, item.quantity + 1)}
              disabled={quantityLoading}
              className="p-1 rounded-full bg-gray-200 hover:bg-gray-300 disabled:opacity-50 transition-colors duration-200"
              aria-label="Increase quantity"
            >
               {(incrementButtonLoading || quantityLoading) ? (<div className="animate-spin rounded-full h-4 w-4 border-b-2 border-gray-900"></div>) : (
              <Plus className="w-4 h-4 text-gray-600" />
            )}
            </button>
          </div>


        </>
      )}

      <button
        onClick={() => onRemove(item._id)}
        className="p-2 rounded-full bg-red-100 hover:bg-red-200 transition-colors duration-200"
        aria-label="Remove item"
      >
        <Trash2 className="w-5 h-5 text-red-500" />
      </button>


    </div>
  )
}


export default function ShoppingCart() {
  // const [cartItems, setCartItems] = useState<CartItem[]>(initialCartItems)
  const [selectedAddress, setSelectedAddress] = useState<Address | null>(null)
  const [cartItemFiltered, setcartItemFiltered] = useState();
  const [totalPriceValue, settotalPriceValue] = useState(0);
  const [quantityChangeLoading, setquantityChangeLoading] = useState<string | null>(null)
  const [taxPrice, settaxPrice] = useState();

  const queryClient = useQueryClient();


  const isMobileScreen = useResponsiveEvent(768, 200);


  const { data, isLoading, isError, isSuccess, error } = useQuery({
    queryFn: async () => getUserCartRequest(),
    queryKey: ["cart"], //Array according to Documentation
  });


  const mutation = useMutation({
    mutationFn: updateUserCartRequest,
    onSuccess: () => {
      // @ts-expect-error
      queryClient.invalidateQueries("cart");
      setquantityChangeLoading(null);
      
    },
  });

  const deleteItemMutation = useMutation({
    mutationFn: deleteProductInCartRequest,
    onSuccess: () => {
      // @ts-expect-error
      queryClient.invalidateQueries("cart");

    },
  })



  useEffect(() => {
    if (isSuccess) {
      console.log({ kir: data });

      settotalPriceValue(data.totalPrice || 0);
      const cartItems = data.cartItem.map(item => {
        return {
          ...(item.productId && item.productId),
          ...(item.courseId && item.courseId),
          ...item
        }
      });

      setcartItemFiltered(cartItems);
      console.log({ iiii: cartItems })
    }


  }, [data, isSuccess])


  const updateQuantity = (id: string, newQuantity: number) => {
    // setCartItems(prevItems =>
    //   prevItems.map(item =>
    //     item.id === id ? { ...item, quantity: Math.max(newQuantity, 0) } : item
    //   )
    // )
    console.log({aaa: id})
    setquantityChangeLoading(id);
    mutation.mutate({productId: id, quantity: newQuantity});
  }

  const removeItem = (id: string) => {
    // setCartItems(prevItems => prevItems.filter(item => item.id !== id))
    deleteItemMutation.mutate({cartItemId: id})
  }

  // const subtotal = cartItems.reduce(
  //   (sum, item) => sum + item.price * item.quantity,
  //   0
  // )
  const tax = totalPriceValue * 0.08 // Assuming 8% tax rate
  const shippingFee = 5000
  const total = totalPriceValue + tax + shippingFee

  const isDataExist = isSuccess && data && cartItemFiltered;

  return (
    <div className="w-full bg-gray-100 min-h-screen">
      <div className="mx-auto px-4 py-8">
        {/* <h2 dir='rtl' className="text-3xl text-right font-bold mb-6 text-gray-800">
        <X size={34} />
        </h2> */}
        <div className=''>
          {isDataExist ? (
            <>
              {cartItemFiltered && cartItemFiltered.length === 0 ? (
          <div className="text-center py-32 bg-white rounded-xl shadow-lg">
            <div className='flex justify-center'>
              <Image alt="" width="200" height="200" src={emptyCartSvg} />
            </div>
            <p className="text-xl text-gray-500 mb-12 mt-6">سبد شما خالی میباشد</p>
            <Link href="/product">
            <button className="w-60 cursor-pointer  bg-purple-800 hover:bg-blue-600 text-white font-bold py-3 px-4 rounded-lg transition-colors duration-200">
              ادامه خرید
            </button>
            </Link>
          </div>
        ) : (
          <div className="flex flex-col md:flex-row gap-8 mr-0 lg:mr-8">
            <div className="lg:w-2/3 bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-md text-right font-semibold mb-4">لیست محصولات</h3>
              <div className="space-y-4">
                {isDataExist && cartItemFiltered.map(item => (
                  <CartItemComponent
                    quantityLoading={item?.productId?._id === quantityChangeLoading}
                    key={item._id}
                    item={item}
                    onUpdateQuantity={updateQuantity}
                    onRemove={removeItem}
                  />
                ))}
              </div>
            </div>

            {/* SideBar */}
            <div className={clsx("lg:w-1/3 space-y-3 right-2", !isMobileScreen && 'fixed')} >
              <div className="bg-white rounded-xl shadow-lg p-6">
                <AddressSelector
                  addresses={addresses}
                  selectedAddress={selectedAddress}
                  onSelectAddress={setSelectedAddress}
                />

              </div>
              <div className="bg-white rounded-xl shadow-lg p-6 text-right">
                <h3 className="text-md font-semibold mb-4">فاکتور</h3>
                <div className="space-y-2 mb-4 text-sm">
                  <div className="flex justify-between">
                    <span>
                      <div dir='rtl' className="flex items-center">
                        {filterPriceNumber(totalPriceValue)}<span className="text-sm mr-1">تومان</span>
                      </div>
                    </span>
                    <span className=''>جمع کل</span>
                  </div>
                  <div className="flex justify-between">
                    <span>
                      <div dir='rtl' className="flex items-center">
                        {filterPriceNumber(tax)}<span className="text-sm mr-1">تومان</span>
                      </div>
                    </span>
                    <span className=''> مالیات</span>
                  </div>
                  <div className="flex justify-between">
                    <span>
                      <div dir='rtl' className="flex items-center">
                        {filterPriceNumber(shippingFee)}<span className="text-sm mr-1">تومان</span>
                      </div>
                    </span>
                    <span className=''>هزینه ارسال</span>
                  </div>
                  <div className="border-t pt-2 mt-2">
                    <div className="flex justify-between font-semibold text-lg text-[#137f3b]">
                      <span>
                        <div dir='rtl' className="flex items-center">
                          {filterPriceNumber(total)}<span className="text-sm mr-1">تومان</span>
                        </div>
                      </span>
                      <span>جمع کل</span>
                    </div>
                  </div>
                </div>
                <div className='flex flex-col md:flex-row space-y-2 md:space-y-0 justify-between'>
                  <button
                    className=" w-full md:w-60 cursor-pointer  bg-purple-800 hover:bg-blue-600 text-white font-bold py-3 px-4 rounded-lg transition-colors duration-200"
                    disabled={!selectedAddress}
                  >
                    ادامه خرید
                  </button>
                  <button
                    className="w-full md:w-32 cursor-pointer bg-red-500 hover:bg-red-400 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-200"
                  >
                    بازگشت
                  </button>
                </div>
                {!selectedAddress && (
                  <p className="text-xs text-red-500 mt-4">
                    لطفا یک آدرس انتخاب کنید
                  </p>
                )}
              </div>
            </div>
          </div>
        )}
            </>
          ) : (
            <LoadingSpinner />
          )}
        </div>
      </div>
    </div>
  )
}

