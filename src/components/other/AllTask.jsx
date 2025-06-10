// // import React from 'react'

// // const AllTask = () => {
// //   return (
// //     <div className='bg-[#1c1c1c] p-5'>
// //       <div className='bg-red-400 py-2 px-4'>
// //         <h2>Rohit</h2>
// //         <h3>Make a UI Design</h3>
// //         <h5>Status</h5>
// //       </div>

// //     </div>
// //   )
// // }

// // export default AllTask




// import React from 'react';

// const AllTask = () => {
//   return (
//     <div className="mt-10">
//       <h2 className="text-2xl font-semibold mb-6 text-emerald-400 text-center">All Tasks</h2>

//       {/* Reusable Task Card */}
//       {[
//         { title: 'Make a UI Design', assignedTo: 'Rohit', status: 'Pending', bg: 'from-emerald-500 to-emerald-700' },
//         { title: 'Fix Login Bug', assignedTo: 'Aarav', status: 'In Progress', bg: 'from-indigo-500 to-indigo-700' },
//         { title: 'Deploy Backend', assignedTo: 'Simran', status: 'Completed', bg: 'from-blue-500 to-blue-700' },
//         { title: 'Create Landing Page', assignedTo: 'Tara', status: 'Review', bg: 'from-pink-500 to-pink-700' },
//       ].map((task, index) => (
//         <div
//           key={index}
//           className={`bg-gradient-to-br ${task.bg} rounded-xl p-6 mb-5 shadow-md hover:shadow-xl transition-all duration-300`}
//         >
//           <div className="flex justify-between items-center">
//             <div>
//               <h3 className="text-lg font-bold text-white">{task.title}</h3>
//               <p className="text-gray-200 mt-1 text-sm">
//                 Assigned to: <span className="font-medium text-white">{task.assignedTo}</span>
//               </p>
//             </div>
//             <span className="text-sm px-4 py-1 bg-white text-gray-800 rounded-full font-semibold shadow-sm">
//               {task.status}
//             </span>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default AllTask;





import React from 'react';

const AllTask = () => {
  const tasks = [
    { title: 'Make a UI Design', assignedTo: 'Rohit', status: 'Pending', bg: 'from-emerald-500 to-emerald-700' },
    { title: 'Fix Login Bug', assignedTo: 'Aarav', status: 'In Progress', bg: 'from-indigo-500 to-indigo-700' },
    { title: 'Deploy Backend', assignedTo: 'Simran', status: 'Completed', bg: 'from-blue-500 to-blue-700' },
    { title: 'Create Landing Page', assignedTo: 'Tara', status: 'Review', bg: 'from-pink-500 to-pink-700' },
    { title: 'Optimize Database', assignedTo: 'Karan', status: 'Pending', bg: 'from-orange-500 to-orange-700' },
    { title: 'Write Documentation', assignedTo: 'Neha', status: 'In Progress', bg: 'from-purple-500 to-purple-700' },
    { title: 'QA Testing', assignedTo: 'Raj', status: 'Completed', bg: 'from-cyan-500 to-cyan-700' },
    { title: 'Implement Auth', assignedTo: 'Priya', status: 'Review', bg: 'from-teal-500 to-teal-700' },
    { title: 'Design Dashboard', assignedTo: 'Ankit', status: 'Pending', bg: 'from-yellow-500 to-yellow-700' },
  ];

  return (
    <div className="mt-10">
      <h2 className="text-2xl font-semibold mb-6 text-emerald-400 text-center">All Tasks</h2>

      {/* Scrollable Container */}
      <div className="h-[60vh] overflow-y-auto pr-2 custom-scroll rounded-xl">
        {tasks.map((task, index) => (
          <div
            key={index}
            className={`bg-gradient-to-br ${task.bg} rounded-xl p-6 mb-4 shadow-md hover:shadow-xl transition-all duration-300`}
          >
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-lg font-bold text-white">{task.title}</h3>
                <p className="text-gray-200 mt-1 text-sm">
                  Assigned to: <span className="font-medium text-white">{task.assignedTo}</span>
                </p>
              </div>
              <span className="text-sm px-4 py-1 bg-white text-gray-800 rounded-full font-semibold shadow-sm">
                {task.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllTask;
