package com.students.students.controller;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.students.students.model.Course;
import com.students.students.model.Education;
import com.students.students.service.EducationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;
import java.util.Map;
import java.util.Set;

@CrossOrigin(origins = "*", allowedHeaders = "*",maxAge = 10000)
@JsonIgnoreProperties
@RestController()
public class EducationController {
    @Autowired
    EducationService educationService;

    @PostMapping("/education/createEducation")
    public ResponseEntity<String> createCourse(@Valid @RequestBody Education education) {
        return educationService.CreateNewEducation(education);
    }

    @GetMapping("/education/getAll")
    public ResponseEntity<List<Education>> getAllEducations() {
        return educationService.getAllEducations();
    }

    @GetMapping("/education/getNames")
    public ResponseEntity<Map<Long,String>>getEducationsNameAndId(){

        return educationService.getEducationNameAndId();
    }
    @GetMapping("/education/getById")
    public ResponseEntity<Education>getEducationById(@RequestParam  long eductionId){

        return educationService.getEducationById(eductionId);
    }

    @PostMapping("/education/addAllCourses")
    public ResponseEntity<String>addCoursesToEducation(@RequestBody List<Course>courses,@RequestParam long id){

        return educationService.addCoursesToEducation(courses,id);
    }
    @PostMapping("/education/addCourse/{courseId}/{educationId}")
    public void addCourseToEducation(@PathVariable long courseId,@PathVariable long educationId){

        educationService.addCourse(courseId,educationId);
    }

}


