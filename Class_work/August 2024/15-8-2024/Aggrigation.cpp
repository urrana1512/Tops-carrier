#include <iostream>
using namespace std;

class A
{
public:
    string name, city;

    hello(string name, string city)
    {
        this->name = name;
        this->city = city;
    }
};

class B
{
private:
    A *a; // Reference
public:
    int id;
    show1(int id, A *a)
    {
        this->id = id;
        this->a = a;
    }
    show2()
    {
        cout << "Name : " << a->name << endl;
        cout << "Id : " << this->name;
    }
};

main()
{
    A obj;
    obj.hello("Udit", "Ahmedabad");

    B obj;
    obj1.show1(1, &obj);
    obj1.show2();
}