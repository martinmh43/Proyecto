import java.util.Scanner;

/**
 * Write a description of class HolaMundo here.
 * 
 * @author (your name) 
 * @version (a version number or a date)
 */
public class HolaMundo
{
    private int x;
    public static void main(String[] args){
        System.out.println("Introduce un numero");
        Scanner sc = new Scanner(System.in);
        int var = (int)sc.nextInt();
        var = 5;
        var = metodo(var);
    }
    /**
     * Constructor for objects of class HolaMundo
     */
    public HolaMundo()
    {
        x = 0;
    }
    public static int metodo(int var){
        return var*2;
    }
    /**
     * An example of a method - replace this comment with your own
     * 
     * @param  y   a sample parameter for a method
     * @return     the sum of x and y 
     */
    public int sampleMethod(int y)
    {
        return x + y;
    }
}
