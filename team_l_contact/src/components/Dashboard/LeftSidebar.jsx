// import React from 'react'
import {RiContactsLine} from 'react-icons/ri'
import {RxCounterClockwiseClock} from 'react-icons/rx'
import {BsArrowDownSquare,BsPlusLg} from 'react-icons/bs'
import {MdOutlineModeEditOutline} from 'react-icons/md'
import {BiTrash} from 'react-icons/bi'

import { NavLink } from "react-router-dom"

const LeftSidebar = () => {
  return (
<div className=' w-[300px] text-sm shadow-lg h-screen py-3 pb-16 hidden sm:block text-black bg-white'>
        <div className="">
            <ul className='flex-col flex pt-10'>
                <NavLink to='/contact'>
                    <li className=' text-sm hover:bg-stone-300 p-3 rounded-md' >
                      <div className=" flex gap-5 items-center">
                          <RiContactsLine />
                            <h1 className=''>Contacts</h1>
                      </div>
                    </li>
                </NavLink>
                <NavLink to={'/frequent'}>
                    <li className=' text-sm hover:bg-stone-300 p-3 rounded-md' >
                        <div className=" flex gap-5 items-center">
                            <RxCounterClockwiseClock />
                            <h1>Frequent</h1>
                        </div>
                    </li>
                </NavLink>
                <NavLink to={'/ot'}>
                    <li className=' text-sm hover:bg-stone-300 p-3 rounded-md' >
                    <div className=" flex gap-5 items-center">
                        <BsArrowDownSquare />
                        <h1>Other Contacts</h1>
                     </div>
                    </li>
                </NavLink>
            </ul>
            <ul className='flex-col flex pt-10'>
                <h1 className=' font-bold text-sm px-2 mb-5'>Fix and manage</h1>
                <NavLink to={'/fix'}>
                    <li className=' text-sm hover:bg-stone-300 p-3 rounded-lg'>
                      <div className=" flex gap-5 items-center">
                          <MdOutlineModeEditOutline />
                            <h1>Marge and fix</h1>
                      </div>
                    </li>
                </NavLink>
                <NavLink to={'/bin'}>
                    <li className=' text-sm hover:bg-stone-300 p-3 rounded-lg'>
                        <div className=" flex gap-5 items-center">
                        <BiTrash />
                        <h1>Bin</h1>
                        </div>
                    </li>
                </NavLink>
            </ul>
            <div className=" mt-16 flex items-center px-10 text-sm justify-between">
                <h1>Label</h1>
                <BsPlusLg />
            </div>
        </div>
    </div>
  );
};

export default LeftSidebar;
