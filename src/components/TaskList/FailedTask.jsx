// import React from 'react'

// const FailedTask = () => {
//   return (
//       <div className='flex-shrink-0 h-full w-[300px] p-5 bg-blue-400 rounded-xl'>
//         <div className='flex justify-between items-center'>
//           <h3 className='bg-red-600 py-1 px-3 text-sm rounded'>High</h3>
//           <h4 className='text-sm'>20 feb 2024</h4>
//         </div>
//         <h2 className='mt-5 text-2xl font-semibold'>Make a Website</h2>
//         <p className='text-sm mt-3'>
//           Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis officiis sequi repudiandae inventore vitae dignissimos!
//         </p>
//       <div className='flex justify-between mt-4'>
//         <button className='bg-red-500 py-1 px-2 text-sm'>Failed.</button>
//       </div>
//       </div>
//   )
// }

// export default FailedTask









import React from 'react'

const FailedTask = () => {
  return (
    <div className="w-[300px] p-6 rounded-2xl bg-gradient-to-br from-gray-400 to-gray-600 text-white shadow-xl">
      <div className="flex justify-between items-center mb-4">
        <span className="bg-white text-red-700 text-xs font-semibold px-3 py-1 rounded-full">High</span>
        <span className="text-sm">Feb 20, 2024</span>
      </div>
      <h2 className="text-xl font-bold mb-2">Make a Website</h2>
      <p className="text-sm mb-4">This task could not be completed due to unforeseen issues or delays.</p>
      <button className="bg-white text-red-700 font-semibold px-4 py-2 rounded-md hover:bg-red-100 transition">Failed</button>
    </div>
  )
}

export default FailedTask
