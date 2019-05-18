package com.students.students.controller;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.students.students.model.Student;

import com.students.students.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

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

    @GetMapping("/student/getByEmail")
    public ResponseEntity<Student> getStudentByEmail(@RequestParam String email) {

        return studentService.getStudentByEmail(email);

    }

    @GetMapping("/student/getBySocialSecurity")
    public ResponseEntity<Student> getStudentBySocialSecurity(@RequestParam String socialSecurity) {

        return studentService.getStudentBySocialSecurity(socialSecurity);

    }

}
