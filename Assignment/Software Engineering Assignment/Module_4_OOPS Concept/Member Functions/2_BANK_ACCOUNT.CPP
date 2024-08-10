// Mahesh
#include <iostream>
using namespace std;
class A
{
public:
    int dep, bal, w, check;
    double acc;
    char c;
    string name;
    A()
    {
        dep = acc = bal = 0;
        c = NULL;
    }
    get()
    {
        cout << "Enter the Name:=";
        cin >> name;
        cout << "Enter the Account Number:";
        cin >> acc;
        cout << "Enter the Account Balance:";
        cin >> bal;
        if (bal < 2000 || bal <= 0)
        {
            cout << "Enter the amount greater than 2000" << endl;
            bal = 0;

            cout << "Enter the amount:";
            cin >> bal;
        }
        cout << "Enter the type of Account[s/c]:";
        cin >> c;
    }
    deposite()
    {
        cout << "Enter the Deposite Amount:";
        cin >> dep;
        if (dep < 0)
        {
            cout << "Invalid amount...";
            dep = 0;
            exit(0);
        }
        else
        {
            bal += dep;
        }
    }
    withdraw()
    {

        cout << "Enter withdraw Amount=";
        cin >> w;
        check = bal - w;
        if (w <= 0)
        {
            cout << "Process Failed..." << endl;
            cout << "Enter Valid amount";
        }
        else if ((check < 0) || (check < 2000 && check != 0))
        {
            cout << "Process Failed...." << endl;
            cout << "Bal is under limit...." << endl;
            cout << "Inform Your branch Bank.." << endl;
            cout << "Thank You...." << endl;
            exit(0);
        }
        else
        {
            cout << "Processing Successful" << endl;
            bal -= w;
        }
    }

    show()
    {
        cout << "" << endl;
        cout << "Account Holder Name=" << name << endl;
        cout << "Accout Balance=" << bal;
    }
};
main()
{
    A ob;
    ob.get();
    ob.deposite();
    ob.withdraw();
    ob.show();
}

// Udit
#include <iostream>
using namespace std;

class Bank_Account
{
public:
    int deposit, balance, withdraw, check;
    double acc_no;
    char acc_type;

    Bank_Account()
    {
        cout << "Welcome to Bank\n";
        deposit = acc_no = balance = 0;
        acc_type = NULL;
    }

    Details()
    {
        cout << "Name of Account Holder : ";
        cin
    }
};