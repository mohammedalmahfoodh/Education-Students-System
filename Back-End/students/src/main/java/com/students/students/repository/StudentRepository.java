package com.students.students.repository;


import com.students.students.model.Student;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;


public interface StudentRepository extends CrudRepository<Student, Integer> {

   Student findByEmail(String email);
   Student findBySocialSecurityNumber(String socialSecurityNumber);

}