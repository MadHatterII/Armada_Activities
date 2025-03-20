public class relationalOperatorsMI {
    
    public static void main(String[] args) {
        int x =  25, y = 8;
        //(==, !=, >, <, >=, <=)

        //equal
        System.out.println(x+" == "+y+": "+(x==y));
        //not equal
        System.out.println(x+" != "+y+": "+(x!=y));
        //greater than
        System.out.println(x+" > "+y+": "+(x>y));
        //Less than
        System.out.println(x+" < "+y+": "+(x<y));
        //greater than or equal
        System.out.println(x+" >= "+y+": "+(x>=y));
        //Less than or equal
        System.out.println(x+" <= "+y+": "+(x<=y));

        //Bonus task
        if(10<=x && x<=50){
            System.out.println("x is within the range");
        }
        else{System.out.println("x is outside the range");}
    }
}
