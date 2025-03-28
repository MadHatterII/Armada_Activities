/**
 * Understanding Classes, Object, and Methods
 * Mikhael C. Gadiz
 */
class Car {
    String brand;
    int year;

    Car(String brand, int year) {
        this.brand = brand;
        this.year = year;
    }
    
    void details() {
        System.out.println("Brand: " + brand);
        System.out.println("Year: " + year);
    }
}

public class UnderstandingMI {
    public static void main(String[] args) {
        Car car = new Car("Toyota", 2020);
        car.details();
    }
}
