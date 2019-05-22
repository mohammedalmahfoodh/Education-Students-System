package com.students.students.controller;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.students.students.model.Student;

import com.students.students.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;
@CrossOrigin(origins = "*", allowedHeaders = "*",maxAge = 10000)
@JsonIgnoreProperties
@RestController()
public class StudentController {
    @Autowired
    StudentService studentService;

    @GetMapping("/")

    public String home() {

        return "home";

    }

    @GetMapping("/index")

    public String index() {

        return "index";

    }


    @PostMapping("/student/savestudent")
    public ResponseEntity<String> createStudent(@Valid @RequestBody Student student) {
        return studentService.createNewStudent(student);
    }

    @GetMapping("/student/getAllStudents")
    public ResponseEntity<List<Student>> getAllStudents() {

        return studentService.getAllStudent();

    }

    @GetMapping("/student/getById")
    public ResponseEntity<Student> getStudentById(@RequestParam int id) {

        return studentService.getStudentById(id);

    }

    @GetMapping("/student/getByEmail")
    public ResponseEntity<Student> getStudentByEmail(@RequestParam String email) {

        return studentService.getStudentByEmail(email);

    }


    @GetMapping("/student/getBySocialSecurity")
    public ResponseEntity<Student> getStudentBySocialSecurity(@RequestParam String socialSecurity) {

        return studentService.getStudentBySocialSecurity(socialSecurity);

    }
    @GetMapping("/student/getStudentsNames")
    public ResponseEntity<List<String>> getStudentsNames() {

        return studentService.getStudentsNames();

    }
    @DeleteMapping("/student/deleteStudent")
    public ResponseEntity<String> deleteStudent(@RequestParam int id){
       return studentService.deleteStudentById(id);
    }

    @PutMapping("/student/updateStudent")
    public ResponseEntity<String> updateStudent(@RequestBody Student student){
        return studentService.updateStudent(student);
    }

}
