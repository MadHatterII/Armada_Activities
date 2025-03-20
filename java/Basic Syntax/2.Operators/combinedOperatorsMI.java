public class combinedOperatorsMI {
    public static void main(String[] args) {
        int a = 5;
        int b = 10;

        if (a > 0 && b > 0) {
            a += b; // a = a + b;
            b *= 2; // b = b * 2;
        }

        System.out.println("Final value of a: " + a);
        System.out.println("Final value of b: " + b);
    }
}
