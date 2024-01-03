import React from 'react';
import { Form,FormGroup,Input,Button,Container } from 'reactstrap';
import { useState , useEffect } from 'react';
import axios from 'axios';
import baseurl from '../API/BootAPI';
import { useParams } from 'react-router-dom';

const AddTaske = () => {
    
  const {tasktd} = useParams();
  console.log("Initially"+tasktd)
  const [Task, setTasks] = useState({});

  console.log("setTasks");
  const [name, setTaskName] = useState("");
  

  const getTaskById = () => {
      console.log("Making GET");
      axios.get(`${baseurl}/ToDoList/getTask/${tasktd}`).then(
          (response) => {
              console.log(response);
              console.log('tasktd:' + tasktd)
              console.log('Done');
              setTasks(response.data);
              setTaskName(response.data.name);
          },
          (error) => {
              console.log("Error Ocuured");
              console.log(error);
          }
      );
  }


  useEffect(() => {
    document.title = "Edit Task";
    console.log("In Function");
    getTaskById();
}, [tasktd]);
  
  const [task, settasks] = useState({});

  // Form Handler
  const handleForm = (e) => {
      console.log(task);
      postData(task);
      e.preventDefault();
  };

  // Post Data To Server
  const postData = (data) => {
      axios.put(`${baseurl}/ToDoList/addTask/${tasktd}`, data).then(
          (response) => {
              console.log(response);
              console.log("Done")
              alert('New Task Added Successfully')
          },
          (error) => {
              console.log(error);
              console.log("NotDone")
          }
      )
  };

  return (
      <div>
          <div className="form-container" style={{
              border: '1px black',
              padding: '20px',
              borderRadius: '10px',
              boxShadow: '0 0 10px rgba(0, 191, 255, 0.7)',
              width: '400px',
              margin: '0 auto'
          }}>
              <h1 className="text-center my-3">Add Task Here</h1>
              <Form onSubmit={handleForm}>
                  <FormGroup>
                      <Input
                          type="text"
                          placeholder={name}
                          name="name"
                          id="name"
                          onChange={(e) => {
                              settasks({ ...task, name: e.target.value });
                          }} 
                          style={{
                              width: '100%',
                              height: '60px',
                              marginBottom: '10px',
                              boxShadow: '0 0 10px rgba(0, 191, 255, 0.7)'
                          }}
                      />

                     
                          <Input
                              type="text"
                              placeholder={Task.description}
                              name="description"
                              id="description"
                              onChange={(e) => {
                                  settasks({ ...task, description: e.target.value });
                              }}
                              style={{
                                  width: '100%',
                                  height: '100px',
                                  marginBottom: '10px',
                                  boxShadow: '0 0 10px rgba(0, 191, 255, 0.7)'
                              }}
                          />
                    

                      <Input
                          type="text"
                          placeholder={Task.deadline}
                          name="deadline"
                          id="deadline"
                          onChange={(e) => {
                              settasks({ ...task, deadline: e.target.value });
                          }}
                          style={{
                              width: '100%',
                              height: '60px',
                              marginBottom: '10px',
                              boxShadow: '0 0 10px rgba(0, 191, 255, 0.7)'
                          }}
                      />

                  </FormGroup>
                  <Container>
                      <Button color='success' type="submit">
                          Submit
                      </Button>
                      <Button
                          type='reset'
                          color='warning'
                          style={{ marginLeft: '10px' }}
                          onClick={(e) => {
                              settasks({});
                          }}>
                          Reset
                      </Button>
                  </Container>
              </Form>
          </div>
      </div>
  );
}

export default AddTaske;
