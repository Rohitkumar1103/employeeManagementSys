// import React from 'react'

// const AcceptTask = ({data}) => {
//   return (
//     <div className="w-[300px] p-6 rounded-2xl bg-gradient-to-br from-pink-500 to-red-500 text-white shadow-xl">
//       <div className="flex justify-between items-center mb-4">
//         <span className="bg-white text-red-600 text-xs font-semibold px-3 py-1 rounded-full">{data.category}</span>
//         <span className="text-sm">{data.taskDate}</span>
//       </div>
//       <h2 className="text-xl font-bold mb-2">{data.taskTitle}</h2>
//       <p className="text-sm mb-4">{data.taskDescription}</p>
//       <button className="bg-white text-green-600 font-semibold px-4 py-2 rounded-md hover:bg-green-100 transition">Accept</button>
//     </div>
//   )
// }

// export default AcceptTask






import React from 'react';

const AcceptTask = ({ data }) => {
  return (
    <div className="w-[300px] h-[300px] p-6 rounded-2xl bg-gradient-to-br from-pink-500 to-red-500 text-white shadow-xl flex flex-col justify-between">
      <div>
        <div className="flex justify-between items-center mb-4">
          <span className="bg-white text-red-600 text-xs font-semibold px-3 py-1 rounded-full">{data.category}</span>
          <span className="text-sm">{data.taskDate}</span>
        </div>
        <h2 className="text-xl font-bold mb-2">{data.taskTitle}</h2>
        <p className="text-sm">{data.taskDescription}</p>
      </div>
      <div className="flex justify-center mt-4">
        <button className="bg-white text-green-600 font-semibold px-4 py-2 rounded-md hover:bg-green-100 transition">Accept</button>
      </div>
    </div>
  );
};

export default AcceptTask;
