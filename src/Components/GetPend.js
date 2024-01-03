import React, { useState, useEffect } from 'react';
import baseurl from '../API/BootAPI';
import axios from 'axios';
import { Link } from 'react-router-dom';
import PendTask from './Pendtask';

const GetPend = () => {

  useEffect(() => {
    document.title = 'Get Pending Tasks';
    getpendTasks();
  }, []);


 // Function To Call SB Server
 const getpendTasks = () => {
  axios.get(`${baseurl}/ToDoList/getpendTask`).then(
    (response) => {
      // Success
      console.log(response);
      settasks(response.data);
    },
    (error) => {
      // For Error
      console.log(error);
      alert('Error Occured')
    }
  );
};


const removeTaskById = (tasktd) => {
  settasks(tasks.filter((task) => task.tasktd !== tasktd));
};  

  const [tasks, settasks] = useState([
    { tasktd: 1, name: 'Solve Leetcode', description: 'Leetcode P1', deadline: '2 Jan 24', status: 'P' },
    { tasktd: 2, name: 'Solve Leetcode', description: 'Leetcode P1', deadline: '2 Jan 24', status: 'P' },
    { tasktd: 3, name: 'Solve Leetcode', description: 'Leetcode P1', deadline: '2 Jan 24', status: 'P'}
  ]);

  

  

  

  return (
    <div className='container'>
      <section>
        <h1>My Tasks</h1>
        <div className="tbl-header">
          <table cellPadding="0" cellSpacing="0" border="0">
            <thead>
              <tr>
                <th>Task No.</th>
                <th>Task Name</th>
                <th>Description</th>
                <th>Deadline</th>
                <th>Status</th>
                <th>Mark As Completed?</th>
                <th>Delete</th>
              </tr>
            </thead>
          </table>
        </div>
        <div className="tbl-content">
          {tasks.map((tasks) => (
            <div key={tasks.tasktd}>
              {/* <Link style={{ textDecoration: 'none' }} to={`/ToDoList/addTask/${tasks.tasktd}`}> */}
                <PendTask tasks={tasks} update={removeTaskById} />
              {/* </Link> */}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default GetPend;