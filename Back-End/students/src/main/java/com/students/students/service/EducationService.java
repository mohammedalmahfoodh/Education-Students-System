package com.students.students.service;

import com.students.students.model.Course;
import com.students.students.model.Education;
import com.students.students.repository.CourseRepository;
import com.students.students.repository.EducationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDate;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Set;

@Service

public class EducationService {
    @Autowired
    CourseRepository courseRepository;
    @Autowired
    EducationRepository educationRepository;

    //********************* Create New Education ***********************
    public ResponseEntity<String> CreateNewEducation(Education education) {

        if (education == null) {
            return new ResponseEntity<String>("No education to save bad request", HttpStatus.BAD_REQUEST);
        }

        LocalDate localDate = education.getStartDate().plusDays(1);
        LocalDate localDate1 = education.getEndDate().plusDays(1);
        education.setStartDate(localDate);
        education.setEndDate(localDate1);

        educationRepository.save(education);


        return new ResponseEntity<String>("Education Created Successfully", HttpStatus.OK);
    }

    //********************* Get All Educations ***********************
    public ResponseEntity<List<Education>> getAllEducations() {
        List<Education> educations = educationRepository.findAll();

        return new ResponseEntity<List<Education>>(educations, HttpStatus.OK);
    }

    //************************Get Education By Id **********************
    public ResponseEntity<Education> getEducationById(long id) {

        Education education = educationRepository.findById(id);
        return new ResponseEntity<>(education, HttpStatus.OK);
    }

    public void addCourse (long courseId,long educationId){

        Education education=educationRepository.findById(educationId);
        Course course=courseRepository.findByCourseId(courseId);
        education.getCourses().add(course);
        educationRepository.save(education);
        course.setEducation(education);
        courseRepository.save(course);
    }


    //******************************* Add courses To Education ****************************
    public ResponseEntity<String> addCoursesToEducation(List<Course> courses, long educationId) {

        if (courses.isEmpty() || courses == null) {
            return new ResponseEntity<String>("No courses to add bad request", HttpStatus.BAD_REQUEST);
        }

        Education education = educationRepository.findById(educationId);

        System.out.println("The Education name is "+education.getEducationName());
        courses.forEach((course) ->{course.setEducation(education);
        courseRepository.save(course);
         
        } );



        return new ResponseEntity<String>("Courses Added Successfully", HttpStatus.OK);
    }

    //***************************** Get education name and id  ****************************
    public ResponseEntity<Map<Long, String>> getEducationNameAndId() {

        Map<Long, String> educations = new HashMap<>();
        List<Education> educationList = educationRepository.findAll();
        for (Education education : educationList) {
            educations.put(education.getEducationId(), education.getEducationName());
        }


        return new ResponseEntity<>(educations, HttpStatus.OK);
    }


}
