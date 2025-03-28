import java.util.Scanner;
/**
 *Sum of Numbers
 *Mikhael C. Gadiz
 */
public class SumOfNumbersMI {
    /**
     * method to calculate the sum of natural numbers of a number
     * @param num
     * @return
     */
    public static int calcNatural(int num) {
        int limit = 0, sum=0;
        while (limit<=num ) {
            sum+=limit;
            limit++;
        }return sum;
    }
    
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Sum of Natural Numbers");
        System.out.print("Enter a number: ");
        int num = sc.nextInt();
        // int meow = calcNatural(num);
        System.out.println("The sum of natural numbers from 1 to "+num+" is: "+calcNatural(num));
        // System.out.println(meow);
    }
}
