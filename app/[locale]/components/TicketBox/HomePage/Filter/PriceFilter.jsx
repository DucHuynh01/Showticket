import { Select } from 'antd';
import React from 'react';

export default function PriceFilter() {
  const customLabelStyle = {
    color: 'gray',
    fontSize: '15px',
  };
  return (
    <div className='flex'>
      <svg
        fill='#cccccc'
        width='35px'
        height='35px'
        viewBox='0 0 1024 1024'
        xmlns='http://www.w3.org/2000/svg'
        stroke='#cccccc'
      >
        <g id='SVGRepo_bgCarrier' strokeWidth={0} />
        <g
          id='SVGRepo_tracerCarrier'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <g id='SVGRepo_iconCarrier'>
          <path d='M541.7 768v-45.3c46.3-2.4 81.5-15 108.7-37.8 27.2-22.8 40.8-53.1 40.8-88.2 0-37.8-11-65.7-35.3-83.4-24.6-20.1-59.8-35.4-111.6-45.3h-2.6V351.8c35.3 5.1 65.3 15 95.1 35.4l43.6-55.5c-43.6-27.9-89.9-42.9-138.8-45.3V256h-40.8v30.3c-40.8 2.4-76.3 15-103.5 37.8-27.2 22.8-40.8 53.1-40.8 88.2s11 63 35.3 80.7c21.7 17.7 59.8 32.7 108.7 42.9v118.5c-38.2-5.1-76.3-22.8-114.2-53.1l-48.9 53.1c48.9 40.5 103.5 63 163.3 68.1V768h41zm2.6-219.6c27.2 7.5 43.6 15 54.4 22.8 8.1 10.2 13.6 20.1 13.6 35.4s-5.5 25.2-19.1 35.4c-13.6 10.2-30.1 15-48.9 17.7V548.4zM449.2 440c-8.1-7.5-13.6-20.1-13.6-32.7 0-15 5.5-25.2 16.2-35.4 13.6-10.2 27.2-15 48.9-17.7v108.6c-27.2-7.8-43.4-15.3-51.5-22.8z' />
        </g>
      </svg>
      <Select
        defaultValue=''
        style={{ width: 250 }}
        options={[
          { value: '', label: 'All Price', style: customLabelStyle },
          {
            value: 'free',
            label: 'Free',
            style: customLabelStyle,
          },
          { value: 'paid', label: 'Paid', style: customLabelStyle },
        ]}
      />
    </div>
  );
}
