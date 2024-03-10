import React from 'react';
import LocationFilter from './LocationFilter';
import CategoriesFilter from './CategoriesFilter';
import PriceFilter from './PriceFilter';
export default function Filter() {
  return (
    <div className='flex justify-center p-2'>
      <div className='xl:flex items-center justify-between border-[3px] border-[#eeeeee] block'>
        <LocationFilter></LocationFilter>
        <CategoriesFilter></CategoriesFilter>
        <PriceFilter></PriceFilter>
      </div>
    </div>
  );
}
