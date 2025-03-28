import java.util.Scanner;
/**
 * Largest Number Finder
 * Mikhael C. Gadiz
 */
public class LargestNumberFinderMI {
    

    public static void main(String[] args) {
        int largest = 0,trig=0;
        Scanner sc = new Scanner(System.in);
        System.out.println("Largest Number Finder");
    
        while (trig != -1) {
            System.out.print("Enter a number (-1 to stop): ");
            int num = sc.nextInt();
            //stores the last entered number to our trigger
            trig = num;

            if (largest < num) {
                //stores the last entered number if it is larger than the current number
                largest = num;                
            }
        } 
        System.out.println("The largest number entered is: "+ largest);
    }
}
