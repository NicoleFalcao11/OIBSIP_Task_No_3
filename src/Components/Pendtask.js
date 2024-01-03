import React from 'react';
import axios from 'axios';
import baseurl from '../API/BootAPI';
import { Link , useNavigate} from 'react-router-dom';


function PendTask({ tasks, update }) {
  
  const navigate = useNavigate();
  const deleteById = ({ tasktd }) => {
    axios.delete(`${baseurl}/ToDoList/delete/${tasktd}`).then(
      (response) => {
        // Success
        console.log("Task Deleted Successfully");
        console.log(response);
        navigate(0);
      },
      (error) => {
        // For Error
        console.log(error);
        alert('Error Occurred');
      }
    );
    
  };

  const completedById = ({ tasktd }) => {
    axios.get(`${baseurl}/ToDoList/complete/${tasktd}`).then(
      (response) => {
        // Success
        console.log("Task Marked Successfully");
        console.log(response);
        navigate(0);
      },
      (error) => {
        // For Error
        console.log(error);
        alert('Error Occurred');
      }
    );
    
  };

  return (
    <table cellpadding="0" cellspacing="0" border="0">
      <tbody>
        <tr>
          <td>{tasks.tasktd}</td>
          <td>{tasks.name}</td>
          <td>{tasks.description}</td>
          <td>{tasks.deadline}</td>
          <td>{tasks.status}</td>
          <td>
            
              <button class="submit" type="submit" onClick={() => completedById(tasks)}>
                <td>Completed?</td>
              </button>
        
          </td>
          <td>
            {/* Use onClick to handle the deletion */}
            <button class="submit" type="button" onClick={() => deleteById(tasks)} >
              <td>Delete</td>
            </button>
          </td>
        </tr>
        
      </tbody>
    </table>
  );
}

export default PendTask;