// Method OverLoading
#include <iostream>
using namespace std;

class A
{
public:
    // Same Function name but different parameteres
    myfunc(int a)
    {
        cout << "This is Function 1." << endl;
    }
    myfunc(string a)
    {
        cout << "This is Function 2." << endl;
    }
    myfunc(int a, int b)
    {
        cout << "This is Function 3." << endl;
    }
    myfunc()
    {
        cout << "This is Function 4." << endl;
    }
};
main()
{
    A obj;
    obj.myfunc(10);
    obj.myfunc("Hello");
    obj.myfunc(10, 20);
    obj.myfunc();
}