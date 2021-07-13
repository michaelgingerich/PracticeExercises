
public class Factorial {
	public static void main(String[] args) {
		Factorial sp = new Factorial();
		sp.bootStrap();
	}

	void bootStrap() {
		System.out.println(factorial(5));
	}
	
	int factorial(int n) {
		// base case: 
	    if(n == 0){
	        return 1;
	    }
		// recursive case:
		return n*factorial(n-1);
	}
}
