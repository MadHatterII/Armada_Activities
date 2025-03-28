import java.util.Scanner;
/**
 * Multiplication Table
 * Mikhael C. Gadiz
 */
public class MultiplicationTableMI {

    /**
     * method to print the multiplication table of a given number 
     * @param num
     */
    public static void multiply( int num){
        int product;
        for(int limit = 1; limit <=10; limit++){
            product = num * limit;
            System.out.println(num+" x "+limit+" = "+product);
        }
        
    }
    public static void main(String[] args){
        char choice = 'y';
        do {
            
            Scanner sc = new Scanner(System.in);
            System.out.println("Multiplication Table");

            System.out.println("Enter a number to multiply");
            int num = sc.nextInt();
            //passes the given number to the method
            multiply(num);
            
            System.out.println("Do you want to multiply again?");
            choice = Character.toLowerCase(sc.next().charAt(0));
        } while (choice == 'y');
        System.out.println("Thank you for using me huehue");
    }
}