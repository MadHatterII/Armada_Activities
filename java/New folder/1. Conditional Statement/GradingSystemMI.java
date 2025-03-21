import java.util.Scanner;

/**
 * Grading System
 * Mikhael C. Gadiz
 */
public class GradingSystemMI {
    
    /**
     * Function to determine the equevalent letter of a grade
     * returns both the letter and the feedback of the grade
     * @param grade
     * @return
     */
    public static String getGradeFeedback(int grade) {
        char gradeL;
        String feedback;

        if (grade >= 90 && grade <= 100) {
            gradeL = 'A';
            feedback = "Excellent job!";
        } 
        else if (grade >= 75 && grade <= 89) {
            gradeL = 'B';
            feedback = "Good job!";
        } 
        else if (grade >= 50 && grade <= 74) {
            gradeL = 'C';
            feedback = "A little bit more effort!";
        } 
        else if (grade >= 0 && grade < 50) {
            gradeL = 'F';
            feedback = "OMG, you failed.";
        } 
        else {
            return "Invalid input! Max grade is 100 and minimum grade is 0.";
        }

        return "Grade: " + gradeL + "\nFeedback: " + feedback;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        char decision = 'y';
        while (decision == 'y' || decision == 'y') {
            System.out.print("Enter your grade: ");
            int grade = sc.nextInt();
            //passes grade to the function
            System.out.println(getGradeFeedback(grade));

            System.out.println("Do you want to calculate again? y or n");
            sc.nextLine();
            decision = sc.nextLine().charAt(0);
            sc.close(); 
        }
    }
}
