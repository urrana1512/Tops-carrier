#include <iostream>

using namespace std;

int r, MM, PM, CM, TM, per;
char n[100];

class A
{
public:
    student()
    {

        cout << "enter name" << endl;
        cin >> n;

        cout << "enter roll no." << endl;
        cin >> r;
    }
};
class B : public A
{

public:
    marks()
    {
        cout << "enter maths mark : ";
        cin >> MM;

        if (MM <= 100 && MM >= 0)
        {
            cout << "OK" << endl;
        }
        else
        {
            cout << "valid marks" << endl;
            return 0;
        }
        cout << "enter physics mark : ";
        cin >> PM;

        if (PM <= 100 && PM >= 0)
        {
            cout << "OK" << endl;
        }
        else
        {
            cout << "valid marks" << endl;
            return 0;
        }
        cout << "enter chemistry mark : ";
        cin >> CM;

        if (CM <= 100 && CM >= 0)
        {
            cout << "OK" << endl;
        }
        else
        {
            cout << "valid marks" << endl;
            return 0;
        }

        TM = MM + PM + CM;

        cout << "total marks : " << TM << endl;

        per = TM / 3;

        cout << "persentage : " << per << endl;
    };
};

class C : public B
{
public:
    grade()
    {
        if (per == 100)
        {
            cout << " you are grade : Over achivment";
        }
        else if (per <= 99 && per >= 80)
        {
            cout << "you are grade : exelent";
        }
        else if (per <= 79 && per >= 70)
        {
            cout << "you are grade : good";
        }

        else if (per <= 69 && per >= 50)
        {
            cout << "you are grade : avrage";
        }
        else if (per <= 49 && per >= 33)
        {
            cout << "you are grade : bad";
        }
        else
        {
            cout << "you are grade : fail";
        }
    }
};

class D : public C
{
public:
    result()
    {
        cout << "\n\n\nname : " << n << endl;
        cout << "roll no. : " << r << endl;
        cout << "maths : " << MM << endl;
        cout << "physics : " << PM << endl;
        cout << "chemistry : " << CM << endl;
        cout << "total marks : " << TM << endl;
        cout << "percentage : " << per << endl;
    }
};

main()
{
    D obj;
    obj.student();
    obj.marks();
    obj.result();
    obj.grade();
}