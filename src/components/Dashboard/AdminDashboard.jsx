// import React from 'react'
// import Header from '../other/Header'

// const AdminDashboard = () => {
//   return (
//     <div className='h-screen w-full p-10'>
//       <Header/>
//       <div>
//         <form className='flex items-start justify-between'>
//           <div><h3>Task Title</h3>
//           <input type ="text" placeholder='Make a UI Design'/>
//           </div>
//           <div><h3>Description</h3>
//           <textarea name="" id = "" cols="30" rows="10" ></textarea>
//           </div>
//           <div><h3>Date</h3>
//           <input type="date"/>
//           </div>
//           <div><h3>Assign To</h3>
//           <input type ="text" placeholder='employee name'/>
//           </div>
//           <div><h3>Category</h3>
//           <input type ="text" placeholder='design, dev, etc'/>
//           </div>
//           <button>Create Task</button>

//         </form>
//       </div>
//     </div>
//   )
// }

// export default AdminDashboard

















import React from 'react';
import Header from '../other/Header';
import CreateTask from '../other/CreateTask';
import AllTask from '../other/AllTask';

const AdminDashboard = () => {
  return (
    <div className="h-screen w-full p-10 bg-gray-900 text-white">
      <Header />
      <CreateTask/>
      <AllTask/>
    </div>
  );
};

export default AdminDashboard;
