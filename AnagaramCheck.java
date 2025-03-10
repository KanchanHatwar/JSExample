package String;

import java.util.Arrays;
import java.util.Scanner;

public class AnagaramCheck {

	public static boolean checkAnagram(String str1, String str2) {
        // If lengths are different, they cannot be anagrams
        if (str1.length() != str2.length()) {
            return false;
        }

     
        // Convert strings to char arrays
        char[] s1 = str1.toCharArray();
        char[] s2 = str2.toCharArray();

        // Sort both arrays
        Arrays.sort(s1);
        Arrays.sort(s2);

        // Compare sorted arrays
        return Arrays.equals(s1, s2);
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.println("Enter First String:");
        String str1 = sc.next();
        
        System.out.println("Enter Second String:");
        String str2 = sc.next();

        // Directly print the boolean result
        System.out.println(checkAnagram(str1, str2));

        sc.close();
}
}
