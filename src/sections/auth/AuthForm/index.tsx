'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import toast from 'react-hot-toast'
import { useMutation } from '@tanstack/react-query'


// assets
import AuthVector from '@/public/assets/svg/undraw_authentication_tbfc.svg';

// API
import { loginByOTPRequest, validateOTPRequest } from '@/API/auth'

// Components
import LoadingButton from '@/components/LoadingButton';

// utils
import { storeAuthToken, toPersianDigits } from '@/utils/Helpers'




export default function AuthComponent() {
  const [mobileNumber, setMobileNumber] = useState('');
  const [userId, setuserId] = useState(null);
  const [name, setName] = useState('')
  const [family, setFamily] = useState('')
  const [otp, setOtp] = useState('');
  const [timer, setTimer] = useState(120); // 2-minute timer
  const [canResend, setCanResend] = useState(false);
  const [showOtp, setShowOtp] = useState(false);

  const router = useRouter();

  useEffect(() => {
    let interval: string | number | NodeJS.Timeout | undefined;
    if (showOtp && timer > 0) {
      setCanResend(false); // Disable resend initially
      interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
    } else if (timer === 0) {
      setCanResend(true); // Enable resend when timer reaches 0
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [showOtp, timer]);


  const loginByOTPMutation = useMutation({
    mutationFn: loginByOTPRequest,
    onSuccess: (response) => {

      if (response?.user) {
        console.log('response', response);
        setuserId(response.user.id);
        setShowOtp(true);
        toast.success('کد ارسال شد');
      } else {
        toast.error('خطا در ارسال کد');
      }

    },
  });


  // When we Send The Login Request to The API
  // Then we will send a code to user mobile number 
  // then user, give us the code and we will send it to the API
  const validateOTPMutation = useMutation({
    mutationFn: validateOTPRequest,
    onSuccess: (response) => {

      if (!response) {
        toast.error('مشکلی پیش آمده است');
        return false;
      }

      if (response.code === 401) {
        toast.error('کد اشتباه است');
        return false;
      }

      if (!response?.tokens) {

        // if ()
        toast.error('مشکلی پیش آمده است');
        toast.error('توکن از سمت سرور وجود ندارد');

        return false;
      }


      console.log({ response });

      // navigate User
      // save token in storage
      storeAuthToken(response.tokens, response.userDoc);
      router.push('/');

      return true;

    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!showOtp) {
      // TODO: Implement OTP sending logic
      // Send OTP Login Logic
      loginByOTPMutation.mutate({ mobile: mobileNumber, name, family });

    } else {
      // TODO: Implement OTP verification logic

      if (!userId || !otp) {
        toast.error('خطا در ارسال کد');
        return false;
      }
      validateOTPMutation.mutate({ userId, otpCode: otp });
      toast.success('کد تایید شد');

    }
    return;
  }


  const handleSendOtp = () => {
    setShowOtp(true);
    setTimer(120); // Reset timer when sending OTP
  };

  const handleResendOtp = () => {
    if (canResend) {
      console.log("Resending OTP...");
      setTimer(120); // Reset timer on resend
      setCanResend(false);
    }
  };


  return (
    <div className="flex w-full h-screen bg-gray-900 text-white">
      {/* Image half */}
      <div className="w-1/2 relative hidden md:block ">
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
      <div className=" w-full md:w-1/2 flex items-center justify-center p-8">
        <div className="w-full max-w-md space-y-8">
          <div className="text-center">
            <h2 className="mt-6 text-sm md:text-xl font-extrabold text-white">
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
                  className="bg-gray-800 text-xs md:text-sm border-gray-700 mb-4 text-white placeholder-gray-400 px-4 py-2 rounded-md"
                />
                <input
                  type="text"
                  placeholder="نام خود را وارد کنید "
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="bg-gray-800 text-xs md:text-sm border-gray-700 mb-4 text-white placeholder-gray-400 px-4 py-2 rounded-md"
                />
                <input
                  type="text"
                  placeholder=" فامیلی خود را وارد کنید "
                  value={family}
                  onChange={(e) => setFamily(e.target.value)}
                  required
                  className="bg-gray-800 text-xs md:text-sm border-gray-700 mb-4 text-white placeholder-gray-400 px-4 py-2 rounded-md"
                />
              </>
            ) : (
              <div>
                <p className='text-xs text-center mt-1 mb-3 text-gray-300'> شماره موبایل شما {mobileNumber && toPersianDigits(mobileNumber) } </p>
                <input
                  type="text"
                  placeholder=""
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  required
                  className="bg-gray-800 border-gray-700 text-white mb-4 placeholder-gray-400 px-4 py-1 rounded-md"
                />


                {!canResend && (
                  <p className="mt-2 text-gray-600 text-xs">
                    ارسال مجدد کد به شماره موبایل شما بعد از {timer} ثانیه
                  </p>
                )}
                <button
                  onClick={handleResendOtp}
                  disabled={!canResend}
                  className={`mt-2 text-center text-xs w-full text-blue-500 ${!canResend ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
                    }`}
                >
                  ارسال مجدد کد
                </button>
              </div>
            )}
            <LoadingButton isLoading={(loginByOTPMutation.isPending || validateOTPMutation.isPending)} className='w-52 md:w-72 text-xs md:text-sm py-2 mt-4 ' type="submit"  >
              {showOtp ? 'تایید کد' : 'وارد شوید'}

            </LoadingButton>
          </form>
        </div>
      </div>
    </div>
  )
}

