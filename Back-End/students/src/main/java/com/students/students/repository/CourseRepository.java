package com.students.students.repository;

import com.students.students.model.Course;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CourseRepository extends CrudRepository<Course,Long> {
    Course findByCourseId(Long courseId);
    void deleteById(Long id);
}
