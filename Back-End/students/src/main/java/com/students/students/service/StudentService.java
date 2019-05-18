package com.students.students.service;

import com.students.students.model.Student;
import com.students.students.repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
public class StudentService {
    @Autowired
    StudentRepository studentRepository;

    public ResponseEntity<String> createNewStudent(Student student) {

        if(student==null)
            return new ResponseEntity<>("Not valid student",HttpStatus.UNPROCESSABLE_ENTITY);

        studentRepository.save(student);

        return new ResponseEntity<>("user created successfully", HttpStatus.OK);
    }

    public ResponseEntity<List<Student>> getAllStudent() {

        List<Student> students = (List<Student>) studentRepository.findAll();

        if (students == null)
            return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);


        return new ResponseEntity<>(students, HttpStatus.OK);
    }

    public ResponseEntity<Student> getStudentByEmail(String email) {

        Student student = studentRepository.findByEmail(email);
        if (student == null)
            return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);


        return new ResponseEntity<>(student, HttpStatus.OK);
    }

    public ResponseEntity<Student> getStudentBySocialSecurity(String socialSecurityNumber) {

        Student student = studentRepository.findBySocialSecurityNumber(socialSecurityNumber);
        if (student == null)
            return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);


        return new ResponseEntity<>(null, HttpStatus.OK);
    }

}
