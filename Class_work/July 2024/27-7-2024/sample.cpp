// Even & odd
#include <iostream>
using namespace std;

main()
{

    int a;

    cout << "Enter a Number : ";
    cin >> a;

    // endl is used for new line
    cout << "A : " << a << endl;

    if (a % 2 == 0)
    {
        cout << "even";
    }
    else
    {
        cout << "odd";
    }
}

// Pattern
#include <iostream>
using namespace std;

main()
{
    int i, j, k;

    for (i = 1; i <= 5; i++)
    {
        for (k = 1; k <= 5 - i; k++)
        {
            cout << " ";
        }
        for (j = 1; j <= i; j++)
        {
            cout << " *";
        }
        cout << endl;
    }
}

// ascending
#include <iostream>
using namespace std;

main()
{
    int a[10], i, j, temp;

    cout << "Enter 5 Numbers " << endl;
    for (i = 0; i < 5; i++)
    {
        // cout<<"Enter Number";
        cin >> a[i];
    }

    for (i = 0; i < 5; i++)
    {
        for (j = i + 1; j < 5; j++)
        {
            if (a[i] > a[j])
            {
                temp = a[i];
                a[i] = a[j];
                a[j] = temp;
            }
        }
    }
    cout << "Ascending Oreder" << endl;
    for (i = 0; i < 5; i++)
    {
        cout << a[i] << endl;
    }
}

// Descending Order
#include <iostream>
using namespace std;

main()
{
    int a[10], i, j, temp;

    cout << "Enter 5 Numbers " << endl;
    for (i = 0; i < 5; i++)
    {
        // cout<<"Enter Number";
        cin >> a[i];
    }

    for (i = 0; i < 5; i++)
    {
        for (j = i + 1; j < 5; j++)
        {
            if (a[i] < a[j])
            {
                temp = a[i];
                a[i] = a[j];
                a[j] = temp;
            }
        }
    }
    cout << "Descending Order" << endl;
    for (i = 0; i < 5; i++)
    {
        cout << a[i] << endl;
    }
}

// Project

#include <iostream>
using namespace std;

main()
{
    int choice;

    cout << "1. Ascending Oredr" << endl;
    cout << "2. Descending Oredr" << endl;
    cout << "3. Exit" << endl;

    while (1)
    {
        cout << endl
             << "Enter Choice : ";
        cin >> choice;

        if (choice == 1)
        {

            int a[10], i, j, temp;

            cout << "Enter 5 Numbers " << endl;
            for (i = 0; i < 5; i++)
            {
                // cout<<"Enter Number";
                cout << i + 1 << ". ";
                cin >> a[i];
            }

            for (i = 0; i < 5; i++)
            {
                for (j = i + 1; j < 5; j++)
                {
                    if (a[i] > a[j])
                    {
                        temp = a[i];
                        a[i] = a[j];
                        a[j] = temp;
                    }
                }
            }
            cout << "Ascending Order" << endl;
            for (i = 0; i < 5; i++)
            {
                cout << a[i] << endl;
            }
        }

        else if (choice == 2)
        {

            int a[10], i, j, temp;

            cout << "Enter 5 Numbers " << endl;
            for (i = 0; i < 5; i++)
            {
                // cout<<"Enter Number";
                cout << i + 1 << ". ";
                cin >> a[i];
            }

            for (i = 0; i < 5; i++)
            {
                for (j = i + 1; j < 5; j++)
                {
                    if (a[i] < a[j])
                    {
                        temp = a[i];
                        a[i] = a[j];
                        a[j] = temp;
                    }
                }
            }
            cout << "Descending Order" << endl;
            for (i = 0; i < 5; i++)
            {
                cout << a[i] << endl;
            }
        }
        else if (choice == 3)
        {
            cout << "Thank You";
            break;
        }
        else
        {
            cout << "Invalid Choice!";
            break;
        }
    }
}