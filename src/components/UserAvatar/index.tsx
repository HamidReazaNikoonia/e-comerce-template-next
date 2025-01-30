import React, { useState, useEffect, useRef } from 'react';

import { UserRound, LayoutDashboard, Logs, LogOut } from 'lucide-react';

import {toPersianDigits} from '@/utils/Helpers'

// Define types for the props
interface User {
  first_name: string;
  last_name: string;
  mobile: string;
}

interface UserAvatarProps {
  userName: string;
  user: User;
}

interface DropdownItem {
  title: string;
  link: string;
  icon?: JSX.Element;
}

const UserAvatar: React.FC<UserAvatarProps> = ({ user }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  console.log('user', user);

  // Toggle dropdown visibility
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  // Close dropdown when clicking outside
  const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setIsDropdownOpen(false);
    }
  };

  // Add event listener for clicks outside the dropdown
  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Dropdown items
  const items: DropdownItem[] = [
    { title: 'داشبورد', link: '/dashboard', icon: <LayoutDashboard size={16} color='rgb(55, 65, 81)' /> },
    { title: 'سفارش ها', link: '/dashboard/orders', icon: <Logs size={16} color='rgb(55, 65, 81)'  /> },
    {title: 'خروج', link: '/logout', icon: <LogOut size={16} color='rgb(55, 65, 81)'  />},
  ];

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Avatar Button */}
      <button
        onClick={toggleDropdown}
        className="flex items-center justify-center w-10 h-10 bg-purple-800 rounded-full cursor-pointer hover:bg-gray-400 focus:outline-none"
      >
        
          <span className="text-gray-700 font-semibold">
            <UserRound color="white" />
          </span>
        
      </button>

      {/* Dropdown Menu */}
      {isDropdownOpen && (
        <div className="absolute text-right right-0 mt-2 pb-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 z-10">
          <div className='w-full border-b pb-1'>
          <div className='text-gray-700 py-2 mr-3 text-xs md:text-sm'>
            {user.first_name} {user.last_name}
          </div>

          <div className='text-gray-400 pb-1 mr-3 text-xs'>
            {user.mobile && toPersianDigits(user.mobile)}  موبایل
          </div>
          </div>
          <ul className='pt-1'>
            {items.map((item, index) => (
              <li className='' key={index}>
                <a
                  href={item.link}
                  className="flex justify-end items-center px-4 py-2 text-gray-700 text-xs md:text-sm rounded-lg hover:bg-gray-100"
                >
                  <div className='mr-2'>
                  {item.title}
                  </div>

                    <div>
                    {item.icon}
                    </div>
                </a>

               
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default UserAvatar;