package com.students.students.helper;
import java.security.SecureRandom;
import java.util.List;

import com.students.students.model.Course;
import com.students.students.repository.CourseRepository;
import org.springframework.beans.factory.annotation.Autowired;

public class GenerateCourseIdImpl implements GenerateId {
    private static final String SALT = "salt";
    private SecureRandom secureRandom;

    private List<Course>courseList;



    @Autowired
    CourseRepository courseRepository;

    @Override
    public boolean checkIfExists(String generatedId) {
     courseList= (List<Course>) courseRepository.findAll();
        for (Course course:courseList ) {
        //    if (course.getCourseSerialNumber().equalsIgnoreCase(generatedId))
                return true;
        }
        return false;
    }

    @Override
    public String generateId(String courseName) {
        String generatedCourseId;
        boolean check=true;

             while (check){
                 generatedCourseId=   generateRandom(courseName);
                 if (checkIfExists(generatedCourseId)!=true){
                     return generatedCourseId;
                 }


             }


        return null;
    }

    @Override
    public String generateRandom(String courseName) {
        secureRandom=new SecureRandom(SALT.getBytes());
        String firstThreeLetters="";
        if (courseName.length()>2){
             firstThreeLetters=courseName.substring(0,2);
        }else if(courseName.length()<3&&courseName.length()>0){
            firstThreeLetters=courseName+"c";
        }else return "There is no valid course name";

         String generatedId=firstThreeLetters+secureRandom;

        return generatedId;
    }
}
