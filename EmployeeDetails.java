package String;

import java.util.ArrayList;
import java.util.List;

class Employee {
    int id;
    String name;
    double salary;

    //  Constructor
    public Employee(int id, String name, double salary) {
        this.id = id;
        this.name = name;
        this.salary = salary;
    }

    public void displayDetails() {
        System.out.println("Employee Id: " + id);
        System.out.println("Employee Name: " + name);
        System.out.println("Employee Salary: " + salary);
        System.out.println("******************************");
    }
}

public class EmployeeDetails {
    public static void main(String[] args) {
    	//object Create
        Employee e1 = new Employee(1, "Neha", 12000);
        Employee e2 = new Employee(2, "Raha", 23444);
        Employee e3 = new Employee(3, "Juned", 9899);

        // List Create
        List<Employee> emp = new ArrayList<Employee>();
       //add is method of constructor
        emp.add(e1);
        emp.add(e2);
        emp.add(e3);

        // Display information
        for (Employee i : emp) {
            i.displayDetails();
        }
    }
}
