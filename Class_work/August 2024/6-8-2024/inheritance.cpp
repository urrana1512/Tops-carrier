// type 3 : Multiple Inheritance
#include <iostream>
using namespace std;

class A
{
public:
    home()
    {
        cout << "this mothod belongs to home" << endl;
    }
};

class B
{
public:
    home1()
    {
        cout << "this mothod belongs to home1" << endl;
    }
};

class C : public A, public B
{
public:
    str()
    {
        cout << "this class belongs to child" << endl;
    }
};

main()
{
    C obj;
    obj.home();
    obj.home1();
    obj.str();
}

// type 4 : Hirarchy Inheritance
#include <iostream>
using namespace std;

class A
{
public:
    parent()
    {
        cout << "This is child." << endl;
    }
};

class B : public A
{
public:
    child1()
    {
        cout << "This is parent 1." << endl;
    }
};

class C : public A
{
public:
    child2()
    {
        cout << "This is parent 2." << endl;
    }
};

main()
{
    B obj;
    obj.parent();
    obj.child1();

    C obj1;
    obj1.child2();
    obj1.parent();
}

// TYPE 5 : Hybride Inheritance
#include <iostream>
using namespace std;

// Grand Parent
class A
{
public:
    G()
    {
        cout << "This is Grand Parent." << endl;
    }
};

// Parent 1 relation with Grand Parent
class B : public A
{
public:
    P1()
    {
        cout << "This is Parent 1." << endl;
    }
};

// parent 2
class C
{
public:
    P2()
    {
        cout << "This is Parent 2." << endl;
    }
};

// Child relation with Grand Parent , Parent 1 & Parent 2
class D : public C, public B
{
public:
    Child()
    {
        cout << "This is Child." << endl;
    }
};

main()
{
    D obj;
    obj.G();
    obj.P1();
    obj.P2();
    obj.Child();
}