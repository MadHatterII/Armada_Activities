import java.util.Scanner;
import java.util.ArrayList;
/**
 * Student Management System
 * Mikhael C. Gadiz
 */
class Student{
    String name;
    int id;
    double grade;
    
    /**
     * Constructor to initialize a Student object.
     * @param name  Student's name
     * @param id    Student's ID
     * @param grade Student's grade
     */
    public Student(String name,int id,double grade){
        this.name = name;
        this.id = id;
        this.grade = grade;
    }
    /**
     * Method to display student information.
     */
    public void displayInfo(){
        System.out.println("Name: "+name);
        System.out.println("ID: "+id);
        System.out.println("Grade: "+grade+"\n");
    }

}
class studentManager{
    ArrayList<Student> students = new ArrayList<>();

    /**
     * Method to add a student to the students list
     * @param name
     * @param id
     * @param grade
     */
    public void addStudent(String name, int id, double grade){
        students.add(new Student(name, id, grade));
    }
    
    /**
     * Method to display the information of all students
     */
    public void displayStudents(){
        System.out.println("\t<---Student Records--->\n");
        int count = 1;
        if(students.isEmpty()){
            System.out.println("No students available.");
        }else{
            for (Student student : students) {
                System.out.println("Student: "+count);
                student.displayInfo();
                count++;
            }
        }
    }

    /**
     * Method to update the grade of the student base on the student ID
     * @param updateID
     * @param newGrade
     */
    public void updateGrade(int updateID, double newGrade){
        boolean idExist = false;
        for (Student student : students) {
            if (student.id == updateID) {
                student.grade = newGrade;
                System.out.println("Grade updated successfully!");
                idExist = true;
                break;
            }else{
                System.out.println("Student ID not found!");
            }
        }
    }
}


public class StudentManagementSystemMI {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int choice = 0;
        String name;
        int id;
        double grade;
        studentManager manager = new studentManager();


        do {
            System.out.println("\t<----Student Management System ---->\n");
            System.out.println("1. Add Student");
            System.out.println("2. View All Student");
            System.out.println("3. Update Student Grade");
            System.out.println("4. Exit\n");
            System.out.print("Enter your choice: ");
            choice = sc.nextInt();
            sc.nextLine();
            
                switch (choice) {
                    case 1:
                        System.out.print("Enter Student Name: ");
                        name = sc.nextLine();
                        System.out.print("Enter Student ID: ");
                        id = sc.nextInt();
                        System.out.print("Enter Student Grade: ");
                        grade = sc.nextDouble();
                        manager.addStudent(name, id, grade);
                        System.out.println("success");
                        break;
                    case 2:
                        manager.displayStudents();

                        break;
                    case 3:
                        System.out.print("Enter ID to update: ");
                        int updateID = sc.nextInt();
                        System.out.print("Enter new grade: ");
                        double newGrade = sc.nextDouble();
                        manager.updateGrade(updateID, newGrade);
                        break;
                    case 4:
                        System.out.println("Exiting program . . .");
                        
                        break;
                
                    default:
                        System.out.println("Invalid Choice. Select from 1 to 4");
                }

        } while (choice != 4);
    }
}