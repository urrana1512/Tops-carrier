// PROGRAM 1 : CALCULATOR - (START) ----------------------------->
#include <iostream>
using namespace std;
class calc // calc class
{
public:
    int n1, n2;       // data member
    add(int a, int b) // add function return sum
    {
        return a + b;
    }
    sub(int a, int b) // sub function return subtraction
    {
        return a - b;
    }
    mul(int a, int b) // mul function return multiplication
    {
        return a * b;
    }
    div(int a, int b) // div function return division
    {
        if (a == 0)
        {
            cout << "Cant'possible";
        }
        else
        {
            return a / b;
        }
    }
};
main()
{
    calc c1;       // c1 object of calc class
    int n1, n2, c; // variable declaration for storing values by user
    cout << "Enter No1=";
    cin >> n1;
    cout << "Enter No2=";
    cin >> n2;
    while (1) // infinite while loop for menu driven
    {
        cout << "press 1 for addition" << endl;
        cout << "press 2 for Subtraction" << endl;
        cout << "press 3 for Multiplication" << endl;
        cout << "press 4 for Division" << endl;
        cout << "press 0 for exit" << endl;
        cin >> c;
        if (c == 0)
        {
            break;
        }
        else if (c == 1)
        {
            cout << "Addition=" << c1.add(n1, n2) << endl;
        }
        else if (c == 2)
        {
            cout << "Addition=" << c1.sub(n1, n2) << endl;
        }
        else if (c == 3)
        {
            cout << "Addition=" << c1.mul(n1, n2) << endl;
        }
        else
        {
            cout << "Addition=" << c1.div(n1, n2) << endl;
        }
    }
}

// PROGRAM 1 : CALCULATOR - (END) ----------------------------->