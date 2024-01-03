package com.example.ToDoWebapp.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.ToDoWebapp.Entity.Task;

public interface TaskRepository extends JpaRepository<Task , Long> {
       List<Task> findByStatus(String status);
}
