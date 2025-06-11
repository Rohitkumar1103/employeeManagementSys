// import React from 'react'

// const CompleteTask = () => {
//   return (
//     <div className='flex-shrink-0 h-full w-[300px] p-5 bg-red-400 rounded-xl'>
//         <div className='flex justify-between items-center'>
//           <h3 className='bg-red-600 py-1 px-3 text-sm rounded'>High</h3>
//           <h4 className='text-sm'>20 feb 2024</h4>
//         </div>
//         <h2 className='mt-5 text-2xl font-semibold'>Make a Website</h2>
//         <p className='text-sm mt-3'>
//           Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis officiis sequi repudiandae inventore vitae dignissimos!
//         </p>
//         <div className='flex justify-between mt-4'>
//           <button className='bg-green-500 py-1 px-2 text-sm'>Completed.</button>
//       </div>
//       </div>
//   )
// }

// export default CompleteTask








import React from 'react'

const CompleteTask = () => {
  return (
    <div className="w-[300px] p-6 rounded-2xl bg-gradient-to-br from-green-400 to-green-600 text-white shadow-xl">
      <div className="flex justify-between items-center mb-4">
        <span className="bg-white text-green-700 text-xs font-semibold px-3 py-1 rounded-full">High</span>
        <span className="text-sm">Feb 20, 2024</span>
      </div>
      <h2 className="text-xl font-bold mb-2">Make a Website</h2>
      <p className="text-sm mb-4">The website was successfully completed and delivered on time.</p>
      <button className="bg-white text-green-700 font-semibold px-4 py-2 rounded-md hover:bg-green-100 transition">Completed</button>
    </div>
  )
}

export default CompleteTask
