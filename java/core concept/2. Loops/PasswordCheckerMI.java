import java.util.Scanner;

public class PasswordCheckerMI {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("PASSWORD CHECKER");
        String pass ="";
        
        do {
            System.out.print("Enter your password: ");
            pass = sc.nextLine();
            if (!pass.equals("java123")) {
                System.out.println("Incorrect password! Try again");
            }
        } while (!pass.equals("java123"));
        System.out.println("Access granted!");

    }
}
