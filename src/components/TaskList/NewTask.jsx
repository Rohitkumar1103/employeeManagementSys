// import React from 'react'

// const NewTask = () => {
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
//         <button className='bg-green-500 py-1 px-2 text-sm'>Mark as Completed.</button>
//         <button className='bg-red-500 py-1 px-2 text-sm'>Mark as Failed.</button>
//       </div>
//       </div>
//   )
// }

// export default NewTask










import React from 'react'

const NewTask = () => {
  return (
    <div className="w-[300px] p-6 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-700 text-white shadow-xl">
      <div className="flex justify-between items-center mb-4">
        <span className="bg-white text-blue-800 text-xs font-semibold px-3 py-1 rounded-full">High</span>
        <span className="text-sm">Feb 20, 2024</span>
      </div>
      <h2 className="text-xl font-bold mb-2">Make a Website</h2>
      <p className="text-sm mb-4">Start building a responsive and user-friendly website as per the project brief.</p>
      <div className="flex justify-between">
        <button className="bg-white text-green-700 text-xs font-medium px-3 py-3 rounded hover:bg-green-100 transition">Mark as Completed</button>
        <button className="bg-white text-red-700 text-xs font-medium px-3 py-3 rounded hover:bg-red-100 transition">Mark as Failed</button>
      </div>
    </div>
  )
}

export default NewTask
