import java.util.Scanner;
/**
 * BMI Calculator
 * Mikhael C. Gadiz
 */
public class BMICalculatorMI {

    public static void main(String[] args) {
        
        Scanner sc = new Scanner(System.in);
        char decision = 'y';
    
        while (decision == 'y' || decision ==  'Y' ) {
            System.out.println("BMI Calculator");
            
            System.out.print("Enter your weight (kg): ");
            double weight = sc.nextDouble();

            System.out.print("Enter your height (m): ");
            double height = sc.nextDouble();

            BMICalc(weight, height);

            System.out.println("Do you want to calculate again? y or n");
            sc.nextLine();
            decision = sc.nextLine().charAt(0);  
        }
        sc.close();
    }
    /**
     * function that takes weight and height as parameters and calculate the bmi
     * displays the health status
     * @param weight
     * @param height
     */
    static void BMICalc(double weight, double height){
        double bmi =   weight /(height * height);
        String status = ( bmi < 18.5 ) ? "Underwieght": (bmi >= 18.5 && bmi <= 24.9) ? "Normal": ( bmi >= 25 && bmi<=29.9 ) ? "Overweight": "Obese";
        System.out.println("Health Status: " + status);

    }
    
}
