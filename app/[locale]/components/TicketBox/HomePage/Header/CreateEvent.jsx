import React from 'react';

export default function CreateEvent() {
  return (
    <>
      <div className='flex border border-white justify-between items-center px-2 py-0.5 rounded-md bg-[#90ba3e]'>
        <svg
          width='30px'
          height='30px'
          viewBox='0 0 24 24'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <g id='SVGRepo_bgCarrier' strokeWidth={0} />
          <g
            id='SVGRepo_tracerCarrier'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <g id='SVGRepo_iconCarrier'>
            {' '}
            <path
              d='M6 12H18M12 6V18'
              stroke='#5c7b17'
              strokeWidth={2}
              strokeLinecap='round'
              strokeLinejoin='round'
            />{' '}
          </g>
        </svg>

        <p>Tạo sự kiện</p>
      </div>
    </>
  );
}
