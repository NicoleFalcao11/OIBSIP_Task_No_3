package com.example.ToDoWebapp.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.ToDoWebapp.Entity.Task;
import com.example.ToDoWebapp.Service.TaskService;

@RestController
@RequestMapping("/ToDoList")
public class TaskController {
	
	@Autowired
	TaskService s;

	@PostMapping("/addTask")
	public Task addTask(@RequestBody Task t) {
		return s.addTask(t);
	}
	
	@GetMapping("/getTask")
	public List<Task> getTasks(){
		return s.getTasks();
	}
	
	@GetMapping("/getTask/{Id}")
	public Task getTaskById(@PathVariable Long Id) {
		return s.getTaskById(Id);
	}
	
	
	@PutMapping("/addTask/{Id}")
	public Task putTask(@RequestBody Task t , @PathVariable Long Id) {
		return s.putTask(t, Id);
	}
	
	@GetMapping("/getpendTask")
	public List<Task> getpendTask(){
		return s.getpendingTask();
	}
	
	@GetMapping("/getcompTask")
	public List<Task> getcompTask(){
		return s.getcompletedTask();
	}
	
	@GetMapping("/complete/{Id}")
	public void markComplete(@PathVariable Long Id){
		s.markComplete(Id);
	}
	
	@DeleteMapping("/delete/{Id}")
	public String deleteById(@PathVariable Long Id) {
		return s.deleteTaskbyId(Id);
	}
	
	
}
