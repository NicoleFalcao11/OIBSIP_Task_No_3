import React from 'react';
import { Form,FormGroup,Input,Button,Container } from 'reactstrap';
import { useState , useEffect } from 'react';
import axios from 'axios';
import baseurl from '../API/BootAPI';

//Form
const AddTask=()=> {
        useEffect( ()=>{
            document.title = "Add Task";
            },[]);
         
    const [task , settasks] = useState ( {} ); 
    //form Handler
    const handleForm = (e) => {
        console.log(task);
        postData(task);
        e.preventDefault();
    };
     
    
    //Post Data To Server
    const postData = (data) => {
          axios.post(`${baseurl}/ToDoList/addTask`, data).then (
            (response) => {
                     console.log(response);
                     console.log("Done")
                     alert('New Task Added Successfully')
                     settasks();
            } ,
            (error) => {
                      console.log(error);
                      console.log("NotDone")
            }
          )

    };







return (
    <div>
    <div class="form-container" className="form-container" style={{
  border: '2px solid #ccc',
  padding: '20px',
  borderRadius: '10px',
  boxShadow: '0 0 10px rgba(0, 191, 255, 0.7)',
  width: '400px',
  margin: '0 auto'
}}>
    <h1 class="text-center my-3">Add Task Here</h1>
    <Form onSubmit={handleForm}>
        <FormGroup>
            <Input type="text" placeholder="Enter Task Name" name="name" id="name" onChange= { (e)=> {
                settasks({...task,name:e.target.value});
            } }                         style={{ width: '100%', height: '60px', marginBottom: '10px',  boxShadow: '0 0 10px rgba(0, 191, 255, 0.7)'}}/> 


            <Input type="text" placeholder="Enter Task Description (To-Do's)" name="description" id="description" onChange= { (e)=> {
                settasks({...task,description:e.target.value});
            } } style={{ width: '100%', height: '100px', marginBottom: '10px',  boxShadow: '0 0 10px rgba(0, 191, 255, 0.7)'}}/> 
         
            {/* <textarea type="text" placeholder="Enter Task Description (To-Do's)"
                name="describe"
                id="describe"
                onChange={(e) => {
                settasks({ ...task, describe: e.target.value });
              }}> style={{
                   width: '100%',
                   height: '100px',
                   marginBottom: '10px',
                   boxShadow: '0 0 10px rgba(0, 191, 255, 0.7)',
              }}
            </textarea> */}




            <Input type="text" placeholder="Enter Task Deadline (DD-MM-YY)" name="deadline" id="deadline" onChange= { (e)=> {
                settasks({...task,deadline:e.target.value});
            } } style={{ width: '100%', height: '60px', marginBottom: '10px',boxShadow: '0 0 10px rgba(0, 191, 255, 0.7)', }} />
            
            
        </FormGroup>
        <Container>
            <Button color='success' type = "submit">
                Submit
            </Button>
            <Button type='reset' color='warning' style={{ marginLeft: '10px' }}
            onClick = { (e) => {
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

export default AddTask