package com.students.students.helper;

public interface GenerateId {
    public boolean checkIfExists(String generatedId);
    public String  generateId(String nameOfSubject);
    public String generateRandom(String nameOfSubject);

}
