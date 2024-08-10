// Rohan
#include <iostream>
using namespace std;

main()
{
    int n, i, j, temp, c;

    cout << "enter your no.=";
    cin >> n;
    int a[10];

    for (i = 0; i < n; i++)
    {
        cout << "enter your no.=";
        cin >> a[i];
    }

    for (i = 0; i < n; i++)
    {
        cout << endl
             << a[i];
    }

    cout << "1.ass" << endl;
    cout << "2.des" << endl;
    cin >> c;

    if (c == 1)
    {

        for (i = 0; i < n; i++)
        {
            for (j = i + 1; j < n; j++)
            {
                if (a[i] > a[j])
                {
                    temp = a[i];
                    a[i] = a[j];
                    a[j] = temp;
                }
            }
        }
        for (i = 0; i < n; i++)
        {
            cout << a[i] << endl;
        }
    }
    else if (c == 2)
    {
        for (i = 0; i < n; i++)
        {
            for (j = i + 1; j < n; j++)
            {
                if (a[i] < a[j])
                {
                    temp = a[i];
                    a[i] = a[j];
                    a[j] = temp;
                }
            }
        }
        for (i = 0; i < n; i++)
        {
            cout << a[i] << endl;
        }
    }
    else
    {
        cout << "enter valid choice";
    }
}

// Udit
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

            int a[10], i, j, temp, n;

            cout << "Enter Length of Array = ";
            cin >> n;

            cout << "Enter " << n << " Integers : " << endl;
            for (i = 0; i < n; i++)
            {
                cin >> a[i];
            }

            for (i = 0; i < n; i++)
            {
                for (j = i + 1; j < n; j++)
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
            for (i = 0; i < n; i++)
            {
                cout << a[i] << endl;
            }
        }

        else if (choice == 2)
        {

            int a[10], i, j, temp, n;

            cout << "Enter Length of Array = ";
            cin >> n;

            cout << "Enter " << n << " Integers : " << endl;
            for (i = 0; i < n; i++)
            {
                cin >> a[i];
            }

            for (i = 0; i < n; i++)
            {
                for (j = i + 1; j < n; j++)
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
            for (i = 0; i < n; i++)
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
