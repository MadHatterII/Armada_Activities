public class assignmentOperatorsMI {
    public static void main(String[] args) {
        int x = 10;
        x+=5;
        System.out.println("The value of x is "+ x);
        x-=3;
        System.out.println("The value of x is "+ x);
        x*=2;
        System.out.println("The value of x is "+ x);
        x /= 4;
        System.out.println("The value of x is "+ x);
        x%=3;
        System.out.println("The remainder of x is "+ x);

        //calculate the final price after discound and tax
        double price = 100.0; 
        price *= 0.80; 
        price *= 1.10; 
        System.out.println("Final Price after Discount and Tax: $" + price);
    }
}
