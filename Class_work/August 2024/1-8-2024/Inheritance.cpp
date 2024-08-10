// TYPE 1 : SINGLE LEVEL INHERITANCE

#include <iostream>
using namespace std;

class A
{
public:
    myfunc1()
    {
        cout << "This is Parent class." << endl;
    }
    myfunc2()
    {
        cout << "This is Parent 2 class." << endl;
    }
};
class B : public A
{
public:
    myfunc3()
    {
        cout << "This is child class." << endl;
    }
};

main()
{
    B obj;
    obj.myfunc1();
    obj.myfunc2();
    obj.myfunc3();
}

// TYPE 2 : MULTI LEVEL INHERITANCE

#include <iostream>
using namespace std;

// GRAND-PARENT CLASS
class G
{
public:
    house()
    {
        cout << "Grand father purchase house." << endl;
    }
};

// PARENT CLASS
class P : public G
{
public:
    car()
    {
        cout << "Father purchase Car." << endl;
    }
};

// CHILD CLASS
class Child : public P
{
public:
    respect()
    {
        cout << "Child earns Respect." << endl;
    }
};

main()
{
    Child obj;
    obj.house();
    obj.car();
    obj.respect();
}
