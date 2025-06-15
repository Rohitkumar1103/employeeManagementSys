// import React from 'react'

// const NewTask = ({data}) => {
//   return (
//     <div className="w-[300px] p-6 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-700 text-white shadow-xl">
//       <div className="flex justify-between items-center mb-4">
//         <span className="bg-white text-blue-800 text-xs font-semibold px-3 py-1 rounded-full">{data.category}</span>
//         <span className="text-sm">{data.taskDate}</span>
//       </div>
//       <h2 className="text-xl font-bold mb-2">{data.taskTitle}</h2>
//       <p className="text-sm mb-4">{data.taskDescription}</p>
//       <div className="flex justify-between">
//         <button className="bg-white text-green-700 text-xs font-medium px-3 py-3 rounded hover:bg-green-100 transition">Mark as Completed</button>
//         <button className="bg-white text-red-700 text-xs font-medium px-3 py-3 rounded hover:bg-red-100 transition">Mark as Failed</button>
//       </div>
//     </div>
//   )
// }

// export default NewTask


import React from 'react';

const NewTask = ({ data }) => {
  return (
    <div className="w-[300px] h-[300px] p-6 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-700 text-white shadow-xl flex flex-col justify-between">
      <div>
        <div className="flex justify-between items-center mb-4">
          <span className="bg-white text-blue-800 text-xs font-semibold px-3 py-1 rounded-full">{data.category}</span>
          <span className="text-sm">{data.taskDate}</span>
        </div>
        <h2 className="text-xl font-bold mb-2">{data.taskTitle}</h2>
        <p className="text-sm">{data.taskDescription}</p>
      </div>
      <div className="flex justify-between mt-4">
        <button className="bg-white text-green-700 text-xs font-medium px-3 py-2 rounded hover:bg-green-100 transition">Mark as Completed</button>
        <button className="bg-white text-red-700 text-xs font-medium px-3 py-2 rounded hover:bg-red-100 transition">Mark as Failed</button>
      </div>
    </div>
  );
};

export default NewTask;
