// import React from 'react'

// const FailedTask = ({data}) => {
//   return (
//     <div className="w-[300px] p-6 rounded-2xl bg-gradient-to-br from-gray-400 to-gray-600 text-white shadow-xl">
//       <div className="flex justify-between items-center mb-4">
//         <span className="bg-white text-red-700 text-xs font-semibold px-3 py-1 rounded-full">{data.category}</span>
//         <span className="text-sm">{data.taskDate}</span>
//       </div>
//       <h2 className="text-xl font-bold mb-2">{data.taskTitle}</h2>
//       <p className="text-sm mb-4">{data.taskDescription}</p>
//       <button className="bg-white text-red-700 font-semibold px-4 py-2 rounded-md hover:bg-red-100 transition">Failed</button>
//     </div>
//   )
// }

// export default FailedTask






// import React from 'react'

// const FailedTask = ({ data }) => {
//   return (
//     <div className="w-[300px] h-[300px] p-6 rounded-2xl bg-gradient-to-br from-gray-400 to-gray-600 text-white shadow-xl flex flex-col justify-between">
//       <div>
//         <div className="flex justify-between items-center mb-4">
//           <span className="bg-white text-red-700 text-xs font-semibold px-3 py-1 rounded-full">{data.category}</span>
//           <span className="text-sm">{data.taskDate}</span>
//         </div>
//         <h2 className="text-xl font-bold mb-2">{data.taskTitle}</h2>
//         <p className="text-sm overflow-auto max-h-[100px]">{data.taskDescription}</p>
//       </div>
//       <div className="mt-4 text-center">
//         <button className="bg-white text-red-700 font-semibold text-xs px-4 py-2 rounded-md cursor-default">Failed</button>
//       </div>
//     </div>
//   )
// }

// export default FailedTask









import React from 'react';

const FailedTask = ({ data }) => {
  return (
    <div className="w-[300px] h-[300px] p-6 rounded-2xl bg-gradient-to-br from-gray-400 to-gray-600 text-white shadow-xl flex flex-col justify-between">
      <div>
        <div className="flex justify-between items-center mb-4">
          <span className="bg-white text-red-700 text-xs font-semibold px-3 py-1 rounded-full">{data.category}</span>
          <span className="text-sm">{data.taskDate}</span>
        </div>
        <h2 className="text-xl font-bold mb-2">{data.taskTitle}</h2>
        <p className="text-sm">{data.taskDescription}</p>
      </div>
      <div className="flex justify-center mt-4">
        <span className="bg-white text-red-700 font-semibold px-4 py-2 rounded-md">Failed</span>
      </div>
    </div>
  );
};

export default FailedTask;
