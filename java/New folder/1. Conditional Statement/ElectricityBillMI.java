import java.util.Scanner;

/**
 * Electricity bill calculator
 * Mikhael C. Gadiz
 */
public class ElectricityBillMI {

    /**
     * function to calculate the electricity base on the input value
     * returns the calculated bill
     * @param num
     * @return
     */
    public static double calculateBIll(int num){
        double bill = 0.0;
        if (num >= 300) {
            bill += num *1.50;
            num -= 100;
            bill += num*2.50;
            num -= 200;
            bill += num* 3.50;
        }else{
            if (num <= 100) {
                bill += num*1.50;

            //this will execute if the number is greater than 100 but less than 300
            }else{
                bill += num*1.50;
                num -= 100;
                bill += num *2.50;
            }

        }
        return bill;
    }
    
    public static void main(String[] args) {
        char decision = 'y';
        do {
            Scanner sc = new Scanner(System.in);
            System.out.println("Electric Bill generator");
            
            System.err.print("Enter number of units consumed: ");
            int num = sc.nextInt();

            System.out.print("Total bill: ");
            System.out.println(calculateBIll(num));
            System.out.println("Do you want to calculate again? y || n");
            sc.nextLine();
            decision = sc.nextLine().charAt(0);
        } while (decision == 'y' || decision == 'Y');
        System.out.println("Thank you for using me huhu");  
    }
    
}
