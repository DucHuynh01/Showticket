import React from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { ListItemIcon } from '@mui/material';
import CreateEvent from '../Header/CreateEvent';
import '../../../../../../styles/index.css'
export default function HeaderTopNav() {
  return (
    <>
      <div className='flex justify-around text-white bg-[#00000063]'>
        <div className='flex-[4] p-3'>
          <img
            width={35}
            src='https://static.tkbcdn.com/site/global/content-v2/img/ticketbox-logo-100.png?v1'
            alt='no picture'
          />
        </div>
        <div className='flex h-[60px] flex-[2] items-center justify-center gap-3 text-[12px] font-bold'>
          <p className='scale-105 duration-150 hover:text-green-400'>LOG IN</p>
          <p className='scale-105 duration-150 hover:text-green-400'> | </p>
          <p className='scale-105 duration-150 hover:text-green-400'>SIGN UP</p>
          <div>
            <FormControl>
              <Select
                inputProps={{ 'aria-label': 'Without label' }}
                displayEmpty
                defaultValue=''
                style={{ padding: '0px'}}
              >
                <MenuItem value='' className='p-2'>
                  <ListItemIcon>
                    <img
                      width={30}
                      src='https://static.tkbcdn.com/site/global/content-v2/img/lang-vi.svg'
                      alt='Vietnamese'
                    />
                  </ListItemIcon>
                </MenuItem>
                <MenuItem value={10} className='p-2'>
                  <ListItemIcon>
                    <img
                      width={30}
                      src='https://static.tkbcdn.com/site/global/content-v2/img/lang-en.svg'
                      alt='English'
                    />
                  </ListItemIcon>
                </MenuItem>
              </Select>
            </FormControl>
          </div>
          <div>
            <CreateEvent></CreateEvent>
          </div>
        </div>
      </div>
    </>
  );
}
