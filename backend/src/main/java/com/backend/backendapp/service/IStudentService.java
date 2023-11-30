package com.backend.backendapp.service;
import java.util.List;
import com.backend.backendapp.model.Student;

public interface IStudentService {
    Student addStudent(Student student);

    List<Student> getStudents();

    Student updateStudent(Student student, Long id);

    Student getStudentById(Long id);

    void deleteStudent(Long id);
}
