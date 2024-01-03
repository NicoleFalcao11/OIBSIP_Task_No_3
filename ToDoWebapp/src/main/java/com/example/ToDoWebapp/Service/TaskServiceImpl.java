package com.example.ToDoWebapp.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.ToDoWebapp.Entity.Task;
import com.example.ToDoWebapp.Repository.TaskRepository;

@Service
public class TaskServiceImpl implements TaskService{
	
	@Autowired
    TaskRepository trepo;
	
	@Override
	public List<Task> getTasks() {
		return trepo.findAll();
	}

	@Override
	public Task addTask(Task task) {
		// TODO Auto-generated method stub
		task.setStatus("P");
		trepo.save(task);
		return task;
	}

	@Override
	public String deleteTaskbyId(long Id) {
		trepo.deleteById(Id);
		return "Task Has Been Deleted";
	}

	@Override
	public Task putTask(Task task , Long Id) {
		Optional<Task> t = trepo.findById(Id);
		Task tk = t.get();
		tk.setName(task.getName());
		tk.setdescription(task.getdescription());
		tk.setDeadline(task.getDeadline());
		tk.setStatus("P");
		trepo.save(tk);
		return tk;
	}

	@Override
	public List<Task> getpendingTask() {
		List<Task> pending = trepo.findByStatus("P");
		return pending;
	}

	@Override
	public List<Task> getcompletedTask() {
		List<Task> done = trepo.findByStatus("C");
		return done;
	}

	@Override
	public Task getTaskById(Long Id) {
		// TODO Auto-generated method stub
		Optional<Task> optionalBook = trepo.findById(Id);
		Task book = optionalBook.get();
		return book;
	}

	@Override
	public void markComplete(Long Id) {
		Optional<Task> optionalBook = trepo.findById(Id);
		Task t = optionalBook.get();
		t.setStatus("C");
		trepo.save(t);
		
	}
	
	
	
}
