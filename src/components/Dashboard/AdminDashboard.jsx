import React from 'react';
import Header from '../other/Header';
import CreateTask from '../other/CreateTask';
import AllTask from '../other/AllTask';

const AdminDashboard = (props) => {
  // const adminData = { firstName: 'Admin' };

  return (
    <div className="h-screen w-full p-10 bg-gray-900 text-white">
      <Header changeUser= {props.changeUser}/>
      <CreateTask/>
      <AllTask/>
    </div>
  );
};

export default AdminDashboard;
