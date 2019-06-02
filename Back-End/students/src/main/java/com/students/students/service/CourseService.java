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

public class CourseService {
    @Autowired
    CourseRepository courseRepository;
   // GenerateCourseIdImpl generateCourseIdImpl=new GenerateCourseIdImpl();

    ////************ Create new courses *****************

    public ResponseEntity<String> createNewCourse(Course course) {
        if (course == null)
            return new ResponseEntity<>("There is no course to save", HttpStatus.UNPROCESSABLE_ENTITY);

         LocalDate localDate= course.getStartDate().plusDays(1);
         LocalDate localDate1= course.getEndDate().plusDays(1);
         course.setStartDate(localDate);
         course.setEndDate(localDate1);
        

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

    public ResponseEntity<Course> getCourseById(long courseId) {

        Course course = courseRepository.findByCourseId(courseId);
        if (course == null)
            return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);


        return new ResponseEntity<>(course, HttpStatus.OK);
    }

    //**************** Delete course By Id *************
    public ResponseEntity<String> deleteCourseById(long id) {

        if (id <= 0)
            return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);

        Course courseToDelete = courseRepository.findByCourseId(id);
        if (courseToDelete == null) {
            return new ResponseEntity<>("Course not exists to delete", HttpStatus.NOT_FOUND);
        }
        courseRepository.deleteById(id);

        return new ResponseEntity<>("Course deleted successfully", HttpStatus.OK);
    }
    //**************** Update Course By Id *************
    public ResponseEntity<String> updateCourse(Course course) {

        Course courseInDB = courseRepository.findByCourseId(course.getCourseId());
        if (courseInDB == null)
            return new ResponseEntity<>("Course not exists to update", HttpStatus.NOT_FOUND);

        LocalDate localDate= course.getStartDate().plusDays(1);
        LocalDate localDate1= course.getEndDate().plusDays(1);
        course.setStartDate(localDate);
        course.setEndDate(localDate1);

        courseRepository.save(course);

        return new ResponseEntity<>("Course updated successfully", HttpStatus.OK);
    }

}
