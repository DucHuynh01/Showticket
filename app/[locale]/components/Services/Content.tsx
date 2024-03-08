import React from 'react'

const Content = ({ serviceItem }) => {
  return (
    <div className='w-full'>
      <div className='container max-w-full sm:max-w-screen-xl'>
        <div className='sm:px-8 md:px-16 lg:px-24 '>
          <div className=' py-5 p-0 flex flex-col sm:px-8 sm:bg-white sm:shadow-md'>
            <div className='flex justify-center items-center flex-col'>
              <div className=' text-xl font-bold'>{serviceItem.title}</div>
              {/* <div>{serviceItem.short_content}</div> */}
            </div>
            <div className='w-full h-[1px] border-t-[2px] border-dashed border-gray-400 mt-8'></div>
            <div dangerouslySetInnerHTML={{ __html: serviceItem.full_text }} />
          </div>
        </div>
      </div >
    </div >
  )
}

export default Content