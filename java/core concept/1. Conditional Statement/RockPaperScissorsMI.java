import java.util.Random;
import java.util.Scanner;


/**
 * Rock Paper Scissors
 * Mikhael C. Gadiz
 */
public class RockPaperScissorsMI {
    /**
     * method that takes the user's choice
     * @return
     */
    public static char getUserChoice() {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter your choice (R, P, S): ");
        char choice = Character.toUpperCase(sc.next().charAt(0));
        return choice;
    }
    /**
     * method to generate the computers choice
     * @return
     */
    public static char getComputerChoice() {
        char[] choices = {'R', 'P', 'S'};
        return choices[new Random().nextInt(3)];
    }
    /**
     * method that compares the choice of the computer and the user
     * this will determine the winner
     * @param userChoice
     * @param computerChoice
     * @return
     */
    public static String determineWinner(char userChoice, char computerChoice) {
        if (userChoice == computerChoice) {
            return "It's a tie!";
        }
        switch (userChoice + "" + computerChoice) { 
            case "RS", "PR", "SP":
                return "You win!";
            case "RP", "PS", "SR":
                return "You lose!";
            default:
                return "Invalid input! Please enter R, P, or S.";
        }
    }

    public static void main(String[] args) {
        char decision = 'y';
        Scanner sc = new Scanner(System.in);
        do {
            System.out.println("Welcome to Rock, Paper, Scissors!");
            char userChoice = getUserChoice();
            char computerChoice = getComputerChoice();
            System.out.println("Computer chose: " + computerChoice);
            System.out.println(determineWinner(userChoice, computerChoice));

            System.out.println("Do you want to play again? y or n");
            decision = sc.nextLine().charAt(0);
        } while (decision == 'y' || decision == 'Y');
    }
}
