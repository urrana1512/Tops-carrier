#include <iostream>
using namespace std;

class A
{
public:
    fun1()
    {
        cout << "This is the function 1." << endl;
    }
};

class B : public A
{
public:
    fun1()
    {
        A::fun1(); // scope resolution operator
        cout << "This is the function 2." << endl;
    }
};

int main()
{
    B obj;
    obj.fun1();
}

// different Type of inheritance
#include <iostream>
using namespace std;

class A
{
public:
    fun1()
    {
        cout << "This is the function 1." << endl;
    }
};

class B
{
public:
    fun1()
    {
        // A::fun1(); // scope resolution operator
        cout << "This is the function 2." << endl;
    }
};

class c : public A, public B
{
public:
    fun1()
    {
        // A::fun1(), B::fun1();

        A::fun1(); // scope resolution operator
        B::fun1(); // scope resolution operator
        cout << "This is the function 2." << endl;
    }
};

int main()
{
    C obj;
    obj.fun1();
}
