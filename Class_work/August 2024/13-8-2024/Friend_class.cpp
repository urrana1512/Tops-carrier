#include <iostream>
using namespace std;

class A
{
private:
    int a = 10, b = 20;

    friend class B;
};

class B
{
public:
    fun(A &obj)
    {
        cout << "A : " << obj.a << endl;
        cout << "B : " << obj.b << endl;
    }
};

main()
{
    A obj;

    B obj1;
    obj1.fun(obj);
}

// Factorial
#include <iostream>
using namespace std;

class Variable
{
private:
    int n, i, fact = 1;

    friend class Factorial;
};

class Factorial
{
public:
    fac(Variable &obj)
    {
        cout << "Enter Number : ";
        cin >> obj.n;

        for (obj.i = 1; obj.i <= obj.n; obj.i++)
        {
            obj.fact = obj.fact * obj.i;
        }
        cout << "Factorial : " << obj.fact;
    }
};

main()
{
    Variable obj;

    Factorial obj1;
    obj1.fac(obj);
}