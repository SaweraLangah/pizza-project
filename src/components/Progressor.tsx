import React from 'react'

export default function Progressor() {
  return (
    <div>

      <div className='flex items-start max-w-screen-lg w-full mx-auto mt-10'>
        <div className='w-full'>
          <div className='flex items-center w-full'>
            <div className='w-8 h-8 shrink-0 mx-[-1px] bg-orange-600 p-1.5 flex items-center justify-center rounded-full'>
              <span className='text-white font-bold'>1</span>
            </div>

            <div className='w-full h-1 mx-4 rounded-lg bg-sky-500'></div>
          </div>
          <div className='mt-2 mr-4'>
            <h6 className='text-base font-bold text-white'>Step 01 Choose your Pizza!</h6>
            <p className='text-xs text-white'>Explore our Spicy and Cheezy Menu and Select your Favourite Flavour</p>
          </div>
        </div>

        <div className='w-full'>
          <div className='flex items-center w-full'>
            <div className='w-8 h-8 shrink-0 mx-[-1px] bg-orange-600 p1.5 flex items-center justify-center rounded-full'>
              <span className='text-white font-bold'>2</span>
            </div>

            <div className='w-full h-1 mx-4 rounded-lg bg-sky-500'></div>
          </div>
          <div className='mt-2 mr-4'>
            <h6 className='text-base font-bold text-white'>Step 02 Customize your Pizza!</h6>
            <p className='text-xs text-white'>Tailor your perfect Pizza treat!</p>
          </div>
        </div>

        <div className='w-full'>
          <div className='flex items-center w-full'>
            <div className='w-8 h-8 shrink-0 mx-[-1px] bg-orange-600 p1.5 flex items-center justify-center rounded-full'>
              <span className='text-white font-bold'>3</span>
            </div>

            <div className='w-full h-1 mx-4 rounded-lg bg-sky-500'></div>
          </div>
          <div className='mt-2 mr-4'>
            <h6 className='text-base font-bold text-white'>Step 03 Place your order Now!</h6>
            <p className='text-xs text-white'>Ready to indulge? Proceed to checkout and complete your order! </p>

          </div>
        </div>

      </div>
    </div>
    
  );
}
