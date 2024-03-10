import { Select, Space } from 'antd';
import React from 'react';

export default function CategoriesFilter() {
  const customLabelStyle = {
    color: 'gray',
    fontSize: '15px',
  };
  const selectType = {
    backgroundColor: '#ececee',
    color: '#66667c',
    fontWeight: 'semibold',
  };
  const option = [
    {
      value: '',
      label: 'All Categories',
      style: customLabelStyle,
    },
    {
      value: 'entertainment',
      label: 'Entertainment',
      style: selectType,
    },
    {
      value: 'livemusic',
      label: 'Live Music',
      style: customLabelStyle,
    },
    {
      value: 'art&cultures',
      label: 'Art & Culture',
      style: customLabelStyle,
    },
    {
      value: 'theater&plays',
      label: 'Theater & Plays',
      style: customLabelStyle,
    },
    {
      value: 'nightlife',
      label: 'Night Life',
      style: customLabelStyle,
    },
    {
      value: 'outdoor',
      label: 'Outdoor',
      style: customLabelStyle,
    },
    {
      value: 'onlineevents',
      label: 'Online Events',
      style: customLabelStyle,
    },
    {
      value: 'learning',
      label: 'Learning',
      style: selectType,
    },
    {
      value: 'conference',
      label: 'Conference',
      style: customLabelStyle,
    },
    {
      value: 'seminar/courses',
      label: 'Seminar / Courses',
      style: customLabelStyle,
    },
    {
      value: 'everythingelse',
      label: 'Everything Else',
      style: selectType,
    },
    {
      value: 'exhibitions',
      label: 'Exhibitions',
      style: customLabelStyle,
    },
    {
      value: 'meetups',
      label: 'Meetups',
      style: customLabelStyle,
    },
    {
      value: 'sports',
      label: 'Sports',
      style: customLabelStyle,
    },
    {
      value: 'community',
      label: 'Community',
      style: customLabelStyle,
    },
    {
      value: 'attractions',
      label: 'Attractions',
      style: customLabelStyle,
    },
  ];
  return (
    <div className='flex'>
      <svg
        fill='#cccccc'
        width='25px'
        height='25px'
        viewBox='0 0 32 32'
        id='icon'
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
          <defs>
            <style dangerouslySetInnerHTML={{ __html: '.cls-1{fill:none;}' }} />
          </defs>
          <title>collapse-categories</title>
          <rect x={14} y={25} width={14} height={2} />
          <polygon points='7.17 26 4.59 28.58 6 30 10 26 6 22 4.58 23.41 7.17 26' />
          <rect x={14} y={15} width={14} height={2} />
          <polygon points='7.17 16 4.59 18.58 6 20 10 16 6 12 4.58 13.41 7.17 16' />
          <rect x={14} y={5} width={14} height={2} />
          <polygon points='7.17 6 4.59 8.58 6 10 10 6 6 2 4.58 3.41 7.17 6' />
          <rect
            id='_Transparent_Rectangle_'
            data-name='<Transparent Rectangle>'
            className='cls-1'
            width={32}
            height={32}
          />
        </g>
      </svg>
      <Space style={{ width: '300px' }} direction='vertical'>
        <Select
          mode='multiple'
          allowClear
          maxTagCount={2}
          style={{ width: '100%'}}
          placeholder='Please select'
          defaultValue={['All Categories']}
          options={option}
        />
      </Space>
    </div>
  );
}
