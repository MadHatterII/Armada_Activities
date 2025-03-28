import java.util.Scanner;

/**
 * Manual Number Converter 
 * Mikhael C. Gadiz1
 */

public class ManualNumberConverterMI {
    /**
     * Method to convert decimal to binary
     * @param decimal
     * @return
     */
    public static String toBinary(int decimal) {
        String binary = "";
        while (decimal > 0) {
            binary = (decimal % 2) + binary;
            decimal /= 2;
        }
        return binary.isEmpty() ? "0" : binary;
    }

    /**
     * Method to cenvert decimal to octal
     * @param decimal
     * @return
     */
    public static String toOctal(int decimal) {
        String octal = "";
        while (decimal > 0) {
            octal = (decimal % 8) + octal;
            decimal /= 8;
        }
        return octal.isEmpty() ? "0" : octal;
    }

    /**
     * Method to convert deecimal to hexadecimal
     * @param decimal
     * @return
     */
    public static String toHexadecimal(int decimal) {
        String hexChars = "0123456789ABCDEF";
        String hexadecimal = "";
        while (decimal > 0) {
            hexadecimal = hexChars.charAt(decimal % 16) + hexadecimal;
            decimal /= 16;
        }
        return hexadecimal.isEmpty() ? "0" : hexadecimal;
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter a decimal number: ");
        int decimal = scanner.nextInt();
        scanner.close();
        
        System.out.println("\n=== Number System Conversions ===");
        System.out.println("Binary: " + toBinary(decimal));
        System.out.println("Octal: " + toOctal(decimal));
        System.out.println("Hexadecimal: " + toHexadecimal(decimal));
    }
}
