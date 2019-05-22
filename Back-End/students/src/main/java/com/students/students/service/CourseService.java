package com.students.students.service;

import com.students.students.helper.GenerateCourseIdImpl;
import com.students.students.helper.GenerateId;
import com.students.students.model.Course;

import com.students.students.model.Student;
import com.students.students.repository.CourseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collector;
import java.util.stream.Collectors;

@Service
@Transactional
public class CourseService {
    @Autowired
    CourseRepository courseRepository;
   // GenerateCourseIdImpl generateCourseIdImpl=new GenerateCourseIdImpl();

    public ResponseEntity<String> createNewCourse(Course course) {
        if (course == null)
            return new ResponseEntity<>("There is no course to save", HttpStatus.UNPROCESSABLE_ENTITY);

        List<Course>courseList= (List<Course>) courseRepository.findAll();
        for (Course course1:courseList  ) {
            if (course1.getCourseName().equalsIgnoreCase(course.getCourseName()));
            return new ResponseEntity<>("The course is already exists",HttpStatus.BAD_REQUEST);
        }

     //   generateCourseIdImpl.generateId(course.getCourseSerialNumber());
        LocalDate startDate=LocalDate.now().plusWeeks(3);
        LocalDate endDate=LocalDate.now().plusWeeks(10);
        course.setStartDate(startDate);
        course.setEndDate(endDate);
        courseRepository.save(course);

        return new ResponseEntity<>("Course saved successfully", HttpStatus.OK);
    }

    //******************* Get All Courses ********************
    public ResponseEntity<List<Course>> getAllCourse() {

        List<Course> courseList = (List<Course>) courseRepository.findAll();

        if (courseList == null)
            return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);



        return new ResponseEntity<>(courseList, HttpStatus.OK);
    }

    //*********************** Get Course By Id *****************

    public ResponseEntity<Course> getCourseById(Long courseId) {

        Course course = courseRepository.findByCourseId(courseId);
        if (course == null)
            return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);


        return new ResponseEntity<>(course, HttpStatus.OK);
    }

}
