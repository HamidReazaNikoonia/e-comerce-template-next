'use client';
import React, { useEffect, useState, useRef } from 'react';
import { Search, SlidersHorizontal } from 'lucide-react';

import {
  DatePicker,
  DateTimePicker,
  DateRangePicker,
  DateTimeRangePicker
} from "react-advance-jalaali-datepicker";

export default function CourseListFilter() {

  const [showModal, setShowModal] = useState(false);
  const [selectedFilterDateFrom, setselectedFilterDateFrom] = useState();
  const [selectedFilterDateTo, setselectedFilterDateTo] = useState();



  const changeDataPickerFrom = (unix, formatted) => {
    setselectedFilterDateFrom(formatted)
    console.log(unix); // returns timestamp of the selected value, for example.
    console.log(formatted);
  }


  const changeDataPickerTo = (unix, formatted) => {
    setselectedFilterDateTo(formatted)
    console.log(unix); // returns timestamp of the selected value, for example.
    console.log(formatted);
  }


  // useEffect(() => {
  // setShowModal(isOpen)


  // }, [isOpen])


  // if (!showModal) return null;
  return (

    <>

      <button className='flex hover:opacity-60' onClick={() => setShowModal(true)}>
        <SlidersHorizontal />
        <span className='ml-4'> فیلتر کنید </span>
      </button>

      {showModal && (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div
                className="border-0 rounded-lg shadow-lg relative flex  w-full bg-[#1f2937e0] outline-none focus:outline-none">

                <>
                  <div className="m-10 w-screen max-w-screen-md">

                    <div className="flex flex-col">
                      <div className="rounded-xl ">
                        <form className="">
                          <div
                            className="relative mb-10 w-full flex  items-center justify-between rounded-md">
                            <input type="name" name="search"
                              className="h-12 w-full cursor-text rounded-md border border-gray-500 bg-gray-700 py-4 px-4 text-sm shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 text-right"
                              placeholder="عنوان جستجو" />
                            <Search color='gray' className='ml-4' />
                          </div>

                          <div
                            className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 text-right">
                            <div className="flex flex-col">
                              <label htmlFor="course_type"
                                className="text-xs mb-1 font-medium text-stone-100">دسته بندی</label>

                              <select id="course_type"
                                className="text-right text-xs mt-2 block w-full cursor-pointer rounded-md border border-gray-500 bg-gray-700 px-4 py-2 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50">
                                <option>همه</option>
                                <option>آنلاین</option>
                                <option>حضوری</option>
                              </select>
                            </div>

                            <div className="flex flex-col">
                              <label htmlFor="course_subject"
                                className="text-xs mb-1 font-medium text-stone-100">موضوع</label>

                              <select id="course_subject"
                                className="text-right text-xs mt-2 block w-full cursor-pointer rounded-md border border-gray-500 bg-gray-700 px-4 py-2 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50">
                                <option>هنری</option>
                                <option>آموزشی</option>
                                <option>فیلم سازی</option>
                              </select>
                            </div>



                            {/* <div className="flex flex-col">
                              <label htmlFor="status"
                                className="text-sm font-medium text-stone-600">Status</label>

                              <select id="status"
                                className="mt-2 block w-full cursor-pointer rounded-md border border-gray-100 bg-gray-100 px-2 py-2 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50">
                                <option>Dispached Out</option>
                                <option>In Warehouse</option>
                                <option>Being Brought In</option>
                              </select>
                            </div> */}

                            {/* <div className='flex '>
                            <DateRangePicker
          placeholderStart="تاریخ شروع"
          placeholderEnd="تاریخ پایان"
          format="jYYYY/jMM/jDD"
          onChangeStart={changeDataPickerFrom}
          onChangeEnd={changeDataPickerTo}
          idStart="datePicker_from"
          idEnd="datePicker_to"
          renderPointer={true}
          customClassStart="custom_style"
          customClassEnd="custom_style"

        />
                            </div> */}


                            <div className="flex flex-col">
                              <label htmlFor="date"
                                className="text-xs mb-1 font-medium text-stone-100"> تا تاریخ</label>
                              {/* <input type="date" id="date"
                                                    className="mt-2 block w-full cursor-pointer rounded-md border border-gray-500 bg-gray-700 px-2 py-2 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50" />
                                                */}
                              <DatePicker placeholder="انتخاب تاریخ" format="jYYYY/jMM/jDD"
                                onChange={changeDataPickerTo} cancelOnBackgroundClick inputTextAlign="center"
                                id="datePicker_to"  customClass="custom_style"
                                newThemeColor="#2f4699" />
                            </div>


                            <div className="flex flex-col">
                              <label htmlFor="date"
                                className="text-xs mb-1 font-medium text-stone-100">شروع از تاریخ</label>
                              {/* <input type="date" id="date"
                                                    className="mt-2 block w-full cursor-pointer rounded-md border border-gray-500 bg-gray-700 px-2 py-2 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50" />
                                                */}
                              <DatePicker placeholder="انتخاب تاریخ" format="jYYYY/jMM/jDD"
                                onChange={changeDataPickerFrom} cancelOnBackgroundClick inputTextAlign="center"
                                id="datePicker_from"  customClass="custom_style"
                                newThemeColor="#2f4699" />
                            </div>
                          </div>

                          <div className="mt-10 grid w-full grid-cols-2 justify-end space-x-4 md:flex">
                            <button onClick={() => setShowModal(false)}
                              className="text-xs rounded-lg bg-gray-200 px-8 py-2 font-semibold text-gray-700 outline-none hover:opacity-80 focus:ring">پاک کردن فیلتر</button>
                            <button
                              className=" text-xs font-semibold rounded-lg bg-blue-600 px-8 py-2 text-white outline-none hover:opacity-80 focus:ring">جستجو</button>
                          </div>
                        </form>
                      </div>
                    </div>

                  </div>

                </>
              </div>
            </div>
          </div>
          <div className="opacity-70 fixed inset-0 z-40 bg-black"></div>
        </>
      )}
    </>
  )

}
