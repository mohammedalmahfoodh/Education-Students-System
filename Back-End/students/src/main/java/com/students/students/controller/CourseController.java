package com.students.students.controller;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.students.students.model.Course;
import com.students.students.model.Student;
import com.students.students.service.CourseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;
@CrossOrigin(origins = "*", allowedHeaders = "*",maxAge = 10000)
@JsonIgnoreProperties
@RestController()
public class CourseController {

    @Autowired
    CourseService courseService;

    @PostMapping("/course/savecourse")
    public ResponseEntity<String> createCourse(@Valid @RequestBody Course course) {
        return courseService.createNewCourse(course);
    }

    @GetMapping("/course/getAllCourses")
    public ResponseEntity<List<Course>> getAllCourses() {

        return courseService.getAllCourse();

    }
    @GetMapping("/course/getCourseById")
    public ResponseEntity<Course> getOnCourseById(@RequestParam long id){

        return courseService.getCourseById(id);
    }
    @DeleteMapping("/course/deleteCourse")
    public ResponseEntity<String> deleteCourse(@RequestParam long id){
        return courseService.deleteCourseById(id);
    }
    @PutMapping("/course/updateCourse")
    public ResponseEntity<String> updateStudent(@RequestBody Course course){
        return courseService.updateCourse(course);
    }

}
