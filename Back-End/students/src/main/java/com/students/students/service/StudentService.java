package com.students.students.service;

import com.students.students.model.Student;
import com.students.students.repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Service
@Transactional
public class StudentService {
    @Autowired
    StudentRepository studentRepository;

    //**************** Create and Save New student *************
    public ResponseEntity<String> createNewStudent(Student student) {

        if (student == null)
            return new ResponseEntity<>("Not valid student", HttpStatus.UNPROCESSABLE_ENTITY);

        studentRepository.save(student);

        return new ResponseEntity<>("user created successfully", HttpStatus.OK);
    }
    //**************** Get All Students *************

    public ResponseEntity<List<Student>> getAllStudent() {

        List<Student> students = (List<Student>) studentRepository.findAll();

        if (students == null)
            return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);


        return new ResponseEntity<>(students, HttpStatus.OK);
    }

    //**************** Get student by ID *************
    public ResponseEntity<Student> getStudentById(int id) {

        Student student = studentRepository.findById(id);
        if (student == null)
            return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);


        return new ResponseEntity<>(student, HttpStatus.OK);
    }


    //**************** Get student by Email *************
    public ResponseEntity<Student> getStudentByEmail(String email) {

        Student student = studentRepository.findByEmail(email);
        if (student == null)
            return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);


        return new ResponseEntity<>(student, HttpStatus.OK);
    }

    //**************** Get student by BySocialSecurity *************
    public ResponseEntity<Student> getStudentBySocialSecurity(String socialSecurityNumber) {

        Student student = studentRepository.findBySocialSecurityNumber(socialSecurityNumber);
        if (student == null)
            return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);


        return new ResponseEntity<>(null, HttpStatus.OK);
    }

    //**************** Get student Names *************
    public ResponseEntity<List<String>> getStudentsNames() {
        List<Student> studentsList;
        List<String> studentsNames;

        studentsList = (List<Student>) studentRepository.findAll();
        studentsNames = studentsList.stream().map(student -> student.getName()).collect(Collectors.toList());


        return new ResponseEntity<>(studentsNames, HttpStatus.OK);
    }

    //**************** Delete student By Id *************
    public ResponseEntity<String> deleteStudentById(int id) {

        if (id <= 0)
            return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);

        Student studentToDelete = studentRepository.findById(id);
        if (studentToDelete == null){
            return new ResponseEntity<>("Student not exists to delete", HttpStatus.NOT_FOUND);
        }
        studentRepository.deleteById(id);

        return new ResponseEntity<>("Student deleted successfully", HttpStatus.OK);
    }

}
