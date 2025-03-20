
public class logicalOperatorsMI { 
    public static void main(String[] args) {
        boolean a = true;
        boolean b = false;

        System.out.println("a && b: " + (a && b)); 
        System.out.println("a || b: " + (a || b)); 
        System.out.println("!a: " + (!a));        
        System.out.println("!b: " + (!b));        

        // Loan Eligibility Check
        int creditScore = 750;  
        double annualIncome = 55000;  

        // Loan eligibility condition
        if (creditScore > 700 && annualIncome > 50000) {
            System.out.println("Loan Eligibility: Eligible");
        } else {
            System.out.println("Loan Eligibility: Not Eligible");
        }
    }
}
