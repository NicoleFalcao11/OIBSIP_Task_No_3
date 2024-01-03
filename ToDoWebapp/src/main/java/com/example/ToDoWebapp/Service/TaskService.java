package com.example.ToDoWebapp.Service;

import java.util.List;

import com.example.ToDoWebapp.Entity.Task;

public interface TaskService {

	List<Task> getTasks();
	Task getTaskById(Long Id);
	Task addTask(Task task);
	String deleteTaskbyId(long Id);
	Task putTask(Task task , Long Id);
	List<Task> getpendingTask();
	List<Task> getcompletedTask();
	void markComplete(Long Id);
}
