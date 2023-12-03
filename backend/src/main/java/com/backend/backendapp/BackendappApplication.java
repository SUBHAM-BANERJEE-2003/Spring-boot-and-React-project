package com.backend.backendapp;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin("http://localhost:5173")
@SpringBootApplication
public class BackendappApplication {
// http://localhost:8180/student for creating(post in the url) and seeing(get in the url) all users
// http://localhost:8180/student/update/2 for updating the user(put).. now 2 there is the id
//http://localhost:8180/student/student/2 getting(get) a single student by id
// http://localhost:8180/student/delete/2 for deleting(delete) the student by id
	public static void main(String[] args) {
		SpringApplication.run(BackendappApplication.class, args);
	}

}
