package com.example.ToDoWebapp.Entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "Task")
public class Task {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "tasktd")
	private Long tasktd;
	
	@Column(name = "name")
	private String name;
	
	@Column(name = "description")
	private String description;
	
	@Column(name = "deadline")
	private String deadline;
	
	@Column(name = "status")
	private String status;
	
	public Task() {
		
	}

	public Task(Long tasktd, String name, String description, String deadline, String status) {
		super();
		this.tasktd = tasktd;
		this.name = name;
		this.description = description;
		this.deadline = deadline;
		this.status = status;
	}

	public Long getTasktd() {
		return tasktd;
	}

	public void setTasktd(Long tasktd) {
		this.tasktd = tasktd;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getdescription() {
		return description;
	}

	public void setdescription(String description) {
		this.description = description;
	}

	public String getDeadline() {
		return deadline;
	}

	public void setDeadline(String deadline) {
		this.deadline = deadline;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	@Override
	public String toString() {
		return "Task [tasktd=" + tasktd + ", name=" + name + ", description=" + description + ", deadline=" + deadline
				+ ", status=" + status + "]";
	}
	
	
}
