import java.util.Arrays;
import java.util.Scanner;
/**
 * Student Grade Analyzer
 * Mikhael C. Gadiz
 */
class analyzeGrade {
    String  name;
    int grade[];
    /**
     * method to initialize student's name and grade
     * @param name
     * @param grades
     */
    analyzeGrade(String name, int [] grades){
        this.name = name;
        this.grade = grades;
    }
    /**
     * method to calculate the average of the students grade
     * @param grade
     * @return
     */
    public double avg(int[] grade){
        double average = 0;
        for(int i = 0; i<= grade.length-1; i++){
            average += grade[i];
        }
        return average/grade.length;
    }
    /**
     * method to classify the students grade
     */
    void classification(){
        double aver =avg(grade);
        if(aver >= 90 && aver <=100){
            System.out.println("Classification: Excellent");
        }else if(aver >= 80 && aver <=89){
            System.out.println("Classification: Good");
        }else if(aver >= 70 && aver <=79){
            System.out.println("Classification: Average");
        }else{
            System.out.println("Classification: Needs Improvement");
        }
    }
    /**
     * method to display the student's name, grades, and average
     */
    void display(){
        System.out.println("Student: "+name);
        System.out.print("Grades: ");
        for(int i = 0;i <=grade.length-1;i++){
            System.out.print(" "+grade[i]);
        }
        System.out.println("");
        System.out.println("Average: "+avg(grade));
    }
}

public class studentGradeAnalyzerMI {

    public static void main(String[] args) {
        
        char decision = 'y';
        do {
            Scanner sc = new Scanner(System.in);
            String name;
            int [] grades = new int [3];

            System.out.println("\t <---Student Grade Analyzer--->"+"\n");

            System.out.print("Enter student name: ");
            name = sc.nextLine();
            System.out.println("Enter 3 grades");
            
            int j = 1;
            for(int i = 0; i<=2;i++){
                System.out.print("Grade "+j+" : ");
                grades [i] = sc.nextInt();
                j++;
            };

            // System.out.println(name);
            // System.out.println(Arrays.toString(grades));
            analyzeGrade student = new analyzeGrade(name, grades);
            student.display();
            student.classification();

            System.out.print("Do you want to enter a new student? (y or n)\t");
            sc.nextLine();
            decision = sc.nextLine().charAt(0);

        } while (decision == 'y'|| decision == 'Y');
        System.out.println("Thank you for using me huhu");  


    }


}
