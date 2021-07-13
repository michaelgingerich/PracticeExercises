
public class InsertionSort {
	public static void main(String[] args) {
		InsertionSort sp = new InsertionSort();
		sp.bootStrap();
	}

	void bootStrap() {
		int[] array = {22, 11, 99, 88, 9, 7, 42};
		insertionSort(array);
		System.out.println("Array after sorting:  " + array);
	}
	
	void insert (int[] array, int rightIndex, int value) {
		int j;
		for(j = rightIndex; j >= 0 && array[j] > value; j--) {
	        array[j + 1] = array[j];
	    }   
	    array[j + 1] = value; 
	}

	void insertionSort (int[] array) {
	    for(int i = 1; i < array.length; i++){
	        insert(array, i - 1, array[i]);
	    }
	}
}
