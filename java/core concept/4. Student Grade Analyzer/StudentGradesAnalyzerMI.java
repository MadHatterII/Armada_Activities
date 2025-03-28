
import java.util.Scanner;

    public class StudentGradesAnalyzerMI {
        public static void main(String[] args) {
            Scanner sc = new Scanner(System.in);
            
            System.out.print("Enter the number of students: ");
            int numStudents = sc.nextInt();
            
            int[] grades = new int[numStudents];
            
            for (int i = 0; i < numStudents; i++) {
                System.out.print("Enter grade for student " + (i + 1) + ": ");
                grades[i] = sc.nextInt();
            }
            
            int sum = 0;
            int highest = grades[0];
            int lowest = grades[0];
            
            for (int grade : grades) {
                sum += grade;
                if (grade > highest) {
                    highest = grade;
                }
                if (grade < lowest) {
                    lowest = grade;
                }
            }
            
            double average = (double) sum / numStudents;
            
            System.out.println("\n=== Grade Analysis ===");
            System.out.println("Total Grades: " + sum);
            System.out.printf("Average Grade: %.2f\n", average);
            System.out.println("Highest Grade: " + highest);
            System.out.println("Lowest Grade: " + lowest);
            
            sc.close();
        }
    }
    

