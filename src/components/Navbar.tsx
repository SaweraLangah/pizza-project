import React from 'react'

export default function Navbar() {
  return (


    <div className="grid xl:grid-cols-1 grid-cols-1">
      <div className="p-5">
        <div className="py-3 px-3 rounded-xl border  w-full">
          <div className="flex justify-between items-center">
            <div className="flex justify-items-center items-center gap-2">

             
              {/*search icon*/}
              <div style={{ position: 'relative' }}>
                <input className="rounded-3xl py-3 px-3 outline-none text-xs w-[350px] pr-10  ld:block md:block"
                  placeholder="search for your favourite pizza from menu." />

               
              </div>
            </div>
            <div className="flex justify-center items-center gap-2">

             
              <p className="text-sm text-white lg:block md:block">order now and get it with
                <span className="text-sky-400"> 15 minutes!</span>
              </p>

              {/*cart icon*/}
             

            </div>
          </div>
        </div>
      </div>
    </div>


  );
}
