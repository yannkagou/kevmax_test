import React from 'react'
import { Outlet } from 'react-router-dom'
import { Sidebar } from '../Sidebar'
import BoardList from './BoardList'
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import InsertChartOutlinedRoundedIcon from '@mui/icons-material/InsertChartOutlinedRounded';
import ArrowDropUpOutlinedIcon from '@mui/icons-material/ArrowDropUpOutlined';
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import RefreshOutlinedIcon from '@mui/icons-material/RefreshOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
 

export const TaskList = () => {
  return (
    <> 
        <Sidebar />
        <div className='absolute left-[305px] p-4 h-full'>
            <Outlet />
            <div className='flex items-center pb-1 justify-between'>

                <InsertChartOutlinedRoundedIcon />
        
                <div className='justify-between flex items-center gap-5'>
                    <div className='flex items-center justify-between'>
                        <LanguageOutlinedIcon />
                        <ArrowDropDownOutlinedIcon />
                    </div>
                    <div>
                        <button className='flex rounded-xl gap-1 p-2 items-center bg-[#F9FBFF]'>
                            <LanguageOutlinedIcon className='bg-[#F9FBFF]'/>
                            <p className='bg-[#F9FBFF]'>Bony Roland</p>
                            <svg width="10" height="5" viewBox="0 0 10 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5 5L10 -4.76837e-07H0L5 5Z" fill="#010B1A" className='bg-[#F9FBFF]'/>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            <div className='py-5 font-extrabold text-3xl'>
                <h1>List of kanban boards</h1>
            </div>
            <div className='w-full  flex items-center mb-5 rounded-xl p-2 bg-[#F9FBFF]'>
                <div className='flex items-center justify-between bg-[#F9FBFF]'>
                    <div className='flex items-center mr-2 bg-[#F9FBFF]'>
                        <p className='px-1 bg-[#F9FBFF]'>
                            show Entries
                        </p>
                        <button className='flex items-center justify-between mx-1 border-2 rounded-md bg-[#F9FBFF]'>
                            <p className=' bg-[#F9FBFF]'>10</p>
                            <div className='flex flex-col items-center bg-[#F9FBFF]'>
                                <ArrowDropUpOutlinedIcon fontSize='small' className=' bg-[#F9FBFF]'/>
                                <ArrowDropDownOutlinedIcon fontSize='small' className=' bg-[#F9FBFF]'/>
                            </div>
                        </button>
                    </div>
                    <div className='flex items-center justify-between ml-5 border-2 p-1 mr-1 rounded-md bg-[#F9FBFF]'>
                        <SearchOutlinedIcon className=' bg-[#F9FBFF]'/>
                        <input type="text" placeholder='Search' className='w-[390px] rounded-md outline-none bg-[#F9FBFF]'/>
                    </div>
                    <RefreshOutlinedIcon className=' bg-[#F9FBFF]'/>
                </div>
                
                <div className='pl-[320px] flex items-center justify-between gap-2 bg-[#F9FBFF]'>
                    <button className='flex items-center justify-center gap-2 w-[157px] h-[37px] bg-[#D51130] rounded-md'>
                        <AddOutlinedIcon className='bg-[#D51130]'/>
                        <p className='text-white bg-[#D51130]'>New board</p>
                    </button>
                    <button className='flex items-center justify-center w-[57px] h-[37px] bg-white rounded-md'>
                        <FilterAltOutlinedIcon className=' bg-white'/>
                        <ArrowDropDownOutlinedIcon className=' bg-white'/>
                    </button>
                </div>
            </div>
            <BoardList />
        </div>
    </>
  )
}