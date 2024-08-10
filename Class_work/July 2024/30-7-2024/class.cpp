#include <iostream>
using namespace std;

class Myclass
{
public:
    int a, b, i, n, factorial = 1, c = 0;

    input()
    {
        cout << "Enter A : ";
        cin >> a;
        cout << "Enter B : ";
        cin >> b;
    }

    add()
    {
        // cout << "Enter A : ";
        // cin >> a;
        // cout << "Enter B : ";
        // cin >> b;
        cout << "Addition : " << a + b << endl;
    }
    sub()
    {
        // cout << "Enter A : ";
        // cin >> a;
        // cout << "Enter B : ";
        // cin >> b;
        cout << "Substraction : " << a - b << endl;
    }
    mul()
    {
        // cout << "Enter A : ";
        // cin >> a;
        // cout << "Enter B : ";
        // cin >> b;
        cout << "Multiplication : " << a * b << endl;
    }
    fact()
    {
        cout << "Enter a Number : ";
        cin >> n;

        for (i = 1; i <= n; i++)
        {
            factorial = factorial * i;
        }

        cout << "Fcatorial of " << n << " is " << factorial << endl;
    }
    prime()
    {
        cout << "Enter Number : ";
        cin >> n;

        for (i = 1; i <= n; i++)
        {
            if (n % i == 0)
            {
                c++;
            }
        }
        if (c == 2)
        {
            cout << n << " is Prime Number.";
        }
        else
        {
            cout << n << " is not Prime Number.";
        }
    }
};

main()
{
    Myclass obj;
    // obj.add();
    // obj.sub();
    // obj.mul();
    // obj.fact();
    // obj.prime();
}