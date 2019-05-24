package com.students.students.controller;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.students.students.model.Course;
import com.students.students.model.Education;
import com.students.students.service.EducationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;

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


}
