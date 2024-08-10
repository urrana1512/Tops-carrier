#include <iostream>
using namespace std;

class A
{
public:
    A(int a, int b) // Parameterized
    {
        cout << "A : " << a;
        cout << endl
             << "B : " << b;
    }
};

main()
{
    A obj(10, 20); // Arguments
}