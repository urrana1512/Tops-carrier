#include <iostream>
using namespace std;

class Abstract
{
public:
    virtual salary() = 0; // Blank Pure Virtual Function
};

class Udit : public Abstract
{
public:
    salary()
    {
        cout << "Udit got 20k." << endl;
    }
};

class Rohan : public Abstract
{
public:
    salary()
    {
        cout << "Rogan got 30k." << endl;
    }
};

class Dhruvil : public Abstract
{
public:
    salary()
    {
        cout << "Udit got 40k." << endl;
    }
};

main()
{
    // Abstract obj;
    Udit obj;
    obj.salary();
    Rohan obj;
    obj1.salary();
    Dhruvil obj;
    obj2.salary();
}