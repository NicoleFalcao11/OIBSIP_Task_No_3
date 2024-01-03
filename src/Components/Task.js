// import React from 'react';
// import axios from 'axios';
// import baseurl from '../API/BootAPI';
// import {useParams} from 'react-router-dom';
// import { Link} from 'react-router-dom';


// function Task( {tasks,update} ) {
  
//   const deleteById = ({tasktd}) => {
    

//     axios.delete(`${baseurl}/ToDoList/delete/${tasktd}`).then(
//       (response) => {
//         // Success
//         console.log("Task Deleted Successfully");
//         console.log(response);
//       },
//       (error) => {
//         // For Error
//         console.log(error);
//         alert('Error Occured')
//       }
//     );
    
//   }

//     return(
//       <table cellpadding="0" cellspacing="0" border="0">
//       <tbody>
//             <tr>
//             <td>{tasks.tasktd}</td>
//               <td>{tasks.name}</td>
//               <td>{tasks.description}</td>
//               <td>{tasks.deadline}</td>
//               <td>{tasks.status}</td>
//               <td>
                
//                   <Link style={{ textDecoration: 'none' }} to={`/EditTask/${tasks.tasktd}`}><button  class="submit" type="submit">
//               <td>Edit</td>
//                  </button></Link>
//               </td>

//               <td>
//               <Link  to={`/myTasks`} onClick={deleteById(tasks.tasktd)}><button class="submit" type="submit">   
//               <td>Delete</td>
//                  </button></Link>
//               </td>
//             </tr>
//             </tbody>
//             </table>
            
          
//     );
// }
// export default Task;

import React from 'react';
import axios from 'axios';
import baseurl from '../API/BootAPI';
import { Link , useNavigate} from 'react-router-dom';


function Task({ tasks, update }) {
  
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
            <Link style={{ textDecoration: 'none' }} to={`/EditTask/${tasks.tasktd}`}>
              <button class="submit" type="submit">
                <td>Edit</td>
              </button>
            </Link>
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

export default Task;
