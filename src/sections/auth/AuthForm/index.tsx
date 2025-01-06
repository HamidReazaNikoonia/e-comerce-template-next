'use client'
'use client'

import { useState } from 'react'
import Image from 'next/image'


// assets
import AuthVector from '@/public/assets/svg/undraw_authentication_tbfc.svg';


export default function AuthComponent() {
  const [mobileNumber, setMobileNumber] = useState('')
  const [name, setName] = useState('')
  const [family, setFamily] = useState('')
  const [otp, setOtp] = useState('')
  const [showOtp, setShowOtp] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!showOtp) {
      // TODO: Implement OTP sending logic
      setShowOtp(true)
    } else {
      // TODO: Implement OTP verification logic
      console.log('Verifying OTP:', otp)
    }
  }

  return (
    <div className="flex h-screen bg-gray-900 text-white">
      {/* Image half */}
      <div className="w-1/2 relative">
        <div className='flex justify-center items-center mt-16'>
        <Image
          src={AuthVector}
          alt="Authentication background"
          width={400}
          height={500}
        
        />
        </div>
      </div>

      {/* Form half */}
      <div className="w-1/2 flex items-center justify-center p-8">
        <div className="w-full max-w-md space-y-8">
          <div className="text-center">
            <h2 className="mt-6 text-xl font-extrabold text-white">
              {showOtp ? 'کد را وارد کنید' : 'با شماره موبایل خود وارد شوید'}
            </h2>
          </div>
          <form dir='rtl' className="flex flex-col justify-center items-center mt-8 text-right" onSubmit={handleSubmit}>
            {!showOtp ? (
              <>
                <input
                  type="tel"
                  autoFocus
                  placeholder=" شماره موبایل "
                  value={mobileNumber}
                  onChange={(e) => setMobileNumber(e.target.value)}
                  required
                  className="bg-gray-800 text-sm border-gray-700 mb-4 text-white placeholder-gray-400 px-4 py-2 rounded-md"
                />
                <input
                  type="text"
                  placeholder="نام خود را وارد کنید "
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="bg-gray-800 text-sm border-gray-700 mb-4 text-white placeholder-gray-400 px-4 py-2 rounded-md"
                />
                <input
                  type="text"
                  placeholder=" فامیلی خود را وارد کنید "
                  value={family}
                  onChange={(e) => setFamily(e.target.value)}
                  required
                  className="bg-gray-800 text-sm border-gray-700 mb-4 text-white placeholder-gray-400 px-4 py-2 rounded-md"
                />
              </>
            ) : (
              <input
                type="text"
                placeholder=""
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                required
                className="bg-gray-800 border-gray-700 text-white mb-4 placeholder-gray-400 px-4 py-1 rounded-md"
              />
            )}
            <button 
              type="submit" 
              className=" w-72 bg-blue-600 hover:bg-blue-700 text-white py-2 mt-10 rounded-md"
            >
              {showOtp ? 'Verify OTP' : 'وارد شوید'}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

