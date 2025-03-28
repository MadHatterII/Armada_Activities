import java.util.Scanner;

public class GuessingGameMI {

    public static void main(String[] args) {
        int number = 0,count = 0;
        Scanner sc = new Scanner(System.in);
        System.out.println("CAN YOU GUESS THE NUMBER???? hhhmmm");
        //generates random number from 1 to 50
        int randomNum = (int)(Math.random() * 50)+1;

        while (number!=randomNum) {
            System.out.print("Guess a number from 1 to 50: ");
            number = sc.nextInt();
            //counts how many iteration is done
            count++;
            
            if (number > randomNum) {
                System.out.println("Too high! Try again");
            }else{
                System.err.println("Too low! Try Again");
            }
        }
        System.out.println("Correct! you guessed it in "+count+" attemps.");
    }
}
