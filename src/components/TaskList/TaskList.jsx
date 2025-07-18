// import React from 'react'
// import AcceptTask from './AcceptTask'
// import CompleteTask from './CompleteTask'
// import FailedTask from './FailedTask'
// import NewTask from './NewTask'

// const TaskList = ({data}) => {
//     if (!data || !Array.isArray(data.tasks)) {
//     return null; // or a loading spinner or fallback UI
//   }
//   return (
//     <div id = 'taskList' className='h-[55%] overflow-x-auto flex items-center justify-start gap-5 flex-nowrap w-full py-5 mt-10'>
//       {data.tasks.map((elem, idx) =>{
//         if(elem.active){
//           return <AcceptTask key={idx} data={elem}/>
//         }
//         if(elem.NewTask){
//           return <NewTask key={idx} data={elem}/>
//         }
//         if(elem.completed){
//           return <CompleteTask key={idx} data={elem}/>
//         }
//         if(elem.failed){
//           return <FailedTask key={idx} data={elem}/>
//         }
//       })}  
//     </div>
//   )
// }

// export default TaskList




// import React from 'react';
// import AcceptTask from './AcceptTask';
// import CompleteTask from './CompleteTask';
// import FailedTask from './FailedTask';
// import NewTask from './NewTask';

// const TaskList = ({ data }) => {
//   if (!data || !Array.isArray(data.tasks)) {
//     return null;
//   }
//   return (
//     <div id="taskList" className="h-[55%] overflow-x-auto flex items-center justify-start gap-5 flex-nowrap w-full py-5 mt-10">
//       {data.tasks.map((elem, idx) => {
//         if (elem.NewTask) {
//           return <NewTask key={idx} data={elem} />;
//         }
//         if (elem.active) {
//           return <AcceptTask key={idx} data={elem} />;
//         }
//         if (elem.completed) {
//           return <CompleteTask key={idx} data={elem} />;
//         }
//         if (elem.failed) {
//           return <FailedTask key={idx} data={elem} />;
//         }
//         return null;
//       })}
//     </div>
//   );
// };

// export default TaskList;




// TaskList.js

import React from 'react';
import AcceptTask from './AcceptTask';
import CompleteTask from './CompleteTask';
import FailedTask from './FailedTask';
import NewTask from './NewTask';

const TaskList = ({ data }) => {
  if (!data || !Array.isArray(data.tasks)) {
    return null;
  }
  return (
    <div
      id="taskList"
      className="h-[55%] overflow-x-auto flex items-center justify-start gap-5 flex-nowrap w-full py-5 mt-10"
    >
      {data.tasks.map((elem, idx) => {
        if (elem.newTask) {
          return <NewTask key={idx} data={elem} />;
        }
        if (elem.active) {
          return <AcceptTask key={idx} data={elem} />;
        }
        if (elem.completed) {
          return <CompleteTask key={idx} data={elem} />;
        }
        if (elem.failed) {
          return <FailedTask key={idx} data={elem} />;
        }
        return null;
      })}
    </div>
  );
};

export default TaskList;
