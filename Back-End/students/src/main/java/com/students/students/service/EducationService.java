package com.students.students.service;

import com.students.students.model.Course;
import com.students.students.model.Education;
import com.students.students.repository.EducationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDate;
import java.util.List;

@Service
@Transactional
public class EducationService {

    @Autowired
    EducationRepository educationRepository;

    //********************* Create New Education ***********************
    public ResponseEntity<String> CreateNewEducation(Education education) {

        if (education == null) {
            return new ResponseEntity<String>("No education to save bad request", HttpStatus.BAD_REQUEST);
        }

        LocalDate localDate= education.getStartDate().plusDays(1);
        LocalDate localDate1= education.getEndDate().plusDays(1);
        education.setStartDate(localDate);
        education.setEndDate(localDate1);

        educationRepository.save(education);


        return new ResponseEntity<String>("Education Created Successfully", HttpStatus.OK);
    }


    //********************* Add courses To Education ****************************
    public ResponseEntity<String> addCoursesToEducation(List<Course> courses) {

        if (courses.isEmpty() || courses == null) {
            return new ResponseEntity<String>("No courses to add bad request", HttpStatus.BAD_REQUEST);
        }


        return new ResponseEntity<String>("Courses Added Successfully", HttpStatus.OK);
    }


}
