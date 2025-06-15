// import React, { useContext } from 'react';
// import { AuthContext } from '../../context/AuthProvider';

// const AllTask = () => {
//   const authData = useContext(AuthContext)

//   return (
//     <div className='bg-[#1c1c1c] p-5 rounded mt-5'>
//       <div className= 'bg-red-400 mb-2 py-2 px-4 flex justify-between rounded'>
//           <h2 className='text-lg font-medium w-1/5'>Employee Name</h2>
//           <h3 className='text-lg font-medium w-1/5'>New Task</h3>
//           <h5 className='text-lg font-medium w-1/5'>Active Task</h5>
//           <h5 className='text-lg font-medium w-1/5'>Completed</h5>
//           <h5 className='text-lg font-medium w-1/5'>Failed</h5>
//         </div>
//         <div className=''>
//           {authData.employees.map(function(elem){
//           return <div className= 'border-2 bg-black-500 mb-2 py-2 px-4 flex justify-between rounded'>
//             <h2 className='text-lg font-medium w-1/5'>{elem.firstName}</h2>
//             <h3 className='text-lg font-medium w-1/5 text-blue-600'>{elem.taskCounts.newTask}</h3>
//             <h5 className='text-lg font-medium w-1/5 text-yellow-400'>{elem.taskCounts.active}</h5>
//             <h5 className='text-lg font-medium w-1/5 text-green-800'>{elem.taskCounts.completed}</h5>
//             <h5 className='text-lg font-medium w-1/5 text-red-600'>{elem.taskCounts.failed}</h5>
//           </div>
//         })}
//         </div>
//     </div>
//   );
// };

// export default AllTask;









import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';

const AllTask = () => {
  const { employees } = useContext(AuthContext);

  return (
    <div className="bg-gradient-to-br from-[#1f1f1f] to-[#2c2c2c] p-6 rounded-xl mt-6 shadow-lg">
      {/* Header */}
      <div className="grid grid-cols-5 text-white text-sm font-semibold border-b border-gray-600 pb-3 mb-4 uppercase tracking-wider">
        <span>Employee</span>
        <span>New</span>
        <span>Active</span>
        <span>Completed</span>
        <span>Failed</span>
      </div>

      {/* Data Rows */}
      <div className="space-y-3">
        {employees.map((emp, index) => (
          <div
            key={index}
            className="grid grid-cols-5 items-center bg-[#2a2a2a] hover:bg-[#333333] transition-colors duration-200 text-white rounded-lg px-4 py-3 shadow-md"
          >
            <span className="font-medium">{emp.firstName}</span>
            <span className="text-blue-400 font-semibold">{emp.taskCounts?.newTask ?? 0}</span>
            <span className="text-yellow-400 font-semibold">{emp.taskCounts?.active ?? 0}</span>
            <span className="text-green-400 font-semibold">{emp.taskCounts?.completed ?? 0}</span>
            <span className="text-red-400 font-semibold">{emp.taskCounts?.failed ?? 0}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllTask;
