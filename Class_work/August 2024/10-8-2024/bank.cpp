#include <iostream>
using namespace std;

class Bank
{
public:
    string name;
    int acno, deposit, deposit3;
    int add, wi;

    Details(string name, int acno, int deposit)
    {
        this->name = name;
        this->acno = acno;
        this->deposit = deposit;
    }

    deposit1(add)
    {
        this->add = add;
    }

    show()
    {
        deposit3 = this->deposit + this->add;

        this->deposit3 = deposit3;
        cout << "your Total balance is : " << this->deposit3 - this->wi;
    }

    withdraw(wi)
    {
        this->wi = wi;
    }

    show1()
    {
        cout << "\nYour Balance is : " << this->deposit3 - this->wi;
    }
};

main()
{
    Bank obj;
    obj.Details("Udit", 133, 5000);
    obj.deposit1(1000);
    obj.show();
    obj.withdraw(2000);
    obj.show1();
}

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