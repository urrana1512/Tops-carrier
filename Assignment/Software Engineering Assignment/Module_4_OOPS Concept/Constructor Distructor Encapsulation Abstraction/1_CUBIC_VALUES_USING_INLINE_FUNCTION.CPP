// PROGRAM 1 : FIND MULTIPLICATION & CUNBIC VALUES USING  INLINE FUNCTION - (START) ----------------------------->
#include <iostream>
using namespace std;

class variable
{
    mul(float, float); // MUL MEMBER FUNCTION DECLARATION
    cube(float a);     // CUBE MEMBER FUNCTION DECLARATION
};

inline line ::mul(float a, float b) // INLINE FUNCTION FOR MULTIPLICATION
{
    return a * b;
}

inline line::cube(float a) // INLINE FUNCTION FOR CUBE
{
    return a * a * a;
}

main()
{
    variable obj; // OBJECT PF VARIABLE CLASS
    float a, b;   // VARIABLE DECLARATION
    cout << "enter A : ";
    cin >> a;
    cout << "enter B : ";
    cin >> b;

    // DISPLAY OUTPUT
    cout << "Multiplication of " << a << " and " << b << " is " << obj.mul(a, b) << endl;
    cout << "Cube of " << a << " = " << obj.cube(a) << " and " << b << " = " << obj.cube(b);
}
// PROGRAM 1 : FIND MULTIPLICATION & CUNBIC VALUES USING  INLINE FUNCTION - (END) ----------------------------->